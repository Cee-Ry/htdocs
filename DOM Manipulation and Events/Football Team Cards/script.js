const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
  ],
};

// Display team stats
const teamNameEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");
const playerCardsEl = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

teamNameEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;
headCoachEl.textContent = footballTeam.headCoach;

// Render player cards
function setPlayerCards(playersArray = footballTeam.players) {
  playerCardsEl.innerHTML = playersArray
    .map(({ name, position, isCaptain }) => {
      return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `;
    })
    .join("");
}

// Initial render
setPlayerCards();

// Filter players by position
playersDropdown.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;

  if (selectedPosition === "all") {
    setPlayerCards(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selectedPosition
    );
    setPlayerCards(filteredPlayers);
  }
});
