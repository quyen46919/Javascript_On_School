

// ------------------CHECK DUPLEX NUMBER------------------------//

const submitBtnForm3 = document.querySelector('#form3__reset');
const form3Input = document.querySelector('.form3__input');
const form3Result = document.querySelector('.form3__result');


var form3Value = 0;
var isPrimeNumber = false;
const checkPrimeNumber2 = (value) => {
    if (value <= 1){
        isPrimeNumber = false;
    } else {
        var count = 0;
        for (let i = 2; i <= Math.sqrt(value); i++) {
            if ( value % i === 0) {
                count ++;
            }
        }
        console.log("Count = " + count);
        if (count >= 1){
            isPrimeNumber = false;
        } else {
            isPrimeNumber = true;
        }
    }
    return isPrimeNumber;
}

const checkDuplexNumber = (value) => {
    if (value <= 1){
        form3Result.innerHTML = form3Value + ' không phải là số song tố!';
        form3Result.classList.remove('true');
        form3Result.classList.add('false');
        return false;
    }
    if (value < 10){
        if (checkPrimeNumber2(value)){
            form3Result.innerHTML = value + ' là số song tố!';
            form3Result.classList.remove('false');
            form3Result.classList.add('true');
            return false;
        }
    }

    let arr = value.split('');
    let sum = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
        console.log("sum = " + sum);
    }
    console.log("sau khi for thi sum = " + sum);

    let checkpoint1 = checkPrimeNumber2(value);
    let checkpoint2 = checkPrimeNumber2(sum);
    if (checkpoint1 && checkpoint2){
        form3Result.innerHTML = value + ' là số song tố!';
        form3Result.classList.remove('false');
        form3Result.classList.add('true');
    } else {
        form3Result.innerHTML = value + ' không là số song tố!';
        form3Result.classList.remove('true');
        form3Result.classList.add('false');
    }
}

form3Input.addEventListener('keyup', (e) => {
    if (e.target.value.length >= 13){
        alert('Giới hạn số được nhập là 13 kí tự! Nếu bạn tiếp tục nhập có thể gây đứng trình duyệt!');
    } else {
        form3Value = e.target.value;
        checkDuplexNumber(form3Value);

    }
    
})

submitBtnForm3.addEventListener('click', (e) => {
    checkDuplexNumber(form3Value);
    form3Result.classList.remove('true');
    form3Result.classList.remove('false');
    form3Result.innerHTML = '';
})