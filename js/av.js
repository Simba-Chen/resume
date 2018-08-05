var APP_ID = 'Q9hzkTm4WOpXGCjxfKWQg3oF-gzGzoHsz';
var APP_KEY = '5vVhoWXDRvH7yNYjGSd8PuVO';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
  query.find()
  .then(
      function (messages){
        let array = messages.map(function (e){return e.attributes})
        array.forEach(function (e){
            let li = document.createElement('li')
            li.innerText = e.content
            let messageList = document.querySelector('.messageList')
            messageList.appendChild(li)            
        })
      },function (){
          alert('留言加载失败')
      } 
  )

let myForm = document.querySelector('.postMessage')
myForm.addEventListener('submit',function(x){
    x.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    if(content){  //防止内容为空时任提交至数据库
        let Message = AV.Object.extend('Message');
        let message = new Message();
        message.save({
            'content': content
        }).then(function(object) {
            let li = document.createElement('li')
            li.innerText = object.attributes.content
            let messageList = document.querySelector('.messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value = ''  //清空掉留言班内部的文字            
        })
    } 
})
// var TestObject = AV.Object.extend('Message');
// var testObject = new TestObject();
// testObject.save({
//   words: '陈辛达的resume服务器!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })