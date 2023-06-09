import sha256 from 'crypto-js/sha256.js'
import { sign, verifySignature } from '../crypto.js'
class Transaction {
  constructor(outputer,inputer,outputAmount,fee,signature) {
    this.outputer=outputer,
    this.inputer=inputer,
    this.outputAmount=outputAmount,
    this.fee=fee,
    this.hash=sha256((this.outputer+this.inputer+this.outputAmount+this.fee).toString()).toString()
    this.signature=signature
  }

  // 更新交易 hash
  _setHash() {
    this.hash=this._calculateHash()
  }

  // 计算交易 hash 的摘要函数
  _calculateHash() {
    return sha256((this.outputer+this.inputer+this.outputAmount+this.fee).toString()).toString()
  }

  // 校验交易签名 返回 bool 类型的值
  hasValidSignature() {
      return verifySignature(this.hash, this.signature, this.outputer)
  }

}

export default Transaction
