document.querySelector(".roll-button").addEventListener("click", () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .getElementById("dice1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);
  document
    .getElementById("dice2")
    .setAttribute("src", `images/dice${randomNumber2}.png`);

  let resultText = "";
  if (randomNumber1 > randomNumber2) {
    resultText = "🎉 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    resultText = "🎉 Player 2 Wins!";
  } else {
    resultText = "🤝 It's a Draw!";
  }

  document.getElementById("result").textContent = resultText;
});
