import elliptic from "elliptic";
const ec = new elliptic.ec("secp256k1");

export function generatePair() {
  const keypair = ec.genKeyPair();
  window.keypair = keypair;
  return {
    publicKey: keypair.getPublic("hex"),
    privateKey: keypair.getPrivate("hex")
  };
}

export function sign(message, privateKey) {
  try {
    //生成一个私钥
    const keypair = ec.keyFromPrivate(privateKey, "hex");
    //私钥执行sign函数
    return keypair.sign(message).toDER("hex");
  } catch (error) {
    return "invalid signature";
  }
}

export function verifySignature(message, signature, publicKey) {
  try {
    //生成一个公钥，这里并没有保留两个大质数产生的模r，说明应该是这个算法底层就把r给固定了
    const keypair = ec.keyFromPublic(publicKey, "hex");
    //使用公钥验证
    return ec.verify(message, signature, keypair);
  } catch (error) {
    return false;
  }
}
