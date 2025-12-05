const games = [
  {
    title: "Gibberish Translator",
    lines: [
      "Speak in a made-up, nonsense language.",
      "Kids try to translate.",
      "Then switch.",
      "Bonus: Try having a conversation in only gibberish."
    ]
  },
  {
    title: "Song on the Spot",
    lines: [
      "Make up a melody and a line.",
      "The next person sings the next line.",
      "See how long you can go.",
      "Try to rhyme or do not."
    ]
  },
  {
    title: "Billboard Spokesperson",
    lines: [
      "Read road signs in your best over the top commercial voice.",
      "Extra points for dramatic flair and character voices.",
      "Tip: For kiddos that cannot quite read yet, they can just make up what the sign says."
    ]
  },
  {
    title: "Guess Who (Real Life Version)",
    lines: [
      "Pick someone you both know.",
      "Ask yes or no questions only until you figure it out."
    ]
  },
  {
    title: "Car Mind Reader",
    lines: [
      "As you pass a car, quickly say what you think the driver is thinking.",
      "Fast, funny, and no overthinking allowed.",
      "Optional: Say what the cars are thinking."
    ]
  },
  {
    title: "Would You Rather",
    lines: [
      "Take turns asking ridiculous Would You Rather questions.",
      "The sillier, the better.",
      "Example: Would you rather have your own wheels attached to your feet or built in headlights to see in the dark."
    ]
  },
  {
    title: "Pass the Poem",
    lines: [
      "Write or say a silly rhyme.",
      "The next person adds a rhyming line.",
      "Keep going until the poem ends."
    ]
  },
  {
    title: "Alphabet Conversation",
    lines: [
      "Each sentence starts with the next letter of the alphabet.",
      "A, B, C all the way to Z.",
      "Silly is obviously encouraged."
    ]
  },
  {
    title: "Counting Conversation",
    lines: [
      "Start with a one word sentence.",
      "Then two words, then three.",
      "See if you can get to twenty."
    ]
  },
  {
    title: "Fortunately and Unfortunately",
    lines: [
      "Tell a story, one sentence at a time.",
      "Alternate starting each sentence with Fortunately and Unfortunately."
    ]
  },
  {
    title: "Popcorn Story",
    lines: [
      "Take turns telling a story, a few sentences at a time.",
      "Say Popcorn when you are ready to pop it to the next person.",
      "Tip: Let little ones fill in the blanks. Example: The horse’s name was what."
    ]
  },
  {
    title: "One Word Story",
    lines: [
      "Make up a story, one word at a time.",
      "You say one word, they say the next.",
      "Note: This is super tricky.",
      "Ease into it and start with Popcorn stories to get the hang of it."
    ]
  },
  {
    title: "What If I Laughed Like This",
    lines: [
      "Make your weirdest laugh or cry.",
      "Try not to laugh for real while the others go.",
      "If you make anyone else break into real laughter, you get a point."
    ]
  },
  {
    title: "Mind Meld",
    lines: [
      "Count down three two one and each say a random word at the same exact time.",
      "Now, secretly try to think of a word that connects them.",
      "Keep going until you say the same word."
    ]
  },
  {
    title: "Simple Classics",
    lines: [
      "How many red items can we spot until we get there. Call them out and work together to keep count.",
      "Twenty Questions: Someone thinks of a person, place, or thing, and everyone works together to guess in just twenty yes or no questions. Tip: use categories, like Food.",
      "Animal chain: Name an animal. The next player has to name one that starts with the last letter of the previous animal, like Tiger, Rabbit, Turtle.",
      "ABC Search: Try to spot something that starts with each letter of the alphabet, in order from A to Z.",
      "Rainbow Search: Spot something red, then orange, then yellow, green, blue, and purple.",
      "Categories: Pick a category like animals, breakfast foods, or Disney movies. Take turns naming something in that category until someone runs out of ideas."
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

  const titleSpan = document.createElement("span");
  titleSpan.className = "game-title";
  titleSpan.textContent = game.title;

  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.textContent = "+";

  button.appendChild(titleSpan);
  button.appendChild(chevron);

  const body = document.createElement("div");
  body.className = "game-body";
  body.hidden = true;

  const list = document.createElement("ul");
  game.lines.forEach(line => {
    const li = document.createElement("li");
    li.textContent = line;
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

  games.forEach((game, index) => {
    const item = createGameItem(game, index);
    container.appendChild(item);
  });
}

renderGames();
