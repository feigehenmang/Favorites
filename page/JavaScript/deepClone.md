### [深拷贝和浅拷贝](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1?utm_source=gold_browser_extension)
#### [变量类型](https://juejin.im/post/5cec1bcff265da1b8f1aa08f)
1. JavaScript的数据类型
[ECMA标准](http://www.ecma-international.org/ecma-262/9.0/index.html)规定了7种数据类型, 这7种数据类型又分为两种, **原始类型(基本数据类型)**和**对象类型(引用数据类型)**.
    - 基本数据类型: 
        1. Null 只包含一个值, null
        2. Undefined 只包含一个值 undefined
        3. Boolean：包含两个值：true和false
        4. Number：整数或浮点数，还有一些特殊值（-Infinity、+Infinity、NaN）
        5. String：一串表示文本值的字符序列
        6. Symbol：一种实例是唯一且不可改变的数据类型
        7. BigInt(es10 新增)
    - 对象类型
        - object: 自己分一类丝毫不过分，除了常用的Object，Array、Function等都属于特殊的对象
2. 为什么区分原始类型和对象类型(values.html)
    1. 不可变性-原始类型在ECMAScript标准中, 被定义为 **primitive value** 即原始值, 代表值本身是不可改变的.以字符串为例, 我们在调用操作字符串的方法时，没有任何方法是可以直接改变字符串的：
    ```js
    var str = '  ConardLi';
    console.log(str.slice(1));
    console.log(str.substr(1));
    console.log(str.trim(1));
    console.log(str.toLowerCase(1));
    console.log(str[0] = 1); // 无法改变字符串
    console.log(str);  // ConardLi
    ```
    ```js
    str += 6; // str = str + 6;
    console.log(str);  // ConardLi6
    ```
---
3. 在JavaScript中，每一个变量在内存中都需要一个空间来存储。内存空间又被分为两种，栈内存与堆内存。
    - 栈内存: 
        1. 存储的值大小固定
        2. 空间较小
        3. 可以直接操作其保存的变量, 运行效率高
        4. 由系统自动分配存储空间
    JavaScript的原始类型的值直接被存储在栈内存中, 在变量定义时, 栈就为其分配好了内存空间
    **str += 6; // str = str + 6;** 这个时候其实是对str进行了重新赋值, 重新在栈内存中开辟了新的空间, 所以并不违背**不可变性**的特点
4. 引用类型
    - 堆内存
        1. 存储的值大小不定, 可动态调整
        2. 空间较大, 运行效率低
        3. 无法直接操作其内部存储, 使用引用地址读取
        4. 通过代码进行分配空间
    - example:
    ```js
    var obj1 = {name:"ConardLi"}
    var obj2 = {age:18}
    var obj3 = function(){...}
    var obj4 = [1,2,3,4,5,6,7,8,9]
    ```
    ![image](https://user-gold-cdn.xitu.io/2019/5/28/16afa4df7faa4630?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
    > 由于内存是有限的，这些变量不可能一直在内存中占用资源，这里推荐下这篇文章JavaScript中的垃圾回收和内存泄漏，这里告诉你JavaScript是如何进行垃圾回收以及可能会发生内存泄漏的一些场景。
    引用类型不在具有不可变性, 可以轻而易举的改变他, 以数组为例, 他的很多方法都可以改变他自身
    - pop() 删除数组最后一个元素，如果数组为空，则不改变数组，返回undefined，改变原数组，返回被删除的元素
    - push()向数组末尾添加一个或多个元素，改变原数组，返回新数组的长度
    - shift()把数组的第一个元素删除，若空数组，不进行任何操作，返回undefined,改变原数组，返回第一个元素的值
    - unshift()向数组的开头添加一个或多个元素，改变原数组，返回新数组的长度
    - reverse()颠倒数组中元素的顺序，改变原数组，返回该数组
    - sort()对数组元素进行排序，改变原数组，返回该数组
    - splice()从数组中添加/删除项目，改变原数组，返回被删除的元素
    - 通过操作来对比原始类型和引用类型的区别
        1. 复制
        ```js
        // 原始类型 name和name2互不影响
        var name = 'ConardLi';
        var name2 = name;
        name2 = 'code秘密花园';
        console.log(name); // ConardLi;
        ```
        ![image](https://user-gold-cdn.xitu.io/2019/5/28/16afa4e25a85befd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
        ```js
        var obj = {name:'ConardLi'};
        var obj2 = obj;
        obj2.name = 'code秘密花园';
        console.log(obj.name); // code秘密花园
        // obj2 和 obj 互相影响, 当我们复制obj时, 实际上是将栈内存中的引用复制给了新的对象, 所以改变任意一个对象得值都会互相影响
        ```
        ![image](https://user-gold-cdn.xitu.io/2019/5/28/16afa4e49b1e49fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
        2. 比较
        ![image](https://user-gold-cdn.xitu.io/2019/5/28/16afa4e66a7d03ad?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
        对于原始类型, 进行比较的时候直接比较的是栈内存中存储的值, 相同则返回true, 而引用类型比较时比较的是引用地址, 尽管堆内存中存储的对象具有的属性值都是相等的, 但是被存储在了不同的存储空间, 也会返回false
        3. 值传递 和 引用传递
        ```js
        let name = 'ConardLi';
        function changeValue(name){
          name = 'code秘密花园';
        }
        changeValue(name);
        console.log(name); // ConardLi

        ```
        执行上面的代码，如果最终打印出来的name是'ConardLi'，没有改变，说明函数参数传递的是变量的值，即**值传递**。如果最终打印的是'code秘密花园'，函数内部的操作可以改变传入的变量，那么说明函数参数传递的是引用，即**引用传递**。
        ```js
        let obj = {name:'ConardLi'};
        function changeValue(obj){
          obj.name = 'code秘密花园';
        }
        changeValue(obj);
        console.log(obj.name); // code秘密花园

        ```
        解释: 
            - 首先明确一点，ECMAScript中所有的函数的参数都是按值传递的。
            - 当参数是引用类型时, 只是将栈内存中的引用地址复制了一份给到了参数, 因为引用地址的相同所以外部函数被改变了, 请看下面这个例子
        ```js
        let obj = {};
        function changeValue(obj){
          obj.name = 'ConardLi';
          obj = {name:'code秘密花园'};
        }
        changeValue(obj);
        console.log(obj.name); // ConardLi
        ```
        有这个例子可知, 当参数是引用类型时, 只是将栈内存中的引用地址复制了一份给到了参数, 所以: 
        **ECMASCRIPT中所有函数的参数都是值传递(拷贝栈内存中存储的东西, 原始类型为值本身, 引用类型为堆内存存储地址)**
5. 分不清的 Null 和 Undefined
    - null: 表示被赋值过的对象, 可以把一个对象赋值为null, 表示其为空, 不应有值, 所以对象的某个属性值为null是正常的, null转换为数值为0
    - undefined 表示缺少值, 此处应该有值, 但还没定义, 如果一个对象的某个属性值为undefined, 这是不正常的, 如果要删除一个对象的属性 不可以使用 __obj.name=undefined__, 应该使用 __delete obj.name__; undefined转换为数值为 NaN
    - JavaScript为动态类型语言, 成员除了表示存在的空值以外, 还有可能根本就不存在(只有运行时才知道), 这就是undefined存在的意义, 想Java这种强类型语言, 如果有undefined的情况, 就会直接报错
6. Symbol ES6新增
    - 独一无二: symbol变量有Symbol函数返回, 可选用一个字符串为参数, 当参数为其他类型时, 将调用对象身上的toString方法, 用两个一样的字符串创造的symbol对象不相等, 如果想创造两个相等的symbol, 则要使用Symbol.for(key)
    > 使用给定的key搜索注册表中的symbol, 如果有则返回该symbol对象, 没有就用给定的key创建一个返回并注册, 注册表通过Symbol.for触发注册
    ```js
    let str = "Lili";
    let symbol1 = Symbol(str);
    let symbol2 = Symbol(str);
    let symbol3 = Symbol({});
    let symbol4 = Symbol.for(str);
    let symbol5 = Symbol.for(str);
    console.log("symbol info: ", symbol1, symbol2, symbol3, symbol4);
    console.log("Lili diff: ", symbol1 == symbol2); // false
    console.log("Symbol.for diff: ", symbol5 == symbol4); // true
    ```
    - 不可以直接使用new操作符创建symbol, 可以使用typeof判断symbol类型
    - 不可枚举, symbol类型的属性值不会被 for in / Object.getOwnPropertyNames / Object.keys()获取到, 可以调用 Object.getOwnPropertySymbols() 用于专门获取symbol对象
    - 应用场景
        - 用作flag
            1. 在React的ReactComponent中有一个$$typeof属性, 他是一个Symbol类型的变量
            ```js
            var REACT_ELEMENT_TYPE =
              (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
                0xeac7;
            // 一般会返回 Symbol对象
            ```
            2. ReactElement.isValidElement函数用来判断一个React组件是否是有效的，下面是它的具体实现。
            ```js
            ReactElement.isValidElement = function (object) {
              return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            };
            ```
            3. React在渲染时会把没有$$typeof标识的且规则校验不通过的组件过滤掉
            4. 首先 React_ELEMENT_TYPE 是一个全局性质的属性, 每一个ReactComponent都会声明一个属性为$$typeof, 值为 React_ELEMENT_TYPE的属性
        - 私有属性(借助不可枚举的属性, 控制变量读写)
        - 防止属性污染
7. Number类型
    1. 小数的二进制大多是无限循环的
    2. JavaScript中的小数存储遵循 IEEE 754标准, 使用64位固定长度表示
    3. 工具库 [number-precision](https://github.com/nefe/number-precision), [mathjs](https://github.com/josdejong/mathjs/)
    4. JavaScript 中所能表示的最大安全数字
        - JavaScript中Number.MAX_SAFE_INTEGER表示最大安全数字,计算结果是9007199254740991，即在这个数范围内不会出现精度丢失（小数除外）,这个数实际上是1.111...X 2的52次方。
        - 处理大整数的Nodejs库, web端现在没有很好地方式 [node-bigint](https://github.com/substack/node-bigint), [node-bignum](https://github.com/justmoon/node-bignum)
        - es10 出来了bigInt, chrome已经支持, 使用bigInt可以操作超过最大安全数字的数字
8. 还有那些引用类型
    > 在ECMASCRIPT中, 引用类型是一种数据结构, 用来将数据和功能组织在一起
    我们所说的对象, 就是某个特定引用类型的实例, 在ECMASCRIPT中, 只给出了object类型, 实际上, 平常我们使用的很多引用类型的变量, 并不是有object构造的, 但是他们原型链的重点都是object, 这些类型都属于引用类型: 
        - Array 数组
        - Date 日期
        - RegExp 正则
        - Function 函数
    - 包装类型, 为了方便操作基本类型, ECMASCRIPT还提供了几个特殊的引用类型,他们是基本类型的包装类型, Boolean, Number, String
    ```js
    true === new Boolean(true); // false
    123 === new Number(123); // false
    'ConardLi' === new String('ConardLi'); // false
    console.log(typeof new String('ConardLi')); // object
    console.log(typeof 'ConardLi'); // string


    ```
    > 引用类型和包装类型的主要区别就是对象的生存期，使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中，而自基本类型则只存在于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为基本类型添加属性和方法。
    ```js
    var name = 'ConardLi'
    name.color = 'red';
    console.log(name.color); // undefined
    ```
    - 装箱和拆箱
        - 装箱转换: 将基本类型换为对应的包装类型
        - 拆箱操作: 把引用类型换为基本类型
        - 据我们所知, 原始类型并不能创建属性和方法, 那他又是如何调用属性和方法的呢?
            1. 当我们操作基本类型是, 后台就会自动创建一个包装类型的对象, 从而让我们可以调用属性和方法, 如下
            ```js
            var name = "ConardLi";
            var name2 = name.substring(2);
            /**
                1. 创建一个String的包装示例
                2. 在实例上调用substring方法
                3. 销毁实例
            **/
            ```
            2. 也就是说, 当我们使用基本类型调用方法, 就会自动进行装箱和拆箱操作
            3. 引用类型到基本类型的转换, 也就是拆箱的过程, 会遵循ECMASCRIPT规定的toPrimitive原则, 一般会调用引用类型身上的 valueOf和toString方法, 你也可以直接重写toPrimitive方法, 一般转换为不同基本类型的值遵循的规则就不同, 例如: 
                - 引用类型转换为Number类型, 先调用 valueOf , 在调用 toString
                - 引用类型转换为String类型, 先调用 toString, 在调用 valueOf
                - 若valueOf和toString都不存在，或者没有返回基本类型，则抛出TypeError异常。
                ```js
                const obj = {
                  valueOf: () => { console.log('valueOf'); return 123; },
                  toString: () => { console.log('toString'); return 'ConardLi'; },
                };
                console.log(obj - 1);   // valueOf   122
                console.log(`${obj}ConardLi`); // toString  ConardLiConardLi

                const obj2 = {
                  [Symbol.toPrimitive]: () => { console.log('toPrimitive'); return 123; },
                };
                console.log(obj2 - 1);   // valueOf   122

                const obj3 = {
                  valueOf: () => { console.log('valueOf'); return {}; },
                  toString: () => { console.log('toString'); return {}; },
                };
                console.log(obj3 - 1);  
                // valueOf  
                // toString
                // TypeError
                ```
                - 手动拆箱
                ```js
                var num = new Number(123);
                console.log(typeof num); //object
                console.log(typeof num.valueOf()); //number
                var stri = new String("123");
                console.log(typeof stri); //object
                console.log(typeof stri.toString()) //string
                ```
9. 类型转换
    类型转换分两种, **隐式转换** 和 **强制转换**
    - 类型转换规则(隐式转换)
    ![image](https://user-gold-cdn.xitu.io/2019/6/1/16b128d2444b90ce?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
    - if判断和逻辑语句
        - 如果只有if判断中只有单个变量, 会先转换成Boolean, 只有以下几种情况会转换为false: null, undefined, '', NaN, 0, false, 其余都为true
    - 各种数学运算符, 使用非number类型运用数学运算符时, 会先将非number类型转换为number类型
        1. + 是意外
            - 当一侧是string , 会将另一侧转换为string , 进行字符串拼接
            - 当一侧是number, 另一侧为原始类型, 会将原始类型转换为number
            - 当一侧是number, 一侧是引用类型, 会将引用类型和number类型都转换为string 并且拼接
            ```js
            123 + '123' // 123123   （规则1）
            123 + null  // 123    （规则2）
            123 + true // 124    （规则2）
            123 + {}  // 123[object Object]    （规则3）
            ```
        2. ==, 如果两侧类型相同, 则比较结果与===相同, 否则发生隐形转换, 使用 == 时发生的转换可分为以下几种情况(只考虑两侧类型不同)
            1. NaN , NaN和任何类型比较都返回false, 包括自己
            2. Boolean 和其他类型比较, 会先被转换为Number类型
            3. String和Number比较，先将String转换为Number类型。
            4. null == undefined比较结果是true，除此之外，null、undefined和其他任何结果的比较值都为false。
            5. 当原始类型和引用类型做比较时，对象类型会依照ToPrimitive规则转换为原始类型:
            ```js
            '[object Object]' == {} // true
            '1,2,3' == [1, 2, 3] // true
            [] == ![] // true
            //!的优先级高于==，![]首先会被转换为false，然后根据上面第二点，false转换成Number类型0，左侧[]转换为0，两侧比较相等。
            [null] == false // true
            [undefined] == false // true
            // 根据数组的ToPrimitive规则，数组元素为null或undefined时，该元素被当做空字符串处理，所以[null]、[undefined]都会被转换为0。
            ```
10. 判断JavaScript类型的几种方式
    1. typeof, 可以准确判断下面几个原始类型以及函数类型
    ```js
        typeof 'ConardLi'  // string
        typeof 123  // number
        typeof true  // boolean
        typeof Symbol()  // symbol
        typeof undefined  // undefined
        typeof function(){}  // function
    ```
    // 不适用场景
    ```js
    typeof [] // object
    typeof {} // object
    typeof new Date() // object
    typeof /^\d*$/; // object
    ```
    出函数以外所有引用类型都会被判定为object, 并且 typeof null === 'object';
    2. instanceof, 可以帮助我们判断引用类型具体是什么类型
    ```js
    [] instanceof Array // true
    new Date() instanceof Date // true
    new RegExp() instanceof RegExp // true
    ```
    1. 所有引用类型都具有对象特性，即可以自由扩展属性
    2. 所有引用类型都具有一个__proto__（隐式原型）属性，是一个普通对象
    3. 所有的函数都具有prototype（显式原型）属性，也是一个普通对象
    4. 所有引用类型__proto__值指向它构造函数的prototype
    5. 当试图得到一个对象的属性时，如果变量本身没有这个属性，则会去他的__proto__中去找
    6. [] instanceof Array实际上是判断Array.prototype是否在[]的原型链上。
    ```js
    [] instanceof Object // true
    function(){}  instanceof Object // true
    // 使用instancof来检测数据类型不会很准确, 这不是它设计的初衷

    ```
    3. toString
    > 每一个引用类型都有toString方法，默认情况下，toString()方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中type是对象的类型。
    ```js
    const obj = {};
    obj.toString() // [object Object]
    ```
    注意，上面提到了如果此方法在自定义对象中未被覆盖，toString才会达到预想的效果，事实上，大部分引用类型比如Array、Date、RegExp等都重写了toString方法。
我们可以直接调用Object原型上未被覆盖的toString()方法，使用call来改变this指向来达到我们想要的效果。
    ![image](https://user-gold-cdn.xitu.io/2019/5/28/16afa4ee855cfa98?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
    4. jquery
    ```js
    var class2type = {};
    jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
    function( i, name ) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    } );

    type: function( obj ) {
        if ( obj == null ) {
            return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[Object.prototype.toString.call(obj) ] || "object" :
            typeof obj;
    }

    isFunction: function( obj ) {
            return jQuery.type(obj) === "function";
    }
    //原始类型直接使用typeof，引用类型使用Object.prototype.toString.call取得类型，借助一个class2type对象将字符串多余的代码过滤掉，例如[object function]将得到array，然后在后面的类型判断，如isFunction直接可以使用jQuery.type(obj) === "function"这样的判断。

    ```
---
### 深拷贝和浅拷贝(只针对引用类型来说)
1. 浅拷贝 拷贝的是内存地址
2. 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象
3. 方法: 
    1. JSON.parse(JSON.stringify()); 缺陷: 拷贝其他引用类型、拷贝函数、循环引用等情况。
    2. 基础版本
    ```js
    module.exports = function clone(target) {
        if (typeof target === 'object') {
            let cloneTarget = Array.isArray(target) ? [] : {};
            for (const key in target) {
                cloneTarget[key] = clone(target[key]);
            }
            return cloneTarget;
        } else {
            return target;
        }
    };
    ```
    3. 循环引用
    ```js
    const target = {
        field1: 1,
        field2: undefined,
        field3: {
            child: 'child'
        },
        field4: [2, 4, 8]
    };
    target.target = target;
    // clone(target) 会报内存溢出

    ```
    修改后:
    ```js
    function clone(target, map = new Map()) {
        if (typeof target === 'object') {
            let cloneTarget = Array.isArray(target) ? [] : {};
            if (map.get(target)) {
                return map.get(target);
            }
            map.set(target, cloneTarget);
            for (const key in target) {
                cloneTarget[key] = clone(target[key], map);
            }
            return cloneTarget;
        } else {
            return target;
        }
    };
    // 使用 WeakMap
    // WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
    // 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。
     function clone(target, map = new WeakMap()) {
        if (typeof target === 'object') {
            let cloneTarget = Array.isArray(target) ? [] : {};
            if (map.get(target)) {
                return map.get(target);
            }
            map.set(target, cloneTarget);
            for (const key in target) {
                cloneTarget[key] = clone(target[key], map);
            }
            return cloneTarget;
        } else {
            return target;
        }
    };
    ```
    ![image](https://user-gold-cdn.xitu.io/2019/9/1/16ce893e6ec12377?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


