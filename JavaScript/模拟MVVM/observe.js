class Observe {
    constructor(data) {
        this.observe(data)
    }
    observe(data) {
        if (data && toString.call(data) === '[object Object]') {
            for (let key in data) {
                this.defineReactive(data, key, data[key])
            }
        }

    }
    defineReactive(data, key, value) {
        this.observe(value)
        Object.defineProperty(data, key, {
            get() {
                return value
            },
            set: (newVal) => {
                if (value !== newVal) {
                    value = newVal
                    this.observe(newVal)
                }
            }
        })
    }

}