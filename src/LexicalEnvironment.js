let DeclarativeEnvironmentRecords = require('./DeclarativeEnvironmentRecords');
let ObjectEnvironmentRecords = require('./ObjectEnvironmentRecords');
/**
 * 词法环境由一个环境记录项和一个外部词法记录的引用组成
 */
class LexicalEnvironment {
    constructor(environmentRecord, outer) {
        this.environmentRecord = environmentRecord;
        this.outer = outer;
    }
    //创建变量 登记变量
    createBinding(N) {
        this.environmentRecord.createBinding(N);
    }
    //设置变量的值
    setBinding(N, V) {
        this.environmentRecord.setBinding(N, V);
    }
    //判断某个变量是否已经登录过了
    hasBinding(N) {
        return this.environmentRecord.hasBinding(N);
    }
    //获取变量的值
    getBindingValue(N) {
        return this.environmentRecord.getBindingValue(N);
    }
    GetIdentifierReference(name) {
        let lexicalEnvironment = this;
        do {
            //先判断当前的词法环境中有没有定义name这个变量
            let exists = lexicalEnvironment.hasBinding(name);
            if (exists) {
                return lexicalEnvironment.getBindingValue(name);
            } else {
                lexicalEnvironment = lexicalEnvironment.outer;
            }
        } while (lexicalEnvironment);
    }
    
}
module.exports = LexicalEnvironment;