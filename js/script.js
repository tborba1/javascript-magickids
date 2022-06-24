const answers = {
  a: { word: "apple", cls1: "fa-solid", cls2: "fa-apple-whole" },
  b: { word: "baby", cls1: "fa-solid", cls2: "fa-baby" },
  c: { word: "cat", cls1: "fa-solid", cls2: "fa-cat" },
  d: { word: "dog", cls1: "fa-solid", cls2: "fa-dog" },
  e: { word: "earth", cls1: "fa-solid", cls2: "fa-earth-americas" },
  f: { word: "fish", cls1: "fa-solid", cls2: "fa-fish" },
  g: { word: "guitar", cls1: "fa-solid", cls2: "fa-guitar" },
  h: { word: "house", cls1: "fa-solid", cls2: "fa-house" },
  i: { word: "ice cream", cls1: "fa-solid", cls2: "fa-ice-cream" },
  j: { word: "jet", cls1: "fa-solid", cls2: "fa-jet-fighter" },
  k: { word: "key", cls1: "fa-solid", cls2: "fa-key" },
  l: { word: "light bulb", cls1: "fa-solid", cls2: "fa-lightbulb" },
  m: { word: "moon", cls1: "fa-solid", cls2: "fa-moon" },
  n: { word: "ninja", cls1: "fa-solid", cls2: "fa-user-ninja" },
  o: { word: "octopus", cls1: "fa-brands", cls2: "fa-octopus-deploy" },
  p: { word: "paw print", cls1: "fa-solid", cls2: "fa-paw" },
  q: { word: "question mark", cls1: "fa-solid", cls2: "fa-circle-question" },
  r: { word: "rocket", cls1: "fa-solid", cls2: "fa-rocket" },
  s: { word: "sun", cls1: "fa-solid", cls2: "fa-sun" },
  t: { word: "tree", cls1: "fa-solid", cls2: "fa-tree" },
  u: { word: "umbrella", cls1: "fa-solid", cls2: "fa-umbrella" },
  v: { word: "volcano", cls1: "fa-solid", cls2: "fa-volcano" },
  w: { word: "wrench", cls1: "fa-solid", cls2: "fa-wrench" },
  x: { word: "x-ray", cls1: "fa-solid", cls2: "fa-x-ray" },
  y: { word: "YouTube", cls1: "fa-brands", cls2: "fa-youtube" },
  z: { word: "zipper", cls1: "fa-solid", cls2: "fa-file-zipper" }
};

const bgColors = [
  "#F94144",
  "#F3722C",
  "#F8961E",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#577590",
  "#B9E769",
  "#EFEA5A",
  "#048BA8",
  "#54478C"
];

const button = document.getElementById("button");
const ans = document.getElementById("ans");
const input = document.getElementById("letter");
const ansIcon = document.getElementById("ansIcon");
let cls1;
let cls2;

button.addEventListener("click", function () {
  
  // get the value of the input
  const letter = input.value.toLowerCase();
  event.preventDefault();
  // ensure that letter is 1 character long and is one of the keys of `answers`
  if (letter.length !== 1 || !(letter in answers)) {
    alert("Enter a letter!");
  } else {
    const answer = answers[letter];
    const word = answer.word;
    ansIcon.classList.remove(cls1, cls2);
    cls1 = answer.cls1;
    cls2 = answer.cls2;
    ans.innerHTML = word;
    ansIcon.classList.add(cls1, cls2);
    document.body.style.backgroundColor =
    bgColors[Math.floor(Math.random() * bgColors.length)];
  }
});
