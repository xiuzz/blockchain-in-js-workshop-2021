import UTXO from './UTXO.js';
import UTXOPool from './UTXOPool.js'
import sha256 from 'crypto-js/sha256.js'
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name = name
    this.genesis = null
    this.blocks = {};
    this.utxoPool=new UTXOPool()
    this.preUtxoPool=null
  }
  // 2. 定义 longestChain 函数
  /*
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    let arr=new Array();
    let tail=this.genesis;
    for(let i of Object.values(this.blocks)){
      if(tail.height<i.height)tail=i;
    }
    let key=tail.hash;
    while(key!=this.genesis.hash){
      arr.unshift(this.blocks[key]);
      key=this.blocks[key].preHash;
    } 
    return arr;
  }

  // 判断当前区块链是否包含
  containsBlock(block) {
    // 添加判断方法
    if (block.height==1&&block.hash==this.genesis.hash) {
      return true
    }
    for (let tempblock of Object.values(this.blocks)) {
      if (block.hash==tempblock.hash) {
        return true
      }
    }
    return false
  }

  // 获得区块高度最高的区块
  maxHeightBlock() {
    // return Block
    let maxHeight = this.blocks.length
    for(let tempBlock of Object.values(this.blocks)){
      if(tempBlock.height==maxHeight){
        return Block
      }
    }
  }

  // 添加区块
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return
    this.blocks[block.hash] = block
    block.utxoPool=this.utxoPool
    // 添加 UTXO 快照与更新的相关逻辑
    //快照
    this.preUtxoPool=this.utxoPool.clone()
    //更新
    this.utxoPool.addUTXO(block.coinbaseBeneficiary)
  }
}

export default Blockchain
