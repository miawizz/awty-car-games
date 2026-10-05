const games = [
  {
    title: "Color Search",
    age: "younger",
    icon: "icons/16.png",
    lines: [
      "Pick a color and see how many things you can spot in that color.",
      "Call them out and work together to keep count!"
    ]
  },
  {
    title: "Twenty Questions",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Someone thinks of a person, place, or thing.",
      "Everyone else works together to guess it using only yes or no questions.",
      "Tip: For younger kids, pick a category first, like food or animals."
    ]
  },
  {
    title: "Animal Chain",
    age: "younger",
    icon: "icons/16.png",
    lines: [
      "Name an animal.",
      "The next player names an animal that starts with the last letter of the previous animal.",
      "Example: Tiger, Rabbit, Turtle."
    ]
  },
  {
    title: "ABC Search",
    age: "younger",
    icon: "icons/16.png",
    lines: [
      "Try to spot something that starts with each letter of the alphabet.",
      "Start with A and work your way all the way to Z!"
    ]
  },
  {
    title: "Rainbow Search",
    age: "younger",
    icon: "icons/16.png",
    lines: [
      "Spot something red, then orange, yellow, green, blue, and purple, in rainbow order!",
      "You can search for anything, or make it trickier by looking only for things like vehicles."
    ]
  },
  {
    title: "Categories",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Pick a category like animals, breakfast foods, or Disney movies.",
      "Take turns naming something in that category until someone runs out of ideas."
    ]
  },
  {
    title: "Gibberish Translator",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Speak in a made-up, nonsense language.",
      "Kids try to translate.",
      "Then switch!",
      "Bonus: Try having a conversation in ONLY gibberish!"
    ]
  },
  {
    title: "Song on the Spot",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Make up a melody and a line.",
      "The next person sings the next line.",
      "See how long you can go...",
      "Try to rhyme -- or don't!"
    ]
  },
  {
    title: "Bawk That Tune",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Take turns bawking different melodies like a chicken and challenge each other to guess the song.",
      "You can choose any animal language to sing in, like hee-haw for a donkey, baa for a goat, moo for a cow.",
      "The options are endless!"
    ]
  },
  {
    title: "Billboard Spokesperson",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Read road signs in your best over the top commercial voice.",
      "Extra points for dramatic flair and character voices.",
      "Tip: For kiddos that cannot quite read yet, they can just make up what the sign says!"
    ]
  },
  {
    title: "Guess Who (Real Life Version)",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Pick someone you both know.",
      "Ask yes or no questions only until you figure it out!"
    ]
  },
  {
    title: "Car Mind Reader",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "As you pass a car, quickly say what you think the driver is thinking.",
      "Fast, funny, and no overthinking allowed.",
      "Optional: Say what the CARS are thinking!"
    ]
  },
  {
    title: "Who Can Sound Like...",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Take turns giving each other silly sound prompts, like Who can sound like a donkey talking in its sleep.",
      "Everyone makes their best version of the sound and you enjoy how different they all are.",
      "Variation: make a random sound and let others try to guess what you were imitating."
    ]
  },
  {
    title: "Would You Rather",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Take turns asking ridiculous Would You Rather questions.",
      "The sillier, the better.",
      "Example: Would you rather have your own wheels attached to your feet OR built in headlights to see in the dark?"
    ]
  },
  {
    title: "Pass the Poem",
    age: "older",
    icon: "icons/16.png",
    lines: [
      "Write or say a silly rhyme.",
      "The next person adds a rhyming line.",
      "Keep going until the poem ends!"
    ]
  },
  {
    title: "Freeze Dance",
    age: "younger",
    icon: "icons/16.png",
    lines: [
      "One person plays DJ and starts the music.",
      "Everyone dances safely in their seats with head bobs, arm wiggles, silly faces, anything that feels playful.",
      "When the DJ pauses the music, everyone freezes in place.",
      "Add fun challenges like Freeze while touching your nose or Freeze with your tongue out."
    ]
  },
  {
    title: "Alphabet Conversation",
    age: "older",
    icon: "icons/16.png",
    lines: [
      "Each sentence starts with the next letter of the alphabet.",
      "A.., B..., C... all the way to Z!",
      "Silly is obviously encouraged."
    ]
  },
  {
    title: "Counting Conversation",
    age: "older",
    icon: "icons/16.png",
    lines: [
      "Start with a one word sentence -- like Hi!",
      "Then two words, then three...",
      "See if you can get to twenty!"
    ]
  },
  {
    title: "Fortunately/Unfortunately",
    age: "older",
    icon: "icons/16.png",
    lines: [
      "Tell a story, one sentence at a time.",
      "Alternate starting each sentence with Fortunately... and Unfortunately..."
    ]
  },
  {
    title: "Popcorn Story",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Take turns telling a story, a few sentences at a time.",
      "Say POPCORN! when you are ready to pop it over to the next person.",
      "Tip: Let little ones fill in the blanks. Example: The horse’s name was...?"
    ]
  },
  {
    title: "One Word Story",
    age: "older",
    icon: "icons/16.png",
    lines: [
      "Make up a story, one word at a time.",
      "You say one word, they say the next.",
      "Note: This is super tricky!",
      "Ease into it and start with Popcorn stories to get the hang of it."
    ]
  },
  {
    title: "What If I Laughed Like This",
    age: "both",
    icon: "icons/16.png",
    lines: [
      "Make your weirdest laugh or cry.",
      "Challenge: Try not to laugh for real while the others go!",
      "The goal is to try to get the others to break into real laughter!"
    ]
  },
  {
    title: "Mind Meld",
    age: "older",
    icon: "icons/16.png",
    lines: [
      "Count down: three... two... one..., then each say a random word at the same exact time.",
      "Now, secretly try to think of a word that connects them.",
      "Keep going until you say the same word!"
    ]
  }
];

function createGameItem(game, index) {
  const wrapper = document.createElement("article");
  wrapper.className = "game";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "game-header";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("data-index", index);

  const iconImg = document.createElement("img");
  iconImg.className = "game-icon";
  iconImg.src = game.icon;
  iconImg.alt = game.title + " icon";

  const titleWrap = document.createElement("div");
  titleWrap.className = "game-title-wrap";

  const titleSpan = document.createElement("span");
  titleSpan.className = "game-title";
  titleSpan.textContent = game.title;

  titleWrap.appendChild(titleSpan);

  if (game.subtitle) {
    const subtitle = document.createElement("div");
    subtitle.className = "game-subtitle";
    subtitle.textContent = game.subtitle;
    titleWrap.appendChild(subtitle);
  }

  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.textContent = "+";

  button.appendChild(iconImg);
  button.appendChild(titleWrap);
  button.appendChild(chevron);

  const body = document.createElement("div");
  body.className = "game-body";
  body.hidden = true;

  const list = document.createElement("ul");

  game.lines.forEach(line => {
    const li = document.createElement("li");
    li.innerHTML = line;
    list.appendChild(li);
  });

  body.appendChild(list);

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    body.hidden = expanded;
    chevron.textContent = expanded ? "+" : "–";
  });

  wrapper.appendChild(button);
  wrapper.appendChild(body);

  return wrapper;
}

function renderGames() {
  const container = document.getElementById("games-list");
  container.innerHTML = "";

  const alphabeticalGames = games
    .map((game, index) => ({ game, originalIndex: index }))
    .sort((a, b) => a.game.title.localeCompare(b.game.title));

  alphabeticalGames.forEach(({ game, originalIndex }) => {
    const item = createGameItem(game, originalIndex);
    container.appendChild(item);
  });
}

renderGames();
// -----------------------------
// PICK A GAME GENERATOR
// -----------------------------

let selectedAge = "all";
let pickedGameIndex = null;

const ageFilters = document.querySelectorAll(".age-filter");
const pickGameButton = document.getElementById("pick-game-button");
const pickerTitle = document.getElementById("picker-title");
const pickerInstructions = document.getElementById("picker-instructions");

// Age filter buttons
ageFilters.forEach(button => {
  button.addEventListener("click", () => {
    selectedAge = button.dataset.age;

    ageFilters.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Reset result when changing age groups
    pickedGameIndex = null;
    pickerTitle.textContent = "Tap the button to pick a game!";
    pickerInstructions.innerHTML = "";
    pickerInstructions.hidden = true;
    pickGameButton.textContent = "Pick a Game!";
  });
});

// Pick a random game
pickGameButton.addEventListener("click", () => {
  const eligibleGames = games
    .map((game, index) => ({ game, index }))
    .filter(item => {
      if (selectedAge === "all") {
        return true;
      }

      return (
        item.game.age === selectedAge ||
        item.game.age === "both"
      );
    });

  if (eligibleGames.length === 0) {
    pickerTitle.textContent = "No games found!";
    pickerInstructions.innerHTML = "";
    pickerInstructions.hidden = true;
    return;
  }

  // Avoid immediately picking the same game again
  let choices = eligibleGames;

  if (eligibleGames.length > 1 && pickedGameIndex !== null) {
    choices = eligibleGames.filter(
      item => item.index !== pickedGameIndex
    );
  }

  const randomChoice =
    choices[Math.floor(Math.random() * choices.length)];

  pickedGameIndex = randomChoice.index;

  // Show title
  pickerTitle.textContent = randomChoice.game.title;

  // Show instructions
  pickerInstructions.innerHTML = "";

  randomChoice.game.lines.forEach(line => {
    const li = document.createElement("li");
    li.innerHTML = line;
    pickerInstructions.appendChild(li);
  });

  pickerInstructions.hidden = false;

  // Change button after first pick
  pickGameButton.textContent = "Pick Another Game!";
});
