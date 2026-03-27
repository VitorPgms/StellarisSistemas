function onChangeEmail() {
    toogleButtonsDisable();
    toogleEmailError();
}

function onChangePassword() {
    toogleButtonsDisable();
    tooglePasswordError();
}

function isEmailValid() {
    const email = document.form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toogleEmailError() {
    const email = document.form.email().value;
    form.emailRequiredError().style.display = email ? 'none' : 'block';
    form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';

}

function tooglePasswordError() {
    const password = document.form.password().value;
    form.passwordRequiredError().style.display = password ? 'none' : 'block';
}

function toogleButtonsDisable() {
    const emailValid = isEmailValid();
    document.form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.form.loginButton().disabled = !emailValid || !passwordValid;

}

function isPasswordValid() {
    const password = document.form.password().value;
    if (!password) {
        return false;
    }
    return true

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