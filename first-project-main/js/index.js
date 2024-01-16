console.log("scripts for index page");

 // setInterval(callback, ms)
    // ms마다 callback을 실행한다. 1000ms = 1s
    // 오토앨범
    var photos = document.getElementsByClassName("photo");
    var main = document.getElementById("main");
    var index=0;

    setInterval(interval, 3000);

    function interval() {
        index ++;

        if(index >2) index=0;

        console.log(index);

        // 메인이미지 업데이트
        main.src = photos[index].src;

        for (var i=0; i<photos.length; i++) {
            photos[i].classList.remove("active");
        }

        photos[index].classList.add("active");
    };

    // 모달

    var modalOverlay = document.getElementById("modal-overlay");

    // 썸네일을 클릭했을 때
    function openModal(img) {
        modal.src=img.src;
        modal.alt=img.alt;
        modalOverlay.classList.remove("hidden");
    }
    
    // 모달의 오버레이를 클릭했을 때
    modalOverlay.addEventListener("click", function() {
        this.classList.add("hidden");
    })