const games = [
  {
    title: "Gibberish Translator",
    body: [
      "Speak in a made up nonsense language.",
      "Kids try to translate what you are saying then switch roles.",
      "Try a whole conversation in only gibberish."
    ]
  },
  {
    title: "Song on the Spot",
    body: [
      "Make up a little melody and sing one line.",
      "The next person sings the next line.",
      "Keep it going and rhyme if you feel like it."
    ]
  },
  {
    title: "Billboard Spokesperson",
    body: [
      "Read road signs using your most dramatic commercial voice.",
      "Add character voices and over the top flair.",
      "Little ones can make up what the signs say."
    ]
  },
  {
    title: "Guess Who – Real Life",
    body: [
      "Pick someone you both know.",
      "Everyone asks only yes or no questions until you figure it out."
    ]
  },
  {
    title: "Car Mind Reader",
    body: [
      "As you pass a car, quickly say what you think the driver is thinking.",
      "Keep it fast and funny with no overthinking.",
      "You can also say what the cars themselves are thinking."
    ]
  },
  {
    title: "Would You Rather",
    body: [
      "Take turns asking ridiculous Would You Rather style choices.",
      "The sillier the better.",
      "Example: have wheels attached to your feet or built in headlights to see in the dark."
    ]
  },
  {
    title: "Pass the Poem",
    body: [
      "Start with a simple rhyming line.",
      "The next person adds another line that rhymes.",
      "Keep passing the poem around until you decide it ends."
    ]
  },
  {
    title: "Alphabet Conversation",
    body: [
      "Each sentence starts with the next letter of the alphabet.",
      "Go from A to Z together.",
      "Let the sentences be as silly as you like."
    ]
  },
  {
    title: "Counting Conversation",
    body: [
      "Start with a one word sentence.",
      "Next person makes a two word sentence.",
      "Keep building longer sentences and see how high you can count."
    ]
  },
  {
    title: "Fortunately, Unfortunately",
    body: [
      "Tell a story together one sentence at a time.",
      "Alternate starting each sentence with Fortunately and Unfortunately."
    ]
  },
  {
    title: "Popcorn Story",
    body: [
      "Take turns telling a story a few sentences at a time.",
      "Say Popcorn when you are ready to pass to the next person.",
      "Invite little ones to fill in details like names or places."
    ]
  },
  {
    title: "One Word Story",
    body: [
      "Make up a story one word at a time.",
      "You say one word, the next person adds another, and so on.",
      "This one feels tricky at first so you can warm up with Popcorn Story."
    ]
  },
  {
    title: "What If I Laughed Like This",
    body: [
      "Take turns making your strangest laugh or pretend cry.",
      "Everyone tries to keep a serious face.",
      "If you make someone crack up for real you earn a point."
    ]
  },
  {
    title: "Mind Meld",
    body: [
      "Count down together then say a random word at the same time.",
      "Secretly think of a new word that connects the last pair.",
      "Keep going until you both say the same word."
    ]
  },
  {
    title: "Simple Classics",
    body: [
      "Spot items in a chosen color and keep a running total.",
      "Play 20 Questions with a person, place, or thing.",
      "Try an animal chain where each animal starts with the last letter of the previous one.",
      "Play ABC Search, Rainbow Search, or a quick Categories game."
    ]
  }
];

let currentIndex = 0;

const cardEl = document.getElementById("card");
const positionEl = document.getElementById("position-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

function renderCard(index) {
  const game = games[index];
  cardEl.innerHTML = `
    <h2>${game.title}</h2>
    <ul>
      ${game.body.map(line => `<li>${line}</li>`).join("")}
    </ul>
  `;
  positionEl.textContent = `Game ${index + 1} of ${games.length}`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % games.length;
  renderCard(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + games.length) % games.length;
  renderCard(currentIndex);
}

function showRandom() {
  let newIndex = currentIndex;
  if (games.length > 1) {
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * games.length);
    }
  }
  currentIndex = newIndex;
  renderCard(currentIndex);
}

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
randomBtn.addEventListener("click", showRandom);

// First render
renderCard(currentIndex);
