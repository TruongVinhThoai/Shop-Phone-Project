/////////////////// VALID ///////////////////
/////////////////////////////////////////////

// kiểm tra rỗng
let kiemTraRong = (span, value) => {
  if (value.trim().length == 0) {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Nội dung không được để trống";
    return false;
  } else {
    document.getElementById(span).style.display = "none";
    return true;
  }
};
// kiểm tra kí tự
let kiemTraChu = (span, value) => {
  var letters = /[^a-zA-Z\s]+/;
  if (letters.test(value)) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Chỉ Nhập Kí Tự Chữ";
    return false;
  }
};
// kiểm tra số
let kiemTraSo = (span, value) => {
  var letters = /^[0-9]+$/;
  if (letters.test(value)) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Chỉ Nhập Kí Tự Số";

    return false;
  }
};

// kiểm tra name
export let kiemTraTen = (span, value) => {
  let isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraChu(span, value);
  }
  return isValid;
};
// kiểm tra price
export let kiemTraPrice = (span, value) => {
  let isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraSo(span, value);
  }
  return isValid;
};
// kiểm tra screen
export let kiemTraScreen = (span, value) => {
  let isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraChu(span, value);
  }
  return isValid;
};
// kiểm tra camera
export let kiemTraCamera = (span, value) => {
  let isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraChu(span, value);
  }
  return isValid;
};
// kiểm tra link img
export let kiemTraLink = (span, value) => {
  let isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraChu(span, value);
  }
  return isValid;
};
// kiểm tra desc
export let kiemTraDesc = (span, value) => {
  let isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraChu(span, value);
  }
  return isValid;
};
// kiểm tra select
export function kiemTraSelect(id, span) {
  let theSelect = document.getElementById(id);
  if (theSelect.selectedIndex == 0) {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Vui lòng chọn brand";
    return false;
  } else {
    document.getElementById(span).style.display = "none";
    return true;
  }
}
