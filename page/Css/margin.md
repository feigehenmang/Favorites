## [flexCSS 弹性盒子布局](https://blog.csdn.net/qq_38684419/article/details/81913798) [Grid文档](https://drafts.csswg.org/css-grid/)
Flexbox布局比较适合Web应用程序的一些小组件和小规模的布局，而Grid布局更适合用于一些大规模的布局。
[MDN地址](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
---
- 如图，flex基本上是按着main-axis从main-start到main-end或者按着cross-axis从cross-start到cross-end排列
![image](https://www.w3cplus.com/sites/default/files/blogs/2015/1504/flexbox.png)
- main axis: flex容器的主轴，用了配置flex项目，他不一定是水平，取决于flex-direction属性 
- main-start | main-end:Flex项目的配置从容器的主轴起点边开始，往主轴终点边结束。
- main size:Flex项目的在主轴方向的宽度或高度就是项目的主轴长度，Flex项目的主轴长度属性是width或height属性，由哪一个对着主轴方向决定
- cross axis:与主轴垂直的轴称作侧轴，是侧轴方向的延伸。
- cross-start | cross-end:伸缩行的配置从容器的侧轴起点边开始，往侧轴终点边结束。
- cross size:Flex项目的在侧轴方向的宽度或高度就是项目的侧轴长度，Flex项目的侧轴长度属性是width或height属性，由哪一个对着侧轴方向决定。
- flex-container上的属性：
    - display: flex;
    多列组中所有column-*属性、float、clear属性和vertical-align属性在Flex容器上没有作用。
    ```CSS
        display:flex;// or inline-flex
        justify-content：space-between //以便在主轴上均匀地分隔项目。在每个项目之间放置等量的空间，左侧和右侧项目与Flex容器的边缘齐平
        align-items：stretch //这些项目伸展到Flex容器的高度，使它们看起来都像最高的项目一样高。
    ```
    如何开启flex容器，让一个元素编程伸缩容器：
    规范版本|属性名称|块伸缩容器|内联伸缩容器
    --|--|--|--
    标准版本|display|flex|inline-flex
    混合版本|display|flexbox|inline-flexbox
    最老版本|display|box|inline-box
    - flex-direction 定义元素排列方向，是沿着main-aix还是cross-axis
    ```CSS
    .content {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    /*
    row 水平方向 从左到右
    row-reverse 从右到左
    cloumn 从上到下
    column-reverse 从下到上
    */
    ```
    伸缩流：指定伸缩容器主轴的伸缩流方向
    规范版本|属性名称|水平方向|反向水平|垂直方向|反向垂直|
    --|--|--|--|--|--
    标准版本|flex-direction|row|row-reverse|column|column-reverse|
    混合版本|flex-direction|row|row-reverse|column|column-reverse|
    最老版本|box-orient|box-direction|horizontal|normal|horizontal|reverse|vertical|normal|vertical|reverse
    - flex-wrap
    ```CSS
    .content {
        flex-wrap: nowrap | wrap | wrap-reverse;
    }
    nowrap(默认值):单行显示，如果书写方式是ltr，Flex项目从左向右排列，反之rtl，从右向左排列
    wrap:多行显示，如果书写方式是ltr，Flex项目从左向右排列，反之rtl，从右向左排列
    wrap-reverse:多行显示，如果书写方式是ltr，Flex项目从右向左排列，反之rtl，从左向右排列
    ```
    -  flex-flow: flex-direction flex-wrap;
    ```CSS
    .content {
        flex-flow: row wrap-reverse;
    }
    ```
    -  justify-countent定义了在主轴上的对齐方式
    ```CSS
    .box{
        justify-content:flex-start | flex-end | center | space-between | space-around;
    }
    flex-start（默认值）：左对齐。
    flex-end：右对齐。
    center：居中。
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔都相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    ```
    -   align-items属性定义项目在交叉轴上如何对齐
    ```CSS
    
    .box{
        align-items: flex-start | flex-end | center | baseline | stretch;
    }
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    center：交叉轴的中点对齐。
    baseline：项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或者设为auto，将沾满整个容器的高度。
    ```
    -  align-content定义多根轴线的对齐方式。如果项目只有一根轴线该属性不起作用
    ```CSS
    
    .box{
        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }
    flex-start：与交叉轴的起点对齐。
    flex-end：与交叉轴的终点对齐。
    center：与交叉轴的中点对齐。
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    space-around：每根轴线两侧的间隔都相等。所有，轴线之间的间隔比轴线与边框之间的间隔大一倍。
    stretch（默认值）：轴线沾满整个交叉轴
    ```
- flex-item上的属性
    - order 排列顺序数值越小，排列越靠前。当有标签设置了order值 有的标签没有设置order值那么会先排列所有的没有设置order的标签默认值是0
    - flex-grow 定义项目的放大比例，默认是0，即如果存在剩余空间也不放大,如果所有项目的flex-grow属性都为1，则他们将等分剩余空间（如果有）。如果一个项目的flex-grow属性为2，其它项目都为1，则前者占据的剩余空间将比其他项多一倍。
    -  flex-shrink定义了项目的缩小比例。默认值是1。即如果空间不够该项目将缩小。如果所有的项目的flex-shrink属性都为1，则空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性值为0，其它项目都为1，则空间不足时前者不缩小。
    -  flex-basis定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值是auto，即项目原本的大小。
    -   flex属性flex-grow，flex-shrink和flex-basis的缩写，默认值是0 1 auto。后两个属性是可选的。
    该属性有两个快捷键：auto（1 1 auto）和none（0 0 auto）。
    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
    - align-self属性允许单个项目有其他项目不一样的对齐方式，可覆盖align-items属性。默认值是auto，表示从继承父类元素的align-items属性，如果没有父元素，则等同于stretch。
    ```CSS
    .box{
        align-self: flex-start | flex-end | center | baseline | stretch;
    }
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    center：交叉轴的中点对齐。
    baseline：项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或者设为auto，将沾满整个容器的高度。
    ``` 
---
#### 有趣的margin问题
##### 有趣的资源列表
- [margin-一些模糊的点](https://juejin.im/post/5d7838cbe51d4561e53539d2?utm_source=gold_browser_extension#heading-0)
- [上文作者git](https://github.com/qq449245884/xiaozhi)
---
1. CSS盒模型

CSS 盒模型指的是一个盒子的各个部分——content、padding、border和margin,它们各自之前是如何布局及相互作用的， 如下所示：
![image](https://user-gold-cdn.xitu.io/2019/9/11/16d1d9e426afa53c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
2. 发生margin重叠的各种情况
	- 相邻兄弟姐妹
	- 完全空盒子
	- 父元素的第一个或最后一个子元素
3. 相邻兄弟姐妹  第一个盒子的 mt 和 第二个盒子的mb 取最大值
4. 完全空盒子 自己的mt和mb会重叠
5. 父元素的第一个或最后一个子元素, 第一个元素的mt 和 第二元素的mb会和父元素的mt以及mb重合, 也就是margin塌陷
6. 只有块元素的margin会重叠, 只有块元素的上下边距会重叠, 左右边距不会发生重叠
7. 如何组织margin重叠
	1. 如果一个元素是绝对的定位, 或者是浮动的, 那么他的margin 永远不会重叠
	2. 给父元素添加border
	3. BFC(Block Formatting Context) 格式化上下文, 是web页面中盒模型布局的CSS渲染模式, 指一个独立的渲染区域, 或者说一个隔离的独立容器  **display: flow-root;**创建一个无副作用的BFC, **display: flow-root;**是CSS3的新属性, 当然 **overflow:auto;**也会产生同样的效果, 但它会在某些场景中出现并不需要的滚动条
	4. flex 和 grid容器
8. 网站margin策略
	- 最简单的方法: 只在元素顶部或底部定义margin, 并且保持网站风格一致, 这样会很少遇到margin重叠的问题, 因为margin的边总于没有margin的边相邻
	- 理想的解决方案是使用 **display: flow-root;**, 但有的浏览器不支持, 可以使用overflow, 或将父元素设置为flex容器, 当然可以设置padding来解决
9. 百分比margin: margin使用百分比设置, 无论方向, 计算的主体都是父元素的宽
10. 现代CSS倾向于以相对于流的方式而不是物理方式来考虑事情, 因此，当我们讨论垂直边距时，我们实际上是在讨论块维度的边距。如果我们在水平写作模式下，这些 margin 将是顶部和底部，但在垂直写作模式下，这些 margin 将是右侧和左侧。
	- CSS引入了逻辑属性和值规范。这将流的相关属性映射到物理属性上。
		- margin-top = margin-block-start
		- margin-right = margin-inline-end
		- margin-bottom = margin-block-end
		- margin-left = margin-inline-start
		- 还有两个新的快捷键，可以同时设置两个块或者两个内嵌块。
			- margin-block
			- margin-inline
