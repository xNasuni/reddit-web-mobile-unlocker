// ==UserScript==
// @name         Reddit Web Mobile Unlocker
// @namespace    https://github.com/xNasuni/reddit-web-mobile-unlocker
// @description  try to take over the world!
// @version      1.0
// @author       Mia @ github.com/xNasuni
// @match        https://*.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @run-at		   document-start
// @updateURL    https://github.com/xNasuni/reddit-web-mobile-unlocker/raw/main/script.user.js
// @downloadURL  https://github.com/xNasuni/reddit-web-mobile-unlocker/raw/main/script.user.js
// @supportURL   https://github.com/xNasuni/reddit-web-mobile-unlocker/issues
// ==/UserScript==

(function () {
  setInterval(() => {
    const bottomSheets = window.document.querySelectorAll(".rpl-bottom-sheet")
    const promotionalSheets = window.document.querySelectorAll(".rpl-bottom-sheet.configured-xpromo")
    const scrollLocks = window.document.querySelectorAll(".rpl-scroll-lock")
    
    if (promotionalSheets.length >= 1) {
      promotionalSheets.forEach((v) => v.remove())
    }
    if ((promotionalSheets.length >= 1) || (bottomSheets.length <= 0 && scrollLocks.length >= 1)) {
        scrollLocks.forEach((v) => v.classList.remove("rpl-scroll-lock"))
    }
  }, 50)
})()
