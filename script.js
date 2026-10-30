"use strict";

const $ = (id) => document.getElementById(id);

const messages = {
  english: {
    love: [
      "You make ordinary days feel magical. I am so lucky to have you in my life. 💜",
      "No matter how busy life gets, you will always have a special place in my heart. ❤️",
      "If I could choose one beautiful thing every day, I would choose another day with you. 🦋",
      "You are the reason my heart believes in beautiful things. 💜",
      "I don't need a fairytale because my reality with you is already magical. ❤️",
      "Every little thing about you makes me fall for you again. 🌹",
      "My favourite notification will always be your name on my screen. 💕",
      "You entered my life quietly and became my biggest happiness. 🦋",
      "I want to be the reason behind your happiest smiles. 🫂",
      "Loving you is my favourite feeling, and choosing you is my favourite decision. 💗",
      "Even silence feels beautiful when I am with you. ❤️",
      "You are my once-in-a-lifetime kind of person. 💜",
      "If I could gift you something, I would give you the ability to see yourself through my eyes. 🌷"

    ],
    birthday: [
      "Happy Birthday, {name}! 🎂 May your day be filled with happiness, laughter and beautiful memories.",
      "Wishing you a birthday as wonderful as your heart. May all your dreams come true, {name}! 🎉",
      "Today is all about celebrating you! Stay happy, keep smiling and enjoy every moment. 💖",
      "May your birthday open the door to a year full of wonderful opportunities. 🎂",
      "Keep chasing your dreams and never stop believing in yourself. Happy Birthday! 💜",
      "May every candle you blow out bring a new reason to smile. 🎉",
      "You deserve happiness today, tomorrow and every day after that. ❤️",
      "Another year older, wiser and more wonderful. Enjoy your special day! 🥳",
      "May your heart always be light and your future incredibly bright. 🌟",
      "Sending you endless smiles, warm hugs and beautiful birthday wishes. 🫂",
      "May this year surprise you with everything your heart has been waiting for. 💐",
      "Your existence makes this world a little more beautiful. Happy Birthday! 💗",
      "Celebrate yourself today because you are truly special. 🎂"

    ],
    anniversary: [
      "Happy Anniversary, {name}! ❤️ Every memory with you is a treasure I want to keep forever.",
      "Another chapter of beautiful memories together. I hope our bond grows stronger every day. 💕",
      "Time passes, but the moments we share remain special. Happy Anniversary! 🌹",
      "The best part of my journey is having you beside me. Happy Anniversary! ❤️",
      "Every year with you adds another beautiful page to our story. 💕",
      "I don't count the years; I count the beautiful memories we create. 🌹",
      "May our love always find new reasons to grow. 💜",
      "You are still my favourite person to share every little thing with. 🫂",
      "Our story is my favourite story, and I never want it to end. ❤️",
      "Thank you for making every season of life more beautiful. 🌷",
      "One more year of choosing each other, understanding each other and growing together. 💗",
      "May our hands never let go and our hearts never grow apart. 🦋",
      "The journey is beautiful because I am walking it with you. Happy Anniversary! 💐"

    ],
    friendship: [
      "Life is better with a friend like you. Thank you for the laughs, support and unforgettable memories. 🫶",
      "Some people become friends, but a few become family. You are one of those special people. 💜",
      "No matter where life takes us, I hope our friendship always stays this beautiful. 🦋",
      "Some friendships don't need daily conversations; they just need genuine hearts. 💜",
      "You are the kind of friend everyone wishes to have. 🫶",
      "Thank you for understanding my silence as much as my words. ❤️",
      "Real friendship is not about being together every day; it's about being there when it matters. 💕",
      "Even the smallest memories with you become the biggest reasons to smile. 🦋",
      "Having you as my friend is one of life's unexpected blessings. 💗",
      "Years may pass and places may change, but I hope we never become strangers. 🫂",
      "A thousand thanks would never be enough for a friend like you. 💜",
      "You're not just a chapter in my story; you're one of my favourite memories. 🌹",
      "May we always have reasons to laugh together, no matter how old we grow. ❤️"
    ],
    sorry: [
      "I'm truly sorry if I hurt you. You matter to me, and I want to make things right. 💜",
      "I may not have chosen the right words, but I never wanted to hurt you. Please forgive me. ❤️",
      "Our bond means more to me than my pride. I'm sorry, and I hope we can talk. 🫶",
      "I wish I could take back the words that hurt you. I am truly sorry. 💜",
      "You deserve understanding, not arguments. Please forgive me. ❤️",
      "I know I made a mistake, and I don't want my ego to stand between us. 🫂",
      "I never wanted to become the reason for your tears. I'm sorry. 💗",
      "Please don't let one bad moment erase all our beautiful memories. 🌹",
      "I may be wrong, but losing your trust is the last thing I want. 💕",
      "I am sorry for not understanding your feelings when you needed me. 🦋",
      "I cannot promise perfection, but I can promise to learn from my mistakes. 💜",
      "Your feelings matter, and I should have listened more carefully. ❤️",
      "I hope time and honesty can heal what my mistake has hurt. 🫶"

    ],
    miss: [
      "I wish you were here right now. Even ordinary moments feel special when I share them with you. 💜",
      "Distance cannot stop someone from being in my thoughts. I miss you more than words can say. 🦋",
      "Some people are missed in every little moment. You are one of them. ❤️",

      "I miss you in moments when I least expect it. 💜",
      "The distance between us is real, but so is the love I feel. ❤️",
      "I wish I could turn every memory into another moment with you. 🦋",
      "My days feel incomplete without our little conversations. 💕",
      "Sometimes all I need is one hug from you. 🫂",
      "I look at my phone hoping your name appears. 💗",
      "Even the happiest moments make me wish you were here. 🌹",
      "I miss the little things that we never knew would become memories. 💜",
      "No matter how far you are, you are always close to my heart. ❤️",
      "Until we meet again, I will keep collecting reasons to miss you. 🦋"

    ]
  },

  tamil: {
    love: [
      "என் சாதாரண நாட்களையும் அழகாக்குவது நீ தான். என் வாழ்க்கையில் நீ இருப்பது என் அதிர்ஷ்டம். 💜",
      "எவ்வளவு பிஸியாக இருந்தாலும், என் இதயத்தில் உனக்கென்று ஒரு தனி இடம் எப்போதும் இருக்கும். ❤️",
      "ஒவ்வொரு நாளும் நான் தேர்ந்தெடுக்க வேண்டுமென்றால், உன்னுடன் இன்னொரு நாளைத்தான் தேர்ந்தெடுப்பேன். 🦋",

      "என் மனதிற்கு அமைதி தரும் இடம் உன் அருகில்தான் இருக்கிறது. 💜",
      "உன்னைச் சந்தித்த பிறகுதான் மகிழ்ச்சிக்கும் ஒரு முகம் இருக்கிறது என்பதை உணர்ந்தேன். ❤️",
      "நாள் முழுவதும் என் நினைவில் அழகாகத் தங்கியிருக்கும் எண்ணம் நீதான். 🌹",
      "ஆயிரம் பேர் இருந்தாலும் என் இதயம் தேடுவது உன்னை மட்டும்தான். 💕",
      "ஆயிரம் அழகான தருணங்கள் வேண்டாம்; உன்னுடன் வாழ்நாள் முழுவதும் சாதாரண தருணங்கள் போதும். 🫂",
      "யாருக்கும் தெரியாமல் என் முகத்தில் புன்னகையை வரவழைப்பது உன் நினைவுகள்தான். 💗",
      "இந்த உலகத்தில் எனக்குப் பிடித்தமான இடம் நீ இருக்கும் இடம்தான். 🦋",
      "என் ஒவ்வொரு இதயத் துடிப்பிலும் உன் நினைவுகள் கலந்திருக்கின்றன. ❤️",
      "ஒவ்வொரு நாளும் நான் வேண்டிக்கொள்ளும் அழகான விஷயம் உன் மகிழ்ச்சிதான். 💜",
      "காதலுக்கு ஒரு மொழி இருந்தால், என் இதயம் உன் பெயரைத்தான் சொல்லும். 🌹",

      "என் இதயம் அழகான விஷயங்களை நம்புவதற்குக் காரணம் நீதான். 💜",
      "எனக்குத் தேவதை கதைகள் வேண்டாம்; உன்னுடன் இருக்கும் வாழ்க்கையே ஒரு அழகான மாயம். ❤️",
      "உன்னிடம் இருக்கும் ஒவ்வொரு சிறிய விஷயமும் மீண்டும் மீண்டும் உன்னை காதலிக்க வைக்கிறது. 🌹",
      "என் கைப்பேசியில் எனக்குப் பிடித்த அறிவிப்பு உன் பெயர்தான். 💕",
      "அமைதியாக என் வாழ்க்கைக்குள் வந்து என் மிகப்பெரிய மகிழ்ச்சியாக மாறிவிட்டாய். 🦋",
      "உன் முகத்தில் வரும் மகிழ்ச்சியான புன்னகைக்குக் காரணமாக இருக்க விரும்புகிறேன். 🫂",
      "உன்னை காதலிப்பது என் மனதிற்குப் பிடித்த உணர்வு; உன்னைத் தேர்ந்தெடுத்தது என் அழகான முடிவு. 💗",
      "உன்னுடன் இருக்கும்போது மௌனம்கூட அழகாகத் தெரிகிறது. ❤️",
      "என் வாழ்வில் ஒருமுறை மட்டுமே கிடைக்கும் அற்புதமான நபர் நீதான். 💜",
      "உன்னை என் கண்களால் அல்ல, என் இதயத்தால் பார்க்கும் அழகை உனக்குப் பரிசளிக்க விரும்புகிறேன். 🌷"

    ],
    birthday: [
      "இனிய பிறந்தநாள் வாழ்த்துகள் {name}! 🎂 உன் வாழ்க்கை முழுவதும் மகிழ்ச்சியும் அன்பும் நிறைந்திருக்கட்டும்.",
      "உன் அழகான மனதைப் போலவே உன் நாளும் அழகாக இருக்கட்டும். எல்லா கனவுகளும் நிறைவேறட்டும்! 💖",
      "இன்று உனக்கான நாள்! எப்போதும் சிரித்துக்கொண்டே சந்தோஷமாக இரு. இனிய பிறந்தநாள் வாழ்த்துகள்! 🎉",

      "இந்தப் பிறந்தநாள் உன் வாழ்க்கையில் புதிய வாய்ப்புகளும் அழகான வெற்றிகளும் நிறைந்த ஆண்டைத் தொடங்கட்டும். 🎂",
      "உன் கனவுகளைத் தொடர்ந்து செல்; உன் மீது இருக்கும் நம்பிக்கையை ஒருபோதும் இழக்காதே. இனிய பிறந்தநாள் வாழ்த்துகள்! 💜",
      "நீ அணைக்கும் ஒவ்வொரு மெழுகுவர்த்தியும் உன் வாழ்க்கையில் ஒரு புதிய மகிழ்ச்சியைக் கொண்டு வரட்டும். 🎉",
      "இன்றும், நாளையும், என்றும் நீ மகிழ்ச்சியாக வாழத் தகுதியானவன். ❤️",
      "இன்னொரு வருடம் அனுபவமும் அறிவும் அழகும் நிறைந்ததாக அமையட்டும். 🥳",
      "உன் மனம் எப்போதும் மகிழ்ச்சியாகவும், உன் எதிர்காலம் ஒளிமயமாகவும் இருக்கட்டும். 🌟",
      "எல்லையில்லா புன்னகைகள், அன்பான அணைப்புகள், இனிய வாழ்த்துகள் உனக்காக! 🫂",
      "இந்த வருடம் உன் மனம் எதிர்பார்த்த எல்லா நல்ல விஷயங்களையும் கொண்டு வரட்டும். 💐",
      "நீ இந்த உலகில் இருப்பதே இந்த உலகிற்கு ஒரு அழகு. இனிய பிறந்தநாள் வாழ்த்துகள்! 💗",
      "இன்று உன்னைக் கொண்டாடு; ஏனென்றால் நீ உண்மையிலேயே சிறப்பானவன். 🎂"

    ],
    anniversary: [
      "இனிய திருமண நாள் வாழ்த்துகள் {name}! ❤️ உன்னுடன் இருக்கும் ஒவ்வொரு நினைவும் எனக்கு பொக்கிஷம்.",
      "நம்முடைய அழகான பயணத்தில் இன்னொரு வருடம். நம் அன்பு என்றும் வளரட்டும். 💕",
      "காலம் மாறினாலும் நம் அழகான நினைவுகள் என்றும் நிலைத்திருக்கட்டும். இனிய நாள் வாழ்த்துகள்! 🌹",

      "என் வாழ்க்கைப் பயணத்தின் அழகான பகுதி, உன்னை என் அருகில் வைத்திருப்பதுதான். இனிய ஆண்டு நிறைவு நாள்! ❤️",
      "உன்னுடன் கடக்கும் ஒவ்வொரு வருடமும் நம் கதையில் இன்னொரு அழகான பக்கத்தைச் சேர்க்கிறது. 💕",
      "நான் வருடங்களைக் கணக்கிடுவதில்லை; நாம் உருவாக்கும் அழகான நினைவுகளையே கணக்கிடுகிறேன். 🌹",
      "நம் அன்பு வளர்வதற்கு இன்னும் பல காரணங்கள் கிடைக்கட்டும். 💜",
      "என் ஒவ்வொரு சிறிய விஷயத்தையும் பகிர்ந்துகொள்ள நான் விரும்பும் நபர் நீதான். 🫂",
      "நம் காதல் கதைதான் எனக்குப் பிடித்தமான கதை; அது ஒருபோதும் முடியக்கூடாது. ❤️",
      "வாழ்க்கையின் ஒவ்வொரு காலத்தையும் அழகாக்கியதற்கு நன்றி. 🌷",
      "இன்னொரு வருடம் ஒருவரை ஒருவர் தேர்ந்தெடுத்து, புரிந்துகொண்டு, ஒன்றாக வளர்வோம். 💗",
      "நம் கைகள் ஒருபோதும் பிரியாமலும், நம் இதயங்கள் ஒருபோதும் விலகாமலும் இருக்கட்டும். 🦋",
      "உன்னுடன் நடப்பதால்தான் நம் பயணம் இவ்வளவு அழகாக இருக்கிறது. இனிய ஆண்டு நிறைவு நாள்! 💐"

    ],
    friendship: [
      "உன்னைப் போன்ற நண்பர் இருப்பதால் என் வாழ்க்கை இன்னும் அழகாக இருக்கிறது. நன்றி நண்பா! 💜",
      "சில நண்பர்கள் குடும்பமாக மாறிவிடுவார்கள். எனக்கு அப்படிப்பட்ட ஒரு சிறப்பான நபர் நீ. 🫶",
      "வாழ்க்கை எங்கே அழைத்துச் சென்றாலும் நம் நட்பு இப்படியே அழகாக இருக்கட்டும். 🦋",
      "தினமும் பேச வேண்டிய அவசியமில்லை; உண்மையான அன்பு இருந்தால் நட்பு என்றும் அழகாக இருக்கும். 💜",
      "எல்லோரும் விரும்பும் ஒரு நல்ல நண்பர் நீ. 🫶",
      "என் வார்த்தைகளைப் போலவே என் மௌனத்தையும் புரிந்துகொள்வதற்கு நன்றி. ❤️",
      "ஒவ்வொரு நாளும் அருகில் இருப்பது நட்பல்ல; தேவைப்படும் நேரத்தில் துணையாக இருப்பதுதான் உண்மையான நட்பு. 💕",
      "உன்னுடன் இருக்கும் சிறிய நினைவுகள்கூட பெரிய மகிழ்ச்சியைத் தருகின்றன. 🦋",
      "என் வாழ்க்கையில் எதிர்பாராமல் கிடைத்த அழகான வரம் உன் நட்பு. 💗",
      "வருடங்கள் கடந்தாலும், இடங்கள் மாறினாலும் நாம் அந்நியர்களாக மாறிவிடக்கூடாது. 🫂",
      "உன்னைப் போன்ற நண்பருக்கு ஆயிரம் நன்றிகள் சொன்னாலும் போதாது. 💜",
      "என் வாழ்க்கைக் கதையில் மறக்க முடியாத அழகான நினைவுகளில் நீயும் ஒருவர். 🌹",
      "வயது எவ்வளவு ஆனாலும் சேர்ந்து சிரிப்பதற்கான காரணங்கள் நமக்கு எப்போதும் இருக்கட்டும். ❤️"
    ],
    sorry: [
      "நான் உன் மனதைப் புண்படுத்தியிருந்தால் உண்மையாக மன்னித்துவிடு. நீ எனக்கு மிகவும் முக்கியம். 💜",
      "என் வார்த்தைகள் உன்னை காயப்படுத்தியிருந்தால் மன்னித்துவிடு. உன்னை வருத்தப்படுத்துவது என் நோக்கம் இல்லை. ❤️",
      "நம் உறவைவிட என் பிடிவாதம் பெரியதல்ல. என்னை மன்னித்து பேசுவாயா? 🫶",
      "உன் மனதைப் புண்படுத்திய அந்த வார்த்தைகளைத் திரும்பப் பெற முடிந்தால் எவ்வளவு நன்றாக இருக்கும். உண்மையாக மன்னித்துவிடு. 💜",
      "உனக்குத் தேவையானது புரிதல்தான்; வாக்குவாதம் அல்ல. என்னை மன்னித்துவிடு. ❤️",
      "நான் தவறு செய்துவிட்டேன் என்பதை ஏற்றுக்கொள்கிறேன். என் பிடிவாதம் நமக்குள் தடையாக இருக்க வேண்டாம். 🫂",
      "உன் கண்ணீருக்குக் காரணமாக நான் ஒருபோதும் இருக்க விரும்பவில்லை. மன்னித்துவிடு. 💗",
      "ஒரு மோசமான தருணம் நம்முடைய அழகான நினைவுகளை அழித்துவிட வேண்டாம். 🌹",
      "நான் தவறு செய்திருக்கலாம்; ஆனால் உன் நம்பிக்கையை இழக்க விரும்பவில்லை. 💕",
      "உனக்கு என் புரிதல் தேவைப்பட்ட நேரத்தில் உன் உணர்வுகளைப் புரிந்துகொள்ளாததற்கு வருந்துகிறேன். 🦋",
      "நான் எப்போதும் சரியாக இருப்பேன் என்று சொல்ல முடியாது; ஆனால் என் தவறுகளிலிருந்து கற்றுக்கொள்வேன். 💜",
      "உன் உணர்வுகள் முக்கியமானவை. நான் இன்னும் கவனமாகக் கேட்டிருக்க வேண்டும். ❤️",
      "என் தவறால் ஏற்பட்ட காயத்தை நேர்மையும் காலமும் ஆற்றும் என்று நம்புகிறேன். 🫶"

    ],
    miss: [
      "நீ இப்போது என் அருகில் இருந்தால் எவ்வளவு அழகாக இருக்கும். உன்னை மிகவும் நினைக்கிறேன். 💜",
      "தூரம் இருந்தாலும் என் எண்ணங்களில் நீ எப்போதும் அருகில்தான் இருக்கிறாய். 🦋",
      "ஒவ்வொரு சிறிய தருணத்திலும் நினைவுக்கு வரும் ஒரு நபர் நீ. உன்னை மிஸ் செய்கிறேன். ❤️",

      "எதிர்பாராத நேரங்களில்கூட உன் நினைவுகள் என்னைத் தேடி வருகின்றன. 💜",
      "நமக்கிடையே தூரம் இருக்கலாம்; ஆனால் என் அன்பு உண்மையானது. ❤️",
      "ஒவ்வொரு நினைவையும் உன்னுடன் இருக்கும் இன்னொரு தருணமாக மாற்ற முடிந்தால் எவ்வளவு அழகாக இருக்கும். 🦋",
      "நம் சிறிய உரையாடல்கள் இல்லாமல் என் நாட்கள் முழுமையடைவதில்லை. 💕",
      "சில நேரங்களில் உன் ஒரு அணைப்பு மட்டுமே எனக்குத் தேவைப்படுகிறது. 🫂",
      "என் கைப்பேசியில் உன் பெயர் வருமா என்று அடிக்கடி பார்க்கிறேன். 💗",
      "எவ்வளவு மகிழ்ச்சியாக இருந்தாலும், நீ அருகில் இருந்தால் இன்னும் அழகாக இருக்கும் என்று தோன்றுகிறது. 🌹",
      "ஒருநாள் நினைவுகளாக மாறும் என்று தெரியாமல் நாம் பகிர்ந்துகொண்ட அந்தச் சிறிய தருணங்களை நினைக்கிறேன். 💜",
      "நீ எவ்வளவு தூரத்தில் இருந்தாலும் என் இதயத்திற்கு அருகில்தான் இருக்கிறாய். ❤️",
      "மீண்டும் சந்திக்கும் நாள் வரை உன்னை நினைப்பதற்கான காரணங்களைச் சேகரித்துக்கொண்டே இருப்பேன். 🦋"

    ]
  },

  tanglish: {
    love: [
      "En ordinary days ah kooda magical ah maathuradhu nee dhaan. En life la nee irukkuradhu en luck. 💜",
      "Life evlo busy ah irundhaalum, en heart la unakku eppovum oru special place irukkum. ❤️",
      "Daily oru wish kekka sonna, un kooda innum oru naal spend pannanum nu dhaan kepen. 🦋",
      "En manasukku peace thara place un pakkathula dhaan irukku. 💜",
      "Unna meet pannadhukku appuram dhaan happiness kum oru face irukku nu therinjadhu. ❤️",
      "Day full ah en thoughts la beautiful ah irukkura thought nee dhaan. 🌹",
      "Thousand people irundhaalum en heart theduradhu unna mattum dhaan. 💕",
      "Thousand beautiful moments venam; un kooda lifetime ordinary moments irundha podhum. 🫂",
      "Yaarukkum theriyama en face la smile vara veikkuradhu un memories dhaan. 💗",
      "Indha world la enakku pidicha place nee irukkura place dhaan. 🦋",
      "En ovvoru heartbeat layum un nyabagangal irukku. ❤️",
      "Daily naan wish panra beautiful thing un happiness dhaan. 💜",
      "Love ku oru language irundha, en heart un name dhaan sollum. 🌹"
    ],
    birthday: [
      "Happy Birthday {name}! 🎂 Un life full ah happiness, love, success ellam nirainjirukkanum.",
      "Un smile eppovum ippadiye irukkanum. Un dreams ellam nijamaaganum. Happy Birthday! 💖",
      "Innaikku un day! Nalla enjoy pannu, happy ah iru, neraya memories create pannu! 🎉",

      "Indha birthday un life la new opportunities um beautiful success um nirainja year ah start pannattum. 🎂",
      "Un dreams ah chase pannu; unna pathina confidence ah eppovum lose pannadha. Happy Birthday! 💜",
      "Nee blow panra ovvoru candle um un life la oru new happiness kondu varattum. 🎉",
      "Innaikkum, naalaikkum, eppovum nee happy ah vaazha deserve panra. ❤️",
      "Innor year experience, wisdom, beauty ellam un kooda grow aagattum. 🥳",
      "Un heart eppovum light ah irukkanum; un future bright ah irukkanum. 🌟",
      "Endless smiles, warm hugs, beautiful birthday wishes ellame unakkaga! 🫂",
      "Indha year un heart wait pannura ella good things um kondu varattum. 💐",
      "Nee indha world la irukkuradhe indha world ah konjam beautiful ah maathudhu. 💗",
      "Innaikku unna celebrate pannu; because nee really special. 🎂"

    ],
    anniversary: [
      "Happy Anniversary {name}! ❤️ Un kooda spend panra ovvoru moment um enakku special.",
      "Namma beautiful journey la innoru year. Namma bond innum strong ah aagattum. 💕",
      "Time maarinaalum namma memories eppovum special ah irukkanum. Happy Anniversary! 🌹",

      "En life journey la beautiful part nee en kooda irukkuradhu dhaan. Happy Anniversary! ❤️",
      "Un kooda spend panra ovvoru year um namma story la innoru beautiful page add pannudhu. 💕",
      "Naan years ah count panradhu illa; namma create panra beautiful memories ah dhaan count panren. 🌹",
      "Namma love grow aaguradhukku innum neraya reasons kidaikattum. 💜",
      "En ovvoru small thing um share panna enakku pidicha person nee dhaan. 🫂",
      "Namma love story dhaan en favourite story; adhu eppovum mudiyave koodadhu. ❤️",
      "Life oda ovvoru season um beautiful ah maathunadhukku thanks. 🌷",
      "Innor year um oruthara oruthar choose panni, understand panni, serndhu grow pannuvom. 💗",
      "Namma hands eppovum piriyama, namma hearts eppovum distance aagama irukkanum. 🦋",
      "Un kooda nadakkuradhunaala dhaan namma journey ivlo beautiful ah irukku. Happy Anniversary! 💐"

    ],
    friendship: [
      "Unna maadhiri friend irukkuradhu enakku romba special. Thanks for everything, bestie! 💜",
      "Sila friends family ah maariduvaanga. Enakku nee appadippatta oru special person. 🫶",
      "Life enga kondu ponaalum namma friendship ippadiye strong ah irukkanum. 🦋",

      "Daily pesanum nu avasiyam illa; genuine hearts irundha friendship eppovum beautiful ah irukkum. 💜",
      "Ellarum wish panra maadhiri oru friend nee. 🫶",
      "En words ah mattum illa, en silence ah vum understand panradhukku thanks. ❤️",
      "Daily kooda irukkuradhu friendship illa; thevaiyana nerathula support panradhu dhaan true friendship. 💕",
      "Un kooda irukkura small memories kooda periya happiness ah maaridum. 🦋",
      "En life la unexpected ah kidaicha beautiful blessing un friendship. 💗",
      "Years ponaalum, places maarinaalum namma strangers ah maarida koodadhu. 🫂",
      "Unna maadhiri friend ku thousand thanks sonnaalum podhadhu. 💜",
      "En life story la marakka mudiyadha beautiful memories la nee yum oruthan. 🌹",
      "Vayasu evlo aanaalum serndhu sirikka reasons namakku eppovum irukkanum. ❤️"
    ],
    sorry: [
      "Unna hurt pannirundha mannikkanum. Nee enakku romba important. 💜",
      "Naan sonna words unna hurt pannirundha sorry. Unna hurt panradhu en intention illa. ❤️",
      "Namma bond ah vida en ego perusu illa. Please manichu en kooda pesu. 🫶",

      "Un manasa hurt panna andha words ah thirumba vaanga mudinja evlo nalla irukkum. Really sorry. 💜",
      "Unakku thevai understanding dhaan; arguments illa. Please manichidu. ❤️",
      "Naan mistake panniten nu accept panren. En ego namakkulla problem ah irukka vendam. 🫂",
      "Un tears ku naan eppovum reason ah irukka virumbala. Sorry. 💗",
      "Oru bad moment namma beautiful memories ah erase pannida vendam. 🌹",
      "Naan wrong ah irukkalaam; aana un trust ah lose panna virumbala. 💕",
      "Unakku en understanding thevaiyaana nerathula un feelings ah purinjukkama poitten. Sorry. 🦋",
      "Naan eppovum perfect ah iruppen nu solla mudiyadhu; aana en mistakes la irundhu learn pannuven. 💜",
      "Un feelings important. Naan innum konjam careful ah listen pannirukkanum. ❤️",
      "En mistake nala vandha pain ah time um honesty um heal pannum nu namburen. 🫶"

    ],
    miss: [
      "Nee ippo en kooda irundha evlo nalla irukkum. Unna romba miss panren. 💜",
      "Distance irundhaalum en thoughts la nee eppovum close ah dhaan irukka. 🦋",
      "Ovvoru small moment layum nyabagam varra person nee. Miss you! ❤️",

      "Naan expect pannadha moments layum un nyabagangal enna thedi varudhu. 💜",
      "Namakulla distance irukkalaam; aana en love real dhaan. ❤️",
      "Ovvoru memory yum un kooda irukkura innoru moment ah maatha mudinja evlo beautiful ah irukkum. 🦋",
      "Namma small conversations illaama en days complete aagura maadhiri illa. 💕",
      "Sila neram un oru hug mattum dhaan enakku thevai. 🫂",
      "En phone la un name varuma nu adikkadi check panren. 💗",
      "Evlo happy ah irundhaalum nee pakkathula irundha innum beautiful ah irukkum nu thonudhu. 🌹",
      "Oru naal memories ah maarum nu theriyama share pannina small moments ah miss panren. 💜",
      "Nee evlo distance la irundhaalum en heart kku close ah dhaan irukka. ❤️",
      "Thirumba meet panra naal varaikkum unna miss panradhukku reasons collect pannitte iruppen. 🦋"

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
