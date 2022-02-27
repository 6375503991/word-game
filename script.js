const n_word = document.getElementById("n-word");
const arr = ["bus", "car", "truck", "city", "hospital", "state", "my", "Apple", "banana", "anyone"];
const Correct = document.getElementById("correct");
const text = document.querySelector("#Text");

const Btn = document.getElementById('btn');
const Bot = document.getElementById("bot");
const Top = document.querySelector(".top-h");
const Bottom = document.querySelector(".bottom-b");

var x = 0;
// console.log(text.value);
function A() {

    n_word.innerText = arr[Math.floor(Math.random() * arr.length)];
    function sample() {
        // console.log(Bottom.childElementCount);
        if (Bottom.childElementCount == 10) {
            alert("you lose");
            window.location.reload();
            return;
        }
        if (Top.childElementCount == 10) {
            alert("you win");
            window.location.reload();
            return;
        }
        n_word.style.top = x + "px";
        x++;

        // console.log(text.value, n_word.innerText);
        if (x == 500) {
            check();
        }
        requestAnimationFrame(sample);
    }

    // A()
    requestAnimationFrame(sample);
}
A()

text.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        // console.log(e.key);
        check();
    }

})

function check() {
    let rdClass = "random-" + Math.random() * 1000;
    let temp = document.createElement("div");
    temp.style.position = "absolute";
    temp.classList.add(rdClass)
    if (text.value === n_word.innerText) {
        // console.log("correct");
        // console.log(Top.innerText);
        let c = `<div id="heading">${n_word.innerText}</div>`;
        // Top.innerHTML=c+Top.innerHTML;
        temp.innerHTML = temp.innerHTML + c;
        Top.appendChild(temp);
        B(0, rdClass);
    } else {
        // rdClass = "random-" + Math.random() * 1000;
        let c = `<div id="bot">${text.value}</div>`;
        // Bottom.innerHTML=Bottom.innerHTML+c;
        temp.innerHTML = temp.innerHTML + c;
        Bottom.appendChild(temp);
        // B(rdClass);
        // console.log("Incorrect");
        B(1, rdClass);
    }
    n_word.innerText = arr[Math.floor(Math.random() * arr.length)];
    x = 0;
    text.value = "";

}

// var y = 0;
let correctMax = 500;
let incorrectMax = 500;

function B(turn, cls) {
    // n_word.innerText = arr[Math.floor(Math.random() * arr.length)];
    let y = 0;
    const Heading = document.getElementsByClassName(cls);
    console.log(cls);
    console.log(Heading[0]);
    function sample() {

        Heading[0].style.top = y + "px";
        // console.log(y);
        y++;

        // console.log(text.value, Heading.innerText);
        if (y >= correctMax && turn === 0) {
            y = 0;
            correctMax -= 50;
            return;
        }
        if (y >= incorrectMax && turn === 1) {
            y = 0;
            incorrectMax -= 50;
            return;
        }
        requestAnimationFrame(sample);
    }

    // A()
    // requestAnimationFrame(sample);
    sample();
}


// var z = 0;
// var zmax = 500;

// function C(cls) {
//     // n_word.innerText = arr[Math.floor(Math.random() * arr.length)];
//     let z = 0;
//     const Bot = document.getElementsByClassName(cls);
//     // console.log(Heading);
//     function sample() {

//         Bot[0].style.top = z + "px";

//         // console.log(z);
//         z++;

//         // console.log(text.value, Heading.innerText);
//         if (z >= zmax) {
//             // check();
//             z = 0;
//             zmax -= 50;
//             // Heading.style.marginTop = "auto";
//             return;
//         }
//         requestAnimationFrame(sample);
//     }

//     // A()
//     // requestAnimationFrame(sample);
//     sample();
// }
