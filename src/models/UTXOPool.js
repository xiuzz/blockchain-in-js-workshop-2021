import UTXO from './UTXO.js'

class UTXOPool {
  constructor() {this.utxos = {}}

  // 添加交易函数
  /**
   * 将交易的信息更新至 UTXOPool 中
   */
  addUTXO(owner,amount) {
    if(owner in this.utxos){
      this.utxos[owner].amount+=amount
    }
    else{
      this.utxos[owner]=new UTXO(
        owner,
        amount
      )
    }
  }  

  // 将当前 UTXO 的副本克隆
  clone() {
    let temp;
    temp={...this}
    return temp
  }
  
  // 处理交易函数
  handleTransaction(trx) {
    if(this.isValidTransaction(trx)&&trx.hasValidSignature()){
      this.addUTXO(trx.outputer,-(trx.outputAmount+trx.fee));
      this.addUTXO(trx.inputer,trx.outputAmount);
    }
  }

  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool
   */
  isValidTransaction(trx) {
    return this.utxos[trx.outputer].amount>=trx.outputAmount+trx.fee;
  }
}

export default UTXOPool
