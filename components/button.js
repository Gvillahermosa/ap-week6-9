import { logout, loginForm } from '../utils/auth.js'

export const button = (buttonName, onClick) => {
    let button = document.createElement("button");

    button.textContent = buttonName;
     button.addEventListener('click', onClick);
    document.body.appendChild(button);
}
