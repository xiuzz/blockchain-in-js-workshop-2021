import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数

  constructor(blockchain,preHash,height,hash) {
    //链信息
    this.blockchain=blockchain;
    //父hash
    this.preHash=preHash;
    //节点序号
    this.height=height;
    //hash
    this.hash=hash;
  }
  constructor() {}

  isValid() {}

  setNonce(nonce) {}
  
}
export default Block

