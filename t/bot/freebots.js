/* JAHIM FREE BOTS — "FREE BOTS" tab: browse the Free-Dbots strategy collection and load one into Bot Builder.
   Loading goes through Deriv's own strategy loader (same path as Bot Builder > Open > My computer). */
(function () {
  'use strict';
  var BASE = (function () { try { return new URL('free-bots/', document.currentScript.src).href; } catch (e) { return '/t/bot/free-bots/'; } })();
  var BOTS = [{"id":"1-tick-digit-over-2","name":"1 tick DIgit Over 2","file":"1-tick-digit-over-2.xml","tags":["DIGITS"],"dbot":false},{"id":"24-mkz-rf-premium-bot","name":"24-MKZ RF PREMIUM BOT","file":"24-mkz-rf-premium-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"420-high-digits","name":"420-High-Digits","file":"420-high-digits.xml","tags":["DIGITS"],"dbot":false},{"id":"7-up-digit-bot","name":"7-UP-DIGIT-BOT","file":"7-up-digit-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"absolute-deriv-bot","name":"Absolute Deriv Bot","file":"absolute-deriv-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"atrium-binary-deriv-bot","name":"Atrium Binary Deriv Bot","file":"atrium-binary-deriv-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"beam-up-down-rf-auto-bot","name":"BEAM-Up-Down-RF-auto-bot","file":"beam-up-down-rf-auto-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"bear-market-auto-bot-trader","name":"BEAR-MARKET-AUTO-BOT-TRADER","file":"bear-market-auto-bot-trader.xml","tags":["RISE/FALL"],"dbot":false},{"id":"binary-bot-premium-rise-fall","name":"binary-bot Premium Rise Fall","file":"binary-bot-premium-rise-fall.xml","tags":["RISE/FALL"],"dbot":false},{"id":"bonus-bot","name":"Bonus Bot","file":"bonus-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"bonus-bot2","name":"Bonus Bot2","file":"bonus-bot2.xml","tags":["RISE/FALL"],"dbot":false},{"id":"bonus-intel-rf-auto-bot","name":"Bonus- intel-RF-auto-bot","file":"bonus-intel-rf-auto-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"bot-sniper","name":"Bot Sniper","file":"bot-sniper.xml","tags":["RISE/FALL"],"dbot":false},{"id":"bull-market-auto-bot-trader","name":"BULL-MARKET-AUTO-BOT TRADER","file":"bull-market-auto-bot-trader.xml","tags":["RISE/FALL"],"dbot":false},{"id":"bull-power-binary-bot-v1-1","name":"BULL-POWER-BINARY-BOT V1.1","file":"bull-power-binary-bot-v1-1.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"caleb-fx-dbot-1","name":"CALEB- FX DBOT 1","file":"caleb-fx-dbot-1.xml","tags":["DIGITS"],"dbot":true},{"id":"defender-digits-auto-bot","name":"Defender Digits Auto Bot","file":"defender-digits-auto-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"digit-over-3","name":"Digit Over 3","file":"digit-over-3.xml","tags":["DIGITS"],"dbot":false},{"id":"digit-over-compounder-strategy-bot","name":"DIGIT-OVER COMPOUNDER STRATEGY BOT","file":"digit-over-compounder-strategy-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"digit-ranger-auto-bot","name":"Digit-Ranger-Auto-Bot","file":"digit-ranger-auto-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"dynamic-digits-auto-bot","name":"Dynamic Digits-Auto-Bot","file":"dynamic-digits-auto-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"entry-touch-bbot","name":"Entry Touch BBot","file":"entry-touch-bbot.xml","tags":["TOUCH"],"dbot":false},{"id":"equalizer-auto-botv1-1","name":"Equalizer-Auto-Botv1.1","file":"equalizer-auto-botv1-1.xml","tags":["RISE/FALL"],"dbot":false},{"id":"exponential-strategy-bot-2-0","name":"Exponential Strategy Bot 2.0","file":"exponential-strategy-bot-2-0.xml","tags":["RISE/FALL"],"dbot":false},{"id":"flex-period-bot-long-to-shorter-by-dailypro","name":"Flex Period Bot - Long to Shorter - by DailyPro","file":"flex-period-bot-long-to-shorter-by-dailypro.xml","tags":["RISE/FALL"],"dbot":false},{"id":"flex-period-bot-short-long-repeated-turn-by-dailypro","name":"Flex Period Bot - Short & Long Repeated Turn - by DailyPro","file":"flex-period-bot-short-long-repeated-turn-by-dailypro.xml","tags":["RISE/FALL"],"dbot":false},{"id":"flex-period-bot-short-to-longer-by-dailypro","name":"Flex Period Bot - Short to Longer - by DailyPro","file":"flex-period-bot-short-to-longer-by-dailypro.xml","tags":["RISE/FALL"],"dbot":false},{"id":"free-digit-socail-bot","name":"Free Digit Socail Bot","file":"free-digit-socail-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"harami-binary-bot","name":"HARAMI Binary-Bot","file":"harami-binary-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"high-profit-bot","name":"High Profit Bot","file":"high-profit-bot.xml","tags":["TOUCH"],"dbot":false},{"id":"higher-lower-trend-challenger-binarybot","name":"Higher-Lower Trend-Challenger BinaryBot","file":"higher-lower-trend-challenger-binarybot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"hl-bearking-premium-bot","name":"HL BearKing premium Bot","file":"hl-bearking-premium-bot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"hl-easy-profit-b-bot-1st-wave","name":"HL EASY PROFIT B-BOT 1ST WAVE","file":"hl-easy-profit-b-bot-1st-wave.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"hl-hammer-b-bot-1-0","name":"HL HAMMER B-BOT 1.0","file":"hl-hammer-b-bot-1-0.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"hl-market-maker-1-0-b-bot","name":"HL Market-Maker 1.0 B-Bot","file":"hl-market-maker-1-0-b-bot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"hl-market-maker-1-0-deriv-d-bot","name":"HL Market-Maker 1.0 Deriv D-Bot","file":"hl-market-maker-1-0-deriv-d-bot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":true},{"id":"house-of-rise-fall-auto-bots","name":"House of Rise Fall Auto Bots","file":"house-of-rise-fall-auto-bots.xml","tags":["RISE/FALL"],"dbot":false},{"id":"i-digit-v2-0-update","name":"I DIGIT V2.0 UPDATE","file":"i-digit-v2-0-update.xml","tags":["DIGITS"],"dbot":false},{"id":"insync-equals-binarybot","name":"Insync Equals BinaryBot","file":"insync-equals-binarybot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"iso-touch-autobot-v2-0-1","name":"iso Touch AutoBot V2.0.1","file":"iso-touch-autobot-v2-0-1.xml","tags":["TOUCH"],"dbot":false},{"id":"lastdigit1-strategy-bot","name":"LastDigit1-Strategy-Bot","file":"lastdigit1-strategy-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"leo-even-odd","name":"Leo Even Odd","file":"leo-even-odd.xml","tags":["DIGITS"],"dbot":false},{"id":"low-risk-manager-deriv-bot","name":"Low Risk Manager Deriv Bot","file":"low-risk-manager-deriv-bot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"mavic-air-rf-vix-bot","name":"Mavic-Air-RF Vix Bot","file":"mavic-air-rf-vix-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"mpsu-smart-up-down-auto-bot","name":"MPSU-SMART UP-DOWN AUTO-BOT","file":"mpsu-smart-up-down-auto-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"one-touch-tetris-b-bot","name":"One Touch Tetris B-Bot","file":"one-touch-tetris-b-bot.xml","tags":["TOUCH"],"dbot":false},{"id":"one-touch-stimuli-bot","name":"ONE-TOUCH-STIMULI-BOT","file":"one-touch-stimuli-bot.xml","tags":["TOUCH"],"dbot":false},{"id":"optimo-volatility-auto-bot","name":"OPTIMO-VOLATILITY-AUTO-BOT","file":"optimo-volatility-auto-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"price-rover-rf-strategy","name":"Price Rover RF Strategy","file":"price-rover-rf-strategy.xml","tags":["RISE/FALL"],"dbot":false},{"id":"pulse-up-down-autobot","name":"Pulse-up-down-AutoBot","file":"pulse-up-down-autobot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"quad-digit-bot","name":"Quad Digit Bot","file":"quad-digit-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"quantum-ends-in-out-deriv-d-bot","name":"QUANTUM ENDS-IN-OUT DERIV D-BOT","file":"quantum-ends-in-out-deriv-d-bot.xml","tags":["IN/OUT"],"dbot":true},{"id":"quantum-ends-in-out-binary-bot","name":"QUANTUM ENDS-IN-OUT-BINARY-BOT","file":"quantum-ends-in-out-binary-bot.xml","tags":["IN/OUT"],"dbot":false},{"id":"renko-digits","name":"Renko-Digits","file":"renko-digits.xml","tags":["DIGITS"],"dbot":false},{"id":"rf-black-out-1-0-deriv-dbot","name":"RF Black Out 1.0 Deriv DBot","file":"rf-black-out-1-0-deriv-dbot.xml","tags":["RISE/FALL"],"dbot":true},{"id":"rf-contigency-b-bot-1-0","name":"RF CONTIGENCY B-BOT 1.0","file":"rf-contigency-b-bot-1-0.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-heist-b-bot","name":"RF Heist B-Bot","file":"rf-heist-b-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-array-autobot","name":"RF-ARRAY-autobot","file":"rf-array-autobot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-compressor-signal-bot-v1-0-1","name":"RF-Compressor Signal Bot V1.0.1","file":"rf-compressor-signal-bot-v1-0-1.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-flex","name":"RF-Flex","file":"rf-flex.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-hi-lo-dbot","name":"Rf-Hi-Lo DBot","file":"rf-hi-lo-dbot.xml","tags":["RISE/FALL"],"dbot":true},{"id":"rf-marble-b-bot","name":"RF-MARBLE B-BOT","file":"rf-marble-b-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-optic-trendbot","name":"RF-OPTIC-TRENDBOT","file":"rf-optic-trendbot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"rf-valor-autotrader-bot","name":"RF-Valor-AutoTrader Bot","file":"rf-valor-autotrader-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-market-monitor","name":"RF Market-Monitor","file":"rf-market-monitor.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rf-spider-profit","name":"RF Spider Profit","file":"rf-spider-profit.xml","tags":["RISE/FALL"],"dbot":false},{"id":"rise-fall-profittargeter","name":"RISE-FALL-ProfitTargeter","file":"rise-fall-profittargeter.xml","tags":["RISE/FALL"],"dbot":false},{"id":"roller-deriv-bot","name":"Roller Deriv Bot","file":"roller-deriv-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"russ-cobetckar-deriv-bot","name":"Russ Cobetckar Deriv Bot","file":"russ-cobetckar-deriv-bot.xml","tags":["RISE/FALL"],"dbot":true},{"id":"sensei-rf-binarybot","name":"SENSEI-RF-BINARYBOT","file":"sensei-rf-binarybot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"shark-digits","name":"Shark Digits","file":"shark-digits.xml","tags":["DIGITS"],"dbot":false},{"id":"shash-digits-v-4-20","name":"SHASH DIGITS V- 4-20","file":"shash-digits-v-4-20.xml","tags":["DIGITS"],"dbot":false},{"id":"sonic-digits-binarybot","name":"Sonic Digits BinaryBot","file":"sonic-digits-binarybot.xml","tags":["DIGITS"],"dbot":false},{"id":"sputnik-digit-differ-bot","name":"SPUTNIK DIGIT-DIFFER BOT","file":"sputnik-digit-differ-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"stealth-mode-digitover-autobot","name":"Stealth-Mode-DigitOver-AutoBot","file":"stealth-mode-digitover-autobot.xml","tags":["DIGITS"],"dbot":false},{"id":"stoch-and-rsi-bot","name":"Stoch and RSI Bot","file":"stoch-and-rsi-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"super-digit-differ-bot","name":"Super Digit Differ Bot","file":"super-digit-differ-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"super-digit-under","name":"Super Digit Under","file":"super-digit-under.xml","tags":["DIGITS"],"dbot":false},{"id":"tic-tac-rf-v2-0","name":"TIC-TAC RF V2.0","file":"tic-tac-rf-v2-0.xml","tags":["RISE/FALL"],"dbot":false},{"id":"tick-pip-rf","name":"Tick-Pip Rf","file":"tick-pip-rf.xml","tags":["RISE/FALL"],"dbot":false},{"id":"tick-ranger-rf-2ndedition","name":"TICK-RANGER-RF 2NDedition","file":"tick-ranger-rf-2ndedition.xml","tags":["RISE/FALL"],"dbot":false},{"id":"trend-inveter-auto-bot","name":"Trend-Inveter-Auto-bot","file":"trend-inveter-auto-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"unicorn-only-up-down-binarybot","name":"Unicorn Only Up-Down BinaryBot","file":"unicorn-only-up-down-binarybot.xml","tags":["RUNS"],"dbot":false},{"id":"up-down-volt-binary-bot","name":"Up-Down Volt Binary Bot","file":"up-down-volt-binary-bot.xml","tags":["IN/OUT"],"dbot":false},{"id":"vix-100-under-dog-index-bot","name":"VIX 100 UNDER DOG INDEX BOT","file":"vix-100-under-dog-index-bot.xml","tags":["DIGITS"],"dbot":false},{"id":"vix-lower-strategy-bot","name":"Vix-Lower Strategy Bot","file":"vix-lower-strategy-bot.xml","tags":["RISE/FALL","HIGHER/LOWER"],"dbot":false},{"id":"volatility-index-techinical-analysis-premium-bot","name":"Volatility-Index-Techinical-Analysis-premium-bot","file":"volatility-index-techinical-analysis-premium-bot.xml","tags":["RISE/FALL"],"dbot":false},{"id":"x-formula-vix-100","name":"X-Formula-Vix-100","file":"x-formula-vix-100.xml","tags":["RISE/FALL"],"dbot":false}];
  var FILTERS = ['ALL', 'FAVOURITES', 'RISE/FALL', 'HIGHER/LOWER', 'DIGITS', 'TOUCH', 'IN/OUT', 'RUNS'];
  var query = '', filter = 'ALL', loading = false, brandSearchTimer = 0;

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function favs() { try { return JSON.parse(localStorage.getItem('jahim_fav_freebots') || '[]'); } catch (e) { return []; } }
  function setFav(id) {
    var f = favs(), i = f.indexOf(id); if (i < 0) f.push(id); else f.splice(i, 1);
    try { localStorage.setItem('jahim_fav_freebots', JSON.stringify(f)); } catch (e) {}
  }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'fb-toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 4000);
  }

  /* ---------- load into Bot Builder (Deriv's own loader) ---------- */
  async function loadBot(bot) {
    if (loading) return; loading = true;
    try {
      var tab = document.getElementById('id-bot-builder'); if (tab) tab.click();
      for (var i = 0; i < 100; i++) {
        var w = window.Blockly && window.Blockly.derivWorkspace;
        if (w && w.getAllBlocks && !w.isFlyoutVisible && typeof window.__jahimLoad === 'function') break;
        await sleep(100);
      }
      if (typeof window.__jahimLoad !== 'function' || !(window.Blockly && window.Blockly.derivWorkspace)) { toast('Bot Builder is not ready yet — try again in a moment.'); return; }
      var res = await fetch(BASE + bot.file, { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      var xml = await res.text();
      var out = await window.__jahimLoad({
        block_string: xml, file_name: bot.name, strategy_id: '', from: 'local',
        workspace: window.Blockly.derivWorkspace, drop_event: null, showIncompatibleStrategyDialog: null
      });
      if (out && out.error) toast('Could not load ' + bot.name + ': ' + out.error); else toast(bot.name + ' loaded in Bot Builder');
    } catch (e) {
      console.error('[JAHIM free bots] load failed', e);
      toast('Could not load ' + bot.name + ': ' + (e && e.message || e));
    } finally { loading = false; }
  }

  /* ---------- theme (persisted light/dark toggle) ---------- */
  var selectedTheme = 'light';
  try { selectedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'; } catch (e) {}
  function syncThemeButton() {
    var b = document.querySelector('.fb-theme-toggle'); if (!b) return;
    var dark = selectedTheme === 'dark';
    b.textContent = dark ? '☀ Light theme' : '☾ Dark theme';
    b.setAttribute('aria-pressed', dark ? 'true' : 'false');
    b.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
  }
  function applyTheme(theme, persist) {
    selectedTheme = theme === 'dark' ? 'dark' : 'light';
    if (document.body) {
      document.body.classList.toggle('theme--dark', selectedTheme === 'dark');
      document.body.classList.toggle('theme--light', selectedTheme === 'light');
    }
    if (persist) { try { localStorage.setItem('theme', selectedTheme); } catch (e) {} }
    syncThemeButton();
  }
  applyTheme(selectedTheme, false);
  if (document.body) {
    new MutationObserver(function () {
      if (!document.body.classList.contains('theme--' + selectedTheme)) applyTheme(selectedTheme, false);
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  /* ---------- Jahim logo next to the JAHIM TRADER wordmark ---------- */
  function addBrandMark() {
    if (!document.body || document.querySelector('.jahim-brand-mark')) return;
    var nodes = document.querySelectorAll('body *'), brand = /^JAHIM\s+TRADE(?:R)?$/i;
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.closest && el.closest('.jahim-freebots, .fb-modal')) continue;
      var label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!brand.test(label)) continue;
      var img = document.createElement('img');
      img.className = 'jahim-brand-mark'; img.src = '/t/bot/jahim-logo.png'; img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      var isSvg = el.namespaceURI === 'http://www.w3.org/2000/svg';
      var target = isSvg && el.parentNode ? el.parentNode : el;
      target.insertBefore(img, isSvg ? el : target.firstChild);
      target.classList.add('jahim-brand-lockup');
      return;
    }
  }
  function scheduleBrandSearch() {
    if (brandSearchTimer) return;
    brandSearchTimer = setTimeout(function () { brandSearchTimer = 0; addBrandMark(); }, 120);
  }

  /* ---------- styles ---------- */
  var CSS = '.jahim-freebots{background:#0d1126;min-height:100%;padding:18px;box-sizing:border-box;color:#dfe4ff;font-family:"IBM Plex Sans",sans-serif}' +
    '.fb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}' +
    '.fb-card{background:#1c2245;border:1px solid #2c3566;border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:10px;position:relative;min-width:0}' +
    '.fb-card:hover{border-color:#5b4fd8}.fb-name{font-weight:700;letter-spacing:.3px;font-size:14px;padding-right:28px;word-break:break-word}' +
    '.fb-tags{display:flex;gap:6px;flex-wrap:wrap;flex:1;align-items:flex-start;align-content:flex-start}.fb-tag{font:600 10px monospace;padding:3px 7px;border-radius:4px;letter-spacing:.5px}' +
    '.fb-t1{background:#4a3d12;color:#f3c04a;border:1px solid #8a6d1c}.fb-t2{background:#2a2563;color:#9b8cff;border:1px solid #4b42a8}' +
    '.fb-row{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:4px}' +
    '.fb-btn{font:600 12px monospace;border-radius:8px;padding:9px 16px;cursor:pointer;border:1px solid #3a4378;background:#161b3a;color:#cfd5ff;text-decoration:none;display:inline-block}' +
    '.fb-sel{background:#2b2766;border-color:#5b4fd8;color:#b5a9ff;padding:10px 22px}.fb-sel:hover{background:#3a3488}' +
    '.fb-star{position:absolute;top:12px;right:12px;cursor:pointer;font-size:18px;color:#6e78b8;background:none;border:0}.fb-star.on{color:#f3c04a}' +
    '.fb-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1c2245;color:#fff;border:1px solid #5b4fd8;padding:10px 18px;border-radius:8px;z-index:99999;font-size:13px;max-width:90vw}' +
    '#jahim-freebots-root{height:calc(100vh - 112px);max-height:calc(100vh - 112px);height:calc(100dvh - 112px);max-height:calc(100dvh - 112px);min-height:0;overflow-y:auto!important;overflow-x:hidden;overscroll-behavior-y:contain;-webkit-overflow-scrolling:touch;touch-action:pan-y}' +
    '.jahim-freebots{height:auto;min-height:100%;overflow:visible}' +
    '.fb-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;position:sticky;top:0;z-index:4;padding:2px 0 12px;background:inherit}' +
    '.fb-toolbar-title{font-size:14px;font-weight:700}.fb-tools{display:flex;gap:8px;align-items:center;flex-wrap:wrap}' +
    '.fb-search{border:1px solid #3a4378;border-radius:8px;background:#161b3a;color:#e5e9ff;padding:8px 12px;font:13px "IBM Plex Sans",sans-serif;min-width:180px}' +
    '.fb-theme-toggle{border:1px solid #737b9b;border-radius:8px;background:#fff;color:#202638;padding:8px 12px;font-weight:600;cursor:pointer;white-space:nowrap}' +
    'body.theme--dark .fb-theme-toggle{background:#161b3a;color:#e5e9ff;border-color:#3a4378}' +
    '.fb-chips{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px}.fb-chip{font:600 11px monospace;letter-spacing:.4px;border:1px solid #3a4378;border-radius:999px;background:#161b3a;color:#cfd5ff;padding:6px 12px;cursor:pointer}' +
    '.fb-chip.on{background:#2b2766;border-color:#5b4fd8;color:#b5a9ff}' +
    '.fb-empty{padding:40px 0;text-align:center;color:#8f9bd6;font-size:14px}.fb-foot{margin-top:18px;font-size:11px;color:#8f9bd6;text-align:center}' +
    '.jahim-brand-lockup{display:inline-flex!important;align-items:center;gap:7px}.jahim-brand-mark{display:inline-block;width:30px;height:30px;object-fit:contain;vertical-align:middle}' +
    'body:not(.theme--dark) .jahim-freebots{background:#f4f6fa;color:#172033}' +
    'body:not(.theme--dark) .fb-card{background:#fff;border-color:#d8deea;color:#172033}body:not(.theme--dark) .fb-card:hover{border-color:#4477dd}' +
    'body:not(.theme--dark) .fb-btn{background:#f5f7fb;color:#26324a;border-color:#cbd3e1}' +
    'body:not(.theme--dark) .fb-sel{background:#e9efff;border-color:#8ba8ed;color:#1d438d}' +
    'body:not(.theme--dark) .fb-search{background:#fff;color:#172033;border-color:#cbd3e1}' +
    'body:not(.theme--dark) .fb-chip{background:#f5f7fb;color:#26324a;border-color:#cbd3e1}body:not(.theme--dark) .fb-chip.on{background:#e9efff;border-color:#8ba8ed;color:#1d438d}' +
    'body:not(.theme--dark) .fb-theme-toggle{background:#1b2d63;color:#fff;border-color:#1b2d63}' +
    '@media(max-width:640px){#jahim-freebots-root{height:calc(100vh - 104px);max-height:calc(100vh - 104px);height:calc(100dvh - 104px);max-height:calc(100dvh - 104px)}.jahim-freebots{padding:12px}.fb-grid{grid-template-columns:minmax(0,1fr);gap:12px}.fb-card{padding:14px}.fb-search{min-width:0;flex:1}}';
  (function injectCss() {
    if (document.getElementById('fb-css')) return;
    var s = document.createElement('style'); s.id = 'fb-css'; s.textContent = CSS; (document.head || document.documentElement).appendChild(s);
  })();

  /* ---------- tab UI ---------- */
  function visible() {
    var f = favs(), q = query.trim().toLowerCase();
    return BOTS.filter(function (b) {
      if (q && b.name.toLowerCase().indexOf(q) < 0) return false;
      if (filter === 'FAVOURITES') return f.indexOf(b.id) >= 0;
      if (filter !== 'ALL') return b.tags.indexOf(filter) >= 0;
      return true;
    }).sort(function (a, b) { return (f.indexOf(b.id) >= 0) - (f.indexOf(a.id) >= 0); });
  }
  function renderGrid(root) {
    var grid = root.querySelector('.fb-grid'), count = root.querySelector('.fb-count'), f = favs(), list = visible();
    grid.innerHTML = '';
    count.textContent = list.length + ' of ' + BOTS.length + ' bots';
    if (!list.length) { var e = document.createElement('div'); e.className = 'fb-empty'; e.textContent = 'No bots match.'; grid.appendChild(e); return; }
    list.forEach(function (b) {
      var c = document.createElement('div'); c.className = 'fb-card';
      c.innerHTML = '<button type="button" class="fb-star" title="Favourite">★</button><div class="fb-name"></div><div class="fb-tags"></div>' +
        '<div class="fb-row"><a class="fb-btn fb-dl" download>Download XML</a><button type="button" class="fb-btn fb-sel">Select</button></div>';
      c.querySelector('.fb-name').textContent = b.name;
      var tags = c.querySelector('.fb-tags');
      b.tags.forEach(function (t, i) { var s = document.createElement('span'); s.className = 'fb-tag ' + (i ? 'fb-t2' : 'fb-t1'); s.textContent = t; tags.appendChild(s); });
      var st = c.querySelector('.fb-star'); if (f.indexOf(b.id) >= 0) st.classList.add('on');
      st.onclick = function () { setFav(b.id); renderGrid(root); };
      var dl = c.querySelector('.fb-dl'); dl.href = BASE + b.file; dl.setAttribute('download', b.name + '.xml');
      c.querySelector('.fb-sel').onclick = function () { loadBot(b); };
      grid.appendChild(c);
    });
  }
  function render(root) {
    root.innerHTML = '<div class="jahim-freebots"><div class="fb-toolbar"><span class="fb-toolbar-title">Free bots <span class="fb-count" style="font-weight:400;opacity:.7;margin-left:6px"></span></span>' +
      '<div class="fb-tools"><input type="search" class="fb-search" placeholder="Search bots…" aria-label="Search bots"><button type="button" class="fb-theme-toggle"></button></div></div>' +
      '<div class="fb-chips"></div><div class="fb-grid"></div>' +
      '<div class="fb-foot">Strategies from the public Free-Dbots collection. Test on a demo account before trading real money.</div></div>';
    var search = root.querySelector('.fb-search'), chips = root.querySelector('.fb-chips');
    search.value = query;
    search.oninput = function () { query = search.value; renderGrid(root); };
    root.querySelector('.fb-theme-toggle').onclick = function () { applyTheme(selectedTheme === 'dark' ? 'light' : 'dark', true); };
    FILTERS.forEach(function (name) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'fb-chip' + (name === filter ? ' on' : ''); b.textContent = name;
      b.onclick = function () { filter = name; Array.prototype.forEach.call(chips.children, function (x) { x.classList.toggle('on', x.textContent === name); }); renderGrid(root); };
      chips.appendChild(b);
    });
    syncThemeButton(); renderGrid(root);
  }
  new MutationObserver(function () {
    var r = document.getElementById('jahim-freebots-root'); if (r && !r.firstChild) render(r);
    scheduleBrandSearch();
  }).observe(document.documentElement, { childList: true, subtree: true });
  scheduleBrandSearch();
})();
