"use strict";

const $ = (id) => document.getElementById(id);

const messages = {
  english: {
    love: [
      "You make ordinary days feel magical. I am so lucky to have you in my life. 💜",
      "No matter how busy life gets, you will always have a special place in my heart. ❤️",
      "If I could choose one beautiful thing every day, I would choose another day with you. 🦋"
    ],
    birthday: [
      "Happy Birthday, {name}! 🎂 May your day be filled with happiness, laughter and beautiful memories.",
      "Wishing you a birthday as wonderful as your heart. May all your dreams come true, {name}! 🎉",
      "Today is all about celebrating you! Stay happy, keep smiling and enjoy every moment. 💖"
    ],
    anniversary: [
      "Happy Anniversary, {name}! ❤️ Every memory with you is a treasure I want to keep forever.",
      "Another chapter of beautiful memories together. I hope our bond grows stronger every day. 💕",
      "Time passes, but the moments we share remain special. Happy Anniversary! 🌹"
    ],
    friendship: [
      "Life is better with a friend like you. Thank you for the laughs, support and unforgettable memories. 🫶",
      "Some people become friends, but a few become family. You are one of those special people. 💜",
      "No matter where life takes us, I hope our friendship always stays this beautiful. 🦋"
    ],
    sorry: [
      "I'm truly sorry if I hurt you. You matter to me, and I want to make things right. 💜",
      "I may not have chosen the right words, but I never wanted to hurt you. Please forgive me. ❤️",
      "Our bond means more to me than my pride. I'm sorry, and I hope we can talk. 🫶"
    ],
    miss: [
      "I wish you were here right now. Even ordinary moments feel special when I share them with you. 💜",
      "Distance cannot stop someone from being in my thoughts. I miss you more than words can say. 🦋",
      "Some people are missed in every little moment. You are one of them. ❤️"
    ]
  },

  tamil: {
    love: [
      "என் சாதாரண நாட்களையும் அழகாக்குவது நீ தான். என் வாழ்க்கையில் நீ இருப்பது என் அதிர்ஷ்டம். 💜",
      "எவ்வளவு பிஸியாக இருந்தாலும், என் இதயத்தில் உனக்கென்று ஒரு தனி இடம் எப்போதும் இருக்கும். ❤️",
      "ஒவ்வொரு நாளும் நான் தேர்ந்தெடுக்க வேண்டுமென்றால், உன்னுடன் இன்னொரு நாளைத்தான் தேர்ந்தெடுப்பேன். 🦋"
    ],
    birthday: [
      "இனிய பிறந்தநாள் வாழ்த்துகள் {name}! 🎂 உன் வாழ்க்கை முழுவதும் மகிழ்ச்சியும் அன்பும் நிறைந்திருக்கட்டும்.",
      "உன் அழகான மனதைப் போலவே உன் நாளும் அழகாக இருக்கட்டும். எல்லா கனவுகளும் நிறைவேறட்டும்! 💖",
      "இன்று உனக்கான நாள்! எப்போதும் சிரித்துக்கொண்டே சந்தோஷமாக இரு. இனிய பிறந்தநாள் வாழ்த்துகள்! 🎉"
    ],
    anniversary: [
      "இனிய திருமண நாள் வாழ்த்துகள் {name}! ❤️ உன்னுடன் இருக்கும் ஒவ்வொரு நினைவும் எனக்கு பொக்கிஷம்.",
      "நம்முடைய அழகான பயணத்தில் இன்னொரு வருடம். நம் அன்பு என்றும் வளரட்டும். 💕",
      "காலம் மாறினாலும் நம் அழகான நினைவுகள் என்றும் நிலைத்திருக்கட்டும். இனிய நாள் வாழ்த்துகள்! 🌹"
    ],
    friendship: [
      "உன்னைப் போன்ற நண்பர் இருப்பதால் என் வாழ்க்கை இன்னும் அழகாக இருக்கிறது. நன்றி நண்பா! 💜",
      "சில நண்பர்கள் குடும்பமாக மாறிவிடுவார்கள். எனக்கு அப்படிப்பட்ட ஒரு சிறப்பான நபர் நீ. 🫶",
      "வாழ்க்கை எங்கே அழைத்துச் சென்றாலும் நம் நட்பு இப்படியே அழகாக இருக்கட்டும். 🦋"
    ],
    sorry: [
      "நான் உன் மனதைப் புண்படுத்தியிருந்தால் உண்மையாக மன்னித்துவிடு. நீ எனக்கு மிகவும் முக்கியம். 💜",
      "என் வார்த்தைகள் உன்னை காயப்படுத்தியிருந்தால் மன்னித்துவிடு. உன்னை வருத்தப்படுத்துவது என் நோக்கம் இல்லை. ❤️",
      "நம் உறவைவிட என் பிடிவாதம் பெரியதல்ல. என்னை மன்னித்து பேசுவாயா? 🫶"
    ],
    miss: [
      "நீ இப்போது என் அருகில் இருந்தால் எவ்வளவு அழகாக இருக்கும். உன்னை மிகவும் நினைக்கிறேன். 💜",
      "தூரம் இருந்தாலும் என் எண்ணங்களில் நீ எப்போதும் அருகில்தான் இருக்கிறாய். 🦋",
      "ஒவ்வொரு சிறிய தருணத்திலும் நினைவுக்கு வரும் ஒரு நபர் நீ. உன்னை மிஸ் செய்கிறேன். ❤️"
    ]
  },

  tanglish: {
    love: [
      "En ordinary days ah kooda magical ah maathuradhu nee dhaan. En life la nee irukkuradhu en luck. 💜",
      "Life evlo busy ah irundhaalum, en heart la unakku eppovum oru special place irukkum. ❤️",
      "Daily oru wish kekka sonna, un kooda innum oru naal spend pannanum nu dhaan kepen. 🦋"
    ],
    birthday: [
      "Happy Birthday {name}! 🎂 Un life full ah happiness, love, success ellam nirainjirukkanum.",
      "Un smile eppovum ippadiye irukkanum. Un dreams ellam nijamaaganum. Happy Birthday! 💖",
      "Innaikku un day! Nalla enjoy pannu, happy ah iru, neraya memories create pannu! 🎉"
    ],
    anniversary: [
      "Happy Anniversary {name}! ❤️ Un kooda spend panra ovvoru moment um enakku special.",
      "Namma beautiful journey la innoru year. Namma bond innum strong ah aagattum. 💕",
      "Time maarinaalum namma memories eppovum special ah irukkanum. Happy Anniversary! 🌹"
    ],
    friendship: [
      "Unna maadhiri friend irukkuradhu enakku romba special. Thanks for everything, bestie! 💜",
      "Sila friends family ah maariduvaanga. Enakku nee appadippatta oru special person. 🫶",
      "Life enga kondu ponaalum namma friendship ippadiye strong ah irukkanum. 🦋"
    ],
    sorry: [
      "Unna hurt pannirundha mannikkanum. Nee enakku romba important. 💜",
      "Naan sonna words unna hurt pannirundha sorry. Unna hurt panradhu en intention illa. ❤️",
      "Namma bond ah vida en ego perusu illa. Please manichu en kooda pesu. 🫶"
    ],
    miss: [
      "Nee ippo en kooda irundha evlo nalla irukkum. Unna romba miss panren. 💜",
      "Distance irundhaalum en thoughts la nee eppovum close ah dhaan irukka. 🦋",
      "Ovvoru small moment layum nyabagam varra person nee. Miss you! ❤️"
    ]
  }
};

let lastMessage = "";
let lastKey = "";
let messageIndex = 0;

function generateMessage() {
  const sender = $("sender").value.trim();
  const recipient = $("recipient").value.trim() || "my dear";
  const relation = $("relation").value;
  const occasion = $("occasion").value;
  const language = $("language").value;
  const tone = $("tone").value;

  // Pick messages from the selected occasion.
  const list = messages[language][occasion];

  if (!list || list.length === 0) {
    $("status").textContent = "Please select your options and try again.";
    return;
  }

  const key = language + "-" + occasion;

  // Start at a different message when the user changes the occasion or language.
  if (key !== lastKey) {
    messageIndex = 0;
    lastKey = key;
  }

  let message = list[messageIndex % list.length];
  messageIndex++;

  message = message.replaceAll("{name}", recipient);

  // Personalize the message by relationship and style.
  if (relation === "lover" && occasion === "love") {
    message += "\n\nYou are my favourite person. 💕";
  } else if (relation === "bestie" || occasion === "friendship") {
    message += "\n\nLucky to have you in my life! 🫶";
  } else if (relation === "brother") {
    message += "\n\nProud to have a brother like you! 💙";
  } else if (relation === "sister") {
    message += "\n\nSo lucky to have you as my sister! 💗";
  }

  if (tone === "emotional") {
    message += "\n\nSome people are not just part of our lives; they become part of our hearts. 💜";
  } else if (tone === "funny") {
    message += "\n\nDon't forget to smile today. Your smile is free, so use it a lot! 😄";
  }

  if (sender) {
    message += "\n\nWith love,\n" + sender;
  }

  lastMessage = message;
  $("output").textContent = message;
  $("status").textContent = "Your message is ready! 💌";
}

$("generateBtn").addEventListener("click", generateMessage);
$("anotherBtn").addEventListener("click", generateMessage);

$("copyBtn").addEventListener("click", async function () {
  if (!lastMessage) {
    $("status").textContent = "Generate a message first.";
    return;
  }

  try {
    await navigator.clipboard.writeText(lastMessage);
    $("status").textContent = "Message copied! 📋";
  } catch (error) {
    $("status").textContent =
      "Copy was blocked by your browser. Select the message and copy it manually.";
  }
});

$("shareBtn").addEventListener("click", function () {
  if (!lastMessage) {
    $("status").textContent = "Generate a message first.";
    return;
  }

  const url =
    "https://wa.me/?text=" + encodeURIComponent(lastMessage);

  window.open(url, "_blank", "noopener,noreferrer");
});