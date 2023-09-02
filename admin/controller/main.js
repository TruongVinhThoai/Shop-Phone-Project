////////////////////// MAIN JS //////////////////////
///////////////////////////////////////////////////////////

import { fetchPhoneList, renderProduct } from "./controller.js";
import { getDataForm } from "./controller.js";
import { showDataForm } from "./controller.js";
import { showMessage } from "./controller.js";
import { kiemTraTen } from "./validate.js";
import { kiemTraPrice } from "./validate.js";
import { kiemTraScreen } from "./validate.js";
import { kiemTraCamera } from "./validate.js";
import { kiemTraLink } from "./validate.js";
import { kiemTraDesc } from "./validate.js";
import { kiemTraSelect } from "./validate.js";

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

// btn update
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
      showMessage("Update Thành Công");
      $("#exampleModal").modal("hide");
      document.getElementById("formPhone").reset();
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
  let isValid =
    kiemTraTen("tbname", data.name) &
    kiemTraPrice("tbprice", data.price) &
    kiemTraScreen("tbscreen", data.screen) &
    kiemTraCamera("tbbackCam", data.backCam) &
    kiemTraCamera("tbfrontCam", data.frontCam) &
    kiemTraLink("tbimg", data.img) &
    kiemTraDesc("tbdesc", data.desc) &
    kiemTraSelect("type", "tbtype");
  if (!isValid) return;
  axios
    .post("https://64d6fb012a017531bc12e76b.mockapi.io/capstone", data)
    .then((res) => {
      console.log(res);
      fetchPhoneList();
      showMessage("Add thành công");
      $("#exampleModal").modal("hide");
      document.getElementById("formPhone").reset();
    })
    .catch((err) => {
      console.log(err);
    });
});

// tìm kiếm
window.btnTimKiem = () => {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchName");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablePhone");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// sortung up
window.btnSortUp = () => {
  let cloneData = [];
  axios
    .get("https://64d6fb012a017531bc12e76b.mockapi.io/capstone")
    .then((res) => {
      cloneData = [...res.data];
      cloneData.sort((next, current) => {
        return next.price - current.price;
      });
      renderProduct(cloneData);
    })
    .catch((err) => {
      console.log(err);
    });
};

// sorting down
window.btnSortDown = () => {
  let cloneData = [];
  axios
    .get("https://64d6fb012a017531bc12e76b.mockapi.io/capstone")
    .then((res) => {
      cloneData = [...res.data];
      cloneData.sort((next, current) => {
        return current.price - next.price;
      });

      renderProduct(cloneData);
    })
    .catch((err) => {
      console.log(err);
    });
};
