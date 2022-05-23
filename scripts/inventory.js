var data = JSON.parse(localStorage.getItem("products"))
console.log(data)

data.forEach(function(elem) {
    var box = document.createElement("div");
    box.setAttribute("id", "card")

    var image = document.createElement("img")
    image.setAttribute("src", elem.image)

    var description = document.createElement("p")
    description.innerText = elem.desc;

    var price = document.createElement("h3");
    price.innerText = elem.price;

    var type = document.createElement("p")
    type.innerText = elem.type;

    var button = document.createElement("button")
    button.setAttribute("id", "remove_product")
    button.innerText = "remove"
    button.addEventListener("click", function() {
        deleteItem(ele, index)
    })



    box.append(image, description, price, type, button)
    document.querySelector("#all_products").append(box)
    console.log(box)
})

function deleteItem(elem, index) {
    data.splice(index, 1);
    localStorage.setItem("products", JSON.stringify("produts"))
    window.location.reload
}




//Redirect to Add More Products Page
document.querySelector("#add_more_product").addEventListener("click", indexPage)


function indexPage() {
    window.location.href = "index.html"
}

alert("hello")