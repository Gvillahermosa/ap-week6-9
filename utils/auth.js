

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

export const login = (email, password) => {
    // Add your authentication logic here
    console.log('Login attempt:', email, password);

    // For now, just redirect to dashboard (replace with real authentication)
    if (email && password) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}

export const register = () =>{
    window.location.href = 'register.html';
}

export const forgotPass = () => {
    window.location.href = 'forgot-pass.html';
}
