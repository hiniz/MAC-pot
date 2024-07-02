const plusButton = document.querySelector('.plus');

console.log(plusButton)

window.addEventListener('click' ,(e)=>{
    console.log(e.clientX, window.innerWidth)
    console.log(e.clientY, window.innerHeight)

})

 plusButton.style.left =`${비율계산(363,1669,123-32,544-32,window.innerWidth)}px`
plusButton.style.top =`${비율계산(465,944,442-32-93,470-32-93,window.innerHeight)}px`


window.addEventListener('resize',()=>{

    plusButton.style.left =`${비율계산(363,1669,123-32,544-32,window.innerWidth)}px`
    plusButton.style.top =`${비율계산(465,944,442-32-93,470-32-93,window.innerHeight)}px`
    // plusButton.style.top =`${비율계산(404,944,159,425)}px`


})

function 비율계산(최소크기,최대크기,최소좌표,최대좌표,브라우저크기){
    const basePosValue = 최소좌표;
    const baseWidthValue = 최소크기;

    const maxPosValue=최대좌표;
    const maxWidthValue=최대크기;

    const PosValue = maxPosValue-basePosValue;
    const WidthValue = maxWidthValue -baseWidthValue;

    const nowWidthValue = 브라우저크기 - baseWidthValue;
    const 비율 = nowWidthValue / WidthValue

    return parseInt(비율 * PosValue)+basePosValue;

}


const showImageButton = document.getElementsByClassName('plus-button');

// 이미지 박스 요소 가져오기
const imageBox = document.getElementsByClassName('plus-contents');

// 버튼에 클릭 이벤트 추가
showImageButton[0].addEventListener('click', function() {
  // 이미지 박스가 숨겨져 있으면 보이도록 변경
  imageBox[0].classList.toggle('hidden');
});




