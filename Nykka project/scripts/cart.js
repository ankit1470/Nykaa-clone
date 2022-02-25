

import {FOOTER} from "../components/pagefooter.js"
let footer = document.getElementById("footer")
footer.innerHTML=FOOTER();



let total=0;
    
    let cart_arr=JSON.parse(localStorage.getItem("cart_data"));
    console.log("cart_arr",cart_arr)
    function appendToCart(cart_arr){
        document.getElementById("cartcontainer").innerHTML=""
        cart_arr.forEach(function(el,ind){
            var cartdiv=document.createElement('div');
            cartdiv.setAttribute("class","cartDiv");

            var img=document.createElement('img');
            img.setAttribute('src',el.image);
            var imgdiv=document.createElement('div');
            imgdiv.setAttribute("class","imgdiv");
            imgdiv.append(img)

            var h4=document.createElement('h4');
            h4.setAttribute("id","h4");
            h4.textContent=el.name;
            
            var smalldiv=document.createElement('div');
            smalldiv.setAttribute("id","smalldiv");

            var price=document.createElement('p');
            price.textContent="Rs: ₹"+el.price;
            price.setAttribute("id","p1")

            var button=document.createElement('button')
            button.setAttribute("id","button");
            button.textContent="Remove";
            button.addEventListener("click",function(){
                removeFun(ind)
            })
           let siz = document.createElement('div')
           siz.setAttribute("id","siz")
            smalldiv.append(h4,price,button);
            siz.append(imgdiv,smalldiv)
            cartdiv.append(siz);
            document.getElementById("cartcontainer").append(cartdiv);
            total+=+(el.price);
            // details.innerHTML=""
       
   document.getElementById('cart_quantity').innerText=cart_arr.length;
        })
        let rand =Math.floor(Math.random()*46);
        var num = total-rand;

        
document.getElementById("btot").innerHTML=`Bag Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${total}`
 document.getElementById("bdis").innerHTML=`<span style="color:darkgreen">Bag Discount:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp -${rand}</span>`;
 document.getElementById("stot").innerHTML=`Sub Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${num}`;
document.getElementById('total').innerHTML=`<span style="color:#fc2779">Grand Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp₹${ num}</span>`;
        total=0;  
    }

    appendToCart(cart_arr)

    
      function removeFun(i){
        cart_arr.splice(i,1);
        localStorage.setItem("cart_data",JSON.stringify(cart_arr));
        document.getElementById('cart_quantity').innerText=cart_arr.length;
        appendToCart(cart_arr)



    }

        