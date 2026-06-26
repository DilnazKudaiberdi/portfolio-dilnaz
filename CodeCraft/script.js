const splashTexts = [
    "упай-чокопай",
    "Здесь могла быть ваша реклама!",
    "Упал-вставай, встал-упай",
    "Welcome to CAP Edu!",
    "Python inside!",
    "Лагает, но работает!",
    "Python everywhere!",
    "Портфолио!",
    "Менеджер проектов!",
    "Сделано с любовью!",
    "GitHub soon!",
    "Technoblade never dies!",
    "Серьезно, кто-то это читает?"
];

// Случайная желтая надпись
const randomText =
    splashTexts[Math.floor(Math.random() * splashTexts.length)];

document.getElementById("splash").textContent = randomText;


// ===== МУЗЫКА =====

const music = document.getElementById("music-player");
const musicButton = document.getElementById("music-toggle");

music.volume = 1;

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }

});

music.addEventListener("ended", () => {
    musicPlaying = false;
});


// ===== ПЛАВНОЕ ЗАТИХАНИЕ =====

window.addEventListener("scroll", () => {

    const maxScroll =
        document.body.scrollHeight - window.innerHeight;

    const progress =
        window.scrollY / maxScroll;

    // Громкость от 100% до 10%
    music.volume = Math.max(0.1, 1 - progress);

});


// ===== ДОСТИЖЕНИЕ =====

const achievement =
    document.getElementById("achievement");

const achievementSound =
    document.getElementById("achievement-sound");

    achievementSound.volume = 0.3;

let shown = false;

function showAchievement() {

    achievement.classList.add("show");

    achievementSound.currentTime = 0;
    achievementSound.play();

    setTimeout(() => {
        achievement.classList.remove("show");
    }, 7640);

}

window.addEventListener("scroll", () => {

    const bottom =
        window.innerHeight +
        window.scrollY >=
        document.body.offsetHeight - 100;

    // Показываем достижение
    window.addEventListener("scroll", () => {

    const bottom =
        window.innerHeight +
        window.scrollY >=
        document.body.offsetHeight - 100;

    if (bottom && !shown) {

        shown = true;

        music.volume = 0;

        showAchievement();

    }

});

});
