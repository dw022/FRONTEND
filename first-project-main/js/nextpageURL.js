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
    });

    // 현재 페이지를 저장할 변수
    let currentPage = 2;

    // 다음 페이지 버튼 클릭 시
    document.getElementById("next-page").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지

        // 다음 페이지로 이동
        currentPage++;

        // 페이지 이동 후 이전 페이지 버튼을 보이게 하고, 현재 페이지가 1이라면 숨김
        if (currentPage > 1) {
            document.getElementById("previous-page").style.display = "inline";
        }

        // 페이지 이동 처리
        window.location.href = 'lastpageURL.html';
    });

    // 이전 페이지 버튼 클릭 시
    document.getElementById("previous-page").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지

        // 이전 페이지로 이동
        currentPage--;

        // 페이지 이동 처리
        window.location.href = 'index.html';
    });