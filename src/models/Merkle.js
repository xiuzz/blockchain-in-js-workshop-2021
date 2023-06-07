import sha256 from 'crypto-js/sha256.js'

function getHash(left,right){
    return sha256(left+right).toString()
}

class Merkle{
    constructor(list){//arr
        this.txList=[...list];
        this.tree=new Array(); //merkle 树构成的堆结构
        this.txList.sort(); 
        let temp=new Array();
        while(this.txList.length>1){
            if(this.txList.length%2!=0)this.txList.push(this.txList[this.txList.length-1]);
            for(let i=this.txList.length-1;i>=0;i-=2){
                let left=this.txList[i-1];
                let right=this.txList[i];
                this.tree.unshift(right);
                this.tree.unshift(left);
                temp.unshift(getHash(left+right));
            }
            this.txList=[...temp];
            temp=[];
        }
        this.root=this.txList[0];//merke 树根
        this.txList=list;
    }
}
export default Merkle