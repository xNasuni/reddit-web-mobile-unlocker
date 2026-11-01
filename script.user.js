// ==UserScript==
// @name         Reddit Web Mobile Unlocker
// @namespace    https://github.com/xNasuni/reddit-web-mobile-unlocker
// @description  try to take over the world!
// @version      1.0
// @author       Mia @ github.com/xNasuni
// @match        https://*.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        unsafeWindow
// @run-at		   document-start
// @updateURL    https://github.com/xNasuni/reddit-web-mobile-unlocker/raw/main/script.user.js
// @downloadURL  https://github.com/xNasuni/reddit-web-mobile-unlocker/raw/main/script.user.js
// @supportURL   https://github.com/xNasuni/reddit-web-mobile-unlocker/issues
// ==/UserScript==

(function () {
  setInterval(() => {
    unsafeWindow.document.querySelectorAll(".rpl-bottom-sheet").forEach((v) => {
      v.remove()
    })
    unsafeWindow.document
      .querySelectorAll(".rpl-scroll-lock")
      .forEach((v) => v.classList.remove("rpl-scroll-lock"))
  })
})()
