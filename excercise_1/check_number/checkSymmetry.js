
const submitBtnForm5 = document.querySelector('#form5__reset');
const form5Input = document.querySelector('.form5__input');
const form5Result = document.querySelector('.form5__result');

// console.log(submitBtnForm5);
// console.log(form5Input);
// console.log(form5Result);

var form5Value = 0;
form5Input.addEventListener('keyup', (e)=>{
    form5Value = e.target.value;
    console.log(form5Value);
    checkSymmetry(form5Value);
});
submitBtnForm5.addEventListener('click', (e)=>{
    e.preventDefault();

})

function checkSymmetry(value){
    const arrOfDigits = Array.from(String(value),String);
    console.log(arrOfDigits);

    var nMinus1 = arrOfDigits.length - 1;
    var checkPoint = 0;
    for (let i = 0; i < arrOfDigits.length; i++) {
        // console.log(`arrOfDigits[${i}] = ` + arrOfDigits[i]);
        // console.log(`arrOfDigits[${nMinus1}] = ` + arrOfDigits[nMinus1]);
        // console.log(arrOfDigits[i] == arrOfDigits[nMinus1]);
        if(arrOfDigits[i] != arrOfDigits[nMinus1]){
            checkPoint ++;
        }
        nMinus1 --;
    }
    if(checkPoint >= 1){
        form5Result.classList.remove('true');
        form5Result.classList.add('false');
        form5Result.innerHTML = value + ' không là chuỗi đối xứng';
    } else {
        form5Result.classList.remove('false');
        form5Result.classList.add('true');
        form5Result.innerHTML = value + ' là chuỗi đối xứng';
    }
}