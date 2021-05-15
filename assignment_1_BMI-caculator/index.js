const weightInput = document.querySelector('input.weight');
const heightInput = document.querySelector('input.height');
const submitBtn = document.querySelector('input.submit');
const blackBg = document.querySelector('.black-bg');
const mess1 = document.querySelector('.mess1');
const mess2 = document.querySelector('.mess2');

var weight = 0;
// cm -> m
var height = 0;
var bmi = 0;

const classify = ['Gầy','Bình thường','Hơi béo','Béo phì cấp độ 1','Béo phì cấp độ 2','Béo phì cấp độ 3'];
const risk = ['Thấp','Trung bình','Cao','Rất cao','Nguy hiểm'];

weightInput.addEventListener('change',function(e){
    weight = e.target.value;
    console.log(weight);
});
heightInput.addEventListener('change',function(e){
    height = e.target.value;
    height = height/100;
    console.log(height);
});
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    bmi = (weight/(height*height));

    if ((height <= 0) || (weight <= 0)){
        mess1.innerHTML = "Bạn phải nhập thông số thì mới tính được chứ";
    }
    if (bmi < 18.5){
        mess1.innerHTML = "Phân loại: " + classify[0];
        mess2.innerHTML =  "Nguy cơ phát triển bệnh: " + risk[0];
    }
    if((18.5< bmi) && (bmi <24.9)){
        mess1.innerHTML = "Phân loại: " +  classify[1];
        mess2.innerHTML =  "Nguy cơ phát triển bệnh: " + risk[1];
    }
    if((25< bmi) && (bmi <29.9)){
        mess1.innerHTML = "Phân loại: " + classify[2];
        mess2.innerHTML =  "Nguy cơ phát triển bệnh: " + risk[2];
    }
    if((30< bmi) && (bmi <34.9)){
        mess1.innerHTML = "Phân loại: " + classify[3];
        mess2.innerHTML =  "Nguy cơ phát triển bệnh: " + risk[2];
    }
    if((35< bmi) && (bmi <39.9)){
        mess1.innerHTML = "Phân loại: " + classify[4];
        mess2.innerHTML =  "Nguy cơ phát triển bệnh: " +  risk[3];
    }
    if(bmi > 40){
        mess1.innerHTML = "Phân loại: " +classify[5];
        mess2.innerHTML =  "Nguy cơ phát triển bệnh: " + risk[4];
    }

    blackBg.classList.add('active');
    blackBg.addEventListener('click', function(){
        if(blackBg.classList.contains('active')){
            blackBg.classList.remove('active');
        }
    })
})
