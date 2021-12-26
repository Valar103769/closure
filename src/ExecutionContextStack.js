/**
 *  当控制器转入 ECMA 脚本的可执行代码时，控制器会进入一个执行环境。当前活
动的多个执行环境在逻辑上形成一个栈结构。该逻辑栈的最顶层的执行环境称为
当前运行的执行环境。任何时候，当控制器从当前运行的执行环境相关的可执
行代码转入与该执行环境无关的可执行代码时，会创建一个新的执行环境。新建
的这个执行环境会推入栈中，成 为当前运行的执行环境
 */


class ExecutionContextStack {
  constructor() {
    this.executionContextStack = [];
  }
  push(executionContext) {
    this.executionContextStack.push(executionContext);
  }
  pop() {
      this.executionContextStack.pop()
  }
  get current(){
      return this.executionContextStack[this.executionContextStack.length - 1]
  }
}

module.exports = ExecutionContextStack;
