// const getEle = (id) => document.getElementById(id);

// import { CartItem } from "../model/cartItem.js";
// import { Product } from "../model/product.js";
import { GetDataPhone, GetDataPhoneById, renderCart } from "./controllers.js";

// const service = new Service();
let cart = [];

GetDataPhone();

// hàm tính tổng tiền trong giỏ hàng
// const calculateSubTotal = (cart) => {
//   let subTotal = 0;
//   cart.forEach((ele) => {
//     subTotal += ele.product.price * ele.quantity;
//   });
//   return subTotal;
// };

// // hàm tìm cart item trong giỏ hàng theo id sản phẩm, trả về cartitem
// const findItemById = (cart, id) => {
//   let item;
//   cart.forEach((ele) => {
//     if (ele.product.id == id) {
//       item = ele;
//       return;
//     }
//   });
//   return item;
// };

// window.onload = async () => {
//   const phoneList = await service.getPhones();
//   renderList(phoneList);
//   cart = localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [];
//   renderCart(cart);
// };

//lọc phone theo hãng
// getEle("selectList").onchange = async () => {
//   const data = await service.getPhones();
//   const selectValue = getEle("selectList").value;
//   let filterData =
//     selectValue == "all" ? data : data.filter((ele) => ele.type == selectValue);
//   renderList(filterData);
// };

window.btnAddToCart = (productId) => {
  let phoneData = GetDataPhoneById(productId);
  console.log("🚀 ~ file: main.js:53 ~ phoneData:", phoneData);
  // let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
  //   phoneData;
  // let product = new Product(
  //   id,
  //   name,
  //   price,
  //   screen,
  //   backCamera,
  //   frontCamera,
  //   img,
  //   desc,
  //   type
  // );
  // let newCartItem = new CartItem(product, 1);
  // let cartItem = findItemById(cart, newCartItem.product.id);
  // !cartItem ? cart.push(newCartItem) : cartItem.quantity++;
  // renderCart(cart);
  // localStorage.setItem("cart", JSON.stringify(cart));
};

// dấu cộng trong giỏ hàng
window.btnAdd = (id) => {
  let cartItem = findItemById(cart, id);
  if (cartItem) cartItem.quantity++;
  renderCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// dấu trừ trong giỏ hàng
window.btnMinus = (id) => {
  let cartItem = findItemById(cart, id);
  if (cartItem) cartItem.quantity--;
  cart = cart.filter((ele) => ele.quantity != 0);
  renderCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// xóa sản phẩm khỏi giỏ hàng
window.btnRemove = (id) => {
  cart = cart.filter((ele) => ele.product.id != id);
  renderCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// clear giỏ hàng
window.emptyCart = () => {
  cart = [];
  renderCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

//Nút thanh toán
window.payNow = () => {
  if (cart.length > 0) {
    Swal.fire({
      // position: 'top-end',
      icon: "success",
      title: "Your order is completed",
      showConfirmButton: false,
      timer: 1500,
    });
    emptyCart();
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your cart is empty",
    });
  }
};
