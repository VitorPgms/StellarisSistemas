function onChangeEmail() {
    toogleButtonsDisable();
    toogleEmailError();
}

function onChangePassword() {
    toogleButtonsDisable();
    tooglePasswordError();
}

function login() {
    window.location.href = "pages/home/home.html"; /* Navegação entre tela  */
}

function register() {
    window.location.href = "pages/register/register.html"; /* Navegação entre tela  */
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toogleEmailError() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? 'none' : 'block';

    form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';

}

function tooglePasswordError() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? 'none' : 'block';
}

function toogleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;

}

function isPasswordValid() {
    return form.password().value ? true : false;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPassword: () => document.getElementById("recover-password-button")
}