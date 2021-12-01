import RawMASToken from "./deployed-contracts/MASToken";

type _ContractInterface = typeof RawMASToken["interface"];

class _Contract {
  protected interface: _ContractInterface[];
  public address: string;

  constructor(rawContract: {
    interface: _ContractInterface[];
    address: string;
  }) {
    this.address = rawContract.address;
    this.interface = rawContract.interface;
  }
}

class _MASToken extends _Contract {
  constructor() {
    // @ts-ignore
    super(RawMASToken);
  }

  getFunctionInterface<Name extends keyof typeof RawMASToken["interface"]>(
    name: Name
  ): typeof RawMASToken["interface"][Name] {
    // @ts-ignore
    return this.interface[name];
  }
}

export default {
  MASToken: new _MASToken(),
};
