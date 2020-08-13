// let items = document.querySelectorAll('ul li')

// let itemArray = []

// items.forEach(function(value) {
//     itemArray.push(value.dataset.time)
// })

// // console.log(itemArray)

// //遍历itemtimearray数组，返回一个新的数组
// let splititems = itemArray.map(value => {
//     //通过 : 将字符串拆分成数组 
//     let temp = value.split(':')

//     return {minute: temp[0], sencond: temp[1]}

// })

// //初始化分和秒
// let totalMin = 0;
// let totalSec = 0;

// totalMin = splititems.reduce((total, value) => {
//     return total += parseInt(value.minute)
// })

// totalSec = spiltitmes.reduce((total, value) => {
//     return total += parseInt(value.sencond);
// })


// //求余计算秒
// let finalSecond = parseInt(totalSec % 60);
// //计算一共多少分钟
// let finalMin = parseInt(totalMin + (totalSec / 60)) % 60;
// //计算一共多少小时
// let finalHour = parseInt((totalMin + (totalSec / 60)) / 60);

// console.log(`共${finalHour}小时,${finalMin}分钟,${finalSecond}秒。`);



// 获取所有的带有data-time属性的节点
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));


const seconds = timeNodes
//返回一个包涵所有data-time值的数组
 .map(node => node.dataset.time)
 //返回一个将data-time解析成秒的数组
 .map(timeCode => {
   //timeCode为 1:43 这样格式的字符串
   //timeCode.split(':') 返回一个新数组，数组里面装的是分和秒的时间
   //[].map(parseFloat) => [].map(function(x) {retunr parseFloat(x)});
   const [mins, secs] = timeCode.split(':').map(parseFloat);
   //将分乘以60+秒，计算所有的秒，并返回
   return (mins * 60) + secs;
 })
 //将数组中的所有的秒叠加并返回
 .reduce((total, vidSeconds) => total + vidSeconds);

//通过求余取整计算时分秒
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

//打印输出
console.log(`共${hours}小时,${mins}分钟,${secondsLeft}秒.`)