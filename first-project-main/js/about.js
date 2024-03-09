console.log("scripts for about page");

document.getElementById("showmorebtn").addEventListener("click", function () {
    var additionalProfiles = document.querySelectorAll(".additional-profiles .additional");

    event.preventDefault(); // 기본 동작 중지

    // 추가적인 프로필 카드들 보이기/숨기기
    additionalProfiles.forEach(function(card) {
        card.classList.toggle("hidden");
    });

    // "Who am I?" 버튼 텍스트 변경
    var showMoreBtn = document.getElementById("showmorebtn");
    showMoreBtn.textContent = (showMoreBtn.textContent === "Who am I?") ? "▲" : "Who am I?";
});

function toggleSubCard(button) {
    var card = button.parentElement;
    var subCard = card.querySelector('.sub-card');
    subCard.classList.toggle('hidden');
}

const contactBtn = document.getElementById('contactbtn');
const additionalProfile = document.querySelector('.contact-additional-profiles');
const additionalProfileCard = document.querySelector('.contact-additional');

contactBtn.addEventListener('click', () => {
    additionalProfileCard.classList.toggle('hidden');
    additionalProfile.classList.toggle('hidden');
});