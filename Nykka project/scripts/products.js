import {navbar} from "../components/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import {FOOTER} from "../components/pagefooter.js"
let footer = document.getElementById("footer")
footer.innerHTML=FOOTER();
let left_message = document.getElementById("left-message")
let flag = true

setInterval(() => {

    if(flag == true){
        left_message.style.opacity = "0"
        flag = false
    }else {
        left_message.style.opacity = "1"
        flag = true
    }
},1500)


const nykaaProduct = [
    {
    image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/a/0a4f3ef8904245711047_1.jpg",
    name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
    price: "244",
    discount: "13% off",
    button: "Add",
    rating : "★ ★ ★ ★ 4.1(1567)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c31c1eb8904245710057_1.jpg",
      name : "Nykaa Matte Luxe Lipstick - Coachella Jammin Jammin  Jammin",
      price: "479",
      discount: "23% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.4(1267)",

    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245705138_1_1.jpg",
      name : "Nykaa Matte to Last! Transfer Proof Liquid Lipstick - MumTaj Jammin Jammin  Jammin",
      price: "449",
      discount: "29% off",
      button: "Add",
      rating: "★ ★ ★ ★ ★ 5(9876)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b7b3fd18904245708719_1.jpg",
      name : "Masaba By Nykaa Lipstick - Cool Guy",
      price: "1998",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(6789)",
    },
   {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/8/989b2d56902395724667_1.jpg",
      name : "L'Oreal Paris Extraordinary Oil Serum & Hyaluronic Acid Gel ...",
      price: "1672",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6662)",
    },
      {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3462317LOREA00000240_L'Oreal_1.jpg",
      name : "L'Oreal Paris Skin Combo For Minimized Pores & Crystal",
      price: "733",
      discount: "25% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(10)",
    },
      {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "LOreal Paris Voluminous Lash Paradise Mascara - 204",
      price: "639",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(6789)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4f2980LOREA00000115_1.jpg",
      name : "L'Oreal Paris Revitalift Crystal Gel Cream | Oil-Free Face M...",
      price: "167",
      discount: "23% off",
      button: "Add",
      rating: "★ ★ ★ 3.9(639)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/d/fd777c86955818202891_1.jpg",
      name : "L'Oreal Paris Revitalift Revitalift Triple Action day cream",
      price: "979",
      discount: "30% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(817)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair",
      price: "774",
      discount: "14% off",
      button: "Add",
      rating: "★ ★ ★ ★ ★5.0(6789)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/2/823a0dc4045787430646new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair",
      price: "632",
      discount: "26% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6789)",
    },
      {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3462317LOREA00000240_L'Oreal_1.jpg",
      name : "L'Oreal Paris Skin Combo For Minimized Pores & Crystal",
      price: "733",
      discount: "25% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(10)",
    },
      {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "LOreal Paris Voluminous Lash Paradise Mascara - 204",
      price: "639",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(6789)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4f2980LOREA00000115_1.jpg",
      name : "L'Oreal Paris Revitalift Crystal Gel Cream | Oil-Free Face M...",
      price: "167",
      discount: "23% off",
      button: "Add",
      rating: "★ ★ ★ 3.9(639)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/d/fd777c86955818202891_1.jpg",
      name : "L'Oreal Paris Revitalift Revitalift Triple Action day cream",
      price: "979",
      discount: "30% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(817)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair",
      price: "774",
      discount: "14% off",
      button: "Add",
      rating: "★ ★ ★ ★ ★5.0(6789)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/2/823a0dc4045787430646new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair",
      price: "632",
      discount: "26% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6789)",
    },
      {
    image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/a/0a4f3ef8904245711047_1.jpg",
    name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
    price: "244",
    discount: "13% off",
    button: "Add",
    rating : "★ ★ ★ ★ 4.1(1567)",
    },
  ]
  
  let cart_products=JSON.parse(localStorage.getItem("cart_data"))||[];
  document.getElementById('cart_quantity').innerText=cart_products.length;
  function nProduct(){
    let div_product = document.getElementById("product");
  nykaaProduct.forEach(function(products) {
      let div = document.createElement('div');
      let addtobag = document.createElement('div')

      let name = document.createElement('h4');
      name.innerText = products.name;

     

      let button = document.createElement('button');
      button.innerHTML = "ADD TO BAG";
      button.addEventListener("click",function(){
                
              cart_products.push(products);
              localStorage.setItem("cart_data",JSON.stringify(cart_products));
              document.getElementById('cart_quantity').innerText=cart_products.length;
              // console.log(cart_products)
              window.location.href="cart.html"
            })
    let dp= document.createElement('div')
      let discount = document.createElement('h5');
      discount.innerText = products.discount;

     let price = document.createElement('b');
      price.innerHTML = 'MRP: ₹'+ products.price;

      let image = document.createElement('img');
      image.src = products.image;
      image.addEventListener("click",function(){
          localStorage.setItem("product_profile_data",JSON.stringify(products));
        window.location.href="product_profile.html"
      });

      

      let rating = document.createElement('p');
      rating.innerHTML = products.rating;
       dp.append(price,discount)
       addtobag.append(button)
      div.append(image,name,dp,rating,addtobag);
     
    div_product.append(div);
    div_product.style.display ="grid";
    div_product.style.gridTemplateColumns="repeat(3,1fr)"
    div_product.style.gridTemplateRows="repeat(1,fr)"

     div_product.style.gap="40px"
     div_product.style.width="66.5%"
     div.style.width="250px"
     div_product.style.margin="auto"
    //  div.style.borderRadius="3%"
     div.style.backgroundColor="white"
     div.style.alignItems="center"
     div.style.border="2px solid black"
     image.style.marginLeft="25px"
    
     dp.style.display="flex"
     name.style.textAlign="center"
     name.style.fontFamily="Source Sans Pro, Roboto, Arial, sans-serif"
     name.style.color="#001325"
     name.style.fontWeight="400"
     
     price.style.margin="auto"
     discount.style.margin="auto"
     discount.style.color="#fc2779"
     rating.style.margin="auto"
     rating.style.marginTop="5px"
     rating.style.marginBottom="10px"
     rating.style.width="150px"

    
     button.style.width="100%"
      button.style.height="50px"
    button.style.marginBottom="0px"
      button.style.backgroundColor="#fc2779"
      button.style.color="white"
    button.style.border="none"  
    });
  }
nProduct();
document.getElementById("all-text").innerHTML="ALL PRODUCTS ("+nykaaProduct.length+")"
document.getElementById("all-text").style.marginTop="10px"
