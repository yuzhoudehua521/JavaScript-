const bigImg = document.getElementById('bigImg')
const smallImgs = document.getElementsByClassName('small')



for(var i = 0; i < smallImgs.length; i++) {

    smallImgs[i].addEventListener('mouseover', function() {

        // 清除所有特效
        for(var j = 0; j < smallImgs.length; j++) {
            smallImgs[j].parentNode.parentNode.setAttribute('class', '')
        }

        // 获取小图片src
        const smallSrc = this.getAttribute('src')
        bigImg.setAttribute('src', smallSrc)

        // 为li设置class
        this.parentNode.parentNode.setAttribute('class', 'active')
    })
}