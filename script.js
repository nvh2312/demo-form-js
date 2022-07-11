var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
var isNum = /^\d+$/;
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var phone = document.getElementById("phone");
var statuss = document.getElementsByName("gridRadios");
var retired = document.getElementsByName("gridRadios1");
var disability = document.getElementsByName("gridRadios2");
var otherStatus = document.getElementById("otherStatus");

document.getElementById("yes").onclick = function () {
  document.getElementById("dateRetired").style.display = "block";
  document.getElementById("lb21").style.color = "#002f6b";
  document.getElementById("lb22").style.color = "#002f6b";
  document.getElementById("6").style.display = "none";
};
document.getElementById("no").onclick = function () {
  document.getElementById("dateRetired").style.display = "none";
  document.getElementById("lb21").style.color = "#002f6b";
  document.getElementById("lb22").style.color = "#002f6b";
  document.getElementById("6").style.display = "none";
};
document.getElementById("yes1").onclick = function () {
  document.getElementById("dateDis").style.display = "block";
  document.getElementById("lb31").style.color = "#002f6b";
  document.getElementById("lb32").style.color = "#002f6b";
  document.getElementById("7").style.display = "none";
};
document.getElementById("no1").onclick = function () {
  document.getElementById("dateDis").style.display = "none";
  document.getElementById("lb31").style.color = "#002f6b";
  document.getElementById("lb32").style.color = "#002f6b";
  document.getElementById("7").style.display = "none";
};
document.getElementById("yes2").onclick = function () {
  document.getElementById("anyAllergics").style.display = "block";
};
document.getElementById("no2").onclick = function () {
  document.getElementById("anyAllergics").style.display = "none";
};
document.getElementById("yes3").onclick = function () {
  document.getElementById("timeSmokes").style.display = "block";
};
document.getElementById("no3").onclick = function () {
  document.getElementById("timeSmokes").style.display = "none";
};
document.getElementById("other").onclick = function () {
  document.getElementById("statusOther").style.display = "block";
  document.getElementById("otherStatus").style.border = "1px solid #ced4da";
  document.getElementById("lb11").style.color = "#002f6b";
  document.getElementById("lb12").style.color = "#002f6b";
  document.getElementById("lb13").style.color = "#002f6b";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
};
document.getElementById("married").onclick = function () {
  document.getElementById("statusOther").style.display = "none";
  document.getElementById("lb11").style.color = "#002f6b";
  document.getElementById("lb12").style.color = "#002f6b";
  document.getElementById("lb13").style.color = "#002f6b";
  document.getElementById("4").style.display = "none";
};
document.getElementById("unmarried").onclick = function () {
  document.getElementById("statusOther").style.display = "none";
  document.getElementById("lb11").style.color = "#002f6b";
  document.getElementById("lb12").style.color = "#002f6b";
  document.getElementById("lb13").style.color = "#002f6b";
  document.getElementById("4").style.display = "none";
};
function kiemtra() {
  let loi = 0;

  let dem = 0;
  for (let i = 0; i < statuss.length; i++) {
    if (statuss[i].checked) dem++;
  }
  let dem1 = 0;
  for (let i = 0; i < retired.length; i++) {
    if (retired[i].checked) dem1++;
  }
  let dem2 = 0;
  for (let i = 0; i < disability.length; i++) {
    if (disability[i].checked) dem2++;
  }

  if (dem2 == 0) {
    document.getElementById("7").style.display = "block";
    document.getElementById("lb31").style.color = "red";
    document.getElementById("lb32").style.color = "red";
    loi++;
    document.getElementById("yes1").focus();
  }
  if (dem1 == 0) {
    document.getElementById("6").style.display = "block";
    document.getElementById("lb21").style.color = "red";
    document.getElementById("lb22").style.color = "red";
    loi++;
    document.getElementById("yes").focus();
  }

  if (otherStatus.value == "" && statuss[2].checked) {
    document.getElementById("5").style.display = "block";
    otherStatus.style.border = "1px solid red";
    loi++;
    otherStatus.focus();
  }
  if (dem == 0) {
    document.getElementById("4").style.display = "block";
    document.getElementById("lb11").style.color = "red";
    document.getElementById("lb12").style.color = "red";
    document.getElementById("lb13").style.color = "red";
    loi++;
    document.getElementById("married").focus();
  }
  if (!phone.value || !phone.value.match(phoneno)) {
    document.getElementById("3").style.display = "block";
    phone.style.border = "1px solid red";
    loi++;
    phone.focus();
  }

  if (gender.value == "- Select -") {
    document.getElementById("2").style.display = "block";
    gender.style.border = "1px solid red";
    loi++;
    gender.focus();
  }
  if (age.value == "" || age.value[0] == "-") {
    document.getElementById("1").style.display = "block";
    age.style.border = "1px solid red";
    loi++;
    age.focus();
  }
  if (loi) return false;
  alert("ok");
  return true;
}
function kt() {
  if (age.value != "" && age.value[0] != "-") {
    age.style.border = "1px solid #ced4da";
    document.getElementById("1").style.display = "none";
  }
  if (gender.value != "- Select -") {
    gender.style.border = "1px solid #ced4da";
    document.getElementById("2").style.display = "none";
  }
  if (phone.value.match(phoneno)) {
    phone.style.border = "1px solid #ced4da";
    document.getElementById("3").style.display = "none";
  }

  if (otherStatus.value != "") {
    otherStatus.style.border = "1px solid #ced4da";
    document.getElementById("5").style.display = "none";
  }
}
