console.log("scripts for about page");

var showmoremessage = document.getElementById("showmoremessage");
var showmorebtn = document.getElementById("showmorebtn");
var showmorebox = document.getElementById("showmorebox");
var showmoreinfo1 = document.getElementById("showmoreinfo1");
var showmoreoverlay = document.getElementById("showmoreoverlay");

 // 콜백에 익명함수를 사용할 수 있다. - 간단한 코드
 showmorebtn.addEventListener("click", function() {
    showmoremessage.classList.remove("hidden");
});

showmorebtn.addEventListener("click", function () {
    showmorebox.classList.remove("hidden");
    showmoreoverlay.classList.remove("hidden");
    showmoreinfo1.classList.remove("hidden");
})

close.addEventListener("click",function () {
    showmorebox.classList.add("hidden");
    showmoreoverlay.classList.add("hidden");
    showmoreinfo1.classList.add("hidden");
}) 