const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// 切换tab
function selectItem(e) {
	// 移除所有类
	removeBorder();
    removeShow();
    
	// 添加类
	this.classList.add('tab-border');
    // 获得点击的id
    //console.log(this.id)
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// 添加class（show）类
	tabContentItem.classList.add('show');
}

// 删除边界类样式
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// 删除内容类样式
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// 为每个tab监听点击事件
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
