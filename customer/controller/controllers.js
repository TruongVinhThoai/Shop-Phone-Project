// const getEle = (id) => document.getElementById(id);

// import { CartItem } from "../model/cartItem";
// import { Product } from "../model/product";

export const base_url = "https://64d6fb012a017531bc12e76b.mockapi.io/capstone";

export const renderList = (phoneList) => {
  let contentHTML = "";
  phoneList.forEach((phone) => {
    contentHTML += ` <div class="col-lg-3 col-md-6">
    <div class="card text-black h-100">
    <div class="content-overlay"></div>
      <img src=${phone.img} class="card-img" alt="Phone Image" />
      <div class="content-details fadeIn-top">
      <h3 class ='pb-5'>Specifications</h3>
            <div class="d-flex justify-content-start py-1">
          <span class='text-light'><b>Screen:</b></span>
          <span class='text-light'>&nbsp ${phone.screen}</span>
        </div>
        <div class="d-flex justify-content-start py-1">
          <span class='text-light'><b>Back Camera:</b> ${
            phone.backCamera
          }</span>
        </div>
        <div class="d-flex justify-content-start py-1">
          <span class='text-light'><b>Front Camera:</b> ${
            phone.frontCamera
          }</span>
        </div>

        <p class = 'pt-5'><u>click here for more details</u></p>
      </div>
      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title pt-3">${phone.name}</h5>
          <span class="text-muted mb-2">$${phone.price}</span>
          <span class="text-danger"><s>$${Number(phone.price) + 300}</s></span>
        </div>
        <div class="mt-3 brand-box text-center">
          <span>${phone.type}</span>
        </div>
        <div class="d-flex justify-content-start pt-3">
          <span><b>Description:</b> ${phone.desc}</span>
        </div>
        <div class="d-flex justify-content-between pt-3">
          <div class="text-warning">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
          </div>
          <span class = 'text-success'><b>In Stock</b></span>
        </div>
        <button type="button" class="btn btn-block w-50" onclick ="btnAddToCart('${
          phone.id
        }')">Add to cart</button>
        </div>
        </div>
        </div>`;
  });
  document.getElementById("phoneList").innerHTML = contentHTML;
};

export let renderCart = (cart) => {
  let content = "";
  cart.forEach((phone) => {
    content += `<div class="product">
  <div class="product__1">
    <div class="product__thumbnail">
      <img src=${phone.product.img}
        alt="Italian Trulli">
    </div>
    <div class="product__details">
      <div style="margin-bottom: 8px;"><b>${phone.product.name}</b></div>
      <div style="font-size: 90%;">Screen: <span class="tertiary">${
        phone.product.screen
      }</span></div>
      <div style="font-size: 90%;">Back Camera: <span class="tertiary">${
        phone.product.backCamera
      }</span></div>
      <div style="font-size: 90%;">Front Camera: <span class="tertiary">${
        phone.product.frontCamera
      }</span></div>
      <div style="margin-top: 8px;"><a href="#!" onclick ="btnRemove('${
        phone.product.id
      }')">Remove</a></div>
    </div>
  </div>
  <div class="product__2">
    <div class="qty">
      <span><b>Quantity:</b> </span> &nbsp &nbsp
      <span class="minus bg-dark" onclick ="btnMinus('${
        phone.product.id
      }')">-</span>
      <span class="quantityResult mx-2">${phone.quantity}</span>
      <span class="plus bg-dark" onclick ="btnAdd('${
        phone.product.id
      }')">+</span>
    </div>
    <div class="product__price"><b>$${
      phone.quantity * phone.product.price
    }</b></div>
  </div>
</div>`;
  });
  document.getElementById("cartList").innerHTML = content;

  let cartCount = 0;
  cart.forEach((phone) => {
    cartCount += phone.quantity;
  });
  const subTotal = calculateSubTotal(cart);
  const shipping = subTotal > 0 ? 10 : 0;
  document.getElementById("cartCount").innerHTML = cartCount;
  document.getElementById("shipping").innerHTML = "$" + shipping;
  document.getElementById("subTotal").innerHTML = "$" + subTotal;
  document.getElementById("tax").innerHTML = "$" + Math.floor(subTotal * 0.1);
  document.getElementById("priceTotal").innerHTML =
    "$" + Math.floor(subTotal * 1.1 + shipping);
};

// hàm tính tổng tiền trong giỏ hàng
let calculateSubTotal = (cart) => {
  let subTotal = 0;
  cart.forEach((phone) => {
    subTotal += phone.product.price * phone.quantity;
  });
  return subTotal;
};
