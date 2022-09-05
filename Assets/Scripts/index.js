let sender = document.querySelector(".btn");
count = 1
sender.addEventListener("click", function () {
  send();
  
})
function send() {
  let message = document.querySelector("#message").value;
   if (message.length == 0 && sender.click) {
    // $("#message-body").append(`
    //   <div class="alert alert-danger">You have an empty message</div>
    // `);
  }else if (message.length >= 1 && count % 2 == 0) {
    count++;
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    $(".message-body").append(`
    <p class="out">${message}</p>
    <p class="timeOut">${h}:${m}:${s}</i></p>
    `);
  } else if (message.length >= 1 && count % 2 == 1) {
    count++;
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    $(".message-body").append(`
    <p class="in">${message}</p> 
    <p class="timeIn">${h}:${m}:${s}</p>
    `);
  }
  $(".message-body").scrollTop(
    $(".message-body")[0].scrollHeight
  )
  $("#message").val('');
}
// let preloader = document.querySelector('.preloader');
// window.addEventListener('loadstart',function(){
//   preloader.style.display = 'block'
// })
// window.addEventListener('load',function(){
//   preloader.style.display = 'none'
// })

window.addEventListener('keyup', function (e) {
  // console.log(e.key);
  if (e.key === 'Enter') {
    send();
  }
})
let message = document.querySelector("#message")