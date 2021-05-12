

const submitBtnForm1 = document.querySelector('#form1__reset');
const form1Input = document.querySelector('.form1__input');
const form1Result = document.querySelector('.form1__result');

var form1Value = 0;

const checkPrimeNumber = (value) => {
    if (value <= 1){
        form1Result.innerHTML = form1Value + ' không phải là số nguyên tố!';
        form1Result.classList.remove('true');
        form1Result.classList.add('false');
    } else {
        let count = 0;
        for (let i = 2; i <= Math.sqrt(value); i++) {
            if ( value % i === 0) {
                count ++;
            }
        }
        console.log("Count = " + count);
        if (count >= 1){
            form1Result.innerHTML =  form1Value + ' không phải là số nguyên tố!';
            form1Result.classList.remove('true');
            form1Result.classList.add('false');
        } else {
            form1Result.innerHTML = value + ' là số nguyên tố!';
            form1Result.classList.remove('false');
            form1Result.classList.add('true');
        }
    }
}
form1Input.addEventListener('keyup', (e) => {
    if (e.target.value.length >= 13){
        alert('Giới hạn số được nhập là 13 kí tự! Nếu bạn tiếp tục nhập có thể gây đứng trình duyệt!');
    } else {
        form1Value = e.target.value;
        checkPrimeNumber(form1Value);
    }
    
})

submitBtnForm1.addEventListener('click', (e) => {
    checkPrimeNumber(form1Value);
    form1Result.classList.remove('true');
    form1Result.classList.remove('false');
    form1Result.innerHTML = '';
})