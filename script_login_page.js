const TrueLogin = "ProUser777"
const TruePassword = 123445
const login = document.getElementById("login")
const password = document.getElementById("password")
const TextCheckPassword = document.getElementById("TextCheckPassword")

CheckPassword = function () {
    if (login.value === TrueLogin && Number(password.value) === TruePassword) {
        TextCheckPassword.textContent = "Вы успешно вошли!"
        TextCheckPassword.style.color = "green"
        window.open("main_page.html", "_self")
    } else {
        TextCheckPassword.textContent = "Неправильный пароль!"
        TextCheckPassword.style.color = "red"
    }
}