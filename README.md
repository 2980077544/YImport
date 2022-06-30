# YImport
为导入一个html文件插入元素内提供一个简单的解决方案

***demo在底部。***

# 安装
下载``jQuery``、仓库的两个js文件后并入你的项目。

本项目依赖jQuery和ZinnerHTML。

在需要使用的页面引入js(记得改路径):

```html
<script type="text/javascript" src="zinnerhtml.js"></script>
<script type="text/javascript" src="yimport.js"></script>
```
# 使用
## 1.在页面引入import元素
```html
<import
   id="view"
   src="view.html"
   js="view.js" />
```
是的，在需要的地方这样插入元素就行了!

就这么简单!

以下是关于该dom元素属性的详细说明:

### 属性
#### id
可选

本js没有拓展id，但是``请注意``此id在此页面内（包括将要引入的页面及任何将动态生成的dom元素）必须是唯一的。

但没有此属性时本js可以正常工作而不会与其他dom元素发生冲突。

#### src
必须

要引入的页面相对或绝对路径``请注意同源策略的影响`` 。

如果没有该属性，``此import元素不会被本js解析``，即此元素等价于一个空dom元素，其他属性也不会被解析。

由该属性引入的文件由ajax``动态解析``，这意味着加载是异步的。

``在此页面中的script脚本可以正常执行!``

载入失败不会影响后续import的加载
#### js
可选

当有此属性时，会在该import元素的src属性加载的Dom元素全部完成后引入此js（异步）。

此属性接受js文件的相对或绝对路径。

如果某import元素的src属性加载页面失败时，不会引入该元素此属性指向的js文件。

载入失败时不会影响后续import的加载。
### 特性
* 载入成功后会删除对应元素的src属性。（失败不会删除。）
* 注意引入的HTML会一字不差的插入到import元素内，因此请不要在要引入的HTML文件中保留html,head,body等元素，请只保留最终插入的dom元素。
* 任何import元素不会自动被解析（以便嵌套import不会使页面崩溃）。
## 2.解析import元素
```html
<script>
//功能1
AutoImports('body');
//功能2
UploadImports();
//功能3
let dom=document.getElementById("view");
UploadImport(dom);
</script>
```
以上的几行代码解释了本js的三个功能。
### 功能1
在dom元素变化时解析指定css选择器下的import元素。

``本功能执行时不会解析非动态引入的import元素，而是添加一个监听器!``

支持js动态添加的Dom元素，且会立即自动解析（dom被添加之后）。

已经导入的import不会被重新导入。

接受一个``CSS选择器``参数。
### 功能2

解析页面上``所有``能被找到的import元素（``不含iframe内的``）。

不接受参数。

建议在页面的body前添加此函数的调用以解析import。
### 功能3
解析一个import元素（如果要解析iframe内的请考虑此功能）。

接受一个``原生js的Dom元素``。
# Demo
```html
<import
   id="view"
   src="view.html"
   js="view.js" />
<script>
UploadImports();
</script>
```
# 远景
本项目可能还有不完善的地方，欢迎issues和pull!
