////////////////////// MAIN JS //////////////////////
///////////////////////////////////////////////////////////

import { fetchPhoneList } from "./controller.js";
import { getDataForm } from "./controller.js";
import { showDataForm } from "./controller.js";
import { showMessage } from "./controller.js";

fetchPhoneList();

// btn edit
window.btnEdit = (id) => {
  console.log("🚀 ~ file: main.js:12 ~ id:", id);
  axios
    .get(`https://64d6fb012a017531bc12e76b.mockapi.io/capstone/${id}`)
    .then((res) => {
      showDataForm(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// btn update phone
document.getElementById("btnUpdate").addEventListener("click", () => {
  let data = getDataForm();
  axios
    .put(
      `https://64d6fb012a017531bc12e76b.mockapi.io/capstone/${data.id}`,
      data
    )
    .then((res) => {
      console.log(res);
      fetchPhoneList();
      $("#exampleModal").modal("hide");
      showMessage("Update Thành Công");
    })
    .catch((err) => {
      console.log(err);
    });
});

// btn delete
window.btnDelete = (id) => {
  axios
    .delete(`https://64d6fb012a017531bc12e76b.mockapi.io/capstone/${id}`)
    .then((res) => {
      console.log(res);
      fetchPhoneList();
      showMessage("Update Thành Công");
    })
    .catch((err) => {
      console.log(err);
    });
};

// btn add
document.getElementById("btnAddPhone").addEventListener("click", () => {
  let data = getDataForm();
  axios
    .post("https://64d6fb012a017531bc12e76b.mockapi.io/capstone", data)
    .then((res) => {
      console.log(res);
      fetchPhoneList();
      showMessage("Add thành công");
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log(err);
    });
});
