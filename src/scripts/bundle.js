(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const NAVBAR = {
  printNav () {
    let placeholder = $("#navBar");
    let navBlock = `<h1 id="companyName">BETSY</h1>
    <section id="navButtonSection">
    <a href="https://www.braddavistech.com" class="navLinks">Categories</a>
    <a href="https://www.google.com" class="navLinks">Orders</a>
    <a href="https://www.github.com" class="navLinks">Log Out</a>
    </section>`
    placeholder.html(navBlock);
  }
}

module.exports = NAVBAR
},{}],2:[function(require,module,exports){
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
},{"./ProductList":3,"./ReviewData":5}],3:[function(require,module,exports){
const API = {
  getProduct() {
    return fetch("http://localhost:8088/products")
      .then(products => products.json())
  }
};

module.exports = API
},{}],4:[function(require,module,exports){
const REVIEWPRINT = {
  printReview(product) {
    let tempReview = "";
    tempReview += `<article class="indProduct">
    <h1 class="productName">${product.title}</h1>
      <img src="${product.image}" class="productImage">
      <h3>Customer Reviews</h3><section id="reviews">`
    for (let i = 0; i < product.reviews.length; i++) {
      tempReview += `<p class="productDescription"> <br>* ${product.reviews[i]}<br></p>`
    };
    tempReview += "</section><a href=\"http://0.0.0.0:8080/\" id=\"returnButton\">Return To Items Home</a>"
    tempReview += "</article>";
    $("#productMain").html(tempReview)
  }
};

module.exports = REVIEWPRINT
},{}],5:[function(require,module,exports){
const API = require("./ProductList")

const REVIEWPRINT = require("./Review")

const REVIEWS = {
  productReview(thisButton) {
    API.getProduct().then(products => {
      products.forEach(product => {
        if (thisButton.currentTarget.id === product.title) {
          REVIEWPRINT.printReview(product);
        }
      })
    })
  }
};

module.exports = REVIEWS;
},{"./ProductList":3,"./Review":4}],6:[function(require,module,exports){
const NAVBAR = require("./Nav")

const PRODUCTINFO = require("./ProductData")

NAVBAR.printNav();

PRODUCTINFO.displayProduct()

},{"./Nav":1,"./ProductData":2}]},{},[6]);
