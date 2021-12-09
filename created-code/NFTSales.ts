const _jsonInterface = [
  {
    inputs: [{ internalType: "address", name: "_nftAddress", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
    signature:
      "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
    signature:
      "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "transactionlog",
    type: "event",
    signature:
      "0x07f2fb11eb6b76ed75fcecf559462f77a4108f307d25d17a00c24b58f98c115b",
  },
  {
    inputs: [],
    name: "_transactionCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
    signature: "0xc25c16cc",
  },
  {
    inputs: [],
    name: "nftAddress",
    outputs: [{ internalType: "contract ERC1155", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    signature: "0x5bf8633a",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    signature: "0x8da5cb5b",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
    signature: "0x5c975abb",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x715018a6",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "tokenPrice",
    outputs: [
      { internalType: "uint256", name: "price", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
    signature: "0xb62d370b",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "transactionMapping",
    outputs: [
      { internalType: "address", name: "_buyer", type: "address" },
      { internalType: "address", name: "_seller", type: "address" },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "uint256", name: "_price", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
    signature: "0x140ab9da",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "uint256", name: "_price", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "setForSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf4fb5dff",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
      { internalType: "uint256[]", name: "_prices", type: "uint256[]" },
      { internalType: "uint256[]", name: "_amounts", type: "uint256[]" },
    ],
    name: "SetForBatchSales",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x7d3a1876",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
    ],
    name: "withdrawSales",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xfd365ef7",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "address", name: "_sellerAddress", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "purchaseToken",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
    signature: "0x9b60cc97",
  },
  {
    inputs: [],
    name: "emergencyStop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x63a599a4",
  },
  {
    inputs: [],
    name: "removeEmergencyStop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x157deee2",
  },
];

function _runMethod(name: string, p: unknown[]) {
  const _interface = _jsonInterface.find((__interface) => {
    return __interface.name == name;
  });

  return {
    interface: _interface as unknown,
    args: p as unknown,
  };
}

const NFTSales = {
  jsonInterface: _jsonInterface,
  address: "0x4dd31E3D0A6e7478932a04816461c03Ad8C61139",

  _transactionCounter() {
    return _runMethod("_transactionCounter", Array.from(arguments));
  },

  nftAddress() {
    return _runMethod("nftAddress", Array.from(arguments));
  },

  owner() {
    return _runMethod("owner", Array.from(arguments));
  },

  paused() {
    return _runMethod("paused", Array.from(arguments));
  },

  renounceOwnership() {
    return _runMethod("renounceOwnership", Array.from(arguments));
  },

  tokenPrice(__param_uint256_0_: number, __param_address_1_: `0x${string}`) {
    return _runMethod("tokenPrice", Array.from(arguments));
  },

  transactionMapping(__param_uint256_0_: number) {
    return _runMethod("transactionMapping", Array.from(arguments));
  },

  transferOwnership(newOwner: `0x${string}`) {
    return _runMethod("transferOwnership", Array.from(arguments));
  },

  setForSale(_tokenId: number, _price: number, _amount: number) {
    return _runMethod("setForSale", Array.from(arguments));
  },

  SetForBatchSales(_tokenIds: number[], _prices: number[], _amounts: number[]) {
    return _runMethod("SetForBatchSales", Array.from(arguments));
  },

  withdrawSales(_tokenIds: number[]) {
    return _runMethod("withdrawSales", Array.from(arguments));
  },

  purchaseToken(
    _tokenId: number,
    _sellerAddress: `0x${string}`,
    _amount: number
  ) {
    return _runMethod("purchaseToken", Array.from(arguments));
  },

  emergencyStop() {
    return _runMethod("emergencyStop", Array.from(arguments));
  },

  removeEmergencyStop() {
    return _runMethod("removeEmergencyStop", Array.from(arguments));
  },
} as const;

export default NFTSales;
