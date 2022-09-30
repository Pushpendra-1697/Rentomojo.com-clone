function nvbr() {
  return `<div id="navbar">
    <ul>
      <li>
      <a href="./index.html"><img
      src="https://image.pitchbook.com/6jaFMbZG6gBvnwlKCqOOzPxjnN21625577561003_200x200"
      alt="rento mojo logo"
      /></a>
      </li>

      <li >
      <select name="" id="Scity">
        <option value="">Delhi</option>
        <option value="">Banglore</option>
        <option value="">Mumbai</option>
        <option value="">Pune</option>
        <option value="">Delhi</option>
        <option value="">Noida</option>
        <option value="">Gurugaon</option>
        <option value="">Hyderabad</option>
        <option value="">Chennai</option>
      </select>
    </li>
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


      <div id="nav" class="access-btn">
       <span><a id="log" href="./login.html">LOGIN</a></span>
       <div id="logout"><p>Logout</p></div>
       <span><a href="signup.html" id="join">SIGNUP</a></span>
      </div>
    </ul>
  </div>`
}
export default nvbr;
