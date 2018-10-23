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