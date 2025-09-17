

export const logout = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure you want to log out?',
        showCancelButton: true,
        confirmButtonText: 'Yes, log out',
        cancelButtonText: 'Cancel',
        focusConfirm: false
      }).then(res => {
        if (res.isConfirmed){
           window.location.href = 'login.html';
        }
      });

}

export const loginForm = (email, password) => {
    // Add your authentication logic here
    console.log('Login attempt:', email, password);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
        alert("No user found. Please register first.");
        return;
    }
    
    if (storedUser.email === email && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.firstName}!`);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}

export const registerForm = (email, password, firstName, lastname) =>{
    const userData = { email, password, firstName, lastname };
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("User registered:", userData);
    window.location.href = 'register.html';
}

export const forgotPass = () => {
    window.location.href = 'forgot-pass.html';
}
