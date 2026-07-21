// ==============================
// ELEMENTS
// ==============================

const flap = document.getElementById("flap");
const envelopeScreen = document.getElementById("envelope-screen");
const music = document.getElementById("music");

let opened = false;

// ==============================
// OPEN ENVELOPE
// ==============================

flap.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // تشغيل الموسيقى

    music.play().catch(() => {});

    // فتح الفلاب

    flap.classList.add("open");

    // اختفاء الظرف

    setTimeout(() => {

        envelopeScreen.classList.add("hide");

    }, 1000);

    // حذف الظرف

    setTimeout(() => {

        envelopeScreen.remove();

    }, 1700);

});

// ==============================
// COUNTDOWN
// ==============================

// 14 February 2027 - 7:00 PM

const weddingDate = new Date("February 14, 2027 19:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance < 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2,"0");
    hours.textContent = String(h).padStart(2,"0");
    minutes.textContent = String(m).padStart(2,"0");
    seconds.textContent = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

// ==============================
// LOCATION
// ==============================

document.getElementById("location-button").href =
"https://maps.app.goo.gl/SdBjhVyaw29UzJ5A6";