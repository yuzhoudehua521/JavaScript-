const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const date = new Date();

    const second = date.getSeconds();
    const secondDeg = (90 + (second / 60) * 360);

    const min = date.getMinutes();
    const minDeg = (90 + (min / 60) * 360);

    const hour = date.getHours();
    const hourDeg = (90 + (hour / 12) * 360 + (min / 12 / 60) * 360); // 加入分钟所占的时间，使时针可以缓慢地移动


    //解决指针跳顿问题【第一种方法】
    //在发生跳顿的角度值处，将 CSS 的 `transition` 属性去掉
    if (secondDeg === 90) {
    secHand.style.transition = 'all 0s';
    } else {
    secHand.style.transition = 'all 0.05s';
    }

    if (minDeg === 90) {
    minHand.style.transition = 'all 0s';
    } else {
    minHand.style.transition = 'all 0.1s';
    }


    secHand.style.transform = `rotate(${ secondDeg }deg)`;
    minHand.style.transform = `rotate(${ minDeg }deg)`;
    hourHand.style.transform = `rotate(${ hourDeg }deg)`;

}

setInterval(setDate, 1000);

setDate();