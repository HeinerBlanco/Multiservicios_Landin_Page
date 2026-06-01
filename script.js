const WHATSAPP_NUMBER = "50600000000";

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const whatsappForm = document.querySelector("[data-whatsapp-form]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

whatsappForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(whatsappForm);
  const name = formData.get("name");
  const service = formData.get("service");
  const location = formData.get("location");
  const details = formData.get("details");

  const message = [
    "Hola Multiservicios HyE, quiero solicitar una cotización.",
    "",
    `Nombre: ${name}`,
    `Servicio: ${service}`,
    `Ubicación: ${location}`,
    `Detalles: ${details || "Por definir"}`,
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
