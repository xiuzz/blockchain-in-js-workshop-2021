function keccak256(data){
    return crypto.createHash('sha3-256').update(data).digest();
}
class Node{
    constructor(){
        this.key={};
        this.value={};
        this.children={};
    }
}
class MPT{
    constructor(){
        this.root={};
    }
    //key
    getNodeKey(value){
        const hash=keccak256(value);
        return '0x'+hash.slice(26);
    }
    //value
    getNodeValue(node){
        return node.value;
    }

    isLeafNode(node){
        return !node.children;
    }

    getAddressIndex(address){
        return address.substring(2).split('').map(c=>parseInt(c,16));
    }

     // 向 MPT 中添加或更新地址及其余额数据
    addAddress(address, balance) {
        let currNode = this.root;
        const addressIndex = this.getAddressIndex(address);

        for (let i = 0; i < addressIndex.length; i++) {
            const index = addressIndex[i];
            const key = this.getNodeKey(index);
            // 如果当前节点不存在，则创建新节点
            if (!currNode[key]) {
            currNode[key] = {
                value: '',
                children: {}
            };
            }
            currNode = currNode[key];
        }

        // 更新叶子节点的值
        currNode.value = balance.toString();
    }

  // 获取指定地址的余额
    getAddressBalance(address) {
        let currNode = this.root;
        const addressIndex = this.getAddressIndex(address);

        for (let i = 0; i < addressIndex.length; i++) {
        const index = addressIndex[i];
        const key = this.getNodeKey(index);
        if (!currNode[key]) {
            // 如果节点不存在，则返回字母 "E"，表示地址无效
            return 'E';
        }
        currNode = currNode[key];
        }

        return currNode.value;
  }

    // 计算 MPT 的根节点哈希值
    getRootHash() {
        const rootHash = this._getTrieHash(this.root);
        return '0x' + rootHash.toString('hex');
    }

    // 递归计算 Trie 或 extension 节点的哈希值
    _getTrieHash(node) {
        let valueHash = null;
        let childrenHash = null;

        if (this.isLeafNode(node)) {
        // 如果是叶子节点，则对值进行 keccak256 哈希计算
        valueHash = keccak256(node.value);
        } else if (Object.keys(node.children).length === 1) {
        // 如果是 extension 节点，则对末尾字符和子节点的哈希值进行拼接计算
        const key = Object.keys(node.children)[0];
        const childHash = this._getTrieHash(node.children[key]);
        const encodedKey = this.encodeKey(key);
        childrenHash = Buffer.concat([encodedKey, childHash]);
        } else {
        // 如果是 branch 节点，则对每个子节点的哈希值进行拼接计算
        const childrenList = [];
        for (const key of Object.keys(node.children).sort()) {
            const childHash = this._getTrieHash(node.children[key]);
            const encodedKey = this.encodeKey(key);
            childrenList.push(Buffer.concat([encodedKey, childHash]));
        }
        childrenHash = Buffer.concat(childrenList);
        }

        if (valueHash !== null && childrenHash !== null) {
        // 如果同时存在值和子节点，则对两部分哈希值进行拼接计算
        return this._getTrieHash(Buffer.concat([valueHash, childrenHash]));
        } else {
        // 否则直接返回不存在的那部分哈希值
        return valueHash || childrenHash;
        }
    }

    // 将字符串类型的 key 转换为 Buffer 类型
    encodeKey(key) {
        return Buffer.from(key.slice(2), 'hex');
    }

    // 验证 MPT 数据是否正确
    validate(address, balance) {
        const rootHash = this.getRootHash();
        const expectedBalance = balance.toString();
        const actualBalance = this.getAddressBalance(address);
        return rootHash === expectedRootHash && actualBalance === expectedBalance;
    }
}
