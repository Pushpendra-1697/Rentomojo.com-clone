function nvbr() {
  return `<div id="navbar">
    <ul>
    <li>
    <a href="./index.html">
      <img src="https://image.pitchbook.com/6jaFMbZG6gBvnwlKCqOOzPxjnN21625577561003_200x200" alt=""/>
    </a>
    </li>
      <li>
      <a href="./index.html"><img
      src="https://image.pitchbook.com/6jaFMbZG6gBvnwlKCqOOzPxjnN21625577561003_200x200"
      alt="rento mojo logo"
      /></a>
      </li>

      <li id="Scity">Select City</li>
    </ul>
    <ul>
      <li>
        <input type="search" id="search" placeholder="Search for Products" />
      </li>
    </ul>
    <ul>
      <li id="cartlogo">
      <span id="total_quantity"> 0 </span>
        <img
          src="https://mpng.subpng.com/20190404/ojo/kisspng-computer-icons-portable-network-graphics-scalable-shopping-cart-svg-png-icon-free-download-19-184-5ca6a1e6ab9a82.8989698815544242947029.jpg"
          alt=""
        />
        <a href="./cart.html"><span>Cart</span></a>
        <p id="bill">Total Bill :- <span id="total_price">0</span></p>
      </li>

      <li><a href="../login.html"><button id="lgsp">LOGIN/SIGNUP</button></a></li>

      <div id="nav" class="access-btn">
       <span><a id="log" href="./login.html">LOGIN</a></span>
       <div id="logout"><p>Logout</p></div>
       <span><a href="signup.html" id="join">SIGNUP</a></span>
      </div>
    </ul>
  </div>`
}
export default nvbr;

/* <li><button id="lgsp">LOGIN/SIGNUP</button></li> */