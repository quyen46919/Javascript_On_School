
const loan = document.querySelector('#input1');
const timeToLend = document.querySelector('#input2');
const interestRate = document.querySelector('#input3');
const disbursementDay = document.querySelector('#input4');
const submitButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');

var soTienVay = 0;
var thoiGianVay = 0;
var laiSuat = 0;
var ngayGiaiNgan = 0;
var date;

loan.addEventListener('change', (e) => {
    soTienVay = +e.target.value;
});
timeToLend.addEventListener('change', (e) => {
    thoiGianVay = +e.target.value;
    console.log(thoiGianVay);
});
interestRate.addEventListener('change', (e) => {
    laiSuat = ((+e.target.value)/100);
    console.log(laiSuat);
});
disbursementDay.addEventListener('change', (e) => {
    ngayGiaiNgan = e.target.value;
    date = new Date(e.target.value);
});

function render(){
    var laiSuatCuoi = laiSuat/thoiGianVay;
    var laiPhaiTra = 0;
    var gocConLai = Math.round(soTienVay);
    var tienPhaiTraHangThang = 0;
    var gocHangThang = Math.round(soTienVay/thoiGianVay);
    var kyHan = 0;
    var arr = [{kyTraNo: date.toLocaleString(),
        gocConLai: gocConLai,
        number: 0,
        goc: '',
        lai: '',
        tongGocLai: ''}];

    for (let z = 1; z <= thoiGianVay; z++) {
        laiPhaiTra = Math.round(gocConLai * laiSuatCuoi);
        tienPhaiTraHangThang = Math.round(laiPhaiTra + gocHangThang);
        gocConLai = Math.round(gocConLai - gocHangThang);
        console.log("laiPhaiTra = " + laiPhaiTra);
        console.log("tienPhaiTraHangThang = " + tienPhaiTraHangThang);
        console.log("gocConLai = " + gocConLai);
        kyHan++;
        date.setMonth(date.getMonth() + 1);
        var obj = {
            kyTraNo: date.toLocaleString(),
            gocConLai: String(gocConLai).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            number: String(kyHan).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            goc: String(gocHangThang).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            lai: String(laiPhaiTra).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            tongGocLai: String(tienPhaiTraHangThang).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
        }
        arr.push(obj);
        console.log(date)
    }
    const html = arr.map((items) => `
    <tr class="animation-tr">
        <td>${items.kyTraNo}</td>
        <td class="deadline">${items.number}</td>
        <td>${items.gocConLai}</td>
        <td>${items.goc}</td>
        <td>${items.lai}</td>
        <td>${items.tongGocLai}</td>
    </tr>`
    ).join('');
    document.querySelector('.render-table__tbody').innerHTML += html;
}
var isClicked = false;
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isClicked){
        render();
    }
    isClicked = true;  
});
resetButton.addEventListener('click', (e) => {
    document.querySelector('.render-table__tbody').innerHTML = '';
    isClicked = false;
})
