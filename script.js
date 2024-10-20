const quotes = [
    "I am Iron Man.",
    "I can do this all day.",
    "We have a Hulk.",
    "The hardest choices require the strongest wills.",
    "Wakanda Forever!"
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

function submitQuiz() {
    let score = 0;

    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;

    if (q1 === "Captain America") score++;
    if (q2 === "Mjolnir") score++;
    if (q3 === "JARVIS") score++;

    document.getElementById("result").innerText = `You scored ${score}/3!`;
}
