let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");

const getQuote = async () => {
    try {
        const response = await fetch("https://quotable.io/random");
        const data = await response.json();
        h2.innerText = data.content;
        h3.innerText = data.author;
    } catch (error) {
        console.log("somthing went wrong!!");
    }
};

button.addEventListener("click", getQuote);

setInterval(() => {
    getQuote();
}, 10000);