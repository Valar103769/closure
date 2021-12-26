/**
 * 名词解释: 
 * 1. 执行上下文,也叫执行环境
 * 
 */
 const ExecutionContext = require('./ExecutionContext');
 const LexicalEnvironment = require('./LexicalEnvironment');
const ExecutionContextStack = require('./ExecutionContextStack')
const ObjectEnvironmentRecords = require('./ObjectEnvironmentRecords');
const FunctionInstance = require('./FunctionInstance');
const DeclarativeEnvironmentRecords = require('./DeclarativeEnvironmentRecords');

// 当控制器转入 ECMA 脚本的可执行代码时，控制器会进入一个执行环境
const ECStack = new  ExecutionContextStack()

// 入栈,创建词法环境  -> 变量提升 -> 执行代码(包含赋值) -> 出栈

// 创建词法环境 
// 执行环境 <- 词法环境 <- 环境记录项

// 环境记录项
// 创建对象式
let globalEnvironmentRecords = new ObjectEnvironmentRecords(global)

// 词法环境
// 一个词法环境由一个环境记录项和可能为空的外部词法环境引用构成
let globalLexicalEnvironment = new LexicalEnvironment(globalEnvironmentRecords,null)

// 执行环境
// 解释执行 全局代码 或使用 eval 函数输入的代码会创建并进入一个新的执行环境。
let globalExecutionContext = new ExecutionContext(globalLexicalEnvironment,global)
// 进入执行环境
ECStack.push(globalExecutionContext)


// 全局变量提升开始
// a

ECStack.current.lexicalEnvironment.createBinding('a')
ECStack.current.lexicalEnvironment.setBinding('a', undefined);

// one
ECStack.current.lexicalEnvironment.createBinding('one');
// 静态作用域,在执行前绑定词法环境
let oneFn = new FunctionInstance('one','var b = 2;console.log(a, b);',ECStack.current.lexicalEnvironment)
ECStack.current.lexicalEnvironment.setBinding('one', oneFn);
// 全局变量提升结束


// 执行代码(全局)
ECStack.current.lexicalEnvironment.setBinding('a', 1);

// 执行到one函数
// 环境记录项
let oneEnvironmentRecords = new DeclarativeEnvironmentRecords();//声明式,在创建时里面不包含任何的变量绑定
let oneLexicalEnvironment = new LexicalEnvironment(oneEnvironmentRecords, oneFn.scope);
// 设置词法环境和this绑定
let oneExecutionContext = new ExecutionContext(oneLexicalEnvironment, global);
// 让one的执行上下文出栈
ECStack.push(oneExecutionContext);

// 局部变量提升开始
ECStack.current.lexicalEnvironment.createBinding('b');
ECStack.current.lexicalEnvironment.setBinding('b', undefined);
// 局部变量提升结束

// 执行代码(函数内)
ECStack.current.lexicalEnvironment.setBinding('b', 2);

//让one的执行上下文出栈
ECStack.pop();
debugger
// 结束
console.log(
    ECStack.current.lexicalEnvironment.GetIdentifierReference('a'),
    ECStack.current.lexicalEnvironment.GetIdentifierReference('b')
);