# 实验报告模板

## 小组成员


## 代码仓库链接

https://github.com/xiuzz/blockchain-in-js-workshop-2021



## 第一课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/d30b8059f340362c74700bb9f8a1319c6f8cf63c#diff-790164bb6d107a3c138e494d5b9634a9fe09a7d129317f5487c9198d2eae8275

### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
 https://pan.baidu.com/s/1DLYgBvOKGhANFfmmntrQyg?pwd=456v 

### 主观与讨论题内容

---




## 第二课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/32702d12ddd2a80c8a6bb83571aa521e5e68f486



### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
https://pan.baidu.com/s/14r2n5p0HDvqB37AJss77wA?pwd=dr9h

### 主观与讨论题内容
pow的优缺点：

优点：因为挖矿难度大，所以安全性很高，可以有效的防止抵赖和伪造，只要给定合适的奖励机制。依赖于公平数学游戏，只依赖算力，每个人挖到矿的概率公平。

缺点：挖矿需要做无意义数学运算，对于资源消耗大。挖矿需要时间，因此网络效率低。当某个矿工算力过大时，会控制整个链的挖矿情况

如何提高挖矿效率：

提高机器的性能，包括显卡，cpu，内存等参数。合理的管理矿池，让矿池能够高效的分工合作，可以提高挖矿效率。总的来说算力越大，挖矿效率越大

---


## 第三课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/4a8f91ea335140faa020ddd55da1f659d0b35e48


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接) https://pan.baidu.com/s/11E-dAzW838GI5gFT8FSifQ?pwd=dpnq 

### 主观与讨论题内容



---




## 第四课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/ba44706448be5247edc941d0cfa847b943bc6dff


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)链接: https://pan.baidu.com/s/1xWhfqCm7CseSn8bHHnuQGQ?pwd=wt1d 


### 主观与讨论题内容



---




## 第五课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/836ac4e640def8cd942315bfdc070bef18a0eb8d


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)https://pan.baidu.com/s/1zsynnEKaI927bQDMRBM6ZQ?pwd=yx23


### 主观与讨论题内容

⽐特币交易的处理极限:

由实验可知，处理极限一是在于区块的产生速度，每一笔交易需要被打包进入区块，因此区块的产生速度直接影响比特币交易的处理极限，这里面包括打包的时间，打包后挖矿的时间。二是区块的规模限制，区块越大能同时处理的交易也就越多，但是由merkle树的结构可以知道交易越多，计算merkleroot的hash值时间也就越长。

区块⼤⼩与⽐特币挖矿难度的关系:


没有想到什么直接联系。区块的大小影响交易的处理速度，即吞吐量。比特币挖矿时是在计算sha256产生的固定长度hash值，区块的大小并不会影响该hash的长度。不过考虑区块产生时间需要动态平衡，区块加大会增加区块产生时间，从而调整难度值，减下区块产生时间。


debugger:
https://pan.baidu.com/s/14qYMJNpkBHB8WyMidOGgHg?pwd=hh2j


---




## 第六课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/10d5f996c71fe265260690c82ab9e953730cd2fa


### 代码截图

> 将截图上传至网盘，放入链接即可

![](图片链接放这里)https://pan.baidu.com/s/1gTDP_ufQz66Hq7n8-KHqqw?pwd=56cd

### 主观与讨论题内容

什么样的交易费⽤是合理的?

更快地确认交易，交易费也就越高。 因此如果你想要更快地确认交易，可以设置更高的交易费用。如果你不介意等待，可以设置较低的交易费用。但是，如果你将交易费用设置得太低，那么交易确认的时间会非常漫长。

如果去掉交易费⽤⽐特币⽹络会发⽣什么？

交易可能会被矿工忽略，因为他们没有动力去验证用户交易。这意味着交易可能永远不会被确认，因此比特币可能会被永远锁定在钱包中。

---

## 第七课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/6640a93d560ffac054862e1dca348d2900792bea

### 代码截图

> 将截图上传至网盘，放入链接即可

![](图片链接放这里)https://pan.baidu.com/s/1QffL_-Qcz0fWJHVKnv5LfQ?pwd=cpik

### 主观与讨论题内容


---


## 结课报告

在lesson1里面学习了一个区块结构和链里面最基本单元，对于竞争区块，链采取什么选择策略。在lesson2里面学习了如何构建挖矿难度，如何挖矿计算hash值，怎样对结果进行校验。在lesson3里面，学习了如何处理utxo，给予矿工手续费，验证utxo是否合法。在lesson4里面学习了如何构建utxo池，基本的交易结构。
在lesson5里面进一个实现了交易功能，为每个区块添加了存储交易属性，以及交易的hash。在lesson6里面为每一步交易添加了交易费。在lesson7里面对交易添加了签名和认证操作。


