let arr = [
    {id:1,name:'kobe1'},
    {id:2,name:'kobe2'},
    {id:3,name:'kobe3'},
    {id:4,name:'kobe4'},
    {id:5,name:'kobe5'}
];
let obj = {
    a:'aaa',
    b:'bbb'
}
//1.find(返回数组中符合条件的元素)&findIndex(返回数组中符合条件的元素的下标)
let r = arr.find(function (item) {
    return item.id === 4
})
console.log(r);

