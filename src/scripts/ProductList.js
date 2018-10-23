const API = {
  getProduct() {
    return fetch("http://localhost:8088/products")
      .then(products => products.json())
  }
};

module.exports = API