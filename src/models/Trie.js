class Trie{
    constructor(){
        this.idx=0;//idx 为节点编号，0为根节点
        this.children=new Array(100010);//初始节点最大个数为100010
        for (let i=0;i<children.length;i++) 
            this.children[i]=new Int32Array(26);
        this.count=new Int32Array(100010);
    }
    insert(str){
        let p=0;
        let codea='a'.charCodeAt();
        for(let i=0;i<str.length;i++){
            let u=str[i].charCodeAt()-codea;
            if(!this.children[p][u])this.children[p][u]=++this.idx;
            p=this.children[p][u];
        }
        this.count[p]++;
    }
    query(str){
        let p=0;
        let codea='a'.charCodeAt();
        for (let i=0;i<str.length;i++) {
            let u=str[i].charCodeAt()-codea;
            if(!this.children[p][u]) return 0;
            p=this.children[p][u];
        }
        return this.count[p];
    }
}
//写完才想起js可以直接用字符串做下标