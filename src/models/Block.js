import sha256 from 'crypto-js/sha256.js'

class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */
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
}
export default Block
