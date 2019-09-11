1. js函数调用的三种形式
```js
func(p1, p2) 
obj.child.method(p1, p2)
func.call(context, p1, p2) // 这里先不讲 apply
// 前两种都可以改为第三种
```
2. 数组调用方法对应哪种方法
```js
var arr = [1, 2, 3, function(){}];
arr[0].toString();// "1"
// arr.0.toString === toString.call(arr[0]);
arr[3]();
// arr.3() === 3.call(arr);

```
3. call 和 apply 的区别
	1. call和apply的第一个参数会绑定到函数体的this上，如果不传参数，例如fun.call()，非严格模式，this默认还是绑定到全局对象
	2. call函数接收的是一个参数列表，apply函数接收的是一个参数数组。
	3. call, apply, bind在调用的时候，如果我们传入数字或者字符串，这两个方法会把传入的参数转成包装对象( 进行了一步装箱操作)。 bind优先级最高
	4. bind其实是创建了一个新的函数, this已经指定, 并且call和apply更改不了新函数的this指向
4. new 绑定
	1. 创建一个空对象
	2. 将空对象的  \_\_proto\_\_指向原对象的prototype
	3. 指向构造函数中的代码
	4. 返回新对象
```
function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);



```
5. 绑定优先级
	new绑定 > 显式绑定 > 隐式绑定 > 默认绑定
6. 箭头函数

>MDN:箭头函数表达式的语法比函数表达式更短，并且不绑定自己的this，arguments，super或 new.target。这些函数表达式最适合用于非方法函数(non-method functions)，并且它们不能用作构造函数。

	- 箭头函数没有arguments
	- 箭头函数没有constructor, 所以无法被new调用
	- 箭头函数没有原型
	- 箭头函数没有super
	- 箭头函数没有自己的this

---
```js

var length = 10;
function fn() {
    console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
  	// fn 为 fn函数
    fn(); // 10
    arguments[0](); // === fn.call(arguments);
  }
};
 
obj.method(fn, 1);//输出是什么？
```