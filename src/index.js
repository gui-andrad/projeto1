"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var videoYtbLazy = document.getElementById('videoYtb1970');
videoYtbLazy === null || videoYtbLazy === void 0 ? void 0 : videoYtbLazy.addEventListener('click', snippetYtbLazyPlay);
function snippetYtbLazyPlay(evt) {
    var target = evt.currentTarget;
    target.innerHTML = src;
    "https://www.youtube.com/embed/${target.dataset.video}";
    title = "YouTube video player";
    frameborder = "0";
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    allowfullscreen > /iframe>;
}
app.listen(3333);
