/**
 * shell.js — JAHIM TRADER (Bot only)
 * Loads the Deriv Bot template full-screen. Deriv's login page can't be framed, so the Bot's
 * Log in / Sign up navigate the top window; Deriv then returns to the site root with
 * ?code=…&state=…  and we pass that query string on to the Bot iframe so it can finish the login.
 */
(function () {
  'use strict';
  var BOT_PATH = 't/bot/';

  function boot() {
    var search = '';
    var targetHash = location.hash || '#bot_builder';
    var q = new URLSearchParams(location.search);
    if (q.has('code') || q.has('error')) {
      search = location.search;
      history.replaceState({}, document.title, location.pathname);
    }
    var ifr = document.createElement('iframe');
    ifr.title = 'JAHIM TRADER';
    ifr.setAttribute('allow', 'clipboard-read; clipboard-write; fullscreen; autoplay');
    ifr.src = BOT_PATH + search + targetHash;
    document.getElementById('stage').appendChild(ifr);
    if (typeof loaderDone === 'function') loaderDone();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
