// 检测窗体滚动
window.onscroll = () => {

    // 背景DOM
    const backgroundElement = document.querySelector(".background");
    const backgroundElementRect = backgroundElement.getBoundingClientRect();

    // 导航DOM
    const navElement = document.querySelector(".nav");

    // 修改导航栏颜色
    if (backgroundElementRect.top < -200) {
        navElement.setAttribute("style", "background-color: black");
    }
    else {
        navElement.setAttribute("style", "background-color: transparent");
    }

    // 产品DOM
    const introduceElement = document.querySelector(".introduce");
    const introduceElementRect = introduceElement.getBoundingClientRect();

    const productElement = document.querySelectorAll(".product-item");

    if (introduceElementRect.bottom >= 0) {
        for (let i = 0; i < productElement.length; i++) {
            productElement[i].classList.add("product-animation");
        }
    }

    if (introduceElementRect.top >= window.innerHeight) {
        for (let i = 0; i < productElement.length; i++) {
            productElement[i].classList.remove("product-animation");
        }
    }

    // 软件DOM
    softwareAnimation(".sociality");
    softwareAnimation(".file");
    softwareAnimation(".security");

    // 下载DOM
    const downloadElement = document.querySelector(".download");
    const downloadElementRect = downloadElement.getBoundingClientRect();

    const downloadPlatformElement = document.querySelector(".download-software");

    if (downloadElementRect.bottom >= 0) {
        downloadPlatformElement.classList.add("download-animation");
    }

    if (downloadElementRect.top >= window.innerHeight) {
        downloadPlatformElement.classList.remove("download-animation");
    }
}

// 软件DOM
function softwareAnimation(className) {
    const softwareElement = document.querySelector(className);
    const softwareElementRect = softwareElement.getBoundingClientRect();

    if (softwareElementRect.bottom >= 0) {
        softwareElement.children[0].classList.add("software-item-left");
        softwareElement.children[1].classList.add("software-item-right");
    }

    if (softwareElementRect.top >= window.innerHeight) {
        softwareElement.children[0].classList.remove("software-item-left");
        softwareElement.children[1].classList.remove("software-item-right");
    }
}