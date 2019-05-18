//1.定义一个变量
let a: string = 'hello'
//2.定义数组
const arr: number[] = [111, 222, 333]
//arr = [1,2,3] //Cannot assign to 'arr' because it is a constant

arr[2] = 333333
console.log(arr)

//枚举类型
enum Sex {
    male, female, unknow
}
let gender_num: Sex = Sex.male
console.log(gender_num) //0
console.log(Sex[gender_num]) //male
// let res
// switch (+gender_num) {
//     case Sex.male:
//         res = '男'
//         break
//     case Sex.female:
//         res = '女'
//         break
//     case Sex.unknow:
//         res = '未知'
//         break
// }
// console.log(res)
function getGender(v) {
    let res
    switch (v) {
        case Sex.male:
            res = '男'
            break
        case Sex.female:
            res = '女'
            break
        case Sex.unknow:
            res = '未知'
            break
    }
    return res
}

console.log(getGender(gender_num))

//类
class Foo {
    private name: string
    constructor(name:string) {

        this.name = name
    }
    say() {
        console.log('hello ' + this.name)
    }
}
let foo = new Foo('Monkey')
foo.say()