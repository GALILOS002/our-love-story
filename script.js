// =======================
// Netflix Anniversary Website
// GALILOS ❤️ MILOS
// =======================


// Music control

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {

        music.pause();
        musicBtn.innerHTML = "🎵 Music";

    } else {

        music.play();
        musicBtn.innerHTML = "🔇 Pause";

    }

    playing = !playing;

});




// Relationship timer
// Change this date to your exact first day together

const startDate = new Date("2026-06-10");


function updateTimer(){

    const now = new Date();

    const difference = now - startDate;


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("timer").innerHTML =
    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}


setInterval(updateTimer,1000);

updateTimer();





// Play button animation

function startStory(){

    createConfetti();

    alert(
        "Welcome to our love story ❤️\n\nSeason 1 is just beginning..."
    );

}




// Confetti effect

function createConfetti(){

    for(let i=0;i<100;i++){

        let confetti =
        document.createElement("div");


        confetti.style.position="fixed";
        confetti.style.width="10px";
        confetti.style.height="10px";
        confetti.style.background=
        ["red","pink","white"][Math.floor(Math.random()*3)];

        confetti.style.left =
        Math.random()*100+"vw";

        confetti.style.top="-10px";

        confetti.style.zIndex="999";


        document.body.appendChild(confetti);


        let fall =
        confetti.animate(

        [
            {
                transform:"translateY(0)"
            },

            {
                transform:
                `translateY(${window.innerHeight}px)
                rotate(720deg)`
            }

        ],

        {
            duration:
            2000 + Math.random()*3000
        }


        );


        fall.onfinish=()=>{
            confetti.remove();
        };

    }

}
