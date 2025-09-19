import { button } from "../components/button.js";
import { logout, loginForm, first_name } from "../utils/auth.js";


export const dashboard = () => {
    document.body.innerHTML = `
<!-- Navbar -->
  <div class="navbar">
    <h1>DASHBOARD</h1>
    <div class="profile" id="profile-initial"></div>
    <button class="logout-btn" id="logout-btn" title="Logout"><img class="logouticon" src="assests/icons/logout.png" class="logout_icon" alt="logout"></button>
  </div>

  <!-- Welcome Section -->
  <div class="welcome">
    <h2>WELCOME <span id="name-placeholder"></span> </h2>
    <p>This is a sample dashboard page on what you can see.</p>
  </div>

    `;
document.getElementById('logout-btn').addEventListener('click', logout);
document.getElementById('name-placeholder').textContent = first_name().toUpperCase();
document.getElementById('profile-initial').textContent = first_name().charAt(0);
}
