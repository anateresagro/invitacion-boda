// =========================
// BOTÓN DE MÚSICA
// =========================

const music = document.getElementById("musica");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {
        music.pause();
        musicBtn.innerHTML = "♫";
    } else {
        music.play();
        musicBtn.innerHTML = "❚❚";
    }

    playing = !playing;

});


// =========================
// CUENTA REGRESIVA
// =========================

const weddingDate = new Date("November 2, 2026 17:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
            "<h3>¡Llegó nuestro gran día! ❤️</h3>";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);