// Data model begins

var data = {
    currEmo: null,
    emoFace: [{
        emoName: "grinning face",
        emoji: "😀"
    }, {
        emoName: "grinning face with smiling eyes",
        emoji: "😁"
    }, {
        emoName: "face with tears of joy",
        emoji: "😂"
    }, {
        emoName: "smiling face with open mouth",
        emoji: "😃"
    }, {
        emoName: "smiling face with open mouth and smiling eyes",
        emoji: "😄"
    }, {
        emoName: "smiling face with open mouth and cold sweat",
        emoji: "😅"
    }, {
        emoName: "smiling face with open mouth and tightly-closed eyes",
        emoji: "😆"
    }, {
        emoName: "winking face",
        emoji: "😉"
    }, {
        emoName: "smiling face with smiling eyes",
        emoji: "😊"
    }, {
        emoName: "face savouring delicious food",
        emoji: "😋"
    }, {
        emoName: "smiling face with sunglasses",
        emoji: "😎"
    }, {
        emoName: "smiling face with heart-shaped eyes",
        emoji: "😍"
    }, {
        emoName: "face throwing a kiss",
        emoji: "😘"
    }, {
        emoName: "kissing face",
        emoji: "😗"
    }, {
        emoName: "kissing face with smiling eyes",
        emoji: "😙"
    }, {
        emoName: "kissing face with closed eyes",
        emoji: "😚"
    }, {
        emoName: "slightly smiling face",
        emoji: "🙂"
    }, {
        emoName: "hugging face",
        emoji: "🤗"
    }, {
        emoName: "smiling face with halo",
        emoji: "😇"
    }, {
        emoName: "nerd face",
        emoji: "🤓"
    }, {
        emoName: "thinking face",
        emoji: "🤔"
    }, {
        emoName: "neutral face",
        emoji: "😐"
    }, {
        emoName: "expressionless face",
        emoji: "😑"
    }, {
        emoName: "face without mouth",
        emoji: "😶"
    }, {
        emoName: "face with rolling eyes",
        emoji: "🙄"
    }, {
        emoName: "smirking face",
        emoji: "😏"
    }, {
        emoName: "persevering face",
        emoji: "😣"
    }, {
        emoName: "disappointed but relieved face",
        emoji: "😥"
    }, {
        emoName: "face with open mouth",
        emoji: "😮"
    }, {
        emoName: "zipper-mouth face",
        emoji: "🤐"
    }, {
        emoName: "hushed face",
        emoji: "😯"
    }, {
        emoName: "sleepy face",
        emoji: "😪"
    }, {
        emoName: "tired face",
        emoji: "😫"
    }, {
        emoName: "sleeping face",
        emoji: "😴"
    }, {
        emoName: "relieved face",
        emoji: "😌"
    }, {
        emoName: "face with stuck-out tongue",
        emoji: "😛"
    }, {
        emoName: "face with stuck-out tongue and winking eye",
        emoji: "😜"
    }, {
        emoName: "face with stuck-out tongue and tightly-closed eyes",
        emoji: "😝"
    }, {
        emoName: "unamused face",
        emoji: "😒"
    }, {
        emoName: "face with cold sweat",
        emoji: "😓"
    }, {
        emoName: "pensive face",
        emoji: "😔"
    }, {
        emoName: "confused face",
        emoji: "😕"
    }, {
        emoName: "upside-down face",
        emoji: "🙃"
    }, {
        emoName: "money-mouth face",
        emoji: "🤑"
    }, {
        emoName: "astonished face",
        emoji: "😲"
    }, {
        emoName: "face with medical mask",
        emoji: "😷"
    }, {
        emoName: "face with thermometer",
        emoji: "🤒"
    }, {
        emoName: "face with head-bandage",
        emoji: "🤕"
    }, {
        emoName: "slightly frowning face",
        emoji: "🙁"
    }, {
        emoName: "confounded face",
        emoji: "😖"
    }, {
        emoName: "disappointed face",
        emoji: "😞"
    }, {
        emoName: "worried face",
        emoji: "😟"
    }, {
        emoName: "face with look of triumph",
        emoji: "😤"
    }, {
        emoji: "😢",
        emoName: "crying face"
    }, {
        emoji: "😭",
        emoName: "loudly crying face"
    }, {
        emoji: "😦",
        emoName: "frowning face with open mouth"
    }, {
        emoji: "😧",
        emoName: "anguished face"
    }, {
        emoji: "😨",
        emoName: "fearful face"
    }, {
        emoji: "😩",
        emoName: "weary face"
    }, {
        emoji: "😬",
        emoName: "grimacing face"
    }, {
        emoji: "😰",
        emoName: "face with open mouth and cold sweat"
    }, {
        emoji: "😱",
        emoName: "face screaming in fear"
    }, {
        emoji: "😳",
        emoName: "flushed face"
    }, {
        emoji: "😵",
        emoName: "dizzy face"
    }, {
        emoji: "😡",
        emoName: "pouting face"
    }, {
        emoji: "😠",
        emoName: "angry face"
    }, {
        emoji: "😈",
        emoName: "smiling face with horns"
    }, {
        emoji: "👿",
        emoName: "imp"
    }, {
        emoji: "👹",
        emoName: "japanese ogre"
    }, {
        emoji: "👺",
        emoName: "japanese goblin"
    }, {
        emoji: "💀",
        emoName: "skull"
    }, {
        emoji: "☠ ",
        emoName: "kull and crossbones"
    }, {
        emoji: "👻",
        emoName: "ghost"
    }, {
        emoji: "👽",
        emoName: "extraterrestrial alien"
    }, {
        emoji: "👾",
        emoName: "alien monster"
    }, {
        emoji: "🤖",
        emoName: "robot face"
    }, {
        emoji: "💩",
        emoName: "pile of poo"
    }, {
        emoji: "😺",
        emoName: "smiling cat face with open mouth"
    }, {
        emoji: "😸",
        emoName: "grinning cat face with smiling eyes"
    }, {
        emoji: "😹",
        emoName: "cat face with tears of joy"
    }, {
        emoji: "😻",
        emoName: "smiling cat face with heart-shaped eyes"
    }, {
        emoji: "😼",
        emoName: "cat face with wry smile"
    }, {
        emoji: "😽",
        emoName: "kissing cat face with closed eyes"
    }, {
        emoji: "🙀",
        emoName: "weary cat face"
    }, {
        emoji: "😿",
        emoName: "crying cat face"
    }, {
        emoji: "😾",
        emoName: "pouting cat face"
    }, {
        emoji: "🙈",
        emoName: "see-no-evil monkey"
    }, {
        emoji: "🙉",
        emoName: "hear-no-evil monkey"
    }, {
        emoji: "🙊",
        emoName: "speak-no-evil monkey"
    }, {
        emoji: "👦",
        emoName: "boy"
    }, {
        emoji: "👧",
        emoName: "girl"
    }, {
        emoji: "👨",
        emoName: "man"
    }, {
        emoji: "👩",
        emoName: "woman"
    }, {
        emoji: "👴",
        emoName: "older man"
    }, {
        emoji: "👵",
        emoName: "older woman"
    }, {
        emoji: "👶",
        emoName: "baby"
    }, {
        emoji: "👱",
        emoName: "person with blond hair"
    }, {
        emoji: "👮",
        emoName: "police officer"
    }, {
        emoji: "👲",
        emoName: "man with gua pi mao"
    }, {
        emoji: "👳",
        emoName: "man with turban"
    }, {
        emoji: "👷",
        emoName: "construction worker"
    }, {
        emoji: "⛑ ",
        emoName: "elmet with white cross"
    }, {
        emoji: "👸",
        emoName: "princess"
    }, {
        emoji: "💂",
        emoName: "guardsman"
    }, {
        emoji: "🕵",
        emoName: "sleuth or spy"
    }, {
        emoji: "🎅",
        emoName: "father christmas"
    }, {
        emoji: "👰",
        emoName: "bride with veil"
    }, {
        emoji: "👼",
        emoName: "baby angel"
    }, {
        emoji: "💆",
        emoName: "face massage"
    }, {
        emoji: "💇",
        emoName: "haircut"
    }, {
        emoji: "🙍",
        emoName: "person frowning"
    }, {
        emoji: "🙎",
        emoName: "person with pouting face"
    }, {
        emoji: "🙅",
        emoName: "face with no good gesture"
    }, {
        emoji: "🙆",
        emoName: "face with ok gesture"
    }, {
        emoji: "💁",
        emoName: "information desk person"
    }, {
        emoji: "🙋",
        emoName: "happy person raising one hand"
    }, {
        emoji: "🙇",
        emoName: "person bowing deeply"
    }, {
        emoji: "🙌",
        emoName: "person raising both hands in celebration"
    }, {
        emoji: "🙏",
        emoName: "person with folded hands"
    }, {
        emoji: "🗣",
        emoName: "speaking head in silhouette"
    }, {
        emoji: "👤",
        emoName: "bust in silhouette"
    }, {
        emoji: "👥",
        emoName: "busts in silhouette"
    }, {
        emoji: "🚶",
        emoName: "pedestrian"
    }, {
        emoji: "🏃",
        emoName: "runner"
    }, {
        emoji: "👯",
        emoName: "woman with bunny ears"
    }, {
        emoji: "💃",
        emoName: "dancer"
    }, {
        emoji: "🕴",
        emoName: "man in business suit levitating"
    }, {
        emoji: "👫",
        emoName: "man and woman holding hands"
    }, {
        emoji: "👬",
        emoName: "two men holding hands"
    }, {
        emoji: "👭",
        emoName: "two women holding hands"
    }, {
        emoji: "💏",
        emoName: "kiss"
    }, {
        emoji: "💑",
        emoName: "couple with heart"
    }, {
        emoji: "👪",
        emoName: "family of a man and woman with boy"
    }, {
        emoji: "💪",
        emoName: "flexed biceps"
    }, {
        emoji: "👈",
        emoName: "white left pointing backhand index"
    }, {
        emoji: "👉",
        emoName: "white right pointing backhand index"
    }, {
        emoji: "👆",
        emoName: "white up pointing backhand index"
    }, {
        emoji: "👇",
        emoName: "white down pointing backhand index"
    }, {
        emoji: "🖖",
        emoName: "raised hand with part between middle and ring fingers"
    }, {
        emoji: "🤘",
        emoName: "sign of the horns"
    }, {
        emoji: "🖐",
        emoName: "raised hand with fingers splayed"
    }, {
        emoji: "✋",
        emoName: "raised hand"
    }, {
        emoji: "👌",
        emoName: "ok hand sign"
    }, {
        emoji: "👍",
        emoName: "thumbs up sign"
    }, {
        emoji: "👎",
        emoName: "thumbs down sign"
    }, {
        emoji: "✊",
        emoName: "raised fist"
    }, {
        emoji: "👊",
        emoName: "fisted hand sign"
    }, {
        emoji: "👋",
        emoName: "waving hand sign"
    }, {
        emoji: "👏",
        emoName: "clapping hands sign"
    }, {
        emoji: "👐",
        emoName: "open hands sign"
    }, {
        emoji: "💅",
        emoName: "nail polish"
    }, {
        emoji: "👂",
        emoName: "ear"
    }, {
        emoji: "👃",
        emoName: "nose"
    }, {
        emoji: "👣",
        emoName: "footprints"
    }, {
        emoji: "👀",
        emoName: "eyes"
    }, {
        emoji: "👁",
        emoName: "eye"
    }, {
        emoji: "🗨",
        emoName: "left speech bubble"
    }, {
        emoji: "👅",
        emoName: "tongue"
    }, {
        emoji: "👄",
        emoName: "mouth"
    }, {
        emoji: "💋",
        emoName: "kiss mark"
    }, {
        emoji: "💘",
        emoName: "heart with arrow"
    }, {
        emoji: "💓",
        emoName: "beating heart"
    }, {
        emoji: "💔",
        emoName: "broken heart"
    }, {
        emoji: "💕",
        emoName: "two hearts"
    }, {
        emoji: "💖",
        emoName: "sparkling heart"
    }, {
        emoji: "💗",
        emoName: "growing heart"
    }, {
        emoji: "💙",
        emoName: "blue heart"
    }, {
        emoji: "💚",
        emoName: "green heart"
    }, {
        emoji: "💛",
        emoName: "yellow heart"
    }, {
        emoji: "💜",
        emoName: "purple heart"
    }, {
        emoji: "💝",
        emoName: "heart with ribbon"
    }, {
        emoji: "💞",
        emoName: "revolving hearts"
    }, {
        emoji: "💟",
        emoName: "heart decoration"
    }, {
        emoji: "💌",
        emoName: "love letter"
    }, {
        emoji: "💤",
        emoName: "sleeping symbol"
    }, {
        emoji: "💢",
        emoName: "anger symbol"
    }, {
        emoji: "💣",
        emoName: "bomb"
    }, {
        emoji: "💥",
        emoName: "collision symbol"
    }, {
        emoji: "💫",
        emoName: "dizzy symbol"
    }, {
        emoji: "💬",
        emoName: "speech balloon"
    }, {
        emoji: "🗨",
        emoName: "left speech bubble"
    }, {
        emoji: "🗯",
        emoName: "right anger bubble"
    }, {
        emoji: "💭",
        emoName: "thought balloon"
    }, {
        emoji: "🕳",
        emoName: "hole"
    }, {
        emoji: "👓",
        emoName: "eyeglasses"
    }, {
        emoji: "🕶",
        emoName: "dark sunglasses"
    }, {
        emoji: "👔",
        emoName: "necktie"
    }, {
        emoji: "👕",
        emoName: "t-shirt"
    }, {
        emoji: "👖",
        emoName: "jeans"
    }, {
        emoji: "👗",
        emoName: "dress"
    }, {
        emoji: "👘",
        emoName: "kimono"
    }, {
        emoji: "👙",
        emoName: "bikini"
    }, {
        emoji: "👚",
        emoName: "womans clothes"
    }, {
        emoji: "👛",
        emoName: "purse"
    }, {
        emoji: "👜",
        emoName: "handbag"
    }, {
        emoji: "👝",
        emoName: "pouch"
    }, {
        emoji: "🛍",
        emoName: "shopping bags"
    }, {
        emoji: "🎒",
        emoName: "school satchel"
    }, {
        emoji: "👞",
        emoName: "mans shoe"
    }, {
        emoji: "👟",
        emoName: "athletic shoe"
    }, {
        emoji: "👠",
        emoName: "high-heeled shoe"
    }, {
        emoji: "👡",
        emoName: "womans sandal"
    }, {
        emoji: "👢",
        emoName: "womans boots"
    }, {
        emoji: "👑",
        emoName: "crown"
    }, {
        emoji: "👒",
        emoName: "womans hat"
    }, {
        emoji: "🎩",
        emoName: "top hat"
    }, {
        emoji: "🎓",
        emoName: "graduation cap"
    }, {
        emoji: "📿",
        emoName: "prayer beads"
    }, {
        emoji: "💄",
        emoName: "lipstick"
    }, {
        emoji: "💍",
        emoName: "ring"
    }, {
        emoji: "💎",
        emoName: "gem stone"
    }],
    emoAnimal: [{
        emoji: "🐵",
        emoName: "monkey face"
    }, {
        emoji: "🐒",
        emoName: "monkey"
    }, {
        emoji: "🐶",
        emoName: "dog face"
    }, {
        emoji: "🐕",
        emoName: "dog"
    }, {
        emoji: "🐩",
        emoName: "poodle"
    }, {
        emoji: "🐺",
        emoName: "wolf face"
    }, {
        emoji: "🐱",
        emoName: "cat face"
    }, {
        emoji: "🐈",
        emoName: "cat"
    }, {
        emoji: "🦁",
        emoName: "lion face"
    }, {
        emoji: "🐯",
        emoName: "tiger face"
    }, {
        emoji: "🐅",
        emoName: "tiger"
    }, {
        emoji: "🐆",
        emoName: "leopard"
    }, {
        emoji: "🐴",
        emoName: "horse face"
    }, {
        emoji: "🐎",
        emoName: "horse"
    }, {
        emoji: "🦄",
        emoName: "unicorn face"
    }, {
        emoji: "🐮",
        emoName: "cow face"
    }, {
        emoji: "🐂",
        emoName: "ox"
    }, {
        emoji: "🐃",
        emoName: "water buffalo"
    }, {
        emoji: "🐄",
        emoName: "cow"
    }, {
        emoji: "🐷",
        emoName: "pig face"
    }, {
        emoji: "🐖",
        emoName: "pig"
    }, {
        emoji: "🐗",
        emoName: "boar"
    }, {
        emoji: "🐽",
        emoName: "pig nose"
    }, {
        emoji: "🐏",
        emoName: "ram"
    }, {
        emoji: "🐑",
        emoName: "sheep"
    }, {
        emoji: "🐐",
        emoName: "goat"
    }, {
        emoji: "🐪",
        emoName: "dromedary camel"
    }, {
        emoji: "🐫",
        emoName: "bactrian camel"
    }, {
        emoji: "🐘",
        emoName: "elephant"
    }, {
        emoji: "🐭",
        emoName: "mouse face"
    }, {
        emoji: "🐁",
        emoName: "mouse"
    }, {
        emoji: "🐀",
        emoName: "rat"
    }, {
        emoji: "🐹",
        emoName: "hamster face"
    }, {
        emoji: "🐰",
        emoName: "rabbit face"
    }, {
        emoji: "🐇",
        emoName: "rabbit"
    }, {
        emoji: "🐿",
        emoName: "chipmunk"
    }, {
        emoji: "🐻",
        emoName: "bear face"
    }, {
        emoji: "🐨",
        emoName: "koala"
    }, {
        emoji: "🐼",
        emoName: "panda face"
    }, {
        emoji: "🐾",
        emoName: "paw prints"
    }, {
        emoji: "🦃",
        emoName: "turkey"
    }, {
        emoji: "🐔",
        emoName: "chicken"
    }, {
        emoji: "🐓",
        emoName: "rooster"
    }, {
        emoji: "🐣",
        emoName: "hatching chick"
    }, {
        emoji: "🐤",
        emoName: "baby chick"
    }, {
        emoji: "🐥",
        emoName: "front-facing baby chick"
    }, {
        emoji: "🐦",
        emoName: "bird"
    }, {
        emoji: "🐧",
        emoName: "penguin"
    }, {
        emoji: "🕊",
        emoName: "dove of peace"
    }, {
        emoji: "🐸",
        emoName: "frog face"
    }, {
        emoji: "🐊",
        emoName: "crocodile"
    }, {
        emoji: "🐢",
        emoName: "turtle"
    }, {
        emoji: "🐍",
        emoName: "snake"
    }, {
        emoji: "🐲",
        emoName: "dragon face"
    }, {
        emoji: "🐉",
        emoName: "dragon"
    }, {
        emoji: "🐳",
        emoName: "spouting whale"
    }, {
        emoji: "🐋",
        emoName: "whale"
    }, {
        emoji: "🐬",
        emoName: "dolphin"
    }, {
        emoji: "🐟",
        emoName: "fish"
    }, {
        emoji: "🐠",
        emoName: "tropical fish"
    }, {
        emoji: "🐡",
        emoName: "blowfish"
    }, {
        emoji: "🐙",
        emoName: "octopus"
    }, {
        emoji: "🐚",
        emoName: "spiral shell"
    }, {
        emoji: "🦀",
        emoName: "crab"
    }, {
        emoji: "🐌",
        emoName: "snail"
    }, {
        emoji: "🐛",
        emoName: "bug"
    }, {
        emoji: "🐜",
        emoName: "ant"
    }, {
        emoji: "🐝",
        emoName: "honeybee"
    }, {
        emoji: "🐞",
        emoName: "lady beetle"
    }, {
        emoji: "🕷",
        emoName: "spider"
    }, {
        emoji: "🕸",
        emoName: "spider web"
    }, {
        emoji: "🦂",
        emoName: "scorpion"
    }, {
        emoji: "💐",
        emoName: "bouquet"
    }, {
        emoji: "🌸",
        emoName: "cherry blossom"
    }, {
        emoji: "💮",
        emoName: "white flower"
    }, {
        emoji: "🏵",
        emoName: "rosette"
    }, {
        emoji: "🌹",
        emoName: "rose"
    }, {
        emoji: "🌺",
        emoName: "hibiscus"
    }, {
        emoji: "🌻",
        emoName: "sunflower"
    }, {
        emoji: "🌼",
        emoName: "blossom"
    }, {
        emoji: "🌷",
        emoName: "tulip"
    }, {
        emoji: "🌱",
        emoName: "seedling"
    }, {
        emoji: "🌲",
        emoName: "evergreen tree"
    }, {
        emoji: "🌳",
        emoName: "deciduous tree"
    }, {
        emoji: "🌴",
        emoName: "palm tree"
    }, {
        emoji: "🌵",
        emoName: "cactus"
    }, {
        emoji: "🌾",
        emoName: "ear of rice"
    }, {
        emoji: "🌿",
        emoName: "herb"
    }, {
        emoji: "☘ ",
        emoName: "hamrock"
    }, {
        emoji: "🍀",
        emoName: "four leaf clover"
    }, {
        emoji: "🍁",
        emoName: "maple leaf"
    }, {
        emoji: "🍂",
        emoName: "fallen leaf"
    }, {
        emoji: "🍃",
        emoName: "leaf fluttering in wind"
    }, {
        emoji: "🌍",
        emoName: "earth globe europe-africa"
    }, {
        emoji: "🌎",
        emoName: "earth globe americas"
    }, {
        emoji: "🌏",
        emoName: "earth globe asia-australia"
    }, {
        emoji: "🌑",
        emoName: "new moon symbol"
    }, {
        emoji: "🌒",
        emoName: "waxing crescent moon symbol"
    }, {
        emoji: "🌓",
        emoName: "first quarter moon symbol"
    }, {
        emoji: "🌔",
        emoName: "waxing gibbous moon symbol"
    }, {
        emoji: "🌕",
        emoName: "full moon symbol"
    }, {
        emoji: "🌖",
        emoName: "waning gibbous moon symbol"
    }, {
        emoji: "🌗",
        emoName: "last quarter moon symbol"
    }, {
        emoji: "🌘",
        emoName: "waning crescent moon symbol"
    }, {
        emoji: "🌙",
        emoName: "crescent moon"
    }, {
        emoji: "🌚",
        emoName: "new moon with face"
    }, {
        emoji: "🌛",
        emoName: "first quarter moon with face"
    }, {
        emoji: "🌜",
        emoName: "last quarter moon with face"
    }, {
        emoji: "☀️",
        emoName: "black sun with rays"
    }, {
        emoji: "🌝",
        emoName: "full moon with face"
    }, {
        emoji: "🌞",
        emoName: "sun with face"
    }, {
        emoji: "⭐️",
        emoName: "white medium star"
    }, {
        emoji: "🌟",
        emoName: "glowing star"
    }, {
        emoji: "☁️",
        emoName: "cloud"
    }, {
        emoji: "⛅️",
        emoName: "sun behind cloud"
    }, {
        emoji: "⛈ ",
        emoName: "hunder cloud and rain"
    }, {
        emoji: "🌤",
        emoName: "white sun with small cloud"
    }, {
        emoji: "🌥",
        emoName: "white sun behind cloud"
    }, {
        emoji: "🌦",
        emoName: "white sun behind cloud with rain"
    }, {
        emoji: "🌧",
        emoName: "cloud with rain"
    }, {
        emoji: "🌨",
        emoName: "cloud with snow"
    }, {
        emoji: "🌩",
        emoName: "cloud with lightning"
    }, {
        emoji: "🌪",
        emoName: "cloud with tornado"
    }, {
        emoji: "🌫",
        emoName: "fog"
    }, {
        emoji: "🌬",
        emoName: "wind blowing face"
    }, {
        emoji: "🌀",
        emoName: "cyclone"
    }, {
        emoji: "⛄️",
        emoName: "snowman without snow"
    }, {
        emoji: "☄ ",
        emoName: "omet"
    }, {
        emoji: "🔥",
        emoName: "fire"
    }, {
        emoji: "💧",
        emoName: "droplet"
    }, {
        emoji: "🌊",
        emoName: "water wave"
    }, {
        emoji: "💦",
        emoName: "splashing sweat symbol"
    }, {
        emoji: "💨",
        emoName: "dash symbol"
    }],
    emoFood: [{
        emoji: "🍇",
        emoName: "grapes"
    }, {
        emoji: "🍈",
        emoName: "melon"
    }, {
        emoji: "🍉",
        emoName: "watermelon"
    }, {
        emoji: "🍊",
        emoName: "tangerine"
    }, {
        emoji: "🍋",
        emoName: "lemon"
    }, {
        emoji: "🍌",
        emoName: "banana"
    }, {
        emoji: "🍍",
        emoName: "pineapple"
    }, {
        emoji: "🍎",
        emoName: "red apple"
    }, {
        emoji: "🍏",
        emoName: "green apple"
    }, {
        emoji: "🍐",
        emoName: "pear"
    }, {
        emoji: "🍑",
        emoName: "peach"
    }, {
        emoji: "🍒",
        emoName: "cherries"
    }, {
        emoji: "🍓",
        emoName: "strawberry"
    }, {
        emoji: "🍅",
        emoName: "tomato"
    }, {
        emoji: "🍆",
        emoName: "aubergine"
    }, {
        emoji: "🌽",
        emoName: "ear of maize"
    }, {
        emoji: "🌶",
        emoName: "hot pepper"
    }, {
        emoji: "🍄",
        emoName: "mushroom"
    }, {
        emoji: "🌰",
        emoName: "chestnut"
    }, {
        emoji: "🍞",
        emoName: "bread"
    }, {
        emoji: "🧀",
        emoName: "cheese wedge"
    }, {
        emoji: "🍖",
        emoName: "meat on bone"
    }, {
        emoji: "🍗",
        emoName: "poultry leg"
    }, {
        emoji: "🍔",
        emoName: "hamburger"
    }, {
        emoji: "🍟",
        emoName: "french fries"
    }, {
        emoji: "🍕",
        emoName: "slice of pizza"
    }, {
        emoji: "🌭",
        emoName: "hot dog"
    }, {
        emoji: "🌮",
        emoName: "taco"
    }, {
        emoji: "🌯",
        emoName: "burrito"
    }, {
        emoji: "🍳",
        emoName: "cooking"
    }, {
        emoji: "🍲",
        emoName: "pot of food"
    }, {
        emoji: "🍿",
        emoName: "popcorn"
    }, {
        emoji: "🍱",
        emoName: "bento box"
    }, {
        emoji: "🍘",
        emoName: "rice cracker"
    }, {
        emoji: "🍙",
        emoName: "rice ball"
    }, {
        emoji: "🍚",
        emoName: "cooked rice"
    }, {
        emoji: "🍛",
        emoName: "curry and rice"
    }, {
        emoji: "🍜",
        emoName: "steaming bowl"
    }, {
        emoji: "🍝",
        emoName: "spaghetti"
    }, {
        emoji: "🍠",
        emoName: "roasted sweet potato"
    }, {
        emoji: "🍢",
        emoName: "oden"
    }, {
        emoji: "🍣",
        emoName: "sushi"
    }, {
        emoji: "🍤",
        emoName: "fried shrimp"
    }, {
        emoji: "🍥",
        emoName: "fish cake with swirl design"
    }, {
        emoji: "🍡",
        emoName: "dango"
    }, {
        emoji: "🍦",
        emoName: "soft ice cream"
    }, {
        emoji: "🍧",
        emoName: "shaved ice"
    }, {
        emoji: "🍨",
        emoName: "ice cream"
    }, {
        emoji: "🍩",
        emoName: "doughnut"
    }, {
        emoji: "🍪",
        emoName: "cookie"
    }, {
        emoji: "🎂",
        emoName: "birthday cake"
    }, {
        emoji: "🍰",
        emoName: "shortcake"
    }, {
        emoji: "🍫",
        emoName: "chocolate bar"
    }, {
        emoji: "🍬",
        emoName: "candy"
    }, {
        emoji: "🍭",
        emoName: "lollipop"
    }, {
        emoji: "🍮",
        emoName: "custard"
    }, {
        emoji: "🍯",
        emoName: "honey pot"
    }, {
        emoji: "🍼",
        emoName: "baby bottle"
    }, {
        emoji: "☕️",
        emoName: "hot beverage"
    }, {
        emoji: "🍵",
        emoName: "teacup without handle"
    }, {
        emoji: "🍶",
        emoName: "sake bottle and cup"
    }, {
        emoji: "🍾",
        emoName: "bottle with popping cork"
    }, {
        emoji: "🍷",
        emoName: "wine glass"
    }, {
        emoji: "🍸",
        emoName: "cocktail glass"
    }, {
        emoji: "🍹",
        emoName: "tropical drink"
    }, {
        emoji: "🍺",
        emoName: "beer mug"
    }, {
        emoji: "🍻",
        emoName: "clinking beer mugs"
    }, {
        emoji: "🍽",
        emoName: "fork and knife with plate"
    }, {
        emoji: "🍴",
        emoName: "fork and knife"
    }, {
        emoji: "🔪",
        emoName: "hocho"
    }, {
        emoji: "🏺",
        emoName: "amphora"
    }],
    emoPlace: [{
        emoji: "🗾",
        emoName: "silhouette of japan"
    }, {
        emoji: "🏔",
        emoName: "snow capped mountain"
    }, {
        emoji: "⛰ ",
        emoName: "ountain"
    }, {
        emoji: "🌋",
        emoName: "volcano"
    }, {
        emoji: "🗻",
        emoName: "mount fuji"
    }, {
        emoji: "🏕",
        emoName: "camping"
    }, {
        emoji: "🏖",
        emoName: "beach with umbrella"
    }, {
        emoji: "🏜",
        emoName: "desert"
    }, {
        emoji: "🏝",
        emoName: "desert island"
    }, {
        emoji: "🏞",
        emoName: "national park"
    }, {
        emoji: "🏟",
        emoName: "stadium"
    }, {
        emoji: "🏛",
        emoName: "classical building"
    }, {
        emoji: "🏗",
        emoName: "building construction"
    }, {
        emoji: "🏘",
        emoName: "house buildings"
    }, {
        emoji: "🏙",
        emoName: "cityscape"
    }, {
        emoji: "🏚",
        emoName: "derelict house building"
    }, {
        emoji: "🏠",
        emoName: "house building"
    }, {
        emoji: "🏡",
        emoName: "house with garden"
    }, {
        emoji: "🏢",
        emoName: "office building"
    }, {
        emoji: "🏣",
        emoName: "japanese post office"
    }, {
        emoji: "🏤",
        emoName: "european post office"
    }, {
        emoji: "🏥",
        emoName: "hospital"
    }, {
        emoji: "🏦",
        emoName: "bank"
    }, {
        emoji: "🏨",
        emoName: "hotel"
    }, {
        emoji: "🏩",
        emoName: "love hotel"
    }, {
        emoji: "🏪",
        emoName: "convenience store"
    }, {
        emoji: "🏫",
        emoName: "school"
    }, {
        emoji: "🏬",
        emoName: "department store"
    }, {
        emoji: "🏭",
        emoName: "factory"
    }, {
        emoji: "🏯",
        emoName: "japanese castle"
    }, {
        emoji: "🏰",
        emoName: "european castle"
    }, {
        emoji: "💒",
        emoName: "wedding"
    }, {
        emoji: "🗼",
        emoName: "tokyo tower"
    }, {
        emoji: "🗽",
        emoName: "statue of liberty"
    }, {
        emoji: "⛪️",
        emoName: "church"
    }, {
        emoji: "🕌",
        emoName: "mosque"
    }, {
        emoji: "🕍",
        emoName: "synagogue"
    }, {
        emoji: "⛩ ",
        emoName: "hinto shrine"
    }, {
        emoji: "🕋",
        emoName: "kaaba"
    }, {
        emoji: "⛲️",
        emoName: "fountain"
    }, {
        emoji: "⛺️",
        emoName: "tent"
    }, {
        emoji: "🌁",
        emoName: "foggy"
    }, {
        emoji: "🌃",
        emoName: "night with stars"
    }, {
        emoji: "🌄",
        emoName: "sunrise over mountains"
    }, {
        emoji: "🌅",
        emoName: "sunrise"
    }, {
        emoji: "🌆",
        emoName: "cityscape at dusk"
    }, {
        emoji: "🌇",
        emoName: "sunset over buildings"
    }, {
        emoji: "🌉",
        emoName: "bridge at night"
    }, {
        emoji: "♨️",
        emoName: "hot springs"
    }, {
        emoji: "🌌",
        emoName: "milky way"
    }, {
        emoji: "🎆",
        emoName: "fireworks"
    }, {
        emoji: "🎇",
        emoName: "firework sparkler"
    }, {
        emoji: "🎠",
        emoName: "carousel horse"
    }, {
        emoji: "🎡",
        emoName: "ferris wheel"
    }, {
        emoji: "🎢",
        emoName: "roller coaster"
    }, {
        emoji: "🌠",
        emoName: "shooting star"
    }, {
        emoji: "🌈",
        emoName: "rainbow"
    }, {
        emoji: "💈",
        emoName: "barber pole"
    }, {
        emoji: "🎪",
        emoName: "circus tent"
    }, {
        emoji: "🎭",
        emoName: "performing arts"
    }, {
        emoji: "🖼",
        emoName: "frame with picture"
    }, {
        emoji: "🎨",
        emoName: "artist palette"
    }, {
        emoji: "🎰",
        emoName: "slot machine"
    }, {
        emoji: "🚂",
        emoName: "steam locomotive"
    }, {
        emoji: "🚃",
        emoName: "railway car"
    }, {
        emoji: "🚄",
        emoName: "high-speed train"
    }, {
        emoji: "🚅",
        emoName: "high-speed train with bullet nose"
    }, {
        emoji: "🚆",
        emoName: "train"
    }, {
        emoji: "🚇",
        emoName: "metro"
    }, {
        emoji: "🚈",
        emoName: "light rail"
    }, {
        emoji: "🚉",
        emoName: "station"
    }, {
        emoji: "🚊",
        emoName: "tram"
    }, {
        emoji: "🚝",
        emoName: "monorail"
    }, {
        emoji: "🚞",
        emoName: "mountain railway"
    }, {
        emoji: "🚋",
        emoName: "tram car"
    }, {
        emoji: "🚌",
        emoName: "bus"
    }, {
        emoji: "🚍",
        emoName: "oncoming bus"
    }, {
        emoji: "🚎",
        emoName: "trolleybus"
    }, {
        emoji: "🚏",
        emoName: "bus stop"
    }, {
        emoji: "🚐",
        emoName: "minibus"
    }, {
        emoji: "🚑",
        emoName: "ambulance"
    }, {
        emoji: "🚒",
        emoName: "fire engine"
    }, {
        emoji: "🚓",
        emoName: "police car"
    }, {
        emoji: "🚔",
        emoName: "oncoming police car"
    }, {
        emoji: "🚕",
        emoName: "taxi"
    }, {
        emoji: "🚖",
        emoName: "oncoming taxi"
    }, {
        emoji: "🚗",
        emoName: "automobile"
    }, {
        emoji: "🚘",
        emoName: "oncoming automobile"
    }, {
        emoji: "🚙",
        emoName: "recreational vehicle"
    }, {
        emoji: "🚚",
        emoName: "delivery truck"
    }, {
        emoji: "🚛",
        emoName: "articulated lorry"
    }, {
        emoji: "🚜",
        emoName: "tractor"
    }, {
        emoji: "🚲",
        emoName: "bicycle"
    }, {
        emoji: "⛽️",
        emoName: "fuel pump"
    }, {
        emoji: "🛣",
        emoName: "motorway"
    }, {
        emoji: "🛤",
        emoName: "railway track"
    }, {
        emoji: "🚨",
        emoName: "police cars revolving light"
    }, {
        emoji: "🚥",
        emoName: "horizontal traffic light"
    }, {
        emoji: "🚦",
        emoName: "vertical traffic light"
    }, {
        emoji: "🚧",
        emoName: "construction sign"
    }, {
        emoji: "⚓️",
        emoName: "anchor"
    }, {
        emoji: "⛵️",
        emoName: "sailboat"
    }, {
        emoji: "🚣",
        emoName: "rowboat"
    }, {
        emoji: "🚤",
        emoName: "speedboat"
    }, {
        emoji: "🛳",
        emoName: "passenger ship"
    }, {
        emoji: "⛴ ",
        emoName: "erry"
    }, {
        emoji: "🛥",
        emoName: "motor boat"
    }, {
        emoji: "🚢",
        emoName: "ship"
    }, {
        emoji: "🛩",
        emoName: "small airplane"
    }, {
        emoji: "🛫",
        emoName: "airplane departure"
    }, {
        emoji: "🛬",
        emoName: "airplane arriving"
    }, {
        emoji: "💺",
        emoName: "seat"
    }, {
        emoji: "🚁",
        emoName: "helicopter"
    }, {
        emoji: "🚟",
        emoName: "suspension railway"
    }, {
        emoji: "🚠",
        emoName: "mountain cableway"
    }, {
        emoji: "🚡",
        emoName: "aerial tramway"
    }, {
        emoji: "🚀",
        emoName: "rocket"
    }, {
        emoji: "🛰",
        emoName: "satellite"
    }, {
        emoji: "🌐",
        emoName: "globe with meridians"
    }, {
        emoji: "🗺",
        emoName: "world map"
    }],
    emoItem: [{
        emoji: "🛎",
        emoName: "bellhop bell"
    }, {
        emoji: "🚪",
        emoName: "door"
    }, {
        emoji: "🛌",
        emoName: "sleeping accommodation"
    }, {
        emoji: "🛏",
        emoName: "bed"
    }, {
        emoji: "🛋",
        emoName: "couch and lamp"
    }, {
        emoji: "🚽",
        emoName: "toilet"
    }, {
        emoji: "🚿",
        emoName: "shower"
    }, {
        emoji: "🛀",
        emoName: "bath"
    }, {
        emoji: "🛁",
        emoName: "bathtub"
    }, {
        emoji: "⌛️",
        emoName: "hourglass"
    }, {
        emoji: "⏳",
        emoName: "hourglass with flowing sand"
    }, {
        emoji: "⌚️",
        emoName: "watch"
    }, {
        emoji: "⏰",
        emoName: "alarm clock"
    }, {
        emoji: "⏱",
        emoName: "stopwatch"
    }, {
        emoji: "⏲",
        emoName: "timer clock"
    }, {
        emoji: "🕰",
        emoName: "mantelpiece clock"
    }, {
        emoji: "🕛",
        emoName: "clock face twelve oclock"
    }, {
        emoji: "🕧",
        emoName: "clock face twelve-thirty"
    }, {
        emoji: "🕐",
        emoName: "clock face one oclock"
    }, {
        emoji: "🕜",
        emoName: "clock face one-thirty"
    }, {
        emoji: "🕑",
        emoName: "clock face two oclock"
    }, {
        emoji: "🕝",
        emoName: "clock face two-thirty"
    }, {
        emoji: "🕒",
        emoName: "clock face three oclock"
    }, {
        emoji: "🕞",
        emoName: "clock face three-thirty"
    }, {
        emoji: "🕓",
        emoName: "clock face four oclock"
    }, {
        emoji: "🕟",
        emoName: "clock face four-thirty"
    }, {
        emoji: "🕔",
        emoName: "clock face five oclock"
    }, {
        emoji: "🕠",
        emoName: "clock face five-thirty"
    }, {
        emoji: "🕕",
        emoName: "clock face six oclock"
    }, {
        emoji: "🕡",
        emoName: "clock face six-thirty"
    }, {
        emoji: "🕖",
        emoName: "clock face seven oclock"
    }, {
        emoji: "🕢",
        emoName: "clock face seven-thirty"
    }, {
        emoji: "🕗",
        emoName: "clock face eight oclock"
    }, {
        emoji: "🕣",
        emoName: "clock face eight-thirty"
    }, {
        emoji: "🕘",
        emoName: "clock face nine oclock"
    }, {
        emoji: "🕤",
        emoName: "clock face nine-thirty"
    }, {
        emoji: "🕙",
        emoName: "clock face ten oclock"
    }, {
        emoji: "🕥",
        emoName: "clock face ten-thirty"
    }, {
        emoji: "🕚",
        emoName: "clock face eleven oclock"
    }, {
        emoji: "🕦",
        emoName: "clock face eleven-thirty"
    }, {
        emoji: "🌡",
        emoName: "thermometer"
    }, {
        emoji: "🌂",
        emoName: "closed umbrella"
    }, {
        emoji: "☂ ",
        emoName: "mbrella"
    }, {
        emoji: "☔️",
        emoName: "umbrella with rain drops"
    }, {
        emoji: "⛱ ",
        emoName: "mbrella on ground"
    }, {
        emoji: "⚡️",
        emoName: "high voltage sign"
    }, {
        emoji: "🎃",
        emoName: "jack-o-lantern"
    }, {
        emoji: "🎄",
        emoName: "christmas tree"
    }, {
        emoji: "✨ ",
        emoName: "parkles"
    }, {
        emoji: "🎈",
        emoName: "balloon"
    }, {
        emoji: "🎉",
        emoName: "party popper"
    }, {
        emoji: "🎊",
        emoName: "confetti ball"
    }, {
        emoji: "🎋",
        emoName: "tanabata tree"
    }, {
        emoji: "🎍",
        emoName: "pine decoration"
    }, {
        emoji: "🎎",
        emoName: "japanese dolls"
    }, {
        emoji: "🎏",
        emoName: "carp streamer"
    }, {
        emoji: "🎐",
        emoName: "wind chime"
    }, {
        emoji: "🎑",
        emoName: "moon viewing ceremony"
    }, {
        emoji: "🎀",
        emoName: "ribbon"
    }, {
        emoji: "🎁",
        emoName: "wrapped present"
    }, {
        emoji: "🎗",
        emoName: "reminder ribbon"
    }, {
        emoji: "🎟",
        emoName: "admission tickets"
    }, {
        emoji: "🎫",
        emoName: "ticket"
    }, {
        emoji: "📱",
        emoName: "mobile phone"
    }, {
        emoji: "📲",
        emoName: "mobile phone with rightwards arrow at left"
    }, {
        emoji: "☎️",
        emoName: "black telephone"
    }, {
        emoji: "📞",
        emoName: "telephone receiver"
    }, {
        emoji: "📟",
        emoName: "pager"
    }, {
        emoji: "📠",
        emoName: "fax machine"
    }, {
        emoji: "🔋",
        emoName: "battery"
    }, {
        emoji: "🔌",
        emoName: "electric plug"
    }, {
        emoji: "💻",
        emoName: "personal computer"
    }, {
        emoji: "🖥",
        emoName: "desktop computer"
    }, {
        emoji: "🖨",
        emoName: "printer"
    }, {
        emoji: "⌨ ",
        emoName: "eyboard"
    }, {
        emoji: "🖱",
        emoName: "three button mouse"
    }, {
        emoji: "🖲",
        emoName: "trackball"
    }, {
        emoji: "💽",
        emoName: "minidisc"
    }, {
        emoji: "💾",
        emoName: "floppy disk"
    }, {
        emoji: "💿",
        emoName: "optical disc"
    }, {
        emoji: "📀",
        emoName: "dvd"
    }, {
        emoji: "🎥",
        emoName: "movie camera"
    }, {
        emoji: "🎞",
        emoName: "film frames"
    }, {
        emoji: "📽",
        emoName: "film projector"
    }, {
        emoji: "🎬",
        emoName: "clapper board"
    }, {
        emoji: "📺",
        emoName: "television"
    }, {
        emoji: "📷",
        emoName: "camera"
    }, {
        emoji: "📸",
        emoName: "camera with flash"
    }, {
        emoji: "📹",
        emoName: "video camera"
    }, {
        emoji: "📼",
        emoName: "videocassette"
    }, {
        emoji: "🔍",
        emoName: "left-pointing magnifying glass"
    }, {
        emoji: "🔎",
        emoName: "right-pointing magnifying glass"
    }, {
        emoji: "🔬",
        emoName: "microscope"
    }, {
        emoji: "🔭",
        emoName: "telescope"
    }, {
        emoji: "📡",
        emoName: "satellite antenna"
    }, {
        emoji: "🕯",
        emoName: "candle"
    }, {
        emoji: "💡",
        emoName: "electric light bulb"
    }, {
        emoji: "🔦",
        emoName: "electric torch"
    }, {
        emoji: "🏮",
        emoName: "izakaya lantern"
    }, {
        emoji: "📔",
        emoName: "notebook with decorative cover"
    }, {
        emoji: "📕",
        emoName: "closed book"
    }, {
        emoji: "📖",
        emoName: "open book"
    }, {
        emoji: "📗",
        emoName: "green book"
    }, {
        emoji: "📘",
        emoName: "blue book"
    }, {
        emoji: "📙",
        emoName: "orange book"
    }, {
        emoji: "📚",
        emoName: "books"
    }, {
        emoji: "📓",
        emoName: "notebook"
    }, {
        emoji: "📒",
        emoName: "ledger"
    }, {
        emoji: "📃",
        emoName: "page with curl"
    }, {
        emoji: "📜",
        emoName: "scroll"
    }, {
        emoji: "📄",
        emoName: "page facing up"
    }, {
        emoji: "📰",
        emoName: "newspaper"
    }, {
        emoji: "🗞",
        emoName: "rolled-up newspaper"
    }, {
        emoji: "📑",
        emoName: "bookmark tabs"
    }, {
        emoji: "🔖",
        emoName: "bookmark"
    }, {
        emoji: "🏷",
        emoName: "label"
    }, {
        emoji: "💰",
        emoName: "money bag"
    }, {
        emoji: "💴",
        emoName: "banknote with yen sign"
    }, {
        emoji: "💵",
        emoName: "banknote with dollar sign"
    }, {
        emoji: "💶",
        emoName: "banknote with euro sign"
    }, {
        emoji: "💷",
        emoName: "banknote with pound sign"
    }, {
        emoji: "💸",
        emoName: "money with wings"
    }, {
        emoji: "💳",
        emoName: "credit card"
    }, {
        emoji: "💹",
        emoName: "chart with upwards trend and yen sign"
    }, {
        emoji: "💱",
        emoName: "currency exchange"
    }, {
        emoji: "💲",
        emoName: "heavy dollar sign"
    }, {
        emoji: "📧",
        emoName: "e-mail symbol"
    }, {
        emoji: "📨",
        emoName: "incoming envelope"
    }, {
        emoji: "📩",
        emoName: "envelope with downwards arrow above"
    }, {
        emoji: "📤",
        emoName: "outbox tray"
    }, {
        emoji: "📥",
        emoName: "inbox tray"
    }, {
        emoji: "📦",
        emoName: "package"
    }, {
        emoji: "📫",
        emoName: "closed mailbox with raised flag"
    }, {
        emoji: "📪",
        emoName: "closed mailbox with lowered flag"
    }, {
        emoji: "📬",
        emoName: "open mailbox with raised flag"
    }, {
        emoji: "📭",
        emoName: "open mailbox with lowered flag"
    }, {
        emoji: "📮",
        emoName: "postbox"
    }, {
        emoji: "🗳",
        emoName: "ballot box with ballot"
    }, {
        emoji: "🖋",
        emoName: "lower left fountain pen"
    }, {
        emoji: "🖊",
        emoName: "lower left ballpoint pen"
    }, {
        emoji: "🖌",
        emoName: "lower left paintbrush"
    }, {
        emoji: "🖍",
        emoName: "lower left crayon"
    }, {
        emoji: "📝",
        emoName: "memo"
    }, {
        emoji: "💼",
        emoName: "briefcase"
    }, {
        emoji: "📁",
        emoName: "file folder"
    }, {
        emoji: "📂",
        emoName: "open file folder"
    }, {
        emoji: "🗂",
        emoName: "card index dividers"
    }, {
        emoji: "📅",
        emoName: "calendar"
    }, {
        emoji: "📆",
        emoName: "tear-off calendar"
    }, {
        emoji: "🗒",
        emoName: "spiral note pad"
    }, {
        emoji: "🗓",
        emoName: "spiral calendar pad"
    }, {
        emoji: "📇",
        emoName: "card index"
    }, {
        emoji: "📈",
        emoName: "chart with upwards trend"
    }, {
        emoji: "📉",
        emoName: "chart with downwards trend"
    }, {
        emoji: "📊",
        emoName: "bar chart"
    }, {
        emoji: "📋",
        emoName: "clipboard"
    }, {
        emoji: "📌",
        emoName: "pushpin"
    }, {
        emoji: "📍",
        emoName: "round pushpin"
    }, {
        emoji: "📎",
        emoName: "paperclip"
    }, {
        emoji: "🖇",
        emoName: "linked paperclips"
    }, {
        emoji: "📏",
        emoName: "straight ruler"
    }, {
        emoji: "📐",
        emoName: "triangular ruler"
    }, {
        emoji: "🗃",
        emoName: "card file box"
    }, {
        emoji: "🗄",
        emoName: "file cabinet"
    }, {
        emoji: "🗑",
        emoName: "wastebasket"
    }, {
        emoji: "🔒",
        emoName: "lock"
    }, {
        emoji: "🔓",
        emoName: "open lock"
    }, {
        emoji: "🔏",
        emoName: "lock with ink pen"
    }, {
        emoji: "🔐",
        emoName: "closed lock with key"
    }, {
        emoji: "🔑",
        emoName: "key"
    }, {
        emoji: "🗝",
        emoName: "old key"
    }, {
        emoji: "🔨",
        emoName: "hammer"
    }, {
        emoji: "⛏",
        emoName: "pick"
    }, {
        emoji: "🛠",
        emoName: "hammer and wrench"
    }, {
        emoji: "🗡",
        emoName: "dagger knife"
    }, {
        emoji: "⚔",
        emoName: "crossed swords"
    }, {
        emoji: "🔫",
        emoName: "pistol"
    }, {
        emoji: "🏹",
        emoName: "bow and arrow"
    }, {
        emoji: "🛡",
        emoName: "shield"
    }, {
        emoji: "🔧",
        emoName: "wrench"
    }, {
        emoji: "🔩",
        emoName: "nut and bolt"
    }, {
        emoji: "⚙",
        emoName: "gear"
    }, {
        emoji: "🗜",
        emoName: "compression"
    }, {
        emoji: "⚗ ",
        emoName: "lembic"
    }, {
        emoji: "⚖ ",
        emoName: "cales"
    }, {
        emoji: "🔗",
        emoName: "link symbol"
    }, {
        emoji: "⛓ ",
        emoName: "hains"
    }, {
        emoji: "💉",
        emoName: "syringe"
    }, {
        emoji: "💊",
        emoName: "pill"
    }, {
        emoji: "🚬",
        emoName: "smoking symbol"
    }, {
        emoji: "⚰",
        emoName: "coffin"
    }, {
        emoji: "⚱",
        emoName: "funeral urn"
    }, {
        emoji: "🗿",
        emoName: "moyai"
    }, {
        emoji: "🛢",
        emoName: "oil drum"
    }, {
        emoji: "🔮",
        emoName: "crystal ball"
    }],
    emoActivity: [{
        emoji: "🎖",
        emoName: "military medal"
    }, {
        emoji: "🏆",
        emoName: "trophy"
    }, {
        emoji: "🏅",
        emoName: "sports medal"
    }, {
        emoji: "⚽️",
        emoName: "soccer ball"
    }, {
        emoji: "⚾️",
        emoName: "baseball"
    }, {
        emoji: "🏀",
        emoName: "basketball and hoop"
    }, {
        emoji: "🏐",
        emoName: "volleyball"
    }, {
        emoji: "🏈",
        emoName: "american football"
    }, {
        emoji: "🏉",
        emoName: "rugby football"
    }, {
        emoji: "🎾",
        emoName: "tennis racquet and ball"
    }, {
        emoji: "🎱",
        emoName: "billiards"
    }, {
        emoji: "🎳",
        emoName: "bowling"
    }, {
        emoji: "🏏",
        emoName: "cricket bat and ball"
    }, {
        emoji: "🏑",
        emoName: "field hockey stick and ball"
    }, {
        emoji: "🏒",
        emoName: "ice hockey stick and puck"
    }, {
        emoji: "🏓",
        emoName: "table tennis paddle and ball"
    }, {
        emoji: "🏸",
        emoName: "badminton racquet and shuttlecock"
    }, {
        emoji: "⛳️",
        emoName: "flag in hole"
    }, {
        emoji: "🏌",
        emoName: "golfer"
    }, {
        emoji: "⛸",
        emoName: "ice skate"
    }, {
        emoji: "🎣",
        emoName: "fishing pole and fish"
    }, {
        emoji: "🎽",
        emoName: "running shirt with sash"
    }, {
        emoji: "🎿",
        emoName: "ski and ski boot"
    }, {
        emoji: "⛷",
        emoName: "skier"
    }, {
        emoji: "🏂",
        emoName: "snowboarder"
    }, {
        emoji: "🏄",
        emoName: "surfer"
    }, {
        emoji: "🏇",
        emoName: "horse racing"
    }, {
        emoji: "🏊",
        emoName: "swimmer"
    }, {
        emoji: "⛹",
        emoName: "person with ball"
    }, {
        emoji: "🏋",
        emoName: "weight lifter"
    }, {
        emoji: "🚴",
        emoName: "bicyclist"
    }, {
        emoji: "🚵",
        emoName: "mountain bicyclist"
    }, {
        emoji: "🏎",
        emoName: "racing car"
    }, {
        emoji: "🏍",
        emoName: "racing motorcycle"
    }, {
        emoji: "🎯",
        emoName: "direct hit"
    }, {
        emoji: "🎮",
        emoName: "video game"
    }, {
        emoji: "🕹",
        emoName: "joystick"
    }, {
        emoji: "🎲",
        emoName: "game die"
    }, {
        emoji: "♠️",
        emoName: "black spade suit"
    }, {
        emoji: "♥️",
        emoName: "black heart suit"
    }, {
        emoji: "♦️",
        emoName: "black diamond suit"
    }, {
        emoji: "♣️",
        emoName: "black club suit"
    }, {
        emoji: "🃏",
        emoName: "playing card black joker"
    }, {
        emoji: "🀄",
        emoName: "mahjong tile red dragon"
    }, {
        emoji: "🎴",
        emoName: "flower playing cards"
    }, {
        emoji: "🔇",
        emoName: "speaker with cancellation stroke"
    }, {
        emoji: "🔈",
        emoName: "speaker"
    }, {
        emoji: "🔉",
        emoName: "speaker with one sound wave"
    }, {
        emoji: "🔊",
        emoName: "speaker with three sound waves"
    }, {
        emoji: "📢",
        emoName: "public address loudspeaker"
    }, {
        emoji: "📣",
        emoName: "cheering megaphone"
    }, {
        emoji: "📯",
        emoName: "postal horn"
    }, {
        emoji: "🔔",
        emoName: "bell"
    }, {
        emoji: "🔕",
        emoName: "bell with cancellation stroke"
    }, {
        emoji: "🎼",
        emoName: "musical score"
    }, {
        emoji: "🎵",
        emoName: "musical note"
    }, {
        emoji: "🎶",
        emoName: "multiple musical notes"
    }, {
        emoji: "🎙",
        emoName: "studio microphone"
    }, {
        emoji: "🎚",
        emoName: "level slider"
    }, {
        emoji: "🎛",
        emoName: "control knobs"
    }, {
        emoji: "🎤",
        emoName: "microphone"
    }, {
        emoji: "🎧",
        emoName: "headphone"
    }, {
        emoji: "📻",
        emoName: "radio"
    }, {
        emoji: "🎷",
        emoName: "saxophone"
    }, {
        emoji: "🎸",
        emoName: "guitar"
    }, {
        emoji: "🎹",
        emoName: "musical keyboard"
    }, {
        emoji: "🎺",
        emoName: "trumpet"
    }, {
        emoji: "🎻",
        emoName: "violin"
    }],
    emoSymbol: [{
        emoji: "🏧",
        emoName: "automated teller machine"
    }, {
        emoji: "🚮",
        emoName: "put litter in its place symbol"
    }, {
        emoji: "🚰",
        emoName: "potable water symbol"
    }, {
        emoji: "♿️",
        emoName: "wheelchair symbol"
    }, {
        emoji: "🚹",
        emoName: "mens symbol"
    }, {
        emoji: "🚺",
        emoName: "womens symbol"
    }, {
        emoji: "🚻",
        emoName: "restroom"
    }, {
        emoji: "🚼",
        emoName: "baby symbol"
    }, {
        emoji: "🚾",
        emoName: "water closet"
    }, {
        emoji: "🛂",
        emoName: "passport control"
    }, {
        emoji: "🛃",
        emoName: "customs"
    }, {
        emoji: "🛄",
        emoName: "baggage claim"
    }, {
        emoji: "🛅",
        emoName: "left luggage"
    }, {
        emoji: "⚠️",
        emoName: "warning sign"
    }, {
        emoji: "🚸",
        emoName: "children crossing"
    }, {
        emoji: "⛔️",
        emoName: "no entry"
    }, {
        emoji: "🚫",
        emoName: "no entry sign"
    }, {
        emoji: "🚳",
        emoName: "no bicycles"
    }, {
        emoji: "🚭",
        emoName: "no smoking symbol"
    }, {
        emoji: "🚯",
        emoName: "do not litter symbol"
    }, {
        emoji: "🚱",
        emoName: "non-potable water symbol"
    }, {
        emoji: "🚷",
        emoName: "no pedestrians"
    }, {
        emoji: "📵",
        emoName: "no mobile phones"
    }, {
        emoji: "🔞",
        emoName: "no one under eighteen symbol"
    }, {
        emoji: "☢ ",
        emoName: "adioactive sign"
    }, {
        emoji: "☣ ",
        emoName: "iohazard sign"
    }, {
        emoji: "⬆️",
        emoName: "upwards black arrow"
    }, {
        emoji: "↗ ",
        emoName: "north east arrow"
    }, {
        emoji: "⬇️",
        emoName: "downwards black arrow"
    }, {
        emoji: "⬅️",
        emoName: "leftwards black arrow"
    }, {
        emoji: "↔️",
        emoName: "left right arrow"
    }, {
        emoji: "⤴️",
        emoName: "arrow pointing rightwards then curving upwards"
    }, {
        emoji: "⤵️",
        emoName: "arrow pointing rightwards then curving downwards"
    }, {
        emoji: "↙️",
        emoName: "south west arrow"
    }, {
        emoji: "🔃",
        emoName: "clockwise downwards and upwards open circle arrows"
    }, {
        emoji: "🔄",
        emoName: "anticlockwise downwards and upwards open circle arrows"
    }, {
        emoji: "🔙",
        emoName: "back with leftwards arrow above"
    }, {
        emoji: "🔚",
        emoName: "end with leftwards arrow above"
    }, {
        emoji: "🔛",
        emoName: "on with exclamation mark with left right arrow above"
    }, {
        emoji: "🔜",
        emoName: "soon with rightwards arrow above"
    }, {
        emoji: "🔝",
        emoName: "top with upwards arrow above"
    }, {
        emoji: "🛐",
        emoName: "place of worship"
    }, {
        emoji: "⚛",
        emoName: "atom symbol"
    }, {
        emoji: "🕉",
        emoName: "om symbol"
    }, {
        emoji: "☸",
        emoName: "wheel of dharma"
    }, {
        emoji: "☦",
        emoName: "orthodox cross"
    }, {
        emoji: "☪",
        emoName: "star and crescent"
    }, {
        emoji: "☮ ",
        emoName: "eace symbol"
    }, {
        emoji: "🕎",
        emoName: "menorah with nine branches"
    }, {
        emoji: "🔯",
        emoName: "six pointed star with middle dot"
    }, {
        emoji: "♻️",
        emoName: "black universal recycling symbol"
    }, {
        emoji: "📛",
        emoName: "name badge"
    }, {
        emoji: "⚜",
        emoName: "leur-de-lis"
    }, {
        emoji: "🔰",
        emoName: "japanese symbol for beginner"
    }, {
        emoji: "🔱",
        emoName: "trident emblem"
    }, {
        emoji: "⭕️",
        emoName: "heavy large circle"
    }, {
        emoji: "✅",
        emoName: "white heavy check mark"
    }, {
        emoji: "❌",
        emoName: "cross mark"
    }, {
        emoji: "❎",
        emoName: "negative squared cross mark"
    }, {
        emoji: "➕",
        emoName: "heavy plus sign"
    }, {
        emoji: "➖",
        emoName: "heavy minus sign"
    }, {
        emoji: "➗",
        emoName: "heavy division sign"
    }, {
        emoji: "➰",
        emoName: "curly loop"
    }, {
        emoji: "➿",
        emoName: "double curly loop"
    }, {
        emoji: "〽️",
        emoName: "part alternation mark"
    }, {
        emoji: "❓",
        emoName: "black question mark ornament"
    }, {
        emoji: "❔",
        emoName: "white question mark ornament"
    }, {
        emoji: "❕",
        emoName: "white exclamation mark ornament"
    }, {
        emoji: "❗️",
        emoName: "heavy exclamation mark symbol"
    }, {
        emoji: "〰",
        emoName: "savy dash"
    }, {
        emoji: "©",
        emoName: "copyright sign"
    }, {
        emoji: "®",
        emoName: "registered sign"
    }, {
        emoji: "™",
        emoName: "trade mark sign"
    }, {
        emoji: "♈️",
        emoName: "aries"
    }, {
        emoji: "♉️",
        emoName: "taurus"
    }, {
        emoji: "♊️",
        emoName: "gemini"
    }, {
        emoji: "♋️",
        emoName: "cancer"
    }, {
        emoji: "♌️",
        emoName: "leo"
    }, {
        emoji: "♍️",
        emoName: "virgo"
    }, {
        emoji: "♎️",
        emoName: "libra"
    }, {
        emoji: "♏️",
        emoName: "scorpius"
    }, {
        emoji: "♐️",
        emoName: "sagittarius"
    }, {
        emoji: "♑️",
        emoName: "capricorn"
    }, {
        emoji: "♒️",
        emoName: "aquarius"
    }, {
        emoji: "♓️",
        emoName: "pisces"
    }, {
        emoji: "⛎",
        emoName: "ophiuchus"
    }, {
        emoji: "🔀",
        emoName: "twisted rightwards arrows"
    }, {
        emoji: "🔁",
        emoName: "clockwise rightwards and leftwards open circle arrows"
    }, {
        emoji: "🔂",
        emoName: "clockwise rightwards and leftwards open circle arrows with circled one overlay"
    }, {
        emoji: "⏩",
        emoName: "black right-pointing double triangle"
    }, {
        emoji: "⏭",
        emoName: "black right-pointing double triangle with vertical bar"
    }, {
        emoji: "⏯",
        emoName: "black right-pointing triangle with double vertical bar"
    }, {
        emoji: "◀️",
        emoName: "black left-pointing triangle"
    }, {
        emoji: "⏪",
        emoName: "black left-pointing double triangle"
    }, {
        emoji: "⏮",
        emoName: "black left-pointing double triangle with vertical bar"
    }, {
        emoji: "🔼",
        emoName: "up-pointing small red triangle"
    }, {
        emoji: "⏫",
        emoName: "black up-pointing double triangle"
    }, {
        emoji: "🔽",
        emoName: "down-pointing small red triangle"
    }, {
        emoji: "⏬",
        emoName: "black down-pointing double triangle"
    }, {
        emoji: "⏸",
        emoName: "double vertical bar"
    }, {
        emoji: "⏹",
        emoName: "black square for stop"
    }, {
        emoji: "⏺",
        emoName: "black circle for record"
    }, {
        emoji: "🎦",
        emoName: "cinema"
    }, {
        emoji: "🔅",
        emoName: "low brightness symbol"
    }, {
        emoji: "🔆",
        emoName: "high brightness symbol"
    }, {
        emoji: "📶",
        emoName: "antenna with bars"
    }, {
        emoji: "📳",
        emoName: "vibration mode"
    }, {
        emoji: "📴",
        emoName: "mobile phone off"
    }, {
        emoji: "🔟",
        emoName: "keycap ten"
    }, {
        emoji: "💯",
        emoName: "hundred points symbol"
    }, {
        emoji: "🔠",
        emoName: "input symbol for latin capital letters"
    }, {
        emoji: "🔡",
        emoName: "input symbol for latin small letters"
    }, {
        emoji: "🔢",
        emoName: "input symbol for numbers"
    }, {
        emoji: "🔣",
        emoName: "input symbol for symbols"
    }, {
        emoji: "🔤",
        emoName: "input symbol for latin letters"
    }, {
        emoji: "🅰",
        emoName: "negative squared latin capital letter a"
    }, {
        emoji: "🆎",
        emoName: "negative squared ab"
    }, {
        emoji: "🅱",
        emoName: "negative squared latin capital letter b"
    }, {
        emoji: "🆑",
        emoName: "squared cl"
    }, {
        emoji: "🆒",
        emoName: "squared cool"
    }, {
        emoji: "🆓",
        emoName: "squared free"
    }, {
        emoji: "ℹ️",
        emoName: "information source"
    }, {
        emoji: "🆔",
        emoName: "squared id"
    }, {
        emoji: "Ⓜ️",
        emoName: "circled latin capital letter m"
    }, {
        emoji: "🆕",
        emoName: "squared new"
    }, {
        emoji: "🆖",
        emoName: "squared ng"
    }, {
        emoji: "🅾",
        emoName: "negative squared latin capital letter o"
    }, {
        emoji: "🆗",
        emoName: "squared ok"
    }, {
        emoji: "🅿",
        emoName: "negative squared latin capital letter p"
    }, {
        emoji: "🆘",
        emoName: "squared sos"
    }, {
        emoji: "🆙",
        emoName: "squared up with exclamation mark"
    }, {
        emoji: "🆚",
        emoName: "squared vs"
    }, {
        emoji: "🈁",
        emoName: "squared katakana koko"
    }, {
        emoji: "◾️",
        emoName: "black medium small square"
    }, {
        emoji: "⬛️",
        emoName: "black large square"
    }, {
        emoji: "⬜️",
        emoName: "white large square"
    }, {
        emoji: "🔶",
        emoName: "large orange diamond"
    }, {
        emoji: "🔷",
        emoName: "large blue diamond"
    }, {
        emoji: "🔸",
        emoName: "small orange diamond"
    }, {
        emoji: "🔹",
        emoName: "small blue diamond"
    }, {
        emoji: "🔺",
        emoName: "up-pointing red triangle"
    }, {
        emoji: "🔻",
        emoName: "down-pointing red triangle"
    }, {
        emoji: "💠",
        emoName: "diamond shape with a dot inside"
    }, {
        emoji: "🔘",
        emoName: "radio button"
    }, {
        emoji: "🔲",
        emoName: "black square button"
    }, {
        emoji: "🔳",
        emoName: "white square button"
    }, {
        emoji: "⚪️",
        emoName: "medium white circle"
    }, {
        emoji: "⚫️",
        emoName: "medium black circle"
    }, {
        emoji: "🔴",
        emoName: "large red circle"
    }, {
        emoji: "🔵",
        emoName: "large blue circle"
    }, {
        emoji: "🏁",
        emoName: "chequered flag"
    }, {
        emoji: "🚩",
        emoName: "triangular flag on post"
    }, {
        emoji: "🎌",
        emoName: "crossed flags"
    }, {
        emoji: "🏴",
        emoName: "waving black flag"
    }, {
        emoji: "🏳",
        emoName: "waving white flag"
    }],
    emoFlag: [{
        emoji: "🇦🇨",
        emoName: "flag for Ascension Island"
    }, {
        emoji: "🇦🇩",
        emoName: "flag for Andorra"
    }, {
        emoji: "🇦🇪",
        emoName: "flag for United Arab Emirates"
    }, {
        emoji: "🇦🇫",
        emoName: "flag for Afghanistan"
    }, {
        emoji: "🇦🇬",
        emoName: "flag for Antigua & Barbuda"
    }, {
        emoji: "🇦🇮",
        emoName: "flag for Anguilla"
    }, {
        emoji: "🇦🇱",
        emoName: "flag for Albania"
    }, {
        emoji: "🇦🇲",
        emoName: "flag for Armenia"
    }, {
        emoji: "🇦🇴",
        emoName: "flag for Angola"
    }, {
        emoji: "🇦🇶",
        emoName: "flag for Antarctica"
    }, {
        emoji: "🇦🇷",
        emoName: "flag for Argentina"
    }, {
        emoji: "🇦🇸",
        emoName: "flag for American Samoa"
    }, {
        emoji: "🇦🇹",
        emoName: "flag for Austria"
    }, {
        emoji: "🇦🇺",
        emoName: "flag for Australia"
    }, {
        emoji: "🇦🇼",
        emoName: "flag for Aruba"
    }, {
        emoji: "🇦🇽",
        emoName: "flag for Åland Islands"
    }, {
        emoji: "🇦🇿",
        emoName: "flag for Azerbaijan"
    }, {
        emoji: "🇧🇦",
        emoName: "flag for Bosnia & Herzegovina"
    }, {
        emoji: "🇧🇧",
        emoName: "flag for Barbados"
    }, {
        emoji: "🇧🇩",
        emoName: "flag for Bangladesh"
    }, {
        emoji: "🇧🇪",
        emoName: "flag for Belgium"
    }, {
        emoji: "🇧🇫",
        emoName: "flag for Burkina Faso"
    }, {
        emoji: "🇧🇬",
        emoName: "flag for Bulgaria"
    }, {
        emoji: "🇧🇭",
        emoName: "flag for Bahrain"
    }, {
        emoji: "🇧🇮",
        emoName: "flag for Burundi"
    }, {
        emoji: "🇧🇯",
        emoName: "flag for Benin"
    }, {
        emoji: "🇧🇱",
        emoName: "flag for St. Barthélemy"
    }, {
        emoji: "🇧🇲",
        emoName: "flag for Bermuda"
    }, {
        emoji: "🇧🇳",
        emoName: "flag for Brunei"
    }, {
        emoji: "🇧🇴",
        emoName: "flag for Bolivia"
    }, {
        emoji: "🇧🇶",
        emoName: "flag for Caribbean Netherlands"
    }, {
        emoji: "🇧🇷",
        emoName: "flag for Brazil"
    }, {
        emoji: "🇧🇸",
        emoName: "flag for Bahamas"
    }, {
        emoji: "🇧🇹",
        emoName: "flag for Bhutan"
    }, {
        emoji: "🇧🇻",
        emoName: "flag for Bouvet Island"
    }, {
        emoji: "🇧🇼",
        emoName: "flag for Botswana"
    }, {
        emoji: "🇧🇾",
        emoName: "flag for Belarus"
    }, {
        emoji: "🇧🇿",
        emoName: "flag for Belize"
    }, {
        emoji: "🇨🇦",
        emoName: "flag for Canada"
    }, {
        emoji: "🇨🇨",
        emoName: "flag for Cocos Islands"
    }, {
        emoji: "🇨🇩",
        emoName: "flag for Congo - Kinshasa"
    }, {
        emoji: "🇨🇫",
        emoName: "flag for Central African Republic"
    }, {
        emoji: "🇨🇬",
        emoName: "flag for Congo - Brazzaville"
    }, {
        emoji: "🇨🇭",
        emoName: "flag for Switzerland"
    }, {
        emoji: "🇨🇮",
        emoName: "flag for Côte d’Ivoire"
    }, {
        emoji: "🇨🇰",
        emoName: "flag for Cook Islands"
    }, {
        emoji: "🇨🇱",
        emoName: "flag for Chile"
    }, {
        emoji: "🇨🇲",
        emoName: "flag for Cameroon"
    }, {
        emoji: "🇨🇳",
        emoName: "flag for China"
    }, {
        emoji: "🇨🇴",
        emoName: "flag for Colombia"
    }, {
        emoji: "🇨🇵",
        emoName: "flag for Clipperton Island"
    }, {
        emoji: "🇨🇷",
        emoName: "flag for Costa Rica"
    }, {
        emoji: "🇨🇺",
        emoName: "flag for Cuba"
    }, {
        emoji: "🇨🇻",
        emoName: "flag for Cape Verde"
    }, {
        emoji: "🇨🇼",
        emoName: "flag for Curaçao"
    }, {
        emoji: "🇨🇽",
        emoName: "flag for Christmas Island"
    }, {
        emoji: "🇨🇾",
        emoName: "flag for Cyprus"
    }, {
        emoji: "🇨🇿",
        emoName: "flag for Czech Republic"
    }, {
        emoji: "🇩🇪",
        emoName: "flag for Germany"
    }, {
        emoji: "🇩🇬",
        emoName: "flag for Diego Garcia"
    }, {
        emoji: "🇩🇯",
        emoName: "flag for Djibouti"
    }, {
        emoji: "🇩🇰",
        emoName: "flag for Denmark"
    }, {
        emoji: "🇩🇲",
        emoName: "flag for Dominica"
    }, {
        emoji: "🇩🇴",
        emoName: "flag for Dominican Republic"
    }, {
        emoji: "🇩🇿",
        emoName: "flag for Algeria"
    }, {
        emoji: "🇪🇦",
        emoName: "flag for Ceuta & Melilla"
    }, {
        emoji: "🇪🇨",
        emoName: "flag for Ecuador"
    }, {
        emoji: "🇪🇪",
        emoName: "flag for Estonia"
    }, {
        emoji: "🇪🇬",
        emoName: "flag for Egypt"
    }, {
        emoji: "🇪🇭",
        emoName: "flag for Western Sahara"
    }, {
        emoji: "🇪🇷",
        emoName: "flag for Eritrea"
    }, {
        emoji: "🇪🇸",
        emoName: "flag for Spain"
    }, {
        emoji: "🇪🇹",
        emoName: "flag for Ethiopia"
    }, {
        emoji: "🇪🇺",
        emoName: "flag for European Union"
    }, {
        emoji: "🇫🇮",
        emoName: "flag for Finland"
    }, {
        emoji: "🇫🇯",
        emoName: "flag for Fiji"
    }, {
        emoji: "🇫🇰",
        emoName: "flag for Falkland Islands"
    }, {
        emoji: "🇫🇲",
        emoName: "flag for Micronesia"
    }, {
        emoji: "🇫🇴",
        emoName: "flag for Faroe Islands"
    }, {
        emoji: "🇫🇷",
        emoName: "flag for France"
    }, {
        emoji: "🇬🇦",
        emoName: "flag for Gabon"
    }, {
        emoji: "🇬🇧",
        emoName: "flag for United Kingdom"
    }, {
        emoji: "🇬🇩",
        emoName: "flag for Grenada"
    }, {
        emoji: "🇬🇪",
        emoName: "flag for Georgia"
    }, {
        emoji: "🇬🇫",
        emoName: "flag for French Guiana"
    }, {
        emoji: "🇬🇬",
        emoName: "flag for Guernsey"
    }, {
        emoji: "🇬🇭",
        emoName: "flag for Ghana"
    }, {
        emoji: "🇬🇮",
        emoName: "flag for Gibraltar"
    }, {
        emoji: "🇬🇱",
        emoName: "flag for Greenland"
    }, {
        emoji: "🇬🇲",
        emoName: "flag for Gambia"
    }, {
        emoji: "🇬🇳",
        emoName: "flag for Guinea"
    }, {
        emoji: "🇬🇵",
        emoName: "flag for Guadeloupe"
    }, {
        emoji: "🇬🇶",
        emoName: "flag for Equatorial Guinea"
    }, {
        emoji: "🇬🇷",
        emoName: "flag for Greece"
    }, {
        emoji: "🇬🇸",
        emoName: "flag for South Georgia & South Sandwich Islands"
    }, {
        emoji: "🇬🇹",
        emoName: "flag for Guatemala"
    }, {
        emoji: "🇬🇺",
        emoName: "flag for Guam"
    }, {
        emoji: "🇬🇼",
        emoName: "flag for Guinea-Bissau"
    }, {
        emoji: "🇬🇾",
        emoName: "flag for Guyana"
    }, {
        emoji: "🇭🇰",
        emoName: "flag for Hong Kong"
    }, {
        emoji: "🇭🇲",
        emoName: "flag for Heard & McDonald Islands"
    }, {
        emoji: "🇭🇳",
        emoName: "flag for Honduras"
    }, {
        emoji: "🇭🇷",
        emoName: "flag for Croatia"
    }, {
        emoji: "🇭🇹",
        emoName: "flag for Haiti"
    }, {
        emoji: "🇭🇺",
        emoName: "flag for Hungary"
    }, {
        emoji: "🇮🇨",
        emoName: "flag for Canary Islands"
    }, {
        emoji: "🇮🇩",
        emoName: "flag for Indonesia"
    }, {
        emoji: "🇮🇪",
        emoName: "flag for Ireland"
    }, {
        emoji: "🇮🇱",
        emoName: "flag for Israel"
    }, {
        emoji: "🇮🇲",
        emoName: "flag for Isle of Man"
    }, {
        emoji: "🇮🇳",
        emoName: "flag for India"
    }, {
        emoji: "🇮🇴",
        emoName: "flag for British Indian Ocean Territory"
    }, {
        emoji: "🇮🇶",
        emoName: "flag for Iraq"
    }, {
        emoji: "🇮🇷",
        emoName: "flag for Iran"
    }, {
        emoji: "🇮🇸",
        emoName: "flag for Iceland"
    }, {
        emoji: "🇮🇹",
        emoName: "flag for Italy"
    }, {
        emoji: "🇯🇪",
        emoName: "flag for Jersey"
    }, {
        emoji: "🇯🇲",
        emoName: "flag for Jamaica"
    }, {
        emoji: "🇯🇴",
        emoName: "flag for Jordan"
    }, {
        emoji: "🇯🇵",
        emoName: "flag for Japan"
    }, {
        emoji: "🇰🇪",
        emoName: "flag for Kenya"
    }, {
        emoji: "🇰🇬",
        emoName: "flag for Kyrgyzstan"
    }, {
        emoji: "🇰🇭",
        emoName: "flag for Cambodia"
    }, {
        emoji: "🇰🇮",
        emoName: "flag for Kiribati"
    }, {
        emoji: "🇰🇲",
        emoName: "flag for Comoros"
    }, {
        emoji: "🇰🇳",
        emoName: "flag for St. Kitts & Nevis"
    }, {
        emoji: "🇰🇵",
        emoName: "flag for North Korea"
    }, {
        emoji: "🇰🇷",
        emoName: "flag for South Korea"
    }, {
        emoji: "🇰🇼",
        emoName: "flag for Kuwait"
    }, {
        emoji: "🇰🇾",
        emoName: "flag for Cayman Islands"
    }, {
        emoji: "🇰🇿",
        emoName: "flag for Kazakhstan"
    }, {
        emoji: "🇱🇦",
        emoName: "flag for Laos"
    }, {
        emoji: "🇱🇧",
        emoName: "flag for Lebanon"
    }, {
        emoji: "🇱🇨",
        emoName: "flag for St. Lucia"
    }, {
        emoji: "🇱🇮",
        emoName: "flag for Liechtenstein"
    }, {
        emoji: "🇱🇰",
        emoName: "flag for Sri Lanka"
    }, {
        emoji: "🇱🇷",
        emoName: "flag for Liberia"
    }, {
        emoji: "🇱🇸",
        emoName: "flag for Lesotho"
    }, {
        emoji: "🇱🇹",
        emoName: "flag for Lithuania"
    }, {
        emoji: "🇱🇺",
        emoName: "flag for Luxembourg"
    }, {
        emoji: "🇱🇻",
        emoName: "flag for Latvia"
    }, {
        emoji: "🇱🇾",
        emoName: "flag for Libya"
    }, {
        emoji: "🇲🇦",
        emoName: "flag for Morocco"
    }, {
        emoji: "🇲🇨",
        emoName: "flag for Monaco"
    }, {
        emoji: "🇲🇩",
        emoName: "flag for Moldova"
    }, {
        emoji: "🇲🇪",
        emoName: "flag for Montenegro"
    }, {
        emoji: "🇲🇫",
        emoName: "flag for St. Martin"
    }, {
        emoji: "🇲🇬",
        emoName: "flag for Madagascar"
    }, {
        emoji: "🇲🇭",
        emoName: "flag for Marshall Islands"
    }, {
        emoji: "🇲🇰",
        emoName: "flag for Macedonia"
    }, {
        emoji: "🇲🇱",
        emoName: "flag for Mali"
    }, {
        emoji: "🇲🇲",
        emoName: "flag for Myanmar"
    }, {
        emoji: "🇲🇳",
        emoName: "flag for Mongolia"
    }, {
        emoji: "🇲🇴",
        emoName: "flag for Macau"
    }, {
        emoji: "🇲🇵",
        emoName: "flag for Northern Mariana Islands"
    }, {
        emoji: "🇲🇶",
        emoName: "flag for Martinique"
    }, {
        emoji: "🇲🇷",
        emoName: "flag for Mauritania"
    }, {
        emoji: "🇲🇸",
        emoName: "flag for Montserrat"
    }, {
        emoji: "🇲🇹",
        emoName: "flag for Malta"
    }, {
        emoji: "🇲🇺",
        emoName: "flag for Mauritius"
    }, {
        emoji: "🇲🇻",
        emoName: "flag for Maldives"
    }, {
        emoji: "🇲🇼",
        emoName: "flag for Malawi"
    }, {
        emoji: "🇲🇽",
        emoName: "flag for Mexico"
    }, {
        emoji: "🇲🇾",
        emoName: "ag for Malaysia"
    }, {
        emoji: "🇲🇿",
        emoName: "ag for Mozambique"
    }, {
        emoji: "🇳🇦",
        emoName: "flag for Namibia"
    }, {
        emoji: "🇳🇨",
        emoName: "flag for New Caledonia"
    }, {
        emoji: "🇳🇪",
        emoName: "flag for Niger"
    }, {
        emoji: "🇳🇫",
        emoName: "flag for Norfolk Island"
    }, {
        emoji: "🇳🇬",
        emoName: "flag for Nigeria"
    }, {
        emoji: "🇳🇮",
        emoName: "flag for Nicaragua"
    }, {
        emoji: "🇳🇱",
        emoName: "flag for Netherlands"
    }, {
        emoji: "🇳🇴",
        emoName: "flag for Norway"
    }, {
        emoji: "🇳🇵",
        emoName: "flag for Nepal"
    }, {
        emoji: "🇳🇷",
        emoName: "flag for Nauru"
    }, {
        emoji: "🇳🇺",
        emoName: "flag for Niue"
    }, {
        emoji: "🇳🇿",
        emoName: "flag for New Zealand"
    }, {
        emoji: "🇴🇲",
        emoName: "flag for Oman"
    }, {
        emoji: "🇵🇦",
        emoName: "flag for Panama"
    }, {
        emoji: "🇵🇪",
        emoName: "flag for Peru"
    }, {
        emoji: "🇵🇫",
        emoName: "flag for French Polynesia"
    }, {
        emoji: "🇵🇬",
        emoName: "flag for Papua New Guinea"
    }, {
        emoji: "🇵🇭",
        emoName: "flag for Philippines"
    }, {
        emoji: "🇵🇰",
        emoName: "flag for Pakistan"
    }, {
        emoji: "🇵🇱",
        emoName: "flag for Poland"
    }, {
        emoji: "🇵🇲",
        emoName: "flag for St. Pierre & Miquelon"
    }, {
        emoji: "🇵🇳",
        emoName: "flag for Pitcairn Islands"
    }, {
        emoji: "🇵🇷",
        emoName: "flag for Puerto Rico"
    }, {
        emoji: "🇵🇸",
        emoName: "flag for Palestinian Territories"
    }, {
        emoji: "🇵🇹",
        emoName: "flag for Portugal"
    }, {
        emoji: "🇵🇼",
        emoName: "flag for Palau"
    }, {
        emoji: "🇵🇾",
        emoName: "flag for Paraguay"
    }, {
        emoji: "🇶🇦",
        emoName: "flag for Qatar"
    }, {
        emoji: "🇷🇪",
        emoName: "flag for Réunion"
    }, {
        emoji: "🇷🇴",
        emoName: "flag for Romania"
    }, {
        emoji: "🇷🇸",
        emoName: "flag for Serbia"
    }, {
        emoji: "🇷🇺",
        emoName: "flag for Russia"
    }, {
        emoji: "🇷🇼",
        emoName: "flag for Rwanda"
    }, {
        emoji: "🇸🇦",
        emoName: "flag for Saudi Arabia"
    }, {
        emoji: "🇸🇧",
        emoName: "flag for Solomon Islands"
    }, {
        emoji: "🇸🇨",
        emoName: "flag for Seychelles"
    }, {
        emoji: "🇸🇩",
        emoName: "flag for Sudan"
    }, {
        emoji: "🇸🇪",
        emoName: "flag for Sweden"
    }, {
        emoji: "🇸🇬",
        emoName: "flag for Singapore"
    }, {
        emoji: "🇸🇭",
        emoName: "flag for St. Helena"
    }, {
        emoji: "🇸🇮",
        emoName: "flag for Slovenia"
    }, {
        emoji: "🇸🇯",
        emoName: "flag for Svalbard & Jan Mayen"
    }, {
        emoji: "🇸🇰",
        emoName: "flag for Slovakia"
    }, {
        emoji: "🇸🇱",
        emoName: "flag for Sierra Leone"
    }, {
        emoji: "🇸🇲",
        emoName: "flag for San Marino"
    }, {
        emoji: "🇸🇳",
        emoName: "flag for Senegal"
    }, {
        emoji: "🇸🇴",
        emoName: "flag for Somalia"
    }, {
        emoji: "🇸🇷",
        emoName: "flag for Suriname"
    }, {
        emoji: "🇸🇸",
        emoName: "flag for South Sudan"
    }, {
        emoji: "🇸🇹",
        emoName: "flag for São Tomé & Príncipe"
    }, {
        emoji: "🇸🇻",
        emoName: "flag for El Salvador"
    }, {
        emoji: "🇸🇽",
        emoName: "flag for Sint Maarten"
    }, {
        emoji: "🇸🇾",
        emoName: "flag for Syria"
    }, {
        emoji: "🇸🇿",
        emoName: "flag for Swaziland"
    }, {
        emoji: "🇹🇦",
        emoName: "flag for Tristan da Cunha"
    }, {
        emoji: "🇹🇨",
        emoName: "flag for Turks & Caicos Islands"
    }, {
        emoji: "🇹🇩",
        emoName: "flag for Chad"
    }, {
        emoji: "🇹🇫",
        emoName: "flag for French Southern Territories"
    }, {
        emoji: "🇹🇬",
        emoName: "flag for Togo"
    }, {
        emoji: "🇹🇭",
        emoName: "flag for Thailand"
    }, {
        emoji: "🇹🇯",
        emoName: "flag for Tajikistan"
    }, {
        emoji: "🇹🇰",
        emoName: "flag for Tokelau"
    }, {
        emoji: "🇹🇱",
        emoName: "flag for Timor-Leste"
    }, {
        emoji: "🇹🇲",
        emoName: "flag for Turkmenistan"
    }, {
        emoji: "🇹🇳",
        emoName: "flag for Tunisia"
    }, {
        emoji: "🇹🇴",
        emoName: "flag for Tonga"
    }, {
        emoji: "🇹🇷",
        emoName: "flag for Turkey"
    }, {
        emoji: "🇹🇹",
        emoName: "flag for Trinidad & Tobago"
    }, {
        emoji: "🇹🇻",
        emoName: "flag for Tuvalu"
    }, {
        emoji: "🇹🇼",
        emoName: "flag for Taiwan"
    }, {
        emoji: "🇹🇿",
        emoName: "flag for Tanzania"
    }, {
        emoji: "🇺🇦",
        emoName: "flag for Ukraine"
    }, {
        emoji: "🇺🇬",
        emoName: "flag for Uganda"
    }, {
        emoji: "🇺🇲",
        emoName: "flag for U.S. Outlying Islands"
    }, {
        emoji: "🇺🇸",
        emoName: "flag for United States"
    }, {
        emoji: "🇺🇾",
        emoName: "flag for Uruguay"
    }, {
        emoji: "🇺🇿",
        emoName: "flag for Uzbekistan"
    }, {
        emoji: "🇻🇦",
        emoName: "flag for Vatican City"
    }, {
        emoji: "🇻🇨",
        emoName: "flag for St. Vincent & Grenadines"
    }, {
        emoji: "🇻🇪",
        emoName: "flag for Venezuela"
    }, {
        emoji: "🇻🇬",
        emoName: "flag for British Virgin Islands"
    }, {
        emoji: "🇻🇮",
        emoName: "flag for U.S. Virgin Islands"
    }, {
        emoji: "🇻🇳",
        emoName: "flag for Vietnam"
    }, {
        emoji: "🇻🇺",
        emoName: "flag for Vanuatu"
    }, {
        emoji: "🇼🇫",
        emoName: "flag for Wallis & Futuna"
    }, {
        emoji: "🇼🇸",
        emoName: "flag for Samoa"
    }, {
        emoji: "🇽🇰",
        emoName: "flag for Kosovo"
    }, {
        emoji: "🇾🇪",
        emoName: "flag for Yemen"
    }, {
        emoji: "🇾🇹",
        emoName: "flag for Mayotte"
    }, {
        emoji: "🇿🇦",
        emoName: "flag for South Africa"
    }, {
        emoji: "🇿🇲",
        emoName: "flag for Zambia"
    }]
}

// Data model ends

// Control system
var control = {
    init: function() {
        data.currEmo = data.emoFace; // Set current emoji to emoFace category
        view.init();
    },
    getCurrEmo: function() {
        return data.currEmo;
    },
    setCurrEmo: function(emoji) {
        if (emoji == "emo-face")
            data.currEmo = data.emoFace;
        else if (emoji == "emo-symbol")
            data.currEmo = data.emoSymbol;
        else if (emoji == "emo-animal")
            data.currEmo = data.emoAnimal;
        else if (emoji == "emo-food")
            data.currEmo = data.emoFood;
        else if (emoji == "emo-place")
            data.currEmo = data.emoPlace;
        else if (emoji == "emo-item")
            data.currEmo = data.emoItem;
        else if (emoji == "emo-activity")
            data.currEmo = data.emoActivity;
        else
            data.currEmo = data.emoFlag;
        view.render();
    },
    copyEmo: function(emoji) {
        var textArea = document.createElement("textarea");

        textArea.style.position = 'fixed'; // Place in top-left corner of screen regardless of scroll position.
        textArea.style.top = 0;
        textArea.style.left = 0;

        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;

        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';

        textArea.style.background = 'transparent';
        textArea.value = emoji;

        document.body.appendChild(textArea);

        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }

        document.body.removeChild(textArea);
    }
};

// Control system ends

// View

var view = {
    init: function() {
        this.viewBody = document.getElementById('emo-list');
        this.emoType = document.getElementById('emo-type');
        this.emoSelected = document.getElementById('emo-selected');
        this.render();
    },
    render: function() {
        var currEmoji = control.getCurrEmo(),
            node,
            textNode,
            emo;

        this.viewBody.innerHTML = '';

        for (i = 0; i < currEmoji.length; ++i) {
            emo = currEmoji[i];

            node = document.createElement("li");
            textNode = document.createTextNode(currEmoji[i].emoji);
            node.appendChild(textNode);

            node.addEventListener('click', (function(e) {
                return function() {
                    control.copyEmo(e.emoji);
                    // console.log(e.emoji);
                };
            })(emo));

            node.addEventListener('mouseover', (function(e) {
                return function() {
                    this.emoSelected.innerHTML = e.emoName;
                };
            })(emo));

            this.viewBody.appendChild(node);
        }

        this.emoType.addEventListener('click', function() {
            control.setCurrEmo(event.target.id);
        });

    }
};

// View ends

control.init(); // Initialize controller
