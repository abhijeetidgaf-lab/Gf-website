const text = "Before you see everything... there's something I've wanted to ask you.";

let i = 0;

function typeWriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
        document.getElementById("website").style.display = "block";

        typeWriter();

    }, 3500);

};

function nextScreen() {
    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById("proposalScreen").classList.add("active");
}

function yesClicked() {
    document.getElementById("proposalScreen").classList.remove("active");
    document.getElementById("celebrationScreen").classList.add("active");

    const music = document.getElementById("music");
    if (music) {
        music.play().catch(() => {});
    }

    launchConfetti();
}

function scrollToStory() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}

function launchConfetti() {

    const canvas = document.getElementById("confetti");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 150; i++) {

        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 3,
            vy: Math.random() * 4 + 2
        });

    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${Math.random() * 360},100%,70%)`;
            ctx.fill();

            p.y += p.vy;

        });

        requestAnimationFrame(animate);
    }

    animate();
}

function openImage(img){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxImg").src=img.src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}

// ================= LOVE REASONS =================

const reasons = [
    "I Love You." ,
    "You make me want to become a better person.",
    "Because you're you ❤️"
];

function newReason() {
    const random = Math.floor(Math.random() * reasons.length);
    document.getElementById("reasonText").innerHTML = reasons[random];
}

// ================= PETALS =================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(Math.random()*6+6)+"s";

    petal.style.fontSize=(Math.random()*18+18)+"px";

    document.getElementById("petals").appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },12000);

}

setInterval(createPetal,500);

// ================= CURSOR SPARKLES =================

document.addEventListener("mousemove",function(e){

const s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},700);

});

// ================= LOVE TIMER =================

// CHANGE THIS DATE
const loveDate = new Date("2025-14-02 T20:40:00");

function updateLoveTimer(){

const now = new Date();

const diff = now - loveDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff/(1000*60*60))%24);

const minutes = Math.floor((diff/(1000*60))%60);

const seconds = Math.floor((diff/1000)%60);

document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;

}

setInterval(updateLoveTimer,1000);

updateLoveTimer();

