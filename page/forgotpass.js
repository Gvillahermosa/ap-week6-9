import { navback } from "../utils/navigate-back.js"

export const forgotPassword = () => {
    document.body.innerHTML =
        `
        <div class="container">
    <div class="card">

      <!-- Back Button -->
      <div class="title-row">
  <button id="back-btn" class="back-btn">←</button>
  <h2>Forgot Password</h2>
</div>
<p>Ahhhhhh you forgot, why?!</p>
<hr>

      <!-- Step 1: Email -->
      <div class="step" id="step1">
        <div class="form-group">
          <input type="email" placeholder="Email" id="email">
        </div>
        <button class="btn" id="validateEmail">VALIDATE</button>
      </div>

      <!-- Step 2: OTP -->
      <div class="step hidden" id="step2">
        <div class="form-group">
          <input type="text" placeholder="One-Time Pin" id="otp">
        </div>
        <button class="btn" id="validateOtp">VALIDATE</button>
      </div>

      <!-- Step 3: Reset Password -->
      <div class="step hidden" id="step3">
        <div class="form-group">
          <input type="password" placeholder="New Password" id="newPass">
        </div>
        <div class="form-group">
          <input type="password" placeholder="Confirm Password" id="confirmPass">
        </div>
        <button class="btn" id="changePass">CHANGE PASSWORD</button>
      </div>

    </div>
  </div>

        `
    document.getElementById('back-btn').addEventListener('click', navback)
}
