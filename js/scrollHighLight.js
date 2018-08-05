let specialTags = document.querySelectorAll('[data-x]')
for(let i = 0; i < specialTags.length; i++ ){
    specialTags[i].classList.add('animate')
    }
setInterval(window.onscroll = function (){  //防止当页面滚动的时候，影响性能
    let minIndex = 0
    for(let i = 1; i < specialTags.length; i++ ){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i  //minIndex就是离窗口顶部距离最近的元素
        }
    }
    specialTags[minIndex].classList.remove('animate')

    let id = specialTags[minIndex].id
    let aHref = document.querySelector('a[href="#'+ id +'"]')
    let li = aHref.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i = 0;i < brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
},500)