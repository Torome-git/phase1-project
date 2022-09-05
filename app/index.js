const container = document.querySelector('.container');
const packages = document.querySelector('.container .image-gallery .overlay');
const carSelected = document.getElementById('car');
const package = document.getElementById('package');
const price = document.getElementById('price');
const model = document.getElementById('model');
//console.log(model);
const image = document.querySelector('.image');
//console.log(image);



const apiHost = "http://localhost:3000";
let carPrice = +carSelected.value;
console.log(typeof carPrice)

function updateSelectedPackage() {
    //const selectedPackage = document.querySelector('.container .image-gallery .image .overlay');
    //const selectedPackage = document.querySelectorAll("li.image");
    //const container = document.querySelector(".container");
    //const selectedPackage = document.querySelectorAll("ul.image-gallery > li.image > div")
    //const selectedPackage = seats.length;
    //console.log(selectedPackage);
    //for (let i = 0; i < packages.length; i++) {
     //   console.log(`I ${packages[i]} and you`);
     //   debugger;
    //}

    //return packages;



    //const selectedPackageNumber =  selectedPackage.height;
    //console.log(price);
    let packagePrice = +image.value;
    console.log(typeof packagePrice);

    package.innerText = packagePrice;
    price.innerText = packagePrice + carPrice;
}



container.addEventListener('click' , (e) => {
    if(e.target.classList.contains('overlay')) {
        e.target.classList.toggle('overlay');
        //console.log(e.target);
    }

    updateSelectedPackage();
});


//packages.addEventListener("click" , totalPrice);
//function totalPrice() {

//}