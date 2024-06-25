const plusButton = document.querySelector('.plus');

console.log(plusButton)

window.addEventListener('click' ,(e)=>{
    console.log(e.clientX, e.clientY , window.innerHeight,window.innerWidth)

})




window.addEventListener('resize',()=>{

    plusButton.style.left =`${비율계산(376,1527,122,493)}px`
    // plusButton.style.top =`${비율계산(404,944,159,425)}px`


})

function 비율계산(최소크기,최대크기,최소좌표,최대좌표){
    const basePosValue = 최소좌표;
    const baseWidthValue = 최소크기;

    const maxPosValue=최대좌표;
    const maxWidthValue=최대크기;

    const PosValue = maxPosValue-basePosValue;
    const WidthValue = maxWidthValue -baseWidthValue;

    const nowWidthValue = window.innerWidth - baseWidthValue;
    const 비율 = nowWidthValue / WidthValue

    return parseInt(비율 * PosValue)+basePosValue;

}