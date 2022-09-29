function auth(){
    let user = JSON.parse(localStorage.getItem("loggedin"));
    let log = document.getElementById("log")//login
    let logout = document.getElementById("logout");
    let premium = document.querySelector("#join");//signup
    let navbar = document.querySelector("#nav");
    if (user != null) {
      log.textContent = user.username;
      log.href = "#";
      navbar.style.flexDirection="column"
      if (user.pm === true) {
        premium.textContent = "Premium User";
        premium.href="#";
      } else {
        premium.style.display = "none";
      }
      navbar.addEventListener("mouseover", () => {
        logout.style.display = "block";
      });
      navbar.addEventListener("mouseout", () => {
        logout.style.display = "none";
      });
    }else{
      logout.style.display="none";
    }
    logout.addEventListener("click", () => {
      localStorage.setItem("loggedin", null);
      window.location.href = "index.html";
    });  
}
export default auth;