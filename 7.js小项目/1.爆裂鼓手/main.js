//获取Dom，querySelectorAll返回一个数组
var keys = document.querySelectorAll('div.key');

//forEach(function(currentValue, index, arr), thisValue),添加事件，transitionend 事件在 CSS 完成过渡后触发。
// 每个键盘或鼠标事件，产生不同event
keys.forEach(function(key) {
    key.addEventListener('click', handleClick);
    key.addEventListener('transitionend', removeClass);
});

//全局事件
document.addEventListener('keydown', handleKeyPress);


//e为键盘事件，keyCode为按下键盘码
function handleKeyPress(e) {
    // console.log(e)
    var code = e.keyCode;
    playSound(code);
}

// 包裹着几个元素，target点击返回某一个，事件属性可返回事件的目标节点（触发该事件的节点）
// getAttribute() 方法返回指定属性名的属性值。data-key = 71 code = 71
function handleClick(e) {
    var code;
    console.log(e.target )
    if ( this == e.target ) {
        code = this.getAttribute("data-key");
    } else {
        code = e.target.parentElement.getAttribute("data-key");
    }
    playSound(code);
}

// 改变类样式
function removeClass(e) {
    this.className = 'key';
}


// 播放音效
function playSound(code) {
    var audioSelect = document.querySelector(`audio[data-key="${code}"]`)
    var key = document.querySelector(`div[data-key="${code}"]`)
    //不存在的按键直接退出
    if(!audioSelect) return 

    key.classList.add('playing')
    // currentTime为Audio对象属性，currentTime当前播放位置，play为Audio对象方法，进行播放
    audioSelect.currentTime = 0
    audioSelect.play()

    // var audioFile = document.querySelector('audio[data-key="' + code +'"]');
    // var elem;
    // if (!audioFile) return;
    // elem = document.querySelector('div[data-key="' + code +'"]');
    // audioFile.currentTime = 0;
    // audioFile.play();
    // elem.classList += ' playing';
}