const sw = document.getElementById('sw')
const preBtn = document.getElementById('prev')
const nexBtn = document.getElementById('next')

var minIndex = 0, maxIndex = 7
var currentIndex = minIndex

nexBtn.addEventListener('click', function() {
    if(currentIndex === maxIndex) {
        currentIndex = minIndex
    }else {
        currentIndex ++;
    }
    sw.setAttribute('src',`img/${currentIndex}.jpg`);
})

preBtn.addEventListener('click', function() {
    if(currentIndex === minIndex) {
        currentIndex = maxIndex
    }else {
        currentIndex --;
    }
    sw.setAttribute('src',`img/${currentIndex}.jpg`);
})