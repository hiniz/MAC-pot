const showImageButton = document.querySelector('.line-button');

// 이미지 박스 요소 가져오기
const imageBox = document.querySelector('.qr-background');

// 버튼에 클릭 이벤트 추가
showImageButton.addEventListener('click', function() {
  // 이미지 박스가 숨겨져 있으면 보이도록 변경
  imageBox.classList.toggle('hidden');
});