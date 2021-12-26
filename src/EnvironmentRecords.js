/**
 *  共有 2 类环境记录项： 声明式环境记录项 和 对象式环境记录项 
 *  对象式环境记录项简单理解为全局作用域对象
 *  声明式环境记录项简单理解为函数作用域对象
 * 抽象类包含了以下所描述的抽象方法定义
 * 1. HasBinding
 * 2. CreateMutableBinding
 * 3.SetMutableBinding
 * 4.GetBindingValue
 * 5.DeleteBinding
 * 6.ImplicitThisValue
 */
class EnvironmentRecords {
    constructor(binding){
        this.bindings = binding || {}
    }
    createBinding(N){
        this.bindings[N] = undefined
    }
    setBinding(N,V){
        this.bindings[N] = V
    }
    hasBinding(N) {
        return N in this.bindings;
    }
    getBindingValue(N){
        let value = this.bindings[N]
        if((value.type === 'let' || value.type === 'const') && value.uninitialized){
            throw new Error(`ReferenceError:Cannot access ${N} before initialized `)
        }
        return this.bindings[N]
    }
}

module.exports = EnvironmentRecords