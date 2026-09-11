const runBtn = document.getElementById("run-btn");
const statusEl = document.getElementById("status");
const heroIp = document.getElementById("hero-ip");
const hero = document.getElementById("hero");
const readout = document.getElementById("readout");

const nodes = document.querySelectorAll(".route-node");
const lines = [document.getElementById("line-1"), document.getElementById("line-2")];

const fields = {
  asn: document.getElementById("val-asn"),
  isp: document.getElementById("val-isp"),
  domain: document.getElementById("val-domain"),
  country: document.getElementById("val-country"),
  continent: document.getElementById("val-continent"),
};

function resetRoute() {
  nodes.forEach((n) => n.classList.remove("active"));
  lines.forEach((l) => l.classList.remove("pulsing"));
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateRoute() {
  resetRoute();
  nodes[0].classList.add("active");
  await wait(120);
  lines[0].classList.add("pulsing");
  await wait(500);
  nodes[1].classList.add("active");
  lines[1].classList.add("pulsing");
  await wait(500);
  nodes[2].classList.add("active");
}

function showResult(data) {
  hero.querySelector(".hero-value").classList.remove("is-error");
  heroIp.textContent = data.ip || "Unknown";
  fields.asn.textContent = data.asn || "—";
  fields.isp.textContent = data.as_name || "—";
  fields.domain.textContent = data.as_domain || "—";
  fields.country.textContent = data.country ? `${data.country} (${data.country_code})` : "—";
  fields.continent.textContent = data.continent ? `${data.continent} (${data.continent_code})` : "—";
}

function showError(message) {
  hero.querySelector(".hero-value").classList.add("is-error");
  heroIp.textContent = message;
  Object.values(fields).forEach((el) => (el.textContent = "—"));
}

async function runLookup() {
  runBtn.disabled = true;
  runBtn.textContent = "Running…";
  statusEl.textContent = "Contacting ipinfo.io…";
  statusEl.classList.remove("is-error", "is-ok");

  const animation = animateRoute();

  try {
    const response = await fetch("/api/lookup");
    const data = await response.json();

    await animation;

    if (!response.ok) {
      showError(data.error || "The lookup failed.");
      statusEl.textContent = data.error || "The lookup failed.";
      statusEl.classList.add("is-error");
      return;
    }

    showResult(data);
    statusEl.textContent = "Lookup complete.";
    statusEl.classList.add("is-ok");
  } catch (err) {
    await animation;
    showError("Could not reach the server.");
    statusEl.textContent = "Could not reach the server. Check your connection and try again.";
    statusEl.classList.add("is-error");
  } finally {
    runBtn.disabled = false;
    runBtn.textContent = "Run lookup";
  }
}

runBtn.addEventListener("click", runLookup);

// Run once automatically on load.
runLookup();
