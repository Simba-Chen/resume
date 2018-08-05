 //Js控制导航栏跳转位置
 let aTags = document.querySelectorAll('.navbar>nav>ul>li>a')
 for(let i = 0;i < aTags.length; i++){
     aTags[i].onclick = function(message){
         message.preventDefault()  //清除默认样式
         let a = message.currentTarget   //监听的元素
         let href = a.getAttribute('href')   //得到href这个属性内部的内容。
         let element = document.querySelector(href)  //选择这个内容对应的元素
         let top = element.offsetTop   //得到这个元素距浏览器顶点的像素数 
         console.log(top)
         console.log(element)  
         //增加跳转动画
         let n = 25 //每秒动25次
         let duration = 500 / n  //每次动作时间
         let currentTop = window.scrollY   //当前距离浏览器顶部高度
         let targetTop = top - 80   //目标高度
         let distance = (targetTop - currentTop) / n    // 每次的动作距离
         let i = 0                                      // 设置启停点
         let id = setInterval(
             function(){
                 if(i === n){                          
                     window.clearInterval(id)
                 }
                 window.scrollTo(0,currentTop + distance * i)  //设置X轴Y轴滚动的距离
                 i++
             },duration)
     }
 } 