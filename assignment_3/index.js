const showClass = document.querySelector('.show-class');
const filterBtns = document.querySelectorAll('.filter-btn');

// TẠO CLASS STUDENT
class Student {
    constructor(name,mark,gender,subjects){
        this.name = name;
        this.mark = mark;
        this.gender = gender;
        this.subjects = subjects;
    }
    showInfo(){
        console.log("Tên: "+ this.name + ", điểm trung bình: " + this.mark);
    }
}

// 1. TẠO 10 USERS VÀ LƯU VÀO TRONG DANH SÁCH
var danhSach = [];
var user1 = new Student("Nguyễn Văn A", 8,"Nam",[{"Ly": 8},{"Toan": 7}]);
danhSach.push(user1);
var user2 = new Student("Nguyễn Văn B", 0,"Nam",[{"Ly": 0},{"Toan": 0}]);
danhSach.push(user2);
var user3 = new Student("Nguyễn Thị C", 7,"Nữ",[{"Ly": 3},{"Toan": 2}]);
danhSach.push(user3);
var user4 = new Student("Nguyễn Văn D", 1,"Nam",[{"Ly": 1},{"Toan": 1}]);
danhSach.push(user4);
var user5 = new Student("Nguyễn Thị E", 10,"Nữ",[{"Ly": 10},{"Toan": 10}]);
danhSach.push(user5);
var user6 = new Student("Nguyễn Văn F", 3,"Nam",[{"Ly": 9},{"Toan": 2}]);
danhSach.push(user6);
var user7 = new Student("Nguyễn Văn G", 4,"Nam",[{"Ly": 2},{"Toan": 5}]);
danhSach.push(user7);
var user8 = new Student("Nguyễn Thị H", 3,"Nữ",[{"Ly": 4},{"Toan": 2}]);
danhSach.push(user8);
var user9 = new Student("Nguyễn Văn M", 5,"Nam",[{"Ly": 3},{"Toan": 7}]);
danhSach.push(user9);
var user10 = new Student("Nguyễn Thị M", 9,"Nữ",[{"Ly": 9},{"Toan": 9}]);
danhSach.push(user10);

// CLONE ARRAY 
var backupDanhSach = [...danhSach];

function inDanhSach(arr){
    
    var html = arr.map(student => `
    <div class="student">
              <p>${student.name}</p>
              <p>${student.mark}</p>
              <p>${student.gender}</p>
              <p>${student.subjects[0].Ly}</p>
              <p>${student.subjects[1].Toan}</p>
    </div>
    `
    ).join('');
    showClass.innerHTML = html;
}
inDanhSach(danhSach);

// hien thi danh sach da backup
filterBtns[0].addEventListener('click',function(){
    danhSach = [...backupDanhSach];
    inDanhSach(backupDanhSach);
})

// 2. SẮP XẾP DANH SÁCH THEO THỨ TỰ TỪ BÉ ĐẾN LỚN
function sapXepDanhSachTuBeDenLon (arr){
    function compareMarkASC( a, b ) {
        if ( a.mark < b.mark ){
          return -1;
        }
        if ( a.mark > b.mark ){
          return 1;
        }
        return 0;
      }
    var danhSachDiemASC = arr.sort(compareMarkASC);
    console.log("Danh sách đã sắp xếp từ bé đến lớn theo điểm trung bình: " );
    console.log(danhSachDiemASC);

    inDanhSach(danhSachDiemASC);
}
filterBtns[1].addEventListener('click',function(){
    sapXepDanhSachTuBeDenLon(danhSach);
});



// 3. SẮP XẾP DANH SÁCH THEO THỨ TỰ TỪ LỚN ĐẾN BÉ
function sapXepDanhSachTuLonDenBe (arr){
    function compareMarkDESC( a, b ) {
        if ( a.mark < b.mark ){
          return 1;
        }
        if ( a.mark > b.mark ){
          return -1;
        }
        return 0;
    }
    var danhSachDiemDESC = arr.sort(compareMarkDESC);
    console.log("Danh sách đã sắp xếp từ lớn xuống bé theo điểm trung bình: " );
    console.log(danhSachDiemDESC);

    inDanhSach(danhSachDiemDESC);
}
filterBtns[2].addEventListener('click',function(){
    sapXepDanhSachTuLonDenBe(danhSach);
});



// 4. LỌC RA DANH SÁCH SINH VIÊN LÀ NỮ VÀ CÓ ĐIỂM TÍCH LŨY LỚN HƠN 5
function locSinhVienNuCoDiemLonHon5(arr){
    var sinhVienNuCoDiemLonHon5 =  arr.filter(
        student => student.gender === 'Nữ' && student.mark > 5
    );
    console.log("Sinh viên nữ có điểm trung bình lớn hơn 5");
    console.log(sinhVienNuCoDiemLonHon5);

    inDanhSach(sinhVienNuCoDiemLonHon5);
}
filterBtns[3].addEventListener('click',function(){
    locSinhVienNuCoDiemLonHon5(danhSach);
});


// 5.LỌC RA DANH SÁCH SINH VIÊN CÓ ĐIỂM TOÁN HOẶC LÝ LỚN HƠN 8.0
function locSinhVienCoDiemToanHoacLyLonHon8(arr){
    const svCoDiemToanHoacLyLonHon8 = arr.filter(student => 
        student.subjects[0].Ly > 8 || student.subjects[0].toan > 8
    );
    console.log("Sinh viên có điểm toán hoặc lý lớn hơn 8");
    console.log(svCoDiemToanHoacLyLonHon8);

    inDanhSach(svCoDiemToanHoacLyLonHon8);
}
filterBtns[4].addEventListener('click',function(){
    locSinhVienCoDiemToanHoacLyLonHon8(danhSach);
});

// 6. TÌM SINH VIÊN CÓ ĐIỂM TOÁN CAO NHẤT VÀ THẤP NHẤT
function sinhVienCoDiemToanCaoNhatVaThapNhat(arr){
    var maxToan = arr.reduce((prev, current) => 
        ( prev.subjects[1].Toan > current.subjects[1].Toan) ? prev : current
    );
    var minToan = arr.reduce((prev, current) => 
        ( prev.subjects[1].Toan < current.subjects[1].Toan) ? prev : current
    );
    // console.log("Sinh viên có điểm toán cao nhất là");
    // console.log(maxToan);
    let tempArr = [maxToan,minToan];
    inDanhSach(tempArr);
}
filterBtns[5].addEventListener('click',() => sinhVienCoDiemToanCaoNhatVaThapNhat(danhSach));


// 7.XÓA KHỎI DANH SÁCH SINH VIÊN CÓ ĐIỂM TÍCH LŨY TÍCH LŨY LÀ 0
function xoaSVCodiemTichLuyBang0(arr){
    danhSach = arr.filter(student => { return student.mark !== 0; }); 
    console.log("Danh sách sinh viên sau khi xóa sinh viên có điểm tích lũy là 0");
    console.log(danhSach);

    inDanhSach(danhSach);
    return danhSach;
}
filterBtns[6].addEventListener('click',function(){
    xoaSVCodiemTichLuyBang0(danhSach);
});


// 8.THÊM 3 SINH VIÊN MỚI VÀO DANH SÁCH
function themSinhVien(arr){
    let user11 = new Student("Nguyễn Thị Y", 5,"Nữ",[{"Ly": 3},{"Toan": 4}]);
    let user12 = new Student("Nguyễn Văn O", 3,"Nữ",[{"Ly": 4},{"Toan": 9}]);
    let user13 = new Student("Nguyễn Văn K", 7,"Nữ",[{"Ly": 5},{"Toan": 8}]);
    arr.push(user11, user12, user13);
    inDanhSach(arr);
}
filterBtns[7].addEventListener('click', () => themSinhVien(danhSach));



