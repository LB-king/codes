class Vue {
    constructor(options = {}) {
        this.$el = options.el
        this.$data = options.data
        if(this.$el){
            //将data属性通过Object.defineProperty劫持
            new Observe(this.$data)
            console.log(this.$data)
            //编译模板
            new Compiler(this.$el,this)
            
        }
    }
    
}