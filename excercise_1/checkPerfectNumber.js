
const submitBtnForm4 = document.querySelector('#form4__reset');
const form4Input = document.querySelector('.form4__input');
const form4Result = document.querySelector('.form4__result');

var form4Value = 0;

const checkPerfectNumber = (value) => {
    if (value <= 1){
        form4Result.innerHTML = form4Value + ' không phải là số hoàn hảo!';
        form4Result.classList.remove('true');
        form4Result.classList.add('false');
    } else {
        let arr = [1];
        for (let i = 2; i < value; i++) {
            if ( value % i === 0) {
                arr.push(i);
            }
        }
        
        let sumOfArr = 0;
        for (let i = 0; i < arr.length; i++) {
            sumOfArr += arr[i];
        }
        
        if (sumOfArr !== +value){
            form4Result.innerHTML =  form4Value + ' không phải là số hoàn hảo!';
            form4Result.classList.remove('true');
            form4Result.classList.add('false');
        } else {
            form4Result.innerHTML = value + ' là số hoàn hảo!';
            form4Result.classList.remove('false');
            form4Result.classList.add('true');
        }
    }
}
form4Input.addEventListener('keyup', (e) => {
    if (e.target.value.length >= 13){
        alert('Giới hạn số được nhập là 13 kí tự! Nếu bạn tiếp tục nhập có thể gây đứng trình duyệt!');
    } else {
        form4Value = e.target.value;
        checkPerfectNumber(form4Value);

    }
    
})

submitBtnForm4.addEventListener('click', (e) => {
    checkPerfectNumber(form4Value);
    form4Result.classList.remove('true');
    form4Result.classList.remove('false');
    form4Result.innerHTML = '';
})
