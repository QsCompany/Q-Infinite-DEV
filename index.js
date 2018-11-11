function load() {
    define('entrypoint', [`lib:lib|./lib/InfiniteJs.js`], (q, myApp) => {
        require(`./dist/app.js`, (r) => {});
    });
}
window.addEventListener('load', () => load());