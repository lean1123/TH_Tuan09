var onForm = document.getElementById("onForm");
var formSend = document.getElementById("formSend");
var wrapper = document.getElementById("wrapper");
var closeFormBtn = document.getElementById("closeForm");

var maBN = document.querySelector('input[name="maBenhNhan"]');
var pwd = document.querySelector('input[name="matKhau"]');
var lichKham = document.querySelector('input[name="lichKham"]');
var chuyenKhoa = document.getElementById("select-professional");


function showForm() {
    formSend.classList.add("showForm");
}

function closeForm() {
    formSend.classList.remove("showForm");
}

function checkInput() {
    if (maBN.value == "" || !(maBN.value.match(/BN-\d{5}/))) {
        alert("Ma benh nhan duoc viet: BN-YYYYY");
        maBN.focus();
        return false;
    }
    if (pwd.value == '' || !(pwd.value.match(/[^\s]{6}/))) {
        alert("Mat khau gom 6 ky tu bat ki");
        pwd.focus();
        return false;
    }
    if (lichKham.value == "") {
        alert("Lich kham khong duoc rong");
        lichKham.focus();
        return false;
    }

    return true;
}
var checkboxs = document.querySelectorAll('#formSend input[type=checkbox]');


function tinhPhuThu() {
    var counter = 0;
    for (var j = 0; j < checkboxs.length; j++) {
        if (checkboxs[j].checked) {
            counter++;
        }
    }
    return counter * 500000;
}

function handleForm() {
    if (checkInput() != false) {
        var maBenhNhan = maBN.value;
        var matKhau = pwd.value;
        var lich = lichKham.value;
        var chKhoa = chuyenKhoa.value;



        var tb = document.getElementById("nember-list");

        var phuThu = tinhPhuThu();

        tb.innerHTML += `<tr><td class='row-number'></td><td>${maBenhNhan}</td><td>${matKhau}</td><td>${lich}</td><td>${phuThu}</td><td>${chKhoa}</td></tr>`;
    }
}


var sendFormBtn = document.getElementById("sendForm");

sendFormBtn.addEventListener("click", handleForm)

onForm.addEventListener("click", showForm);
closeFormBtn.addEventListener("click", closeForm);