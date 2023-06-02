import sha256 from 'crypto-js/sha256.js'


class Transaction {
  constructor(outputer,inputer,outputAmount) {

    this.outputer=outputer,
    this.inputer=inputer,
    this.outputAmount=outputAmount,
    this.hash=sha256((this.owner+this.receiverPubKey+this.outputAmount).toString()).toString()
  }

  // 更新交易 hash
  _setHash() {
    this.hash=this._calculateHash()
  }

  // 计算交易 hash 的摘要函数
  _calculateHash() {
    return sha256((this.owner+this.receiverPubKey+this.outputAmount).toString()).toString()
  }
}

export default Transaction