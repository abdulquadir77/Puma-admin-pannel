//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener("submit", addData)
var arr = JSON.parse(localStorage.getItem("products")) || [];

function addData(event) {
    event.preventDefault()

    function AddProducts(type, desc, price, image) {
        this.type = type;
        this.desc = desc;
        this.price = price;
        this.image = image;
    }

    var form = document.querySelector("#products");
    var type = form.type.value;
    var desc = form.desc.value;
    var price = form.price.value;
    var image = form.image.value;

    var x = new AddProducts(type, desc, price, image)

    arr.push(x)
    localStorage.setItem("products", JSON.stringify(arr))
    window.location.reload()


}




















































































// document.querySelector("form").addEventListener("submit", myFunction)


// function myFunction(event) {
//     event.preventDefault()

//     var form = document.querySelector("form")
//     var type = form.type.value;
//     var desc = form.desc.value;
//     var price = form.price.value;
//     var image = form.image.value;


//     var x = new ProductData(type, desc, price, image);
//     arr.push(x)
//     console.log(x)

//     localStorage.setItem("products", JSON.stringify(arr))

// }

// function ProductData(type, desc, price, image) {

//     this.type = type;
//     this.desc = desc;
//     this.price = price;
//     this.image = image
// }




//Click To Next Page
// document.getElementById("show_products").addEventListener("click", nextPage)


// function nextPage() {
//     window.location.href = "inventory.html"
// }