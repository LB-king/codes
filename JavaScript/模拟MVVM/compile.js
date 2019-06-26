class Compiler {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        let fragment = this.node2fragment(this.el)
        //fragment重新塞回dom
        this.Compile(fragment)
        this.el.appendChild(fragment)
    }
    //判断是否是v-类似的指令
    isDirective(expr) {
        return expr.startsWith('v-')
    }
    CompileElement(node) {
        let attrs = node.attributes
        if (attrs.length) {
            Array.from(attrs).forEach(attr => {
                let {
                    name,
                    value: expr
                } = attr
                if (this.isDirective(name)) {
                    // console.log(name) //v-model
                    // console.log(expr) //school.name
                    let [, directiveName] = name.split('-')
                    Utils[directiveName](node, expr, this.vm)
                }
            })
        }
    }
    CompileText(node) {
        let content = node.textContent
        if (/\{\{([^}]+)\}\}/g.test(content)) {
            Utils['text'](node, content, this.vm)
        }
    }
    Compile(fragment) {
        let childNodes = fragment.childNodes
        Array.from(childNodes).forEach((child) => {
            if (this.isElementNode(child)) {
                // console.log('ele',child)
                this.CompileElement(child)
                //如果是元素节点要继续遍历
                this.Compile(child)
            } else {
                // console.log('text',child)
                this.CompileText(child)
            }
        })
    }
    //判断是不是元素节点
    isElementNode(node) {
        return node.nodeType === 1
    }
    //元素节点转化为文档碎片
    node2fragment(node) {
        let fragment = document.createDocumentFragment()
        let firstChild
        while (firstChild = node.firstChild) {
            fragment.appendChild(firstChild)
        }
        return fragment
    }
}

Utils = {
    getVal(expr, vm) {
        return expr.split('.').reduce((acc, cur) => {
            return acc[cur]
        }, vm.$data)
    },
    model(node, expr, vm) {
        let value = this.getVal(expr, vm)
        this.updater.modelUpdater(node, value)
    },
    getTextVal(content, vm) {
        return content.replace(/\{\{([^}]+)\}\}/g, (...arg) => {
            let arg1 = arg[1].replace(/\s/g, '')
            return this.getVal(arg1, vm)
        })
    },
    text(node, content, vm) {
        // console.log(content)
        // console.log(vm)
        let value = this.getTextVal(content, vm)
        this.updater.textUpdater(node, value)
    },
    updater: {
        modelUpdater(node, v) {
            node.value = v
        },
        textUpdater(node, v) {
            node.textContent = v
        }
    }
}