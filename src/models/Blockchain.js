// Blockchain
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
}

export default Blockchain
