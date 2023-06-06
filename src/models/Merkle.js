import { SHA256 } from "crypto-js";

function getHash(left,right){
    return SHA256(left+right).toString()
}

class Merkle{
    constructor(list){//arr
        this.txList=[...list];
        this.tree=new Array(); //merkle 树构成的堆结构
        this.txList.sort(); 
        temp=new Array();
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
            temp.clear();
        }
        this.root=this.txList[0];//merke 树根
        this.txList=list;
    }
}