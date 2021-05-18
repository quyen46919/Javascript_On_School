
    const input = document.querySelector('.user-input');
    const form1SubmitBtn = document.querySelector('.form-submit');
    const form2SubmitBtn = document.querySelector('.form2-submit');
    const resultArr = document.querySelector('.arr');
    const result2 = document.querySelector('.result_2');
    const result3 = document.querySelector('.result_3');

    var numberInput;
    var arr = [];
    var primeArr = [];
    var perfectArr = [];


    input.addEventListener('change', (e) => {
        numberInput = e.target.value;
        console.log(numberInput);
    });
    form1SubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        render();
    })
    
    function checkPrime(number){
        var check = false;
        if (number <= 1){
            return check = false;
        } else {
            var count = 0;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if(number % i === 0){
                    count ++;
                }
            }
            if(count >= 1){
                return check = false;
            } else {
                return check = true;
            }
        }
    }

    const checkPerfectNumber = (value) => {
        var check2 = false;
        if (value <= 1){
            return check2 = false;
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
                return check2 = false;
            } else {
                return check2 = true;
            }
        }
    }


    function render(){
        // convert input to arr from 1 to input
        for (let i = 0; i < numberInput; i++) {
            arr[i] = i;
        }
        // render components
        const html = arr.map((index) => `
        <div class="component">
            <div class="animation-input">
                <input type="number" name='input${index}' class="render-input">
                <div class="underline"></div>
                <label for="">Nhập giá trị thứ ${index + 1} : </label>
            </div>
        </div>`
        ).join('');
        document.querySelector('.render').innerHTML = html;

        // after render components, get DOM and add event to get values of input
        var formValueWithIndex = [];
        var formValue = [];
        // remove disable attribute for submit button
        document.getElementsByClassName('form2-submit')[0].removeAttribute("disabled");
        // query DOM and event
        document.querySelectorAll('.render-submit');
        var renderInputs =  document.querySelectorAll('.render-input');
        console.log(renderInputs);
        for (let i = 0; i < numberInput; i++) {
            renderInputs[i].addEventListener('change', (e) => {
                console.log("Giá trị thứ " + i + " là: " + e.target.value);
                var obj = {index: i + 1, value: e.target.value}
                formValueWithIndex.push(obj);
                formValue.push(e.target.value);
            })
            
        }

        

        // handle event for submit btn
        form2SubmitBtn.addEventListener('click', (e) => {

            e.preventDefault();
            console.log(formValue);

            // check prime
            for (x of formValue){
                if(checkPrime(x)){
                    primeArr.push(x);
                }
            }
            console.log("primeArr = " +primeArr)
            // check perfect number
            for (y of formValue){
                if(checkPerfectNumber(y)){
                    console.log("y = " + y)
                    perfectArr.push(y);
                }
            }
            console.log("perfectArr = " + perfectArr);

            // show result
            for (let i = 0; i < formValue.length; i++) {
                resultArr.innerHTML += formValue[i] + ', ';
            }
            // for (let i = 0; i < primeArr.length; i++) {
            //     result2.innerHTML += primeArr[i] + ', ';
            // }
            result2.innerHTML += String(primeArr);
            // for (let i = 0; i < primeArr.length; i++) {
            //     console.log(perfectArr[i]);
            //     result3.innerHTML += perfectArr[i] + ', ';
            // }
            result3.innerHTML += String(perfectArr);
        })
    }




