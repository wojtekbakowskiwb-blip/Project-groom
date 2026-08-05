const CONFIG = {
  appName: "PROJECT GROOM",
  handlerCodename: "W",
  storageKey: "project-groom-v031-agent",
  introDelayMs: 1200,
  codeLength: 8
};

const IDENTITIES = Object.freeze({
  "GROOM-007": {
    id: "groom",
    clearance: "OMEGA",
    codename: "PAN MŁODY",
    title: "Kamis Kamiński // rocznik 1993",
    symbol: "G",
    accent: "gold",
    role: "Jesteś centralnym punktem operacji. Nie znasz pełnego planu, ale część decyzji może zostać podjęta wyłącznie przez Ciebie.",
    directive: "Słuchaj zespołu, lecz ostatnie słowo należy do Ciebie. W może zwracać się bezpośrednio do Ciebie.",
    classified: "Twój kod nie bierze udziału w losowaniu. Organizator przekazuje go Tobie osobiście.",
    dossier: {
      fullName: "Kamis Kamiński",
      birthYear: "1993",
      status: "OBIEKT OPERACJI ALPHA",
      summary: "Łączy analityczny umysł, zamiłowanie do przygód i nieustanną potrzebę odkrywania, jak działają ludzie, historie i dobrze zaprojektowane zagadki.",
      facts: [
        ["LOT", "Świat lotnictwa, podróży i procedur, w którym precyzja ma znaczenie."],
        ["NO TIME GAMES", "Zagadki, scenariusze i doświadczenia, które wymagają pomysłowości oraz dobrej pracy zespołowej."],
        ["FILOZOFIA", "Skłonność do zadawania pytań, na które nie zawsze istnieje jedna wygodna odpowiedź."],
        ["MAGGIE", "Narzeczona i najważniejsza osoba w aktach. Kryptonim operacyjny: FUTURE WIFE."],
        ["GOLF", "Cierpliwość, precyzja i konsekwencja — najlepiej sprawdzane na polu."],
        ["UNCHARTED / INDIANA JONES", "Przygoda, artefakty, ukryte przejścia i historie, które zaczynają się od niepozornej wskazówki."],
        ["STUDIO GHIBLI", "Wyobraźnia, klimat i opowieści, w których szczegóły są równie ważne jak główna misja."],
        ["KAWA VIDEOBEATS", "Firma produkcji muzycznej, szczególnie związana z piosenką „Kręci mi się” oraz teledyskiem dla Ryba Warszawski MC."],
        ["FOO FIGHTERS", "Głośna energia, mocne riffy i ścieżka dźwiękowa do operacji wymagających tempa."]
      ],
      expansion: ["Historia operacyjna", "Osiągnięcia", "Zdjęcia z misji", "Odznaczenia", "Znani współpracownicy"]
    }
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
    codename: "SZYFRATOR",
    title: "Wojtek // Szyfrator",
    symbol: "C",
    accent: "blue",
    role: "Szyfrator", classified: "Kod przypisany organizatorowi. Nie bierze udziału w losowaniu.",
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
    directive: "Pilnuj, aby każdy usłyszał kluczowe ustalenia. Nie zmieniaj treści komunikatów od W."
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
  readyConfirmed: false,
  operationIntroAccepted: false,
  firstTaskOpened: false,
  firstTaskCompleted: false,
  firstTaskAttempts: 0,
  courtReached: false,
  courtConfirmed: false,
  pushupResult: null,
  pushupPassed: false,
  altankaConfirmed: false,
  cipherHintsUsed: 0,
  altankaMatchCount: null,
  altankaMissionCompleted: false,
  bramaConfirmed: false,
  sound: true
};

const el = id => document.getElementById(id);
const screen = el("screen");
const statusText = el("statusText");
const soundToggle = el("soundToggle");
const soundIcon = el("soundIcon");

function isCipherAgent(identity) {
  return Boolean(identity && (
    identity.codename === "SZYFRATOR" ||
    identity.title === "Agent Szyfrator" ||
    identity.role === "Szyfrator"
  ));
}

function cipherScore() {
  return Math.max(0, 10 - Number(state.cipherHintsUsed || 0));
}

function setupGlobalMenu() {
  const menu = document.getElementById("globalGameMenu");
  if (!menu) return;

  menu.hidden = false;
  const hasIdentity = Boolean(state.identityId);
  const changeButton = menu.querySelector('[data-global-action="change-player"]');
  const exitButton = menu.querySelector('[data-global-action="exit-game"]');
  if (changeButton) changeButton.hidden = !hasIdentity;
  if (exitButton) exitButton.hidden = !hasIdentity;

  menu.querySelectorAll("[data-global-action]").forEach(button => {
    button.onclick = () => {
      const action = button.dataset.globalAction;

      if (action === "map") {
        renderMapScreen();
        return;
      }

      if (action === "change-player") {
        const confirmed = window.confirm(
          "Zmienić gracza na tym urządzeniu? Postęp obecnego gracza pozostanie zapisany tylko do chwili zmiany."
        );
        if (!confirmed) return;
        resetIdentity();
        return;
      }

      if (action === "exit-game") {
        const confirmed = window.confirm(
          "Wyjść z gry? Postęp zostanie zapisany i będzie można wrócić później."
        );
        if (!confirmed) return;
        state.screen = "exit";
        saveState();
        renderExitScreen();
      }
    };
  });
}

function renderExitScreen() {
  const identity = currentIdentity();
  setStatus("SESJA WSTRZYMANA");

  screen.innerHTML = `
    <section class="card exit-card fade-in">
      <p class="kicker">Project Groom</p>
      <h2>Gra została wstrzymana.</h2>
      <p class="lead">Postęp został zapisany na tym urządzeniu.</p>

      <div class="actions">
        ${button("Wróć do gry", "resume-game")}
        ${button("Zmień gracza", "change-player", "secondary")}
      </div>
    </section>`;

  bindActions({
    "resume-game": () => {
      if (!identity) {
        renderAccess();
setupGlobalMenu();
        return;
      }
      renderResume(identity);
    },
    "change-player": () => resetIdentity()
  });

  setupGlobalMenu();
}

function renderMapScreen() {
  const identity = currentIdentity();

  setStatus("MAPA OPERACJI");

  screen.innerHTML = `
    <section class="card map-screen-card fade-in ${identity ? `accent-border-${identity.accent}` : ""}">
      <div class="task-header">
        <div>
          <p class="kicker">Nawigacja operacyjna</p>
          <h2>Mapa terenu</h2>
        </div>
        <div class="task-number">M</div>
      </div>

      <div class="map-frame">
        <img
          src="assets/mapa-operacji.jpg"
          alt="Mapa terenu operacji Project Groom"
          onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
        >
        <div class="map-placeholder" hidden>
          <span>MAPA NIE ZOSTAŁA JESZCZE DODANA</span>
          <p>Dodaj zdjęcie jako:</p>
          <strong>assets/mapa-operacji.jpg</strong>
        </div>
      </div>

      <div class="map-legend">
        <div><span>01</span><p>Kort</p></div>
        <div><span>02</span><p>Wyspa</p></div>
        <div><span>03</span><p>Mini staw</p></div>
        <div><span>04</span><p>Sad</p></div>
        <div><span>05</span><p>Altanka</p></div>
        <div><span>06</span><p>Brama wjazdowa</p></div>
        <div><span>07</span><p>Domek</p></div>
        <div><span>08</span><p>Plaża</p></div>
      </div>

      <div class="actions">
        ${button("Wróć do gry", "back-to-game")}
      </div>
    </section>`;

  bindActions({
    "back-to-game": () => identity ? renderResume(identity) : renderAccess()
  });

  setupGlobalMenu();
}

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
  setupGlobalMenu();
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
    state.readyConfirmed = false;
    state.operationIntroAccepted = false;
    state.firstTaskOpened = false;
    state.firstTaskCompleted = false;
    state.firstTaskAttempts = 0;
    state.courtReached = false;
    state.courtConfirmed = false;
    state.pushupResult = null;
    state.pushupPassed = false;
    state.altankaConfirmed = false;
    state.cipherHintsUsed = 0;
    state.altankaMatchCount = null;
    state.altankaMissionCompleted = false;
    state.bramaConfirmed = false;
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


function renderGroomDossier(identity) {
  if (!identity.dossier) return "";
  const dossier = identity.dossier;
  const facts = dossier.facts.map(([label, description]) => `
    <article class="profile-fact">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(description)}</p>
    </article>`).join("");
  const expansion = dossier.expansion.map(item => `<li>${escapeHtml(item)}</li>`).join("");

  return `
    <section class="groom-dossier" aria-label="Rozszerzone akta pana młodego">
      <div class="dossier-topline">
        <span>TAJNE // POZIOM OMEGA</span>
        <strong>AKTA OSOBOWE</strong>
      </div>
      <div class="dossier-personal">
        <div><span>IMIĘ I NAZWISKO</span><strong>${escapeHtml(dossier.fullName)}</strong></div>
        <div><span>ROCZNIK</span><strong>${escapeHtml(dossier.birthYear)}</strong></div>
        <div><span>STATUS</span><strong>${escapeHtml(dossier.status)}</strong></div>
      </div>
      <p class="dossier-summary">${escapeHtml(dossier.summary)}</p>
      <div class="profile-facts">${facts}</div>
      <div class="dossier-expansion">
        <span class="block-label">AKTA W TRAKCIE UZUPEŁNIANIA</span>
        <ul>${expansion}</ul>
      </div>
    </section>`;
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
        <span class="block-label">DYREKTYWA OD W</span>
        <p>${identity.directive}</p>
      </div>

      ${identity.classified ? `<div class="groom-note"><span>TYLKO DLA PANA MŁODEGO</span><p>${identity.classified}</p></div>` : ""}

      ${renderGroomDossier(identity)}

      ${isCipherAgent(identity) ? `
        <div class="cipher-agent-card">
          <p class="block-label">SPECJALIZACJA SPECJALNA</p>
          <h3>SZYFRATOR</h3>
          <p>Znasz wszystkie kody operacji i możesz udzielać drużynie podpowiedzi.</p>
          <p>Każda udzielona podpowiedź kosztuje drużynę <strong>1 punkt</strong>.</p>
          <div class="cipher-score-line">
            <span>AKTUALNY WYNIK DRUŻYNY</span>
            <strong>${cipherScore()} / 10</strong>
          </div>
          <button class="secondary-button cipher-hint-button" type="button" data-action="use-cipher-hint">Zarejestruj podpowiedź −1 pkt</button>
        </div>
      ` : ""}

      <div class="actions">
        ${button("Zapamiętałem tożsamość", "accept")}
      </div>
      <p class="microcopy">Nie udostępniaj tego ekranu pozostałym uczestnikom.</p>
    </section>`;

  bindActions({
    "use-cipher-hint": () => {
      if (!isCipherAgent(identity)) return;
      if (!window.confirm("Zarejestrować udzielenie podpowiedzi? Drużyna straci 1 punkt.")) return;
      state.cipherHintsUsed = Number(state.cipherHintsUsed || 0) + 1;
      saveState();
      vibrate([45, 30, 45]);
      tone("alert");
      renderIdentityReveal(identity);
    }, accept: () => renderBriefing(identity) });
}

function renderBriefing(identity) {
  state.screen = "briefing";
  saveState();
  setStatus("PRZEKAZ OD W");
  screen.innerHTML = `
    <section class="card briefing-card fade-in">
      <div class="message-meta"><span>NADAWCA: W</span><span>PRIORYTET: WYSOKI</span></div>
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
  setStatus("OCZEKIWANIE NA GOTOWOŚĆ");

  screen.innerHTML = `
    <section class="card ready-card fade-in accent-border-${identity.accent}">
      <div class="ready-pulse"><span>${identity.symbol}</span></div>
      <p class="kicker">Protokół rozpoczęcia operacji</p>
      <h2>${identity.codename},<br>potwierdź gotowość.</h2>
      <p class="lead">Gdy wszyscy agenci aktywują swoje profile i potwierdzą gotowość, rozpoczyna się pierwsze wspólne zadanie.</p>

      <div class="agent-chip">
        <span class="online-dot"></span>
        <div>
          <small>AKTYWNA TOŻSAMOŚĆ</small>
          <strong>${identity.title}</strong>
        </div>
      </div>

      <div class="readiness-checklist">
        <div><span>01</span><p>Tożsamość została aktywowana</p><strong>✓</strong></div>
        <div><span>02</span><p>Profil agenta został odczytany</p><strong>✓</strong></div>
        <div><span>03</span><p>Gotowość do rozpoczęcia gry</p><strong>—</strong></div>
      </div>

      <div class="actions">
        ${button("Jestem gotowy", "confirm-ready")}
        ${button("Otwórz dossier agenta", "identity", "secondary")}
      </div>
      <button class="reset-link" data-action="reset">Zmień uczestnika na tym urządzeniu</button>
    </section>`;

  bindActions({
    "confirm-ready": () => {
      state.readyConfirmed = true;
      state.operationIntroAccepted = false;
      state.firstTaskOpened = false;
      saveState();
      vibrate([35, 30, 80]);
      tone("confirm");
      renderOperationIntro(identity);
    },
    identity: () => renderIdentityReveal(identity),
    reset: confirmReset
  });
}


function renderOperationIntro(identity) {
  state.screen = "operation-intro";
  state.readyConfirmed = true;
  state.firstTaskOpened = false;
  saveState();
  setStatus("TRANSMISJA W");

  screen.innerHTML = `
    <section class="card operation-intro-card fade-in accent-border-${identity.accent}">
      <div class="transmission-head">
        <div class="transmission-signal" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <div>
          <p class="kicker">Kanał priorytetowy / W</p>
          <h2>Operacja<br>Project Groom</h2>
        </div>
      </div>

      <div class="m-transmission">
        <p><strong>Witaj, Agencie ${identity.codename}.</strong></p>

        <p>
          To nie jest zwykły wieczór kawalerski.
          To ostatnia operacja Agenta <strong>GROOM 007</strong>
          przed rozpoczęciem nowego rozdziału jego życia.
        </p>

        <p>
          Przed nami walka o losy jednego z największych agentów w historii.
          Musimy odzyskać utracone dane, wiedzę i kody, zanim GROOM 007
          bezpowrotnie straci kontakt z rzeczywistością.
        </p>

        <p>
          Przed Wami misje ukryte w różnych częściach tego świata.
          Każda z nich odsłoni fragment większej układanki i wskaże dalszy kierunek.
        </p>

        <p>
          Będziecie wiedzieli, dokąd zmierzacie.
          Nie poznacie jednak prawdziwego celu, dopóki wszystkie elementy
          nie znajdą się na swoim miejscu.
        </p>

        <div class="cipher-briefing">
          <p class="block-label">INFORMACJA OPERACYJNA</p>
          <p>Wśród Was znajduje się Agent Szyfrator. Zna wszystkie kody operacji i może udzielać podpowiedzi w dowolnym momencie.</p>
          <p>Każda podpowiedź odbiera drużynie 1 punkt. Liczba utraconych punktów wpłynie na poziom trudności zagadki finałowej.</p>
        </div>
      </div>

      <div class="mission-protocol">
        <div>
          <span>01</span>
          <p>Pozyskujcie dane, kody i informacje.</p>
        </div>
        <div>
          <span>02</span>
          <p>Nie pomijajcie żadnej wskazówki.</p>
        </div>
        <div>
          <span>03</span>
          <p>Misja po misji. Cel pozostaje tajny.</p>
        </div>
      </div>

      <div class="classified-note">
        <span>KLASYFIKACJA: OMEGA</span>
        <p>Nie wszystkie informacje będą zrozumiałe od razu. Zachowajcie je do finału operacji.</p>
      </div>

      <div class="actions">
        ${button("Rozpocznij operację", "begin-operation")}
        ${button("Otwórz profil agenta", "identity", "secondary")}
      </div>
    </section>`;

  bindActions({
    "begin-operation": () => {
      state.operationIntroAccepted = true;
      state.firstTaskOpened = true;
      saveState();
      vibrate([35, 25, 75]);
      tone("reveal");
      renderFirstTask(identity);
    },
    identity: () => renderIdentityReveal(identity)
  });
}

function renderFirstTask(identity, message = "") {
  state.screen = "first-task";
  state.readyConfirmed = true;
  state.firstTaskOpened = true;
  saveState();

  const completed = state.firstTaskCompleted;
  const showHint = !completed && state.firstTaskAttempts >= 2;
  setStatus(completed ? "LOKALIZACJA ODSZYFROWANA" : "ZADANIE 01 AKTYWNE");

  screen.innerHTML = `
    <section class="card first-task-card fade-in accent-border-${identity.accent}">
      <div class="task-header">
        <div>
          <p class="kicker">Operacja Project Groom</p>
          <h2>Droga do pierwszej misji</h2>
        </div>
        <div class="task-number">01</div>
      </div>

      <div class="operation-progress" aria-label="Postęp operacji">
        <span style="width:${completed ? "10%" : "4%"}"></span>
      </div>
      <div class="progress-meta">
        <span>OPERACJA THE GROOM</span>
        <strong>${completed ? "TROP ODKRYTY" : "SZYFR"}</strong>
      </div>

      <article class="group-mission ${completed ? "is-complete" : ""}">
        <div class="mission-classification">
          <span>ZADANIE ZESPOŁOWE</span>
          <strong>${completed ? "ODSZYFROWANE" : "AKTYWNE"}</strong>
        </div>

        <p class="block-label">KRYPTONIM ZADANIA</p>
        <h3>PIĘĆ ARTEFAKTÓW</h3>

        <p class="mission-intro">
          Agent 001 pozostawił pięć śladów związanych z przygodami Indiany Jonesa.
          Odszyfruj ukryty kod. Kolejność ma znaczenie.
        </p>

        <div class="individual-rule">
          <span>ZASADA DOSTĘPU</span>
          <p>Każdy uczestnik wpisuje kod na swoim telefonie. Przepustki nie można przekazać innemu agentowi.</p>
        </div>

        <div class="film-sequence shuffled" aria-label="Filmy Indiana Jones">
          <div><p><strong>Kingdom</strong> of the Crystal Skull</p></div>
          <div><p>The Last <strong>Crusade</strong></p></div>
          <div><p><strong>Raiders</strong> of the Lost Ark</p></div>
          <div><p><strong>Dial</strong> of Destiny</p></div>
          <div><p><strong>Temple</strong> of Doom</p></div>
        </div>

        ${completed ? `
          <div class="decoded-location">
            <div class="decoded-stamp">PRZEPUSTKA AKTYWNA</div>
            <p class="block-label">INDYWIDUALNA PRZEPUSTKA</p>
            <h3>NEXT MISSION</h3>
            <p class="riddle-location">NEXT MISSION IS WHERE <strong>LOVE MEANS NOTHING.</strong></p>
            <p class="location-clue">Odszyfruj miejsce i udaj się tam z całą drużyną.</p>
            <p class="location-note">Gdy znajdziesz się w obrębie kolejnej misji, potwierdź gotowość.</p>
          </div>
        ` : `
          <form class="cipher-form" id="firstTaskForm" autocomplete="off">
            <label for="firstTaskCode">WPROWADŹ SWÓJ PIĘCIOLITEROWY KOD</label>
            <input
              id="firstTaskCode"
              name="firstTaskCode"
              type="text"
              maxlength="5"
              inputmode="text"
              autocapitalize="characters"
              spellcheck="false"
              placeholder="•••••"
              aria-describedby="cipherFeedback"
            >
            <button class="primary-button" type="submit">Sprawdź kod</button>
          </form>

          <div id="cipherFeedback" class="cipher-feedback ${message ? "is-visible" : ""}">
            ${message}
          </div>

          ${showHint ? `
            <div class="mission-hint">
              <span>PODPOWIEDŹ OD W</span>
              <p>Zwróć uwagę na wyróżnione słowa. Filmy nie są ułożone we właściwej kolejności.</p>
            </div>
          ` : ""}
        `}
      </article>

      ${completed ? `
        <div class="task-success">
          <span class="success-mark">✓</span>
          <div>
            <small>POTWIERDZENIE SYSTEMOWE</small>
            <strong>Indywidualna przepustka została aktywowana</strong>
          </div>
        </div>
      ` : ""}

      ${completed ? `
        <form class="location-confirm-form" id="courtLocationForm" autocomplete="off">
          <label for="courtLocationInput">WPISZ NAZWĘ MIEJSCA</label>
          <input
            id="courtLocationInput"
            name="courtLocationInput"
            type="text"
            maxlength="20"
            autocapitalize="characters"
            spellcheck="false"
            placeholder="________"
          >
          <button class="primary-button" type="submit">Potwierdź lokalizację</button>
        </form>
        <div id="courtLocationFeedback" class="cipher-feedback"></div>
      ` : ""}

      <div class="actions">
        ${button("Otwórz profil agenta", "identity", "secondary")}
      </div>
    </section>`;

  if (!completed) {
    const form = document.getElementById("firstTaskForm");
    const input = document.getElementById("firstTaskCode");

    input.addEventListener("input", event => {
      event.target.value = event.target.value
        .toUpperCase()
        .replace(/[^A-Z]/g, "")
        .slice(0, 5);
    });

    form.addEventListener("submit", event => {
      event.preventDefault();
      const answer = input.value.trim().toUpperCase();

      if (answer === "RTCKD") {
        state.firstTaskCompleted = true;
        saveState();
        vibrate([45, 25, 45, 25, 110]);
        tone("reveal");
        renderFirstTask(identity);
        return;
      }

      state.firstTaskAttempts = (state.firstTaskAttempts || 0) + 1;
      saveState();
      vibrate([70, 45, 70]);
      tone("alert");
      renderFirstTask(
        identity,
        answer.length < 5
          ? "Kod musi zawierać dokładnie pięć liter."
          : "Kod odrzucony. Sprawdź kolejność filmów i spróbuj ponownie."
      );
    });

    setTimeout(() => input.focus(), 120);
  }

  if (completed) {
    const courtForm = document.getElementById("courtLocationForm");
    const courtInput = document.getElementById("courtLocationInput");
    const courtFeedback = document.getElementById("courtLocationFeedback");

    courtInput.addEventListener("input", event => {
      event.target.value = event.target.value
        .toUpperCase()
        .replace(/[^A-ZĄĆĘŁŃÓŚŹŻ]/g, "")
        .slice(0, 20);
    });

    courtForm.addEventListener("submit", event => {
      event.preventDefault();
      const answer = courtInput.value.trim().toUpperCase();

      if (answer === "KORT") {
        state.courtReached = true;
        state.courtConfirmed = true;
        saveState();
        vibrate([35, 25, 80]);
        tone("confirm");
        renderPushupMission(identity);
        return;
      }

      courtFeedback.classList.add("is-visible");
      courtFeedback.textContent = "Nieprawidłowa lokalizacja. Rozwiąż zagadkę i spróbuj ponownie.";
      vibrate([70, 45, 70]);
      tone("alert");
    });

    setTimeout(() => courtInput.focus(), 120);
  }

  bindActions({
    identity: () => renderIdentityReveal(identity)
  });
}

function renderPushupMission(identity, message = "") {
  state.screen = "pushup-mission";
  state.courtReached = true;
  saveState();

  const passed = state.pushupPassed;
  const result = Number(state.pushupResult || 0);
  const easyHint = passed && result >= 150;

  setStatus(passed ? "MISJA 01 WYKONANA" : "MISJA 01 / KORT");

  screen.innerHTML = `
    <section class="card pushup-card fade-in accent-border-${identity.accent}">
      <div class="task-header">
        <div>
          <p class="kicker">Misja 01 / Kort</p>
          <h2>Test wytrzymałości</h2>
        </div>
        <div class="task-number">01</div>
      </div>

      <article class="group-mission ${passed ? "is-complete" : ""}">
        <div class="mission-classification">
          <span>ZADANIE ZESPOŁOWE</span>
          <strong>${passed ? "ZALICZONE" : "AKTYWNE"}</strong>
        </div>

        <p class="mission-intro">
          Sam intelekt nie wystarczy. Agenci muszą udowodnić,
          że potrafią działać jako zespół.
        </p>

        <div class="pushup-objective">
          <span>CEL OPERACYJNY</span>
          <h3>WYKONAJCIE WSPÓLNIE JAK NAJWIĘCEJ POMPEK</h3>
          <p>Każdy agent może wykonać dowolną liczbę. Liczy się łączna suma całej drużyny.</p>
        </div>

        ${passed ? `
          <div class="result-access ${easyHint ? "omega" : "standard"}">
            <span>${easyHint ? "OMEGA ACCESS" : "STANDARD ACCESS"}</span>
            <strong>${String(result).padStart(4, "0")} POMPEK</strong>
          </div>

          <div class="next-location-riddle">
            <p class="block-label">${easyHint ? "ROZSZERZONA PODPOWIEDŹ" : "PODPOWIEDŹ"}</p>
            ${easyHint ? `
              <p>
                Kolejna misja.
                <br><br>
                Jak w Puerto Rico...
                <br><br>
                Aby się zresetować, musisz się kontrolować, [...] i usunąć w cień.
                <br><br>
                Aby poznać docelowe miejsce, przyda się również WAG naszego snajpera.
              </p>
            ` : `
              <p>
                Kolejny cel ukryto w dwóch niezależnych tropach.
                Pierwszy jest brakującym elementem sekwencji, która przywraca kontrolę nad systemem.
                Drugi pozostawił snajper w zaszyfrowanej informacji o swoim WAG.
                Połącz oba tropy.
              </p>
            `}
          </div>

          <div class="task-success">
            <span class="success-mark">✓</span>
            <div>
              <small>MISJA 01</small>
              <strong>Wskazówka do kolejnej lokalizacji została odblokowana</strong>
            </div>
          </div>

          ${state.altankaConfirmed ? `
            <div class="decoded-location">
              <div class="decoded-stamp">LOKALIZACJA POTWIERDZONA</div>
              <p class="block-label">KOLEJNY PUNKT OPERACJI</p>
              <h3>ALTANKA</h3>
              <p class="location-note">Po dotarciu całej drużyny rozpocznijcie kolejne zadanie.</p>
              <button class="primary-button" type="button" data-action="open-altanka-mission">Rozpocznij zadanie w altance</button>
            </div>
          ` : `
            <form class="location-confirm-form" id="altankaLocationForm" autocomplete="off">
              <label for="altankaLocationInput">WPISZ NAZWĘ KOLEJNEGO MIEJSCA</label>
              <input
                id="altankaLocationInput"
                name="altankaLocationInput"
                type="text"
                maxlength="20"
                autocapitalize="characters"
                spellcheck="false"
                placeholder="________"
              >
              <button class="primary-button" type="submit">Potwierdź lokalizację</button>
            </form>
            <div id="altankaLocationFeedback" class="cipher-feedback"></div>
          `}
        ` : `
          <form class="pushup-form" id="pushupForm" autocomplete="off">
            <label for="pushupCount">ŁĄCZNA LICZBA POMPEK</label>
            <input
              id="pushupCount"
              name="pushupCount"
              type="number"
              min="0"
              max="9999"
              inputmode="numeric"
              placeholder="0100"
              aria-describedby="pushupFeedback"
            >
            <button class="primary-button" type="submit">Zatwierdź wynik</button>
          </form>

          <div id="pushupFeedback" class="cipher-feedback ${message ? "is-visible" : ""}">
            ${message}
          </div>

          <div class="threshold-info">
            <div><span>MINIMUM</span><strong>0100</strong></div>
            <div><span>OMEGA</span><strong>0150+</strong></div>
          </div>
        `}
      </article>

      <div class="actions">
        ${button("Otwórz profil agenta", "identity", "secondary")}
      </div>
    </section>`;

  if (!passed) {
    const form = document.getElementById("pushupForm");
    const input = document.getElementById("pushupCount");

    form.addEventListener("submit", event => {
      event.preventDefault();
      const value = Number.parseInt(input.value, 10);

      if (!Number.isFinite(value) || value < 0) {
        renderPushupMission(identity, "Wprowadź prawidłową łączną liczbę pompek.");
        return;
      }

      state.pushupResult = value;

      if (value < 100) {
        state.pushupPassed = false;
        saveState();
        vibrate([70, 45, 70]);
        tone("alert");
        renderPushupMission(
          identity,
          `Wynik ${String(value).padStart(4, "0")} nie osiąga minimalnego progu operacyjnego 0100.`
        );
        return;
      }

      state.pushupPassed = true;
      saveState();
      vibrate([45, 25, 45, 25, 110]);
      tone("reveal");
      renderPushupMission(identity);
    });

    setTimeout(() => input.focus(), 120);
  }

  if (passed && !state.altankaConfirmed) {
    const altankaForm = document.getElementById("altankaLocationForm");
    const altankaInput = document.getElementById("altankaLocationInput");
    const altankaFeedback = document.getElementById("altankaLocationFeedback");

    altankaInput.addEventListener("input", event => {
      event.target.value = event.target.value
        .toUpperCase()
        .replace(/[^A-ZĄĆĘŁŃÓŚŹŻ]/g, "")
        .slice(0, 20);
    });

    altankaForm.addEventListener("submit", event => {
      event.preventDefault();
      const answer = altankaInput.value.trim().toUpperCase();

      if (answer === "ALTANKA") {
        state.altankaConfirmed = true;
        saveState();
        vibrate([45, 25, 45, 25, 110]);
        tone("reveal");
        renderAltankaMission(identity);
        return;
      }

      altankaFeedback.classList.add("is-visible");
      altankaFeedback.textContent = "Nieprawidłowa lokalizacja. Połącz oba tropy i spróbuj ponownie.";
      vibrate([70, 45, 70]);
      tone("alert");
    });

    setTimeout(() => altankaInput.focus(), 120);
  }

  bindActions({
    "open-altanka-mission": () => renderAltankaMission(identity),
    identity: () => renderIdentityReveal(identity)
  });
}


function renderAltankaMission(identity, message = "") {
  state.screen = "altanka-mission";
  state.altankaConfirmed = true;
  saveState();

  const completed = state.altankaMissionCompleted;
  const matches = Number(state.altankaMatchCount ?? -1);
  let clue = "";
  let clueLabel = "";

  if (completed) {
    if (matches <= 2) {
      clueLabel = "NAJTRUDNIEJSZA PODPOWIEDŹ";
      clue = "Agenci, fatalna wiadomość, nie zebraliście wystarczających danych o lokalizacji kolejnej misji. Trzeba strzelać. Strzelajcie jak kopacze.";
    } else if (matches <= 5) {
      clueLabel = "TRUDNA PODPOWIEDŹ";
      clue = "Misja na granicy. Tam gdzie z reguły strażnicy.";
    } else if (matches <= 9) {
      clueLabel = "ŁATWIEJSZA PODPOWIEDŹ";
      clue = "Do tego strzelają snajperzy. Tam jest kolejna misja.";
    } else {
      clueLabel = "NAJŁATWIEJSZA PODPOWIEDŹ";
      clue = "Jestem zawsze pomiędzy:\n\ndrogą\n\ni\n\ndomem.";
    }
  }

  setStatus(completed ? "MISJA 02 WYKONANA" : "MISJA 02 / ALTANKA");

  screen.innerHTML = `
    <section class="card altanka-card fade-in accent-border-${identity.accent}">
      <div class="task-header">
        <div>
          <p class="kicker">Misja 02 / Altanka</p>
          <h2>Protokół zgodności</h2>
        </div>
        <div class="task-number">02</div>
      </div>

      <article class="group-mission ${completed ? "is-complete" : ""}">
        <div class="mission-classification">
          <span>ZADANIE ZESPOŁOWE</span>
          <strong>${completed ? "ZALICZONE" : "AKTYWNE"}</strong>
        </div>

        <p class="mission-intro">
          Przygotujcie 10 zdjęć kobiet. Agent GROOM 007 układa je od najładniejszej
          do najbrzydszej. Pozostali agenci, bez znajomości jego kolejności,
          wspólnie tworzą własny ranking.
        </p>

        <div class="altanka-rules">
          <div><span>01</span><p>GROOM 007 układa ranking samodzielnie.</p></div>
          <div><span>02</span><p>Pozostali agenci układają wspólny ranking.</p></div>
          <div><span>03</span><p>Policzcie, ile pozycji pokryło się dokładnie.</p></div>
        </div>

        ${completed ? `
          <div class="result-access ${matches === 10 ? "omega" : "standard"}">
            <span>WYNIK ZGODNOŚCI</span>
            <strong>${matches} / 10</strong>
          </div>

          <div class="next-location-riddle">
            <p class="block-label">${clueLabel}</p>
            <p class="preserve-lines">${clue}</p>
          </div>

          ${state.bramaConfirmed ? `
            <div class="decoded-location">
              <div class="decoded-stamp">LOKALIZACJA POTWIERDZONA</div>
              <p class="block-label">KOLEJNY PUNKT OPERACJI</p>
              <h3>BRAMA WJAZDOWA</h3>
              <p class="location-note">Lokalizacja została odblokowana.</p>
            </div>
          ` : `
            <form class="location-confirm-form" id="bramaLocationForm" autocomplete="off">
              <label for="bramaLocationInput">WPISZ NAZWĘ KOLEJNEGO MIEJSCA</label>
              <input id="bramaLocationInput" name="bramaLocationInput" type="text" maxlength="20"
                autocapitalize="characters" spellcheck="false" placeholder="________">
              <button class="primary-button" type="submit">Potwierdź lokalizację</button>
            </form>
            <div id="bramaLocationFeedback" class="cipher-feedback"></div>
          `}
        ` : `
          <form class="match-form" id="altankaMatchForm" autocomplete="off">
            <label for="altankaMatchCount">ILE POZYCJI SIĘ POKRYŁO?</label>
            <input id="altankaMatchCount" name="altankaMatchCount" type="number"
              min="0" max="10" inputmode="numeric" placeholder="0–10">
            <button class="primary-button" type="submit">Zatwierdź wynik</button>
          </form>
          <div id="altankaFeedback" class="cipher-feedback ${message ? "is-visible" : ""}">${message}</div>
        `}
      </article>

      <div class="cipher-score-banner">
        <span>PUNKTY DRUŻYNY</span>
        <strong>${cipherScore()} / 10</strong>
        <small>Wykorzystane podpowiedzi Szyfratora: ${Number(state.cipherHintsUsed || 0)}</small>
      </div>

      <div class="actions">
        ${button("Otwórz profil agenta", "identity", "secondary")}
      </div>
    </section>`;

  if (!completed) {
    const form = document.getElementById("altankaMatchForm");
    const input = document.getElementById("altankaMatchCount");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const value = Number.parseInt(input.value, 10);
      if (!Number.isFinite(value) || value < 0 || value > 10) {
        renderAltankaMission(identity, "Wprowadź wynik od 0 do 10.");
        return;
      }
      state.altankaMatchCount = value;
      state.altankaMissionCompleted = true;
      saveState();
      vibrate([45, 25, 45, 25, 110]);
      tone("reveal");
      renderAltankaMission(identity);
    });
    setTimeout(() => input.focus(), 120);
  }

  if (completed && !state.bramaConfirmed) {
    const form = document.getElementById("bramaLocationForm");
    const input = document.getElementById("bramaLocationInput");
    const feedback = document.getElementById("bramaLocationFeedback");

    input.addEventListener("input", event => {
      event.target.value = event.target.value
        .toUpperCase()
        .replace(/[^A-ZĄĆĘŁŃÓŚŹŻ]/g, "")
        .slice(0, 20);
    });

    form.addEventListener("submit", event => {
      event.preventDefault();
      const answer = input.value.trim().toUpperCase();
      if (answer === "BRAMA") {
        state.bramaConfirmed = true;
        saveState();
        vibrate([45, 25, 45, 25, 110]);
        tone("reveal");
        renderAltankaMission(identity);
        return;
      }
      feedback.classList.add("is-visible");
      feedback.textContent = "Nieprawidłowa lokalizacja. Spróbuj ponownie.";
      vibrate([70, 45, 70]);
      tone("alert");
    });
    setTimeout(() => input.focus(), 120);
  }

  bindActions({
    identity: () => renderIdentityReveal(identity)
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
    continue: () => {
      if (state.courtReached) renderPushupMission(identity);
      else if (state.altankaConfirmed) renderAltankaMission(identity);
      else if (state.courtReached) renderPushupMission(identity);
      else if (state.firstTaskOpened || state.operationIntroAccepted) renderFirstTask(identity);
      else if (state.readyConfirmed) renderOperationIntro(identity);
      else if (state.briefingAccepted) renderReady(identity);
      else renderBriefing(identity);
    },
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
      if (!identity) renderAccess();
      else if (state.firstTaskOpened || state.operationIntroAccepted) renderFirstTask(identity);
      else if (state.readyConfirmed) renderOperationIntro(identity);
      else renderReady(identity);
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
    readyConfirmed: false,
    operationIntroAccepted: false,
    firstTaskOpened: false,
    firstTaskCompleted: false,
    firstTaskAttempts: 0,
    courtReached: false,
    courtConfirmed: false,
    pushupResult: null,
    pushupPassed: false,
    altankaConfirmed: false,
    cipherHintsUsed: 0,
    altankaMatchCount: null,
    altankaMissionCompleted: false,
    bramaConfirmed: false,
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

