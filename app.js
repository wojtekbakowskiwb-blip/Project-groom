const CONFIG = {
  appName: "PROJECT GROOM",
  handlerCodename: "M",
  storageKey: "project-groom-v02-agent",
  introDelayMs: 1500,
  codeLength: 8
};

const IDENTITIES = Object.freeze({
  "GROOM-007": {
    id: "groom",
    clearance: "OMEGA",
    codename: "PAN MŁODY",
    title: "Obiekt operacji",
    symbol: "G",
    accent: "gold",
    role: "Jesteś centralnym punktem operacji. Nie znasz pełnego planu, ale część decyzji może zostać podjęta wyłącznie przez Ciebie.",
    directive: "Słuchaj zespołu, lecz ostatnie słowo należy do Ciebie. M może zwracać się bezpośrednio do Ciebie.",
    classified: "Twój kod nie bierze udziału w losowaniu. Organizator przekazuje go Tobie osobiście."
  },
  "ATLAS-314": {
    id: "atlas",
    clearance: "ALFA",
    codename: "ATLAS",
    title: "Kartograf",
    symbol: "A",
    accent: "green",
    role: "Odpowiadasz za orientację w terenie, zapamiętywanie punktów i łączenie fizycznych lokalizacji ze wskazówkami.",
    directive: "Pilnuj kierunku marszu. Zwracaj uwagę na układ terenu, odległości i miejsca, do których grupa może wrócić."
  },
  "CIPHER-82": {
    id: "cipher",
    clearance: "ALFA",
    codename: "CIPHER",
    title: "Kryptolog",
    symbol: "C",
    accent: "blue",
    role: "Rozpoznajesz szyfry, schematy, ciągi znaków i informacje ukryte w pozornie zwyczajnych komunikatach.",
    directive: "Nie ignoruj liter, cyfr ani kolejności elementów. To, co wygląda na błąd, może być kluczem."
  },
  "ECHO-441": {
    id: "echo",
    clearance: "BETA",
    codename: "ECHO",
    title: "Łącznik",
    symbol: "E",
    accent: "violet",
    role: "Odpowiadasz za komunikację w grupie i przekazywanie informacji dokładnie tak, jak zostały odebrane.",
    directive: "Pilnuj, aby każdy usłyszał kluczowe ustalenia. Nie zmieniaj treści komunikatów od M."
  },
  "HAWK-905": {
    id: "hawk",
    clearance: "BETA",
    codename: "HAWK",
    title: "Obserwator",
    symbol: "H",
    accent: "amber",
    role: "Twoją przewagą jest spostrzegawczość. Dostrzegasz detale, ślady i różnice, które inni zwykle pomijają.",
    directive: "Patrz wyżej, niżej i za siebie. Przedmioty nie zawsze będą ukryte na wysokości wzroku."
  },
  "LEDGER-19": {
    id: "ledger",
    clearance: "BETA",
    codename: "LEDGER",
    title: "Archiwista",
    symbol: "L",
    accent: "paper",
    role: "Porządkujesz fakty, zapamiętujesz kolejność wydarzeń i wychwytujesz informacje, które mogą przydać się później.",
    directive: "Notuj w pamięci nazwiska, godziny, liczby i kolejność odnajdywanych śladów."
  },
  "NEXUS-623": {
    id: "nexus",
    clearance: "GAMMA",
    codename: "NEXUS",
    title: "Technik",
    symbol: "N",
    accent: "cyan",
    role: "Obsługujesz mechanizmy, urządzenia, aplikację i elementy wymagające logicznego połączenia kilku części.",
    directive: "Zanim użyjesz siły, sprawdź mechanizm. Szukaj sposobu działania, nie sposobu zniszczenia."
  },
  "ORACLE-56": {
    id: "oracle",
    clearance: "GAMMA",
    codename: "ORACLE",
    title: "Analityk",
    symbol: "O",
    accent: "red",
    role: "Łączysz fakty i przewidujesz następstwa decyzji. Twoim zadaniem jest oddzielanie przypadku od prawidłowości.",
    directive: "Zadawaj pytanie: dlaczego właśnie teraz i dlaczego właśnie tutaj?"
  },
  "RAVEN-208": {
    id: "raven",
    clearance: "GAMMA",
    codename: "RAVEN",
    title: "Tropiciel",
    symbol: "R",
    accent: "silver",
    role: "Odczytujesz ślady pozostawione w otoczeniu i potrafisz ocenić, który trop jest świeży, a który ma odwrócić uwagę.",
    directive: "Sprawdzaj, co się nie zgadza z otoczeniem. Najważniejszy trop może wyglądać na przypadkowy."
  },
  "WARDEN-73": {
    id: "warden",
    clearance: "DELTA",
    codename: "WARDEN",
    title: "Strażnik zespołu",
    symbol: "W",
    accent: "orange",
    role: "Pilnujesz bezpieczeństwa, kompletności grupy i przestrzegania zasad operacji.",
    directive: "Nikt nie zostaje sam. Zatrzymaj grupę, gdy teren lub zadanie staje się ryzykowne."
  }
});

const state = {
  screen: "boot",
  identityCode: "",
  identityId: "",
  authenticatedAt: null,
  briefingAccepted: false,
  sound: true
};

const el = id => document.getElementById(id);
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
    if (saved && typeof saved === "object") Object.assign(state, saved);
  } catch (_) {
    localStorage.removeItem(CONFIG.storageKey);
  }
}

function normalizeCode(value) {
  return value
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[–—_]/g, "-")
    .replace(/[^A-Z0-9-]/g, "");
}

function currentIdentity() {
  return IDENTITIES[state.identityCode] || null;
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
      click: [240, 0.035],
      confirm: [520, 0.11],
      alert: [118, 0.18],
      reveal: [330, 0.38]
    };
    const [freq, length] = map[type] || map.click;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if (type === "reveal") osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + length);
    osc.type = type === "alert" ? "sawtooth" : "sine";
    gain.gain.setValueAtTime(0.045, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + length);
    osc.start();
    osc.stop(ctx.currentTime + length);
  } catch (_) {}
}

function setStatus(text) {
  statusText.textContent = text;
}

function updateClock() {
  el("clock").textContent = new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}
setInterval(updateClock, 1000);
updateClock();

soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  soundIcon.textContent = state.sound ? "◖" : "×";
  soundToggle.setAttribute("aria-pressed", String(state.sound));
  saveState();
  tone("click");
});

function button(label, action, kind = "primary", extra = "") {
  return `<button class="${kind}" data-action="${action}" ${extra}>${label}</button>`;
}

function bindActions(actions) {
  screen.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      tone("click");
      actions[btn.dataset.action]?.(btn);
    });
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[char]);
}

function renderBoot() {
  state.screen = "boot";
  setStatus("SZYFROWANIE KANAŁU");
  screen.innerHTML = `
    <section class="card boot-card fade-in">
      <div class="seal"><span>PG</span></div>
      <p class="kicker">Kanał zabezpieczony / protokół v0.2</p>
      <h1>Project<br>Groom.</h1>
      <p class="lead type-line">Weryfikacja urządzenia operacyjnego</p>
      <div class="progress-line"><span></span></div>
      <div class="boot-metrics" aria-hidden="true">
        <span>IDENT // 10</span><span>LINK // AES</span><span>STATUS // LIVE</span>
      </div>
    </section>`;

  setTimeout(() => {
    const identity = currentIdentity();
    if (identity && state.authenticatedAt) renderResume(identity);
    else renderAccess();
  }, CONFIG.introDelayMs);
}

function renderAccess(errorMessage = "") {
  state.screen = "access";
  saveState();
  setStatus("OCZEKIWANIE NA KOD");

  screen.innerHTML = `
    <section class="card access-card fade-in">
      <div class="classified-tag"><span></span> DOSTĘP INDYWIDUALNY</div>
      <p class="kicker">Identyfikacja uczestnika</p>
      <h1>Wprowadź<br>swój kod.</h1>
      <p class="lead">Każdy uczestnik otrzymał osobny kod dostępu. Kod może zostać aktywowany tylko na jednym urządzeniu.</p>

      <form id="accessForm" class="access-form" novalidate>
        <label for="accessCode">Kod operacyjny</label>
        <div class="code-input-shell ${errorMessage ? "has-error" : ""}">
          <span class="code-prefix" aria-hidden="true">#</span>
          <input
            id="accessCode"
            name="accessCode"
            type="text"
            inputmode="text"
            autocomplete="off"
            autocapitalize="characters"
            spellcheck="false"
            maxlength="12"
            placeholder="•••••-•••"
            aria-describedby="codeHint codeError"
          />
          <span class="scan-line" aria-hidden="true"></span>
        </div>
        <p id="codeHint" class="field-hint">Zachowaj myślnik. Wielkość liter nie ma znaczenia.</p>
        <p id="codeError" class="field-error" role="alert">${escapeHtml(errorMessage)}</p>
        ${button("Potwierdź kod", "verify", "primary access-submit", 'type="submit"')}
      </form>

      <div class="security-note">
        <span class="security-icon" aria-hidden="true">◇</span>
        <p><strong>Nie pokazuj kodu innym.</strong><br>Po potwierdzeniu otrzymasz nową tożsamość i indywidualne zadanie operacyjne.</p>
      </div>
    </section>`;

  const form = el("accessForm");
  const input = el("accessCode");
  let submitting = false;

  input.addEventListener("input", () => {
    const caret = input.selectionStart;
    input.value = normalizeCode(input.value);
    input.setSelectionRange(caret, caret);
    input.closest(".code-input-shell")?.classList.remove("has-error");
    el("codeError").textContent = "";
  });

  const verify = () => {
    if (submitting) return;
    const code = normalizeCode(input.value);
    const identity = IDENTITIES[code];

    if (!identity) {
      vibrate([55, 45, 55]);
      tone("alert");
      input.closest(".code-input-shell")?.classList.add("has-error");
      el("codeError").textContent = "Kod nierozpoznany. Sprawdź zapis i spróbuj ponownie.";
      input.select();
      return;
    }

    submitting = true;
    state.identityCode = code;
    state.identityId = identity.id;
    state.authenticatedAt = new Date().toISOString();
    state.briefingAccepted = false;
    saveState();
    vibrate([40, 25, 90]);
    tone("confirm");
    renderIdentityDecrypt(identity);
  };

  form.addEventListener("submit", event => {
    event.preventDefault();
    verify();
  });

  bindActions({ verify });
  setTimeout(() => input.focus({ preventScroll: true }), 180);
}

function renderIdentityDecrypt(identity) {
  state.screen = "decrypt";
  saveState();
  setStatus("ODSZYFROWYWANIE TOŻSAMOŚCI");
  screen.innerHTML = `
    <section class="card decrypt-card fade-in">
      <div class="decrypt-grid" aria-hidden="true"></div>
      <div class="identity-orb accent-${identity.accent}"><span>${identity.symbol}</span></div>
      <p class="kicker">Dostęp przyznany / poziom ${identity.clearance}</p>
      <h2>Tworzenie nowej tożsamości…</h2>
      <div class="decrypt-lines" aria-hidden="true">
        <span style="--w: 86%"></span><span style="--w: 64%"></span><span style="--w: 93%"></span><span style="--w: 48%"></span>
      </div>
      <div class="progress-line decrypt-progress"><span></span></div>
    </section>`;

  setTimeout(() => {
    tone("reveal");
    renderIdentityReveal(identity);
  }, 1650);
}

function renderIdentityReveal(identity) {
  state.screen = "identity";
  saveState();
  setStatus("TOŻSAMOŚĆ AKTYWNA");
  screen.innerHTML = `
    <section class="card identity-card fade-in accent-border-${identity.accent}">
      <div class="identity-header">
        <div class="identity-orb large accent-${identity.accent}"><span>${identity.symbol}</span></div>
        <div class="clearance-stamp">
          <small>POZIOM DOSTĘPU</small>
          <strong>${identity.clearance}</strong>
        </div>
      </div>

      <p class="kicker">Nowa tożsamość przydzielona</p>
      <h1 class="codename">${identity.codename}</h1>
      <p class="identity-title">${identity.title}</p>

      <div class="identity-data">
        <div><span>STATUS</span><strong>AKTYWNY</strong></div>
        <div><span>ID AGENTA</span><strong>PG-${identity.id.toUpperCase()}</strong></div>
      </div>

      <div class="mission-block">
        <span class="block-label">PROFIL OPERACYJNY</span>
        <p>${identity.role}</p>
      </div>

      <div class="directive-block">
        <span class="block-label">DYREKTYWA OD M</span>
        <p>${identity.directive}</p>
      </div>

      ${identity.classified ? `<div class="groom-note"><span>TYLKO DLA PANA MŁODEGO</span><p>${identity.classified}</p></div>` : ""}

      <div class="actions">
        ${button("Zapamiętałem tożsamość", "accept")}
      </div>
      <p class="microcopy">Nie udostępniaj tego ekranu pozostałym uczestnikom.</p>
    </section>`;

  bindActions({ accept: () => renderBriefing(identity) });
}

function renderBriefing(identity) {
  state.screen = "briefing";
  saveState();
  setStatus("PRZEKAZ OD M");
  screen.innerHTML = `
    <section class="card briefing-card fade-in">
      <div class="message-meta"><span>NADAWCA: M</span><span>PRIORYTET: WYSOKI</span></div>
      <p class="kicker">Pierwszy przekaz operacyjny</p>
      <h2>${identity.codename}, kanał jest aktywny.</h2>
      <p class="copy">Od tej chwili działasz pod przydzieloną tożsamością. Pozostali uczestnicy otrzymali własne role. Nie ujawniaj wszystkich szczegółów od razu — właściwy moment może nadejść później.</p>
      <p class="copy">Odszukaj pozostałych agentów. Kiedy wszyscy potwierdzą swoje kody, zbierzcie się przy panu młodym i czekajcie na uruchomienie pierwszej transmisji.</p>

      <div class="dossier compact">
        <small>TWÓJ STATUS</small>
        <strong>${identity.codename} // GOTOWY</strong>
      </div>

      <div class="actions">
        ${button("Przejdź do ekranu gotowości", "ready")}
        ${button("Pokaż ponownie tożsamość", "identity", "secondary")}
      </div>
    </section>`;

  bindActions({
    ready: () => {
      state.briefingAccepted = true;
      saveState();
      renderReady(identity);
    },
    identity: () => renderIdentityReveal(identity)
  });
}

function renderReady(identity) {
  state.screen = "ready";
  state.briefingAccepted = true;
  saveState();
  setStatus("AGENT W GOTOWOŚCI");
  screen.innerHTML = `
    <section class="card ready-card fade-in accent-border-${identity.accent}">
      <div class="ready-pulse"><span>${identity.symbol}</span></div>
      <p class="kicker">Połączenie ustanowione</p>
      <h2>${identity.codename}<br>jest w gotowości.</h2>
      <p class="lead">Nie zamykaj aplikacji. Pierwsza właściwa transmisja zostanie dodana w kolejnym module.</p>
      <div class="agent-chip">
        <span class="online-dot"></span>
        <div><small>AKTYWNA TOŻSAMOŚĆ</small><strong>${identity.title}</strong></div>
      </div>
      <div class="actions">
        ${button("Otwórz dossier agenta", "identity", "secondary")}
        ${button("Wróć do przekazu M", "briefing", "secondary")}
      </div>
      <button class="reset-link" data-action="reset">Zmień uczestnika na tym urządzeniu</button>
    </section>`;

  bindActions({
    identity: () => renderIdentityReveal(identity),
    briefing: () => renderBriefing(identity),
    reset: confirmReset
  });
}

function renderResume(identity) {
  setStatus("ODNALEZIONO TOŻSAMOŚĆ");
  screen.innerHTML = `
    <section class="card resume-card fade-in accent-border-${identity.accent}">
      <div class="identity-orb accent-${identity.accent}"><span>${identity.symbol}</span></div>
      <p class="kicker">Zabezpieczony zapis lokalny</p>
      <h2>Witaj ponownie,<br>${identity.codename}.</h2>
      <p class="copy">To urządzenie jest przypisane do aktywnej tożsamości <strong>${identity.title}</strong>.</p>
      <div class="actions">
        ${button("Kontynuuj operację", "continue")}
        ${button("Pokaż dossier", "identity", "secondary")}
      </div>
      <button class="reset-link" data-action="reset">Zmień uczestnika na tym urządzeniu</button>
    </section>`;

  bindActions({
    continue: () => state.briefingAccepted ? renderReady(identity) : renderBriefing(identity),
    identity: () => renderIdentityReveal(identity),
    reset: confirmReset
  });
}

function confirmReset() {
  setStatus("POTWIERDZENIE WYMAGANE");
  screen.innerHTML = `
    <section class="card fade-in">
      <p class="kicker">Operacja lokalna</p>
      <h2>Zmienić uczestnika?</h2>
      <p class="copy">Bieżąca tożsamość zostanie usunięta z tego urządzenia. Kod będzie można wpisać ponownie.</p>
      <div class="actions">
        ${button("Usuń tożsamość", "confirm", "danger")}
        ${button("Anuluj", "cancel", "secondary")}
      </div>
    </section>`;

  bindActions({
    confirm: resetIdentity,
    cancel: () => {
      const identity = currentIdentity();
      if (identity) renderReady(identity);
      else renderAccess();
    }
  });
}

function resetIdentity() {
  localStorage.removeItem(CONFIG.storageKey);
  Object.assign(state, {
    screen: "access",
    identityCode: "",
    identityId: "",
    authenticatedAt: null,
    briefingAccepted: false,
    sound: true
  });
  soundIcon.textContent = "◖";
  vibrate(35);
  renderAccess();
}

loadState();
soundIcon.textContent = state.sound ? "◖" : "×";
soundToggle.setAttribute("aria-pressed", String(state.sound));
renderBoot();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
