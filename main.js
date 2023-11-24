isOpenWindow = false

OpenWindow = function () {
    if (!isOpenWindow) {
        document.body.insertAdjacentHTML('beforeend',
        `
        <div id="window">
            <h1>Просто</h1>
            <h2>Какое-то</h2>
            <h3>Окно</h3>
        </div>
        `)
        isOpenWindow = true
    } else {
        location.reload()
    }
}