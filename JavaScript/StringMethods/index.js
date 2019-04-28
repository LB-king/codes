//1.indexOf--寻找下标
let str = 'FB Bayern';
console.log(str.indexOf('B')); //1

//2.charAt & charCodeAt--查找指定位置的字符&字符编码
console.log(str.charAt(4)); //a
console.log(str.charCodeAt(4)); //97

//3.字符串、数组连接
console.log('a'.concat('b')); //ab
console.log('a'.concat(66)); //a66
console.log('a'.concat([66])); //a66
console.log(['a'].concat(66)); //['a',66]
console.log(['a'].concat([66])); //['a',66]

//4.replace--字符串替换（默认只替换第一次出现的）
console.log('I love bayern and love Munchen'.replace('love', '爱')); //'I 爱 bayern and love Munchen'
console.log('I love bayern and love Munchen'.replace(/love/g, '爱')); //'I 爱 bayern and 爱 Munchen'

//5.split(字符串方法) & join(数组方法)
console.log('I love Bayern'.split(' ')); //[ 'I', 'love', 'Bayern' ]
console.log(['I','love','Bayern'].join(' ')); //'I love Bayern'