const endpoint =
'https://gist.githubusercontent.com/liyuechun/f00bb31fb8f46ee0a283a4d182f691b4/raw/3ea4b427917048cdc596b38b67b5ed664605b76d/TangPoetry.json';


const poetrys = [];

fetch(endpoint).then(responseData => {
    // responseData.json()是将数据转换为json数据
    return responseData.json();
}).then(data => {
    // poetrys.push(...data)这句代码中的push是往数组里面新增对象，而...data代表的是将这个data数组中的数据一一的存储到poetrys数组中。
    poetrys.push(...data);
});


const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// 监听表单发生改变和键盘起来
search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);


// 查找函数
function findMatches(wordToMatch, poetrys) {
    return poetrys.filter(value => {
      // 正则找出匹配的诗句,RegExp是JavaScript中内置的正则对象，通过以下方法均可以创建一个正则对象的实例。
      const regex = new RegExp(wordToMatch, 'gi');
    //   join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串,正则只能匹配字符串
      const author = value.detail_author.join('');

    // search检索与正则表达式相匹配的值。	match找到一个或多个正则表达式的匹配。	replace替换与正则表达式匹配的子串。	
    // split把字符串分割为字符串数组。 
    //进行正则比较
      return value.detail_text.match(regex) || value.title.match(regex) || author.match(regex);
    });
}
    


function displayMatches() {
    console.log(this)
    const matches = findMatches(this.value, poetrys);
    //创建正则表达式
    const regex = new RegExp(this.value, 'gi');

    const Shtml = matches.map(poet => {
        // 替换高亮的标签
        const text = poet.detail_text.replace(regex, `<span class="hl">${ this.value }</span>`);
        const title = poet.title.replace(regex, `<span class="hl">${ this.value }</span>`);
        const detail_author = poet.detail_author[0].replace(regex, `<span class="hl">${ this.value }</span>`);
        // 构造 HTML 值
        return `
        <li>
            <span class="poet">${ text }</span>
            <span class="title">${ title } - ${ detail_author }</span>
        </li>
        `;

    }).join(''); //拼接在一起

    // 全部插入html
    suggestions.innerHTML = Shtml;
}
    