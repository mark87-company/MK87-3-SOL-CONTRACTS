import { Contract } from "./Contract";

export { Contract };

function readContract(name: string): Contract {
  return require(`../deployed-contracts/${name}.json`);
}

export default {
  MASToken: readContract("MASToken"),
  TokenSales: readContract("TokenSales"),
};
