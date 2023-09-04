import { CartItem } from "../model/cartItem.js";
import { Product } from "../model/product.js";
import { base_url, renderCart, renderList } from "./controllers.js";

let cart = [];

// hàm tìm cart item trong giỏ hàng theo id sản phẩm, trả về cartitem
const findItemById = (cart, id) => {
  let item;
  cart.forEach((phone) => {
    if (phone.product.id == id) {
      item = phone;
      return;
    }
  });
  return item;
};

window.onload = () => {
  console.log("😎😍🧐 ~ cart:", cart);
  axios
    .get(base_url)
    .then((res) => {
      console.log(res.data);
      renderList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  renderCart(cart);
};

// lọc phone theo hãng
document.getElementById("selectList").onchange = async () => {
  let dataPhone = {};
  await axios
    .get(base_url)
    .then((res) => {
      console.log(res.data);
      dataPhone = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  const selectValue = document.getElementById("selectList").value;
  let filterData =
    selectValue == "all"
      ? dataPhone
      : dataPhone.filter((phone) => phone.type == selectValue);
  renderList(filterData);
};

window.btnAddToCart = async (productId) => {
  let dataPhone = {};
  await axios
    .get(`${base_url}/${productId}`)
    .then((res) => {
      console.log(res.data);
      dataPhone = res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
    dataPhone;
  console.log("😎😍🧐 ~ dataPhone:", dataPhone);

  let product = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );

  let newCartItem = new CartItem(product, 1);

  let cartItem = findItemById(cart, newCartItem.product.id);

  !cartItem ? cart.push(newCartItem) : cartItem.quantity++;
  renderCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("😎😍🧐 ~ cart:", cart);
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
  cart = cart.filter((phone) => phone.quantity != 0);
  renderCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// xóa sản phẩm khỏi giỏ hàng
window.btnRemove = (id) => {
  cart = cart.filter((phone) => phone.product.id != id);
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
