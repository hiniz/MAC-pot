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
const imageBox = document.getElementsByClassName('plus-box');

// 버튼에 클릭 이벤트 추가
showImageButton[0].addEventListener('click', function() {
  // 이미지 박스가 숨겨져 있으면 보이도록 변경
  imageBox[0].classList.toggle('hidden');
});




// countup

const 타겟 = document.querySelectorAll('.count-up');


for(let i = 0 ; i < 타겟.length ; i++) {
    const count = parseInt(타겟[i].innerText);
    타겟[i].innerText = '0';
    setTimeout(() => {
        
        makeCountup(타겟[i],count)
    }, 1000*i);
}


function makeCountup(target, 목표값, 재생시간=2, 초당프레임=60) {

    const 총프레임 = 재생시간 * 초당프레임;
    const 프레임1재생시간 = 1000 / 초당프레임

    for(let i = 0 ; i <= 총프레임 ; i ++){
        const 진행률 = i / 총프레임;
        setTimeout(() => {
            target.innerText = parseInt(목표값 * easeOutQuart(진행률)).toLocaleString();
        }, 프레임1재생시간 * i);
    }

    // easings.net 

    function easeInOutCirc(x){
        return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    }

    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    } 
}


