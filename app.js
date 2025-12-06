const games = [
  {
    title: "Gibberish Translator",
    icon: "icons/2.png",
    lines: [
      "Speak in a made-up, nonsense language.",
      "Kids try to translate.",
      "Then switch!",
      "Bonus: Try having a conversation in ONLY gibberish!"
    ]
  },
  {
    title: "Song on the Spot",
    icon: "icons/3.png",
    lines: [
      "Make up a melody and a line.",
      "The next person sings the next line.",
      "See how long you can go...",
      "Try to rhyme -- or don't!"
    ]
  },
  {
    title: "Bawk That Tune",
    icon: "icons/chicken.png",
    lines: [
      "Take turns bawking different melodies like a chicken and challenge each other to guess the song.",
      "You can choose any animal language to sing in, like hee-haw for a donkey, baa for a goat, moo for a cow.",
      "The options are endless!"
    ]
  },
  {
    title: "Billboard Spokesperson",
    icon: "icons/4.png",
    lines: [
      "Read road signs in your best over the top commercial voice.",
      "Extra points for dramatic flair and character voices.",
      "Tip: For kiddos that cannot quite read yet, they can just make up what the sign says!"
    ]
  },
  {
    title: "Guess Who (Real Life Version)",
    icon: "icons/5.png",
    lines: [
      "Pick someone you both know.",
      "Ask yes or no questions only until you figure it out!"
    ]
  },
  {
    title: "Car Mind Reader",
    icon: "icons/6.png",
    lines: [
      "As you pass a car, quickly say what you think the driver is thinking.",
      "Fast, funny, and no overthinking allowed.",
      "Optional: Say what the CARS are thinking!"
    ]
    },
    {
  title: "Who Can Sound Like...",
  icon: "icons/volume.png",
  lines: [
    "Take turns giving each other silly sound prompts, like Who can sound like a donkey talking in its sleep.",
    "Everyone makes their best version of the sound and you enjoy how different they all are.",
    "Variation: make a random sound and let others try to guess what you were imitating."
  ]
  },
  {
    title: "Would You Rather",
    icon: "icons/7.png",
    lines: [
      "Take turns asking ridiculous Would You Rather questions.",
      "The sillier, the better.",
      "Example: Would you rather have your own wheels attached to your feet OR built in headlights to see in the dark?"
    ]
  },
  {
    title: "Pass the Poem",
    icon: "icons/8.png",
    lines: [
      "Write or say a silly rhyme.",
      "The next person adds a rhyming line.",
      "Keep going until the poem ends!"
    ]
  },
      {
  title: "Freeze Dance",
  icon: "icons/carseat.png",
  lines: [
    "One person plays DJ and starts the music.",
    "Everyone dances safely in their seats with head bobs, arm wiggles, silly faces, anything that feels playful.",
    "When the DJ pauses the music, everyone freezes in place.",
    "Add fun challenges like Freeze while touching your nose or Freeze with your tongue out."
  ]
  },
  {
    title: "Alphabet Conversation",
    icon: "icons/9.png",
    lines: [
      "Each sentence starts with the next letter of the alphabet.",
      "A.., B..., C... all the way to Z!",
      "Silly is obviously encouraged."
    ]
  },
  {
    title: "Counting Conversation",
    icon: "icons/10.png",
    lines: [
      "Start with a one word sentence -- like Hi!",
      "Then two words, then three...",
      "See if you can get to twenty!"
    ]
  },
  {
    title: "Fortunately/Unfortunately",
    icon: "icons/11.png",
    lines: [
      "Tell a story, one sentence at a time.",
      "Alternate starting each sentence with Fortunately... and Unfortunately..."
    ]
  },
  {
    title: "Popcorn Story",
    icon: "icons/12.png",
    lines: [
      "Take turns telling a story, a few sentences at a time.",
      "Say POPCORN! when you are ready to pop it over to the next person.",
      "Tip: Let little ones fill in the blanks. Example: The horse’s name was...?"
    ]
  },
  {
    title: "One Word Story",
    icon: "icons/13.png",
    lines: [
      "Make up a story, one word at a time.",
      "You say one word, they say the next.",
      "Note: This is super tricky!",
      "Ease into it and start with Popcorn stories to get the hang of it."
    ]
  },
  {
    title: "What If I Laughed Like This",
    icon: "icons/14.png",
    lines: [
      "Make your weirdest laugh or cry.",
      "Challenge: Try not to laugh for real while the others go!",
      "The goal is to try to get the others to break into real laughter!"
    ]
  },
  {
    title: "Mind Meld",
    icon: "icons/15.png",
    lines: [
      "Count down: three... two... one..., then each say a random word at the same exact time.",
      "Now, secretly try to think of a word that connects them.",
      "Keep going until you say the same word!"
    ]
  },
  {
    title: "Simple Classics",
    icon: "icons/16.png",
    lines: [
      "<strong>How many red things can we spot</strong>: Pick a color like red or any color you want and count items you see until you get there. Call them out and work together to keep count.",
      "<strong>Twenty Questions</strong>: Someone thinks of a person, place, or thing, and everyone works together to guess in just twenty yes or no questions. Tip: use categories, like Food.",
      "<strong>Animal Chain</strong>: Name an animal. The next player has to name one that starts with the last letter of the previous animal, like Tiger, Rabbit, Turtle.",
      "<strong>ABC Search</strong>: Try to spot something that starts with each letter of the alphabet, in order from A to Z.",
      "<strong>Rainbow Search</strong>: Spot something red, then orange, then yellow, green, blue, and purple -- in rainbow order! You can limit what you're searching for to just vehicles or let it be anything!",
      "<strong>Categories</strong>: Pick a category like animals, breakfast foods, or Disney movies. Take turns naming something in that category until someone runs out of ideas."
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

  const titleSpan = document.createElement("span");
  titleSpan.className = "game-title";
  titleSpan.textContent = game.title;

  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.textContent = "+";

  button.appendChild(iconImg);
  button.appendChild(titleSpan);
  button.appendChild(chevron);

  const body = document.createElement("div");
  body.className = "game-body";
  body.hidden = true;

  const list = document.createElement("ul");
  game.lines.forEach(line => {
    const li = document.createElement("li");
    // allow bold tags in Simple Classics lines
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

  games.forEach((game, index) => {
    const item = createGameItem(game, index);
    container.appendChild(item);
  });
}

renderGames();
