

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
        Swal.fire({
             icon: 'warning',
        title: 'No user found. Please register first.',
        timer: 2500,
        showConfirmButton: false
        })
        return;
    }

    if (storedUser.email === email && storedUser.password === password) {
        window.location.href = 'dashboard.html';
    } else {
        Swal.fire({
             icon: 'warning',
        title: 'Invalid credentials',
        timer: 2500,
        showConfirmButton: false
        })
    }
}

export const first_name = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !storedUser.firstName) return '';
    return storedUser.firstName;
}

export const registerForm = (email, password, firstName, lastname) =>{
    const userData = { email, password, firstName, lastname };
    localStorage.setItem("user", JSON.stringify(userData));
    Swal.fire({
        icon: 'success',
        title: 'Sign up Successfully',
        timer: 2500,
        showConfirmButton: false
    }).then(() => {
        window.location.href = 'login.html';
    });
}

export const forgotPass = () => {
    window.location.href = 'forgot-pass.html';
}
