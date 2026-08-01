
const CONFIG = {
  appName: "ARCHIWUM 01",
  handlerCodename: "M",
  storageKey: "archiwum01-progress-v1",
  introDelayMs: 2100
};

const state = {
  screen: "boot",
  groomName: "",
  startedAt: null,
  sound: true
};

const el = (id) => document.getElementById(id);
const screen = el("screen");
const statusText = el("statusText");
const soundToggle = el("soundToggle");
const soundIcon = el("soundIcon");

function saveState() {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONFIG.storageKey));
    if (saved && saved.groomName) Object.assign(state, saved);
  } catch (_) {}
}

function vibrate(pattern = 25) {
  if ("vibrate" in navigator) navigator.vibrate(pattern);
}

function tone(type = "confirm") {
  if (!state.sound) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const map = {
      click: [230, .035],
      confirm: [440, .09],
      alert: [125, .16]
    };
    const [freq, length] = map[type] || map.click;
    osc.frequency.value = freq;
    osc.type = type === "alert" ? "sawtooth" : "sine";
    gain.gain.setValueAtTime(.045, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + length);
    osc.start();
    osc.stop(ctx.currentTime + length);
  } catch (_) {}
}

function setStatus(text) {
  statusText.textContent = text;
}

function updateClock() {
  el("clock").textContent = new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit", minute: "2-digit"
  }).format(new Date());
}
setInterval(updateClock, 1000);
updateClock();

soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  soundIcon.textContent = state.sound ? "◖" : "×";
  saveState();
  tone("click");
});

function button(label, action, kind = "primary") {
  return `<button class="${kind}" data-action="${action}">${label}</button>`;
}

function bindActions(actions) {
  screen.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      tone("click");
      actions[btn.dataset.action]?.();
    });
  });
}

function renderBoot() {
  setStatus("NAWIĄZYWANIE POŁĄCZENIA");
  screen.innerHTML = `
    <section class="card fade-in">
      <div class="seal"><span>01</span></div>
      <p class="kicker">Kanał zabezpieczony</p>
      <h1>Archiwum<br>otwarte.</h1>
      <p class="lead type-line">Weryfikacja urządzenia i dostępu terenowego</p>
      <div class="progress-line"><span></span></div>
    </section>
  `;
  setTimeout(() => {
    if (state.groomName && state.startedAt) renderResume();
    else renderWelcome();
  }, CONFIG.introDelayMs);
}

function renderWelcome() {
  state.screen = "welcome";
  saveState();
  setStatus("DOSTĘP WARUNKOWY");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Dokument niejawny / odczyt jednorazowy</p>
      <h1>Nie wszystko<br>jest grą.</h1>
      <p class="lead">
        Na tym terenie pozostawiono ślady pewnej niedokończonej historii.
        Nie wiadomo, kto ją rozpoczął. Wiadomo tylko, dla kogo miała zostać dokończona.
      </p>
      <div class="dossier">
        <small>NADAWCA</small>
        <strong>${CONFIG.handlerCodename}</strong>
      </div>
      <div class="actions">
        ${button("Otwórz dossier", "open")}
      </div>
    </section>
  `;
  bindActions({ open: renderIdentity });
}

function renderIdentity() {
  state.screen = "identity";
  saveState();
  setStatus("IDENTYFIKACJA CELU");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Dossier osobowe</p>
      <h2>Wskaż głównego uczestnika.</h2>
      <p class="copy">Wpisz imię pana młodego. Zostanie użyte w komunikatach i zapisie przebiegu misji.</p>
      <div class="field">
        <label for="groomName">Imię pana młodego</label>
        <input id="groomName" autocomplete="off" maxlength="30" placeholder="np. Michał" />
      </div>
      <div class="actions">
        ${button("Zatwierdź tożsamość", "confirm")}
        ${button("Wróć", "back", "secondary")}
      </div>
    </section>
  `;
  const input = el("groomName");
  input.value = state.groomName || "";
  input.focus();

  bindActions({
    confirm: () => {
      const name = input.value.trim();
      if (name.length < 2) {
        vibrate([40, 40, 40]);
        tone("alert");
        input.focus();
        input.setAttribute("aria-invalid", "true");
        return;
      }
      state.groomName = name;
      saveState();
      vibrate(35);
      renderBriefing();
    },
    back: renderWelcome
  });
}

function renderBriefing() {
  state.screen = "briefing";
  saveState();
  setStatus("PRZEKAZ OD M");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Przekaz operacyjny</p>
      <h2>${state.groomName}, to dossier czekało właśnie na Ciebie.</h2>
      <p class="copy">
Nie znamy pełnego celu tej operacji.

Na terenie ukryto serię śladów. Każdy z nich prowadzi do następnego, ale nie wszystkie instrukcje muszą być kompletne. Nie działaj sam. Część informacji będzie przeznaczona dla Ciebie, część dla pozostałych uczestników.

Zapamiętaj jedno: rzeczy pozornie nieistotne mogą mieć znaczenie znacznie później.
      </p>
      <div class="actions">
        ${button("Przyjmuję dossier", "accept")}
        ${button("Zmień imię", "change", "secondary")}
      </div>
    </section>
  `;
  bindActions({
    accept: renderRules,
    change: renderIdentity
  });
}

function renderRules() {
  state.screen = "rules";
  saveState();
  setStatus("PROTOKÓŁ BEZPIECZEŃSTWA");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Zasady operacji</p>
      <h2>Zanim ruszycie.</h2>
      <div class="rules">
        <div class="rule"><b>01</b><span>Poruszajcie się razem. Nikt nie odłącza się od grupy.</span></div>
        <div class="rule"><b>02</b><span>Przy wodzie wykonujcie wyłącznie zadania z brzegu.</span></div>
        <div class="rule"><b>03</b><span>Korzystajcie tylko z aplikacji, latarek i elementów odnalezionych w grze.</span></div>
        <div class="rule"><b>04</b><span>Nie zabierajcie przedmiotów, których znaczenia jeszcze nie rozumiecie — chyba że aplikacja poleci inaczej.</span></div>
        <div class="rule"><b>05</b><span>W razie problemu możecie skontaktować się z M. Pomoc może mieć konsekwencje.</span></div>
      </div>
      <div class="actions">
        ${button("Rozpocznij operację", "start")}
        ${button("Wróć", "back", "secondary")}
      </div>
    </section>
  `;
  bindActions({
    start: startMission,
    back: renderBriefing
  });
}

function startMission() {
  state.startedAt = state.startedAt || new Date().toISOString();
  state.screen = "mission-placeholder";
  saveState();
  setStatus("OPERACJA AKTYWNA");
  tone("confirm");
  vibrate([45, 30, 80]);
  screen.classList.add("flash-success");
  setTimeout(() => screen.classList.remove("flash-success"), 600);
  renderMissionPlaceholder();
}

function renderMissionPlaceholder() {
  setStatus("OPERACJA AKTYWNA");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Transmisja 001 / oczekuje na treść</p>
      <h2>Połączenie ustanowione.</h2>
      <p class="copy">
${state.groomName}, grupa została zarejestrowana.

Moduł startowy działa poprawnie. Następny moduł doda pierwszą właściwą transmisję, zagadkę prowadzącą do lokalizacji oraz system odpowiedzi.
      </p>
      <div class="dossier">
        <small>STATUS</small>
        <strong>GOTOWI DO MISJI 01</strong>
      </div>
      <div class="actions">
        ${button("Powtórz briefing", "briefing", "secondary")}
        ${button("Wyzeruj test", "reset", "secondary")}
      </div>
    </section>
  `;
  bindActions({
    briefing: renderBriefing,
    reset: resetGame
  });
}

function renderResume() {
  setStatus("ODNALEZIONO ZAPIS");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Zapis lokalny</p>
      <h2>Witaj ponownie, ${state.groomName}.</h2>
      <p class="copy">Na tym urządzeniu odnaleziono rozpoczętą operację. Możesz kontynuować albo wyzerować wersję testową.</p>
      <div class="actions">
        ${button("Kontynuuj", "continue")}
        ${button("Zacznij od początku", "reset", "secondary")}
      </div>
    </section>
  `;
  bindActions({
    continue: renderMissionPlaceholder,
    reset: resetGame
  });
}

function resetGame() {
  localStorage.removeItem(CONFIG.storageKey);
  state.screen = "welcome";
  state.groomName = "";
  state.startedAt = null;
  vibrate(30);
  renderWelcome();
}

loadState();
renderBoot();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
