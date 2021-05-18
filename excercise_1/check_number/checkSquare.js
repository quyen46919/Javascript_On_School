
//-----------CHECK SQUARE------------------------//
const submitBtnForm2 = document.querySelector('#form2__submit');
const form2Input = document.querySelector('.form2__input');
const form2Result = document.querySelector('.form2__result');

// console.log(submitBtnForm2);
// console.log(form2Input);
// console.log(form2Result);

var form2Value = 0;

const checkSquareNumber = (value) => {
    if (value <= 1){
        form2Result.innerHTML = form2Value + ' không phải là số chính phương!';
        form2Result.classList.remove('true');
        form2Result.classList.add('false');
    } else {
        let count = 0;
        for (let i = 2; i <= value; i++) {
            if ( i * i == value) {
                count ++;
            }
        }
        if (count < 1){
            form2Result.innerHTML =  form2Value + ' không phải là số chính phương!';
            form2Result.classList.remove('true');
            form2Result.classList.add('false');
        } else {
            form2Result.innerHTML = value + ' là số chính phương!';
            form2Result.classList.remove('false');
            form2Result.classList.add('true');
        }
    }
}
form2Input.addEventListener('keyup', (e) => {
    if (e.target.value.length >= 13){
        alert('Giới hạn số được nhập là 13 kí tự! Nếu bạn tiếp tục nhập có thể gây đứng trình duyệt!');
    } else {
        form2Value = e.target.value;
        checkSquareNumber(form2Value);
    }
    
})

submitBtnForm2.addEventListener('click', (e) => {
    checkSquareNumber(form2Value);
    form2Result.classList.remove('true');
    form2Result.classList.remove('false');
    form2Result.innerHTML = '';
})