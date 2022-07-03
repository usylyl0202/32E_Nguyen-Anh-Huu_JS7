//dàn layout
const questions = document.querySelectorAll(".question");

for (var i = 0; i < questions.length; i++) {
    const element = questions[i];
    const btn = questions[i].querySelector(".question-btn");
    btn.onclick = function (e) {
        console.log(e)
        handleCollapse(element);
    }

}

function handleCollapse(element) {
    for (var i = 0; i < questions.length; i++) {

        if (element !== questions[i]) {
            questions[i].classList.remove("show-text");
        }
    }
    element.classList.toggle("show-text");

}

//Nhập số vào mảng
var arrNumber = [];

document.getElementById('btnThemSo').onclick = function () {
    //input: arrNumber: array, n: number
    var n = Number(document.getElementById('nhapSo_N').value);
    //output: String
    ketQua = '';
    //progress
    arrNumber.push(n);
    ketQua += arrNumber;
    document.getElementById('arrKetQua').innerHTML = '[' + ketQua + ']';
}

//BÀI TẬP 1: Tổng các số dương trong mảng.
document.getElementById('btnTinhTong').onclick = function () {
    //input: arrNumber: array
    //output: string
    ketQua2 = '';
    //progress
    var tong1 = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] >= 0) {
            tong1 += arrNumber[index];
        }
    }
    ketQua2 = 'Tổng số dương: ' + tong1;
    document.getElementById('ketQua_b1').innerHTML = ketQua2;
}

//BÀI TẬP 2: Đếm có bao nhiêu số dương trong mảng.
document.getElementById('btnDemSo').onclick = function () {
    //input: arrNumber: array
    //output: String
    var ketQua2 = '';
    //progress
    var soDuong = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            soDuong++;
        }
    }
    ketQua2 = 'Số Dương: ' + soDuong;
    document.getElementById('ketQua_b2').innerHTML = ketQua2;
}

//BÀI TẬP 3: Tìm số nhỏ nhất trong mảng.
document.getElementById('btnTimSoNhoNhat').onclick = function () {
    //input: arrNumber: array
    //output: string
    ketQua3 = '';
    //progress
    var min = arrNumber[0];
    var min_index = 0;
    var soNhoNhat = undefined;
    for (var index = 1; index < arrNumber.length; index++) {
        if (arrNumber[index] < min) {
            min = arrNumber[index];
            min_index = index;
        }
    }
    soNhoNhat = arrNumber[min_index];
    ketQua3 = 'Số Nhỏ Nhất: ' + soNhoNhat;
    document.getElementById('ketQua_b3').innerHTML = ketQua3
}

//BÀI TẬP 4: Tìm số dương nhỏ nhất trong mảng.

document.getElementById('btnTimSoDuongNhoNhat').onclick = function () {
    var newArrNumber = [];
    for (var index = 0; index < arrNumber.length; index++) {
        var iSo4 = arrNumber[index];
        if (iSo4 > 0) {
            newArrNumber.push(iSo4);
        }
    }
    //input: newArrNumber 
    //output: string
    ketQua4 = '';
    //progress
    if (newArrNumber.length > 0) {
        var min_1 = newArrNumber[0];
        var min_index_1 = 0;
        var soDuongNhoNhat = undefined;
        for (var index = 1; index < newArrNumber.length; index++) {
            if (newArrNumber[index] < min_1) {
                min_1 = newArrNumber[index];
                min_index_1 = index;
            }
        }
        soDuongNhoNhat = newArrNumber[min_index_1];
        ketQua4 = 'Số Dương Nhỏ Nhất: ' + soDuongNhoNhat;
    } else {
        ketQua4 = 'Không có số dương trong mảng'
    }
    document.getElementById('ketQua_b4').innerHTML = ketQua4;
}

//BÀI TẬP 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.

document.getElementById('btnTimSoChanCuoiCung').onclick = function () {
    //input: newArrNumber: array;
    //output: ketQua5 : string
    ketQua5 = '';
    //progress
    soChanCuoiCung = 0;
    for (var index = arrNumber.length - 1; index >= 0; index--) {
        if (arrNumber[index] % 2 === 0) {
            soChanCuoiCung = arrNumber[index];
        } else {
            soChanCuoiCung = -1;
        }
    }
    ketQua5 = 'Số chẵn cuối cùng: ' + soChanCuoiCung;
    document.getElementById('ketQua_b5').innerHTML = ketQua5;
}

//BÀI TẬP 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.getElementById('btnDoiCho').onclick = function () {
    //input: index1: number , index2: number
    var index1 = Number(document.getElementById('nhapSo_VT1').value);
    var index2 = Number(document.getElementById('nhapSo_VT2').value);
    //output: ketQua6: string
    ketQua6 = '';
    //progress
    var giaTri = arrNumber[index1];
    var giaTri_1 = arrNumber[index2];
    arrNumber[index2] = giaTri;
    arrNumber[index1] = giaTri_1;
    ketQua6 = arrNumber;
    console.log(arrNumber[0]);
    document.getElementById('ketQua_b6').innerHTML = '[' + ketQua6 + ']';
}

//BÀI TẬP 7: Sắp xếp mảng theo thứ tự tăng dần.
var newArrNumber_7 = [];
document.getElementById('btnSapXep').onclick = function () {
    //input: arrNumber: array
    //output: ketQua7: string
    ketQua7 = '';
    //progress
    // var newArrNumber_7 = [];
    for (var index = 0; index < arrNumber.length; index++) {
        newArrNumber_7.push(timSoNhoNhat(arrNumber));
        arrNumber = xoaSoNhoNhat(arrNumber);
    }
    ketQua7 = 'mảng sau khi sắp xếp: ' + newArrNumber_7;
    document.getElementById('ketQua_b7').innerHTML = ketQua7;
}

//tìm số nhỏ nhất
function timSoNhoNhat(arrNumber) { //input: arrNumber
    //progress
    var min_7 = arrNumber[0];
    var min_index_7 = 0;
    var soNhoNhat = undefined;
    for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < min_7) {
            min_7 = arrNumber[i];
            min_index_7 = i;
        }
    }
    soNhoNhat = arrNumber[min_index_7];
    // arrNumber.splice(min_index_7, 1);
    //output
    return soNhoNhat;
}

function xoaSoNhoNhat(arrNumber) { //input: arrNumber
    //B1: đặt ra 1 giá trị mặc định
    var indexDel = -1;
    //B2: duyệt qua mảng
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] = timSoNhoNhat(arrNumber)) {
            indexDel = index;
            break;
        }
    }
    //kiểm tra biến indexDel
    if (indexDel !== -1) {
        var new_arr = arrNumber.splice(indexDel, 1);
    }
    return new_arr;
}
// BÀI TẬP 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
document.getElementById('btnTimSNT').onclick = function () {
    //input: arrNumber
    //output: number
    soNT = 0;
    //progress
    var checkSNT = true;
    for (var index = 0; index < arrNumber.length; index++) {
        //tìm số nguyên tố
        if (arrNumber[index] >= 2) {
            for (var i = 2; i <= arrNumber[index] / 2; i++) {
                if (arrNumber[index] % i === 0) {
                    checkSNT = false;
                    break;
                }
            }
            if (checkSNT) {
                soNT = arrNumber[index];
                break;
            }
        }
    }
    if (soNT === 0) {
        soNT = -1;
    }
    document.getElementById('ketQua_b8').innerHTML = soNT;
}
//BÀI TẬP 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

//nhập số thực
var newArrNumber_9 = [];

document.getElementById('btnThemSo_9').onclick = function () {
    //input: arrNumber: array, n: number
    var n9 = Number(document.getElementById('nhapSo_9').value);
    //output: String
    var ketQua9_1 = '';
    //progress
    newArrNumber_9.push(n9);
    ketQua9_1 += newArrNumber_9;
    document.getElementById('ketQua_b9_1').innerHTML = '[' + ketQua9_1 + ']';
}

// Đếm số nguyên
document.getElementById('btnDemSoNguyen').onclick = function () {
    //input: newArrNumber_9: array
    //output: string
    ketQua9_2 = '';
    //progress
    soNguyen9 = 0;
    for (var index = 0; index < newArrNumber_9.length; index++) {
        if (Number.isInteger(newArrNumber_9[index]) === true) {
            soNguyen9++;
        }
    }
    ketQua9_2 = 'Số Nguyên: ' + soNguyen9;
    document.getElementById('ketQua_b9_2').innerHTML = ketQua9_2;
}

//BÀI TẬP 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

document.getElementById('btnSoSanh').onclick = function () {
    //input: arrNumber: arr
    //output: string
    ketQua10 = '';
    //progress
    soDuong = 0;
    soAm = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            soDuong++;
        } if (arrNumber[index] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        ketQua10 = 'Số dương ' + '>' + ' Số âm';
    } else if (soAm > soDuong) {
        ketQua10 = 'Số âm ' + '>' + ' Số dương';
    } else {
        ketQua10 = 'Số âm ' + '=' + ' Số dương';
    }
    document.getElementById('ketQua_b10').innerHTML = ketQua10;
}