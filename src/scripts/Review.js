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