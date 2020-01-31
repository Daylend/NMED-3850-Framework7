var app = new Framework7({
    root: "#app",
    routes: [
        {
            path: "/",
            url: "index.html"
        },
        {
            path: "/page2/",
            url: "pages/page2.html"
        }
    ]
});

var mainView = app.views.create(".view-main");
setInterval(function() {
    document.getElementsByClassName("navbar-bg")[0].style.backgroundColor =
        "rgb(" +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        ")";
}, 5);
