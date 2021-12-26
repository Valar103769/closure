//scope
//在创建函数的时候，就会把整个词法环境链条上的所有的对象，做了一个treeshaking,存在了Scopes
//scopes= [整个作用域链全存下来了,而且做了类似于treeshaking]
//在找变量的时候 就非常非常的方便

class FunctionInstance {
    constructor(name, code, scope, Scopes) {
        this.name = name;
        this.code = code;
        this.scope = scope;
        this.Scopes = Scopes;
    }
}
module.exports = FunctionInstance;