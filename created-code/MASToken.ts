const _jsonInterface = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_proxyRegistryAddress","type":"address"},{"internalType":"string","name":"_uri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event","signature":"0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event","signature":"0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event","signature":"0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"royaltySetup","type":"uint256"}],"name":"royalty_record","type":"event","signature":"0x4ad85eb1f0c50f4b5575b4169e72166bba50a24202a5ce2d33c67537e2ebf309"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x00fdd58e"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","signature":"0x4e1273f4"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creators","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xcd53d08e"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xe985e9c5"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x2a55205a"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"uint16","name":"royalty_percentage","type":"uint16"},{"internalType":"bool","name":"royalty_set","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xcef6d368"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2eb2c2d6"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf242432a"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xc930a1ff"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x2693ebf2"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"inputs":[],"name":"getTokenNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x5f5ed598"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0xbd85b039"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"bool","name":"_nft","type":"bool"}],"name":"mint_byOtherUsers_1st","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb4fecad6"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint_additionalByOtherusers","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x171a0ae6"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"bool[]","name":"_nfts","type":"bool[]"},{"internalType":"string[]","name":"_uris","type":"string[]"}],"name":"mint_byAnyOneBatch","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7c635008"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRoyalty","outputs":[{"components":[{"internalType":"uint16","name":"royalty_percentage","type":"uint16"},{"internalType":"bool","name":"royalty_set","type":"bool"}],"internalType":"struct ERC1155Factory.Royalty_data","name":"","type":"tuple"}],"stateMutability":"view","type":"function","signature":"0x1af9cf49"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","signature":"0x0e89341c"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint16","name":"_new_royalty","type":"uint16"},{"internalType":"bool","name":"_royalty","type":"bool"}],"name":"changeRoyaltySettings","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd07b86fa"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_burnAmount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb390c0ab"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint16","name":"_royalties","type":"uint16"}],"name":"_setRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa0aae186"}];

    function _runMethod(name: string, p: unknown[]) {
        const _interface = _jsonInterface.find((__interface) => {
            return __interface.name == name;
        });

        return {
          interface: _interface as unknown,
          args: p as unknown,
        }
    }

    const MASToken = {
  
    jsonInterface: _jsonInterface,
    address : "0x18BfA4E8c9c5c5f6763313Bd0F38A5e2A5333D16",
  
        balanceOf(account: `0x${string}`,id: number) {  return _runMethod("balanceOf", Array.from(arguments));  },
      
        balanceOfBatch(accounts: `0x${string}`[],ids: number[]) {  return _runMethod("balanceOfBatch", Array.from(arguments));  },
      
        creators(__param_uint256_0_: number) {  return _runMethod("creators", Array.from(arguments));  },
      
        isApprovedForAll(account: `0x${string}`,operator: `0x${string}`) {  return _runMethod("isApprovedForAll", Array.from(arguments));  },
      
        name() {  return _runMethod("name", Array.from(arguments));  },
      
        owner() {  return _runMethod("owner", Array.from(arguments));  },
      
        renounceOwnership() {  return _runMethod("renounceOwnership", Array.from(arguments));  },
      
        royaltyInfo(tokenId: number,value: number) {  return _runMethod("royaltyInfo", Array.from(arguments));  },
      
        safeBatchTransferFrom(from: `0x${string}`,to: `0x${string}`,ids: number[],amounts: number[],data: string) {  return _runMethod("safeBatchTransferFrom", Array.from(arguments));  },
      
        safeTransferFrom(from: `0x${string}`,to: `0x${string}`,id: number,amount: number,data: string) {  return _runMethod("safeTransferFrom", Array.from(arguments));  },
      
        setApprovalForAll(operator: `0x${string}`,approved: boolean) {  return _runMethod("setApprovalForAll", Array.from(arguments));  },
      
        symbol() {  return _runMethod("symbol", Array.from(arguments));  },
      
        tokenNFT(__param_uint256_0_: number) {  return _runMethod("tokenNFT", Array.from(arguments));  },
      
        tokenSupply(__param_uint256_0_: number) {  return _runMethod("tokenSupply", Array.from(arguments));  },
      
        transferOwnership(newOwner: `0x${string}`) {  return _runMethod("transferOwnership", Array.from(arguments));  },
      
        supportsInterface(interfaceId: string) {  return _runMethod("supportsInterface", Array.from(arguments));  },
      
        getTokenNumber() {  return _runMethod("getTokenNumber", Array.from(arguments));  },
      
        totalSupply(_id: number) {  return _runMethod("totalSupply", Array.from(arguments));  },
      
        mint_byOtherUsers_1st(_amount: number,_uri: string,_nft: boolean) {  return _runMethod("mint_byOtherUsers_1st", Array.from(arguments));  },
      
        mint_additionalByOtherusers(_tokenId: number,_amount: number) {  return _runMethod("mint_additionalByOtherusers", Array.from(arguments));  },
      
        mint_byAnyOneBatch(_tokenIds: number[],_amounts: number[],_nfts: boolean[],_uris: string[]) {  return _runMethod("mint_byAnyOneBatch", Array.from(arguments));  },
      
        getRoyalty(_tokenId: number) {  return _runMethod("getRoyalty", Array.from(arguments));  },
      
        uri(_tokenId: number) {  return _runMethod("uri", Array.from(arguments));  },
      
        changeRoyaltySettings(_tokenId: number,_new_royalty: number,_royalty: boolean) {  return _runMethod("changeRoyaltySettings", Array.from(arguments));  },
      
        burn(_tokenId: number,_burnAmount: number) {  return _runMethod("burn", Array.from(arguments));  },
      
        _setRoyalty(_tokenId: number,_royalties: number) {  return _runMethod("_setRoyalty", Array.from(arguments));  },
       
    } as const;
    
    export default MASToken;