import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 3

class Block {  
  // 1. 完成构造函数及其参数
  constructor(blockchain,preHash,height,hash,miner) {
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
    //创块者
    this.coinbaseBeneficiary=miner
    //utxo_pool
    this.utxoPool=null
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

  isValid() {}

  setNonce(nonce) {}

  // 根据交易变化更新区块 hash
  _setHash() {}

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash() {

  }

  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction() {}

}
export default Block
