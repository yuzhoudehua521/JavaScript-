const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    // 通过 dataset.sizing 来获取后缀值
    const suffix = this.dataset.sizing || '';
    
    //通过root设置--base全局变量
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// change表单事件，表单元素的内容改变时触发
inputs.forEach(key => key.addEventListener('change', handleUpdate))
inputs.forEach(key => key.addEventListener('mousemove', handleUpdate))