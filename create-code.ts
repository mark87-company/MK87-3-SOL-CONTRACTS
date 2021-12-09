import { promises as fs } from "fs";
import * as path from "path";

const contractNames = ["MASToken", "NFTSales"];

Promise.all(
  contractNames.map((name) =>
    createCode(name, require(`../deployed-contracts/${name}.json`))
  )
).then(async () => {
  await fs.writeFile(
    path.join(__dirname, "../index.ts"),
    contractNames
      .map(
        (name) => `
        export { default as ${name} } from "./created-code/${name}";
        `
      )
      .join("")
  );
});

function createCode(name: string, contract: any) {
  let code = `
    const _jsonInterface = ${JSON.stringify(contract._jsonInterface)};

    function _runMethod(name: string, p: unknown[]) {
        const _interface = _jsonInterface.find((__interface) => {
            return __interface.name == name;
        });

        return {
          interface: _interface as unknown,
          args: p as unknown,
        }
    }

    const ${name} = {
  `;

  const { address } = contract.options;

  code += `
    jsonInterface: _jsonInterface,
    address : "${address}",
  `;

  const functionNames = new Set<string>();

  (contract._jsonInterface as any[])
    .filter(({ type }) => {
      return type == "function";
    })
    .forEach(({ inputs, name, outputs, signature }) => {
      if (!inputs || !name || !outputs || !signature) {
        return;
      }

      if (functionNames.has(name)) {
        return;
      }

      functionNames.add(name);

      const inputTypes = (inputs as any[])
        .map(({ type, name }, index) => {
          const typeForTs = type
            .replace(/uint\d+/, "number")
            .replace("address", "`0x${string}`")
            .replace("bool", "boolean")
            .replace(/bytes\d*/, "string");

          name ||= `__param_${type}_${index}_`;

          return `${name}: ${typeForTs}`;
        })
        .join(",");

      code += `
        ${name}(${inputTypes}) {  return _runMethod("${name}", Array.from(arguments));  },
      `;
    });

  code = `
        ${code} 
    } as const;
    
    export default ${name};
  `;

  return fs.writeFile(
    path.join(__dirname, `../created-code/${name}.ts`),
    code.trim()
  );
}
