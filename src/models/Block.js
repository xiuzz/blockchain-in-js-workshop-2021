import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 3

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
    //nonce 
    this.nonce='0';
  }
  isValid() {
    let cnt=0;
    for (let i of this.nonce) {
      if(i!="0")break;
      cnt++;
      if(cnt>=3)break;
    } 
    return cnt >= DIFFICULTY
  }

  setNonce(nonce) {
    this.nonce = nonce
  }

}
export default Block
