const answers = {
    a: "apple",
    b: "balloon",
    c: "cat",
    d: "dog",
    e: "elephant",
    f: "fish",
    g: "giraffe",
    h: "house",
    i: "ice cream",
    j: "jelly bean",
    k: "key",
    l: "lollipop",
    m: "monkey",
    n: "newt",
    o: "octopus",
    p: "pig",
    q: "queen",
    r: "rocket",
    s: "sun",
    t: "turtle",
    u: "umbrella",
    v: "volcano",
    w: "whale",
    x: "xylophone",
    y: "yellow",
    z: "zoo"
  };
  
  let let1 = prompt(`Enter a letter`);
  let letter = let1.toLowerCase();
  console.log(letter);
  console.log(answers[letter]);
  console.log(`${letter} = ${answers[letter]}`);