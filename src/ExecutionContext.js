/**
 * 执行环境(执行上下文)
 */
class ExecutionContext {
  constructor(lexicalEnvironment, thisBinding) {
    // 变量环境创建后就不会变了，词法环境会随着函数的过程会改变
    this.variableEnvironment = this.lexicalEnvironment = lexicalEnvironment;
    //this指针
    this.thisBinding = thisBinding;
  }
}

module.exports = ExecutionContext