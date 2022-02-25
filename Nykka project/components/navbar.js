function navbar() {
   return ` <!-- navbar top -->
      <div id="navbar-sticky">
    <div id="nav-top">
    <div class="left-message">
     <p id="left-message">BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</p>
    </div>
    <ul class="nav-list">
    <li><a href="/" class="first-icon"> &nbsp;Get App</a></li>
    <li class="vertical-line">|</li>
    <li><a href="/" class="first-icon"> &nbsp;Store & Events</a></li>
    <li class="vertical-line">|</li>
    <li><a href="/" class="first-icon"> &nbsp;Gift Card</a></li>
    <li class="vertical-line">|</li>
    <li><a href="/" class="first-icon"> &nbsp;Help</a></li>
    </ul>
    </div>
    <!-- navbar middle -->
    <div id="navbar-middle">
    <a href="index.html"> <div id="logo">
      <img id="logo-img" src="https://seeklogo.com/images/N/nykaa-logo-AA06314FB9-seeklogo.com.png">
     </div></a>
     <div class="nav-middle-list">
       <a href="products.html"><ul class="nav-middle-list">
           <li>CATEGORIES</li>
           <li>BRANDS</li>
           <li>NYKAA FASHION</li>
           <li>BEAUTY ADVICE</li>
           <li>NYKAA NETWORK</li>
       </ul></a>
       <input type="search" id="search" name="q" placeholder="Search on Nykaa">
     </div>
    <div class="nav-middle-side">
       <a href="log.html"> <p id="account" >Account</p></a>
     </div>
      <a href="cart.html"> <div id="cart-img">
        <span class="cart--icon"><i style="font-size:20px" class="fa">&#xf290;</i></span>
          <p id="cart_quantity">0</p>
    </div> </a>
    </div>
    </div>
    <!-- navbar bottom -->
    <div id="navbar-bottom" >
      <a href="products.html"><ul class="navbar-bottom-list">
        <li>Makeup</li>
        <li>Hair</li>
        <li>Skin</li>
        <li>Appliances</li>
        <li>Personal Care</li>
        <li>Natural</li>
        <li>Mom&Baby</li>
        <li>Health&Wellness</li>
        <li>Men</li>
        <li>Fragnance</li>
        <li>LUXE</li>
         <li id="OFFERS">OFFERS </li>
        </ul>
      </a>
       
       
      </ul>
    </div>`
}
export {navbar}