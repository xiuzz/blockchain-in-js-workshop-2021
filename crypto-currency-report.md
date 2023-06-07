# 数字货币技术理论课实验报告

## 小组成员

- 2021131068-曾榆高 （组长）
- 2021131055-张宜斌
- 2021131081-许晨彬
- 2021131067-冉乔
- 2021131058-马洋
- 2021131057-马的爽



## 代码仓库链接

https://github.com/xiuzz/blockchain-in-js-workshop-2021



## 第一课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/1723a4378b82bc110fae88f32a9114bebd42a531

第二次修改：
https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/12c36ed0be5d7908361c37053936a97a2d81f151

第三次修改：
https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/426e61940d3a973d5dd8b3252337d774690e07d4#diff-89ba8572ab6cb7a8749cb47b7c272f2ef78ce6ad7220e40b343453a8dfdb3019

### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)https://pan.baidu.com/s/13QHHPnTCrOLqy-lnZtjiuw?pwd=jdua


### 主观与讨论题内容

---



## 第二课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/f5c73ebe925fb215ebb18731c5ec717f81b17244


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)https://pan.baidu.com/s/1Bv3YIcOc0GXtvnESUMx6pQ?pwd=f1gh


### 主观与讨论题内容

如果把例⼦⾥的字⺟扩展成字⺟和数字的形式, 该如何实现?

考虑到js可以直接将字符和字符串作为下标，可以遍历0~9字符和a~z,A~Z来实现

如何设计能够帮助提⾼查询效率?

传统的trie是通过字符建立下标，但是对于只出现过一次的字符串路径，我们可以对其进行路径压缩，
即用字符串作为下标

---


## 第三课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/a6d22e92045061f871bd79f1c342bb83365e9b65


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)https://pan.baidu.com/s/11hljDd13QkcVd3X2nL48yg?pwd=hrug


### 主观与讨论题内容
基于字典树, 以太坊做了哪些改良, 为什么?

与传统字典树相比，融合了Merkle树和字典树两种树结构优点的数据结构，用于存储所有 (key, value) 对。它是完全确定性的，这意味着有相同 (key, value) 对的字典树肯定是完全相同的，就连最后一个字节也相同。提供了一种快速计算所维护数据集哈希标识的机制；提供了快速状态回滚的机制。

MPT 想要解决的核⼼问题是什么?
组织管理账户数据、生成交易集合hash

---