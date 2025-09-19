import { loginForm, forgotPass, registerForm } from "../utils/auth.js";
export const register = () => {
    document.body.innerHTML = `
        <div class="container">
        <div class="left-section">
            <div class="welcome-content">
                <h2>Get Started with US!</h2>
                <p>Try to get to know who are behind this system.</p>
            </div>
        </div>

        <div class="right-section">
            <div class="signup-card">
                <div class="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="7" r="4" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 7L18 5M18 5L16 3M18 5H12" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <h1>Sign up an Account</h1>
                <p class="subtitle">Enter your personal data and create an account here.</p>

                <form class="signup-form">
                    <div class="name-row">
                        <div class="input-group half">
                            <div class="input-wrapper">
                                <input id="firstName" type="text" placeholder="First Name" required>
                            </div>
                        </div>
                        <div class="input-group half">
                            <div class="input-wrapper">
                                <input id="lastName" type="text" placeholder="Last Name" required>
                            </div>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <polyline points="22,6 12,13 2,6" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input id="email" type="email" placeholder="Email" required>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#666" stroke-width="2"/>
                                <circle cx="12" cy="16" r="1" fill="#666"/>
                                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#666" stroke-width="2"/>
                            </svg>
                            <input id="password" type="password" placeholder="Password" required>
                            <button type="button" class="toggle-password">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="#666" stroke-width="2"/>
                                    <circle cx="12" cy="12" r="3" stroke="#666" stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="password-hint">
                        <span>Must be at least 8 characters.</span>
                    </div>

                    <button id="register" type="submit" class="submit-btn">SIGN UP</button>

                    <div class="signin-link">
                        <span>Already have an account? </span>
                        <a href="login.html">Sign in here.</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;
    document.querySelector('.signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
  
    // Check if fields are filled
    if (email && password && firstName && lastName) {
        registerForm(email, password, firstName, lastName);
    } else {
        Swal.fire({
        icon: 'warning',
        title: 'Please Enter Your Credentials',
        timer: 2500,
      });
    }
});
}
