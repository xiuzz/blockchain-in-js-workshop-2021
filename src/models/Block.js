import sha256 from 'crypto-js/sha256.js'
import Merkle from './Merkle.js'
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
    this.coinbaseBeneficiary=miner;
    //utxo_pool
    this.utxoPool=null;
    //merkleRoot hash
    this.merkleRoot=null;
    //区块体里面有个merkle
    this.merkle=null;
    //包含的账单
    this.trxlist=new Array();
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

  // 根据交易变化更新区块 hash
  _setHash() {
    this.hash=sha256(new Date().getTime().toString()+this.merkleRoot.toString).toString();
  }

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash() {
    this.merkle=new Merkle(this.trxlist);
    this.merkleRoot=this.merkle.root;
    return this.merkleRoot;
  }

  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction(trx) {
    this.trxlist.push(trx);
    this.combinedTransactionsHash();
    this._setHash();
    this.utxoPool.handleTransaction(trx);
  }

}
export default Block