////////////////////// CONTROLLER JS //////////////////////
///////////////////////////////////////////////////////////

// render
export let renderProduct = (phoneList) => {
  let content = "";
  phoneList.forEach((item) => {
    content += ` <tr>
    <td>${item.id}</td>
    <td><strong>${item.name}</strong></td>
    <td id="tdPrice">$${item.price}</td>
    <td style="text-align: center"><img src=${item.img} alt="phone-img" width="150" height="150"></td>
    <td>${item.desc}</td>
    <td class = style="text-align: center"><button class="btn my-3 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModal" onclick ="btnEdit('${item.id}')"  id='btnEdit'>
    Edit<i class="fa fa-pencil-square ms-2"></i>
    </button><button class="btn " onclick ="btnDelete('${item.id}')" id='btnDelete'>
    Delete <i class="fa fa-trash ms-2"></i>
    </button></td>
    </tr>`;
  });
  document.getElementById("tablePhone").innerHTML = content;
};
// fetch
export let fetchPhoneList = () => {
  axios
    .get("https://64d6fb012a017531bc12e76b.mockapi.io/capstone")
    .then((res) => {
      console.log(res);
      renderProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get data form
export let getDataForm = () => {
  let id = document.getElementById("idPhone").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let screen = document.getElementById("screen").value;
  let backCam = document.getElementById("backCam").value;
  let frontCam = document.getElementById("frontCam").value;
  let img = document.getElementById("img").value;
  let desc = document.getElementById("desc").value;
  let e = document.getElementById("type");
  let type = e.options[e.selectedIndex].text;
  return {
    id,
    name,
    price,
    screen,
    backCam,
    frontCam,
    img,
    desc,
    type,
  };
};
// show data form
export let showDataForm = (phoneData) => {
  let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
    phoneData;
  document.getElementById("idPhone").value = id;
  document.getElementById("name").value = name;
  document.getElementById("price").value = price;
  document.getElementById("screen").value = screen;
  document.getElementById("backCam").value = backCamera;
  document.getElementById("frontCam").value = frontCamera;
  document.getElementById("img").value = img;
  document.getElementById("desc").value = desc;
  let e = document.getElementById("type");
  e.options[e.selectedIndex].text = type;
};
// toastify
export let showMessage = (mess, isSuccess = true) => {
  Toastify({
    text: mess,
    className: "info",
    style: {
      background: isSuccess ? "green" : "red",
    },
  }).showToast();
};
// tìm kiếm
//
