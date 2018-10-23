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