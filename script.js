// تاريخ بداية العلاقة (غيره للتاريخ الحقيقي)
const startTime = new Date("2021-04-04T00:00:00");

// مصفوفة الصور والكلام اللي عليها (Story Data)
const storyData = [
    { image: "story1.jpg", text: "يوم ما عرفنا بعض كان يوم ولادتي ❤️" },
    { image: "story2.jpg", text: "أول مرة اتقابلنا كانت الدنيا مختلفة ❤️" },
    { image: "story3.jpg", text: "كل لحظة في عمري بتمنى تكون معاكي ❤️" },
    { image: "story4.jpg", text: "بحبك يا أجمل حاجة في حياتي ❤️" }
];

let currentStoryIndex = 0;

function checkPassword() {
    const pass = document.getElementById('passwordField').value.toLowerCase();
    if (pass === 'love') {
        switchScreen('login-section', 'main-section');
        startClock();
    } else {
        alert("الباسورد غلط يا قمر 😂");
    }
}

function startClock() {
    setInterval(() => {
        const now = new Date();
        const diff = now - startTime;

        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
        document.getElementById('mins').innerText = Math.floor((diff / (1000 * 60)) % 60);
        document.getElementById('secs').innerText = Math.floor((diff / 1000) % 60);
    }, 1000);
}

function flipCard(card, message) {
    card.innerText = message;
    card.style.background = "#ff4d94";
    card.style.transform = "scale(1.05)";
}

function showStory(index) {
    if (index === 1) {
        switchScreen('main-section', 'story-section');
        renderStoryImage(0); // ابدأ بأول صورة
    } else if (currentStoryIndex < storyData.length - 1) {
        currentStoryIndex++;
        renderStoryImage(currentStoryIndex);
    } else {
        // لو خلصنا الصور، أظهر زر الرسالة النهائية
        document.querySelector('.final-btn').classList.remove('hidden');
    }
}

function renderStoryImage(index) {
    const content = document.getElementById('story-content');
    content.innerHTML = `
        <div class="story-image-container">
            <img src="${storyData[index].image}" alt="Story" class="story-image">
            <p>${storyData[index].text}</p>
        </div>
    `;
}

function showFinalMessage() {
    switchScreen('story-section', 'final-section');
}

function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.remove('active-screen');
    document.getElementById(showId).classList.add('active-screen');
}