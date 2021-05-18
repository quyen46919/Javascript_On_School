// document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.user-input');
    const form1SubmitBtn = document.querySelector('.form-submit');
    const form2SubmitBtn = document.querySelector('.form2-submit');


    var numberInput;
    var arr = [];

    input.addEventListener('change', (e) => {
        numberInput = e.target.value;
        console.log(numberInput);
    });
    form1SubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        render();
    })

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
                formValue.push(obj);
            })
            
        }

        // handle event for submit btn
        form2SubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(formValue);
        })
    }
// });
