const audio = document.getElementById("audio");
const player = document.getElementById("player");
const toggle = document.getElementById("toggle");
const volume = document.getElementById("volume");
const nowPlaying = document.getElementById("nowPlaying");
const top10 = document.getElementById("top10");

// Fonte do Top 10: ranking público do ConnectMix (sertanejo / rádios nacionais)
const RANKING_URL = "https://musical.connectmix.com/api/api_ranking/public/index.php/radios";
const RANKING_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImNsdWNhc21lZGVpcm9zQGdtYWlsLmNvbS5iciIsInR5cGUiOiJSIiwiaXNCbG9ja2VkIjowLCJzaWduYXR1cmVEYXRlIjoiMDAwMC0wMC0wMCAwMDowMDowMCJ9.YtdKFVU9bhYo3YyHoR3ZTf7BRm39nC6XQABxfmrPKZU";

// Fallback caso a API esteja offline (mesmo formato da resposta)
const FALLBACK = [
  { title: "Beijei A Cura", artist: "Diego e Victor Hugo", genre: "Sertanejo" },
  { title: "Cadeira Cativa", artist: "Zé Neto e Cristiano", genre: "Sertanejo" },
  { title: "Imagina Eu", artist: "Eduardo Costa", genre: "Sertanejo" },
  { title: "Irmão Da Lua, Amigo Das Estrelas", artist: "Zezé Di Camargo", genre: "Sertanejo" },
  { title: "Direitos Iguais", artist: "Simone Mendes", genre: "Sertanejo" },
  { title: "Ignora", artist: "Fernando e Sorocaba", genre: "Sertanejo" },
  { title: "Coração de Papel", artist: "Maiara e Maraisa", genre: "Sertanejo" },
  { title: "Camaro Amarelo", artist: "Munhoz e Mariano", genre: "Sertanejo" },
  { title: "Meu Violão e Nosso Cachaça", artist: "João Gabriel", genre: "Sertanejo" },
  { title: "Aquele Beijo", artist: "Bruno e Marrone", genre: "Sertanejo" },
];

function rankingBody() {
  const d = new Date().toISOString().slice(0, 10);
  return {
    data_fim: d,
    data_inicio: d,
    periodoString: "diario",
    abrangenciaString: "nacional",
    ids_genero: [0],
    tipo_ranking: "M",
    tipos_radio: [1, 2],
  };
}

async function loadTop10() {
  try {
    const res = await fetch(RANKING_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + RANKING_TOKEN },
      body: JSON.stringify(rankingBody()),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const list = (data.result || [])
      .slice(0, 10)
      .map((r) => ({ title: r.musica, artist: r.artista, genre: r.genero || "" }));
    if (!list.length) throw new Error("vazio");
    return list;
  } catch (err) {
    console.warn("Top 10 via ConnectMix indisponível, usando fallback.", err);
    return FALLBACK;
  }
}

function renderTop10(list) {
  top10.innerHTML = "";
  list.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="rank">${String(i + 1).padStart(2, "0")}</span>
      <span class="info"><strong>${t.title}</strong><small>${t.artist}</small></span>
      <span class="dur">${t.genre || ""}</span>`;
    li.addEventListener("click", () => {
      nowPlaying.textContent = `Top ${i + 1}: ${t.title} — ${t.artist}`;
      audio.play().catch(() => {});
      player.classList.add("is-playing");
    });
    top10.appendChild(li);
  });
}

function setPlaying(playing) {
  player.classList.toggle("is-playing", playing);
  toggle.setAttribute("aria-label", playing ? "Pausar" : "Tocar");
}

toggle.addEventListener("click", () => {
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
});

audio.addEventListener("play", () => setPlaying(true));
audio.addEventListener("pause", () => setPlaying(false));
volume.addEventListener("input", () => (audio.volume = Number(volume.value)));

loadTop10().then(renderTop10);
audio.volume = Number(volume.value);
