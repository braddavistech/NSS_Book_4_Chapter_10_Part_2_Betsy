const API = require("./ProductList")
const REVIEWS = require("./ReviewData")

const PRODUCTINFO = {
  displayProduct() {
    let productBlock = ""
    API.getProduct().then(products => {
      products.forEach(product => { 
        productBlock += `<article class="indProduct">
        <h1 class="productName">${product.title}</h1>
          <img src="${product.image}" class="productImage">
          <h3>Item Description</h3>
          <p class="productDescription">${product.description}</p>
          <h3><br>Unit Price (Without Shipping and Handling)</h3>
          <p class="productPrice">$${product.price}</p>
          <h3><br>Quantity Available</h3>
          <p class="productQuantity">${product.quantity}<br></p>
          <input type="button" class="reviewButton" id="${product.title}" value="Read Product Reviews">
          </article>`
        })
      return productBlock;
    }).then(productBlock => {
      $("#productMain").html(productBlock);
      $(".reviewButton").click(REVIEWS.productReview);
    })
  }
}

module.exports = PRODUCTINFO