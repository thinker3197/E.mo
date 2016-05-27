var data = {
    currEmo: null,
    emoFaces: [{
        emoName: "grinnig",
        emoji: "😀"
    }]
}

document.getElementById('emo-type').textContent = (data.emoFaces[0].emoji);
// 😀 grinning face
// 😁 grinning face with smiling eyes
// 😂 face with tears of joy
// 😃 smiling face with open mouth
// 😄 smiling face with open mouth and smiling eyes
// 😅 smiling face with open mouth and cold sweat
// 😆 smiling face with open mouth and tightly-closed eyes
// 😉 winking face
// 😊 smiling face with smiling eyes
// 😋 face savouring delicious food
// 😎 smiling face with sunglasses
// 😍 smiling face with heart-shaped eyes
// 😘 face throwing a kiss
// 😗 kissing face
// 😙 kissing face with smiling eyes
// 😚 kissing face with closed eyes
//  white smiling face
// 🙂 slightly smiling face
// 🤗 hugging face
// 😇 smiling face with halo
// 🤓 nerd face
// 🤔 thinking face
// 😐 neutral face
// 😑 expressionless face
// 😶 face without mouth
// 🙄 face with rolling eyes
// 😏 smirking face
// 😣 persevering face
// 😥 disappointed but relieved face
// 😮 face with open mouth
// 🤐 zipper-mouth face
// 😯 hushed face
// 😪 sleepy face
// 😫 tired face
// 😴 sleeping face
// 😌 relieved face
// 😛 face with stuck-out tongue
// 😜 face with stuck-out tongue and winking eye
// 😝 face with stuck-out tongue and tightly-closed eyes
// 😒 unamused face
// 😓 face with cold sweat
// 😔 pensive face
// 😕 confused face
// 🙃 upside-down face
// 🤑 money-mouth face
// 😲 astonished face
// 😷 face with medical mask
// 🤒 face with thermometer
// 🤕 face with head-bandage
//  white frowning face
// 🙁 slightly frowning face
// 😖 confounded face
// 😞 disappointed face
// 😟 worried face
// 😤 face with look of triumph
// 😢 crying face
// 😭 loudly crying face
// 😦 frowning face with open mouth
// 😧 anguished face
// 😨 fearful face
// 😩 weary face
// 😬 grimacing face
// 😰 face with open mouth and cold sweat
// 😱 face screaming in fear
// 😳 flushed face
// 😵 dizzy face
// 😡 pouting face
// 😠 angry face
// 😈 smiling face with horns
// 👿 imp
// 👹 japanese ogre
// 👺 japanese goblin
// 💀 skull
//  skull and crossbones
// 👻 ghost
// 👽 extraterrestrial alien
// 👾 alien monster
// 🤖 robot face
// 💩 pile of poo
// 😺 smiling cat face with open mouth
// 😸 grinning cat face with smiling eyes
// 😹 cat face with tears of joy
// 😻 smiling cat face with heart-shaped eyes
// 😼 cat face with wry smile
// 😽 kissing cat face with closed eyes
// 🙀 weary cat face
// 😿 crying cat face
// 😾 pouting cat face
// 🙈 see-no-evil monkey
// 🙉 hear-no-evil monkey
// 🙊 speak-no-evil monkey
// 👦 boy
// U+1F3FB 👦🏻 boy, type-1-2
// U+1F3FC 👦🏼 boy, type-3
// U+1F3FD 👦🏽 boy, type-4
// U+1F3FE 👦🏾 boy, type-5
// U+1F3FF 👦🏿 boy, type-6
// 👧 girl
// U+1F3FB 👧🏻 girl, type-1-2
// U+1F3FC 👧🏼 girl, type-3
// U+1F3FD 👧🏽 girl, type-4
// U+1F3FE 👧🏾 girl, type-5
// U+1F3FF 👧🏿 girl, type-6
// 👨 man
// U+1F3FB 👨🏻 man, type-1-2
// U+1F3FC 👨🏼 man, type-3
// U+1F3FD 👨🏽 man, type-4
// U+1F3FE 👨🏾 man, type-5
// U+1F3FF 👨🏿 man, type-6
// 👩 woman
// U+1F3FB 👩🏻 woman, type-1-2
// U+1F3FC 👩🏼 woman, type-3
// U+1F3FD 👩🏽 woman, type-4
// U+1F3FE 👩🏾 woman, type-5
// U+1F3FF 👩🏿 woman, type-6
// 👴 older man
// U+1F3FB 👴🏻 older man, type-1-2
// U+1F3FC 👴🏼 older man, type-3
// U+1F3FD 👴🏽 older man, type-4
// U+1F3FE 👴🏾 older man, type-5
// U+1F3FF 👴🏿 older man, type-6
// 👵 older woman
// U+1F3FB 👵🏻 older woman, type-1-2
// U+1F3FC 👵🏼 older woman, type-3
// U+1F3FD 👵🏽 older woman, type-4
// U+1F3FE 👵🏾 older woman, type-5
// U+1F3FF 👵🏿 older woman, type-6
// 👶 baby
// U+1F3FB 👶🏻 baby, type-1-2
// U+1F3FC 👶🏼 baby, type-3
// U+1F3FD 👶🏽 baby, type-4
// U+1F3FE 👶🏾 baby, type-5
// U+1F3FF 👶🏿 baby, type-6
// 👱 person with blond hair
// U+1F3FB 👱🏻 person with blond hair, type-1-2
// U+1F3FC 👱🏼 person with blond hair, type-3
// U+1F3FD 👱🏽 person with blond hair, type-4
// U+1F3FE 👱🏾 person with blond hair, type-5
// U+1F3FF 👱🏿 person with blond hair, type-6
// 👮 police officer
// U+1F3FB 👮🏻 police officer, type-1-2
// U+1F3FC 👮🏼 police officer, type-3
// U+1F3FD 👮🏽 police officer, type-4
// U+1F3FE 👮🏾 police officer, type-5
// U+1F3FF 👮🏿 police officer, type-6
// 👲 man with gua pi mao
// U+1F3FB 👲🏻 man with gua pi mao, type-1-2
// U+1F3FC 👲🏼 man with gua pi mao, type-3
// U+1F3FD 👲🏽 man with gua pi mao, type-4
// U+1F3FE 👲🏾 man with gua pi mao, type-5
// U+1F3FF 👲🏿 man with gua pi mao, type-6
// 👳 man with turban
// U+1F3FB 👳🏻 man with turban, type-1-2
// U+1F3FC 👳🏼 man with turban, type-3
// U+1F3FD 👳🏽 man with turban, type-4
// U+1F3FE 👳🏾 man with turban, type-5
// U+1F3FF 👳🏿 man with turban, type-6
// 👷 construction worker
// U+1F3FB 👷🏻 construction worker, type-1-2
// U+1F3FC 👷🏼 construction worker, type-3
// U+1F3FD 👷🏽 construction worker, type-4
// U+1F3FE 👷🏾 construction worker, type-5
// U+1F3FF 👷🏿 construction worker, type-6
//  helmet with white cross
// 👸 princess
// U+1F3FB 👸🏻 princess, type-1-2
// U+1F3FC 👸🏼 princess, type-3
// U+1F3FD 👸🏽 princess, type-4
// U+1F3FE 👸🏾 princess, type-5
// U+1F3FF 👸🏿 princess, type-6
// 💂 guardsman
// U+1F3FB 💂🏻 guardsman, type-1-2
// U+1F3FC 💂🏼 guardsman, type-3
// U+1F3FD 💂🏽 guardsman, type-4
// U+1F3FE 💂🏾 guardsman, type-5
// U+1F3FF 💂🏿 guardsman, type-6
// 🕵 sleuth or spy
// U+1F3FB 🕵🏻 sleuth or spy, type-1-2
// U+1F3FC 🕵🏼 sleuth or spy, type-3
// U+1F3FD 🕵🏽 sleuth or spy, type-4
// U+1F3FE 🕵🏾 sleuth or spy, type-5
// U+1F3FF 🕵🏿 sleuth or spy, type-6
// 🎅 father christmas
// U+1F3FB 🎅🏻 father christmas, type-1-2
// U+1F3FC 🎅🏼 father christmas, type-3
// U+1F3FD 🎅🏽 father christmas, type-4
// U+1F3FE 🎅🏾 father christmas, type-5
// U+1F3FF 🎅🏿 father christmas, type-6
// 👰 bride with veil
// U+1F3FB 👰🏻 bride with veil, type-1-2
// U+1F3FC 👰🏼 bride with veil, type-3
// U+1F3FD 👰🏽 bride with veil, type-4
// U+1F3FE 👰🏾 bride with veil, type-5
// U+1F3FF 👰🏿 bride with veil, type-6
// 👼 baby angel
// U+1F3FB 👼🏻 baby angel, type-1-2
// U+1F3FC 👼🏼 baby angel, type-3
// U+1F3FD 👼🏽 baby angel, type-4
// U+1F3FE 👼🏾 baby angel, type-5
// U+1F3FF 👼🏿 baby angel, type-6
// 💆 face massage
// U+1F3FB 💆🏻 face massage, type-1-2
// U+1F3FC 💆🏼 face massage, type-3
// U+1F3FD 💆🏽 face massage, type-4
// U+1F3FE 💆🏾 face massage, type-5
// U+1F3FF 💆🏿 face massage, type-6
// 💇 haircut
// U+1F3FB 💇🏻 haircut, type-1-2
// U+1F3FC 💇🏼 haircut, type-3
// U+1F3FD 💇🏽 haircut, type-4
// U+1F3FE 💇🏾 haircut, type-5
// U+1F3FF 💇🏿 haircut, type-6
// 🙍 person frowning
// U+1F3FB 🙍🏻 person frowning, type-1-2
// U+1F3FC 🙍🏼 person frowning, type-3
// U+1F3FD 🙍🏽 person frowning, type-4
// U+1F3FE 🙍🏾 person frowning, type-5
// U+1F3FF 🙍🏿 person frowning, type-6
// 🙎 person with pouting face
// U+1F3FB 🙎🏻 person with pouting face, type-1-2
// U+1F3FC 🙎🏼 person with pouting face, type-3
// U+1F3FD 🙎🏽 person with pouting face, type-4
// U+1F3FE 🙎🏾 person with pouting face, type-5
// U+1F3FF 🙎🏿 person with pouting face, type-6
// 🙅 face with no good gesture
// U+1F3FB 🙅🏻 face with no good gesture, type-1-2
// U+1F3FC 🙅🏼 face with no good gesture, type-3
// U+1F3FD 🙅🏽 face with no good gesture, type-4
// U+1F3FE 🙅🏾 face with no good gesture, type-5
// U+1F3FF 🙅🏿 face with no good gesture, type-6
// 🙆 face with ok gesture
// U+1F3FB 🙆🏻 face with ok gesture, type-1-2
// U+1F3FC 🙆🏼 face with ok gesture, type-3
// U+1F3FD 🙆🏽 face with ok gesture, type-4
// U+1F3FE 🙆🏾 face with ok gesture, type-5
// U+1F3FF 🙆🏿 face with ok gesture, type-6
// 💁 information desk person
// U+1F3FB 💁🏻 information desk person, type-1-2
// U+1F3FC 💁🏼 information desk person, type-3
// U+1F3FD 💁🏽 information desk person, type-4
// U+1F3FE 💁🏾 information desk person, type-5
// U+1F3FF 💁🏿 information desk person, type-6
// 🙋 happy person raising one hand
// U+1F3FB 🙋🏻 happy person raising one hand, type-1-2
// U+1F3FC 🙋🏼 happy person raising one hand, type-3
// U+1F3FD 🙋🏽 happy person raising one hand, type-4
// U+1F3FE 🙋🏾 happy person raising one hand, type-5
// U+1F3FF 🙋🏿 happy person raising one hand, type-6
// 🙇 person bowing deeply
// U+1F3FB 🙇🏻 person bowing deeply, type-1-2
// U+1F3FC 🙇🏼 person bowing deeply, type-3
// U+1F3FD 🙇🏽 person bowing deeply, type-4
// U+1F3FE 🙇🏾 person bowing deeply, type-5
// U+1F3FF 🙇🏿 person bowing deeply, type-6
// 🙌 person raising both hands in celebration
// U+1F3FB 🙌🏻 person raising both hands in celebration, type-1-2
// U+1F3FC 🙌🏼 person raising both hands in celebration, type-3
// U+1F3FD 🙌🏽 person raising both hands in celebration, type-4
// U+1F3FE 🙌🏾 person raising both hands in celebration, type-5
// U+1F3FF 🙌🏿 person raising both hands in celebration, type-6
// 🙏 person with folded hands
// U+1F3FB 🙏🏻 person with folded hands, type-1-2
// U+1F3FC 🙏🏼 person with folded hands, type-3
// U+1F3FD 🙏🏽 person with folded hands, type-4
// U+1F3FE 🙏🏾 person with folded hands, type-5
// U+1F3FF 🙏🏿 person with folded hands, type-6
// 🗣 speaking head in silhouette
// 👤 bust in silhouette
// 👥 busts in silhouette
// 🚶 pedestrian
// U+1F3FB 🚶🏻 pedestrian, type-1-2
// U+1F3FC 🚶🏼 pedestrian, type-3
// U+1F3FD 🚶🏽 pedestrian, type-4
// U+1F3FE 🚶🏾 pedestrian, type-5
// U+1F3FF 🚶🏿 pedestrian, type-6
// 🏃 runner
// U+1F3FB 🏃🏻 runner, type-1-2
// U+1F3FC 🏃🏼 runner, type-3
// U+1F3FD 🏃🏽 runner, type-4
// U+1F3FE 🏃🏾 runner, type-5
// U+1F3FF 🏃🏿 runner, type-6
// 👯 woman with bunny ears
// 💃 dancer
// U+1F3FB 💃🏻 dancer, type-1-2
// U+1F3FC 💃🏼 dancer, type-3
// U+1F3FD 💃🏽 dancer, type-4
// U+1F3FE 💃🏾 dancer, type-5
// U+1F3FF 💃🏿 dancer, type-6
// 🕴 man in business suit levitating
// 👫 man and woman holding hands
// 👬 two men holding hands
// 👭 two women holding hands
// 💏 kiss
// U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468 👩‍❤️‍💋‍👨 kiss: woman, man
// U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468 👨‍❤️‍💋‍👨 kiss: man, man
// U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F469 👩‍❤️‍💋‍👩 kiss: woman, woman
// 💑 couple with heart
// U+200D U+2764 U+FE0F U+200D U+1F468 👩‍❤️‍👨 couple with heart: woman, man
// U+200D U+2764 U+FE0F U+200D U+1F468 👨‍❤️‍👨 couple with heart: man, man
// U+200D U+2764 U+FE0F U+200D U+1F469 👩‍❤️‍👩 couple with heart: woman, woman
// 👪 family
// U+200D U+1F469 U+200D U+1F466 👨‍👩‍👦 family: man, woman, boy
// U+200D U+1F469 U+200D U+1F467 👨‍👩‍👧 family: man, woman, girl
// U+200D U+1F469 U+200D U+1F467 U+200D U+1F466 👨‍👩‍👧‍👦 family: man, woman, girl, boy
// U+200D U+1F469 U+200D U+1F466 U+200D U+1F466 👨‍👩‍👦‍👦 family: man, woman, boy, boy
// U+200D U+1F469 U+200D U+1F467 U+200D U+1F467 👨‍👩‍👧‍👧 family: man, woman, girl, girl
// U+200D U+1F468 U+200D U+1F466 👨‍👨‍👦 family: man, man, boy
// U+200D U+1F468 U+200D U+1F467 👨‍👨‍👧 family: man, man, girl
// U+200D U+1F468 U+200D U+1F467 U+200D U+1F466 👨‍👨‍👧‍👦 family: man, man, girl, boy
// U+200D U+1F468 U+200D U+1F466 U+200D U+1F466 👨‍👨‍👦‍👦 family: man, man, boy, boy
// U+200D U+1F468 U+200D U+1F467 U+200D U+1F467 👨‍👨‍👧‍👧 family: man, man, girl, girl
// U+200D U+1F469 U+200D U+1F466 👩‍👩‍👦 family: woman, woman, boy
// U+200D U+1F469 U+200D U+1F467 👩‍👩‍👧 family: woman, woman, girl
// U+200D U+1F469 U+200D U+1F467 U+200D U+1F466 👩‍👩‍👧‍👦 family: woman, woman, girl, boy
// U+200D U+1F469 U+200D U+1F466 U+200D U+1F466 👩‍👩‍👦‍👦 family: woman, woman, boy, boy
// U+200D U+1F469 U+200D U+1F467 U+200D U+1F467 👩‍👩‍👧‍👧 family: woman, woman, girl, girl
// 🏻 emoji modifier fitzpatrick type-1-2
// 🏼 emoji modifier fitzpatrick type-3
// 🏽 emoji modifier fitzpatrick type-4
// 🏾 emoji modifier fitzpatrick type-5
// 🏿 emoji modifier fitzpatrick type-6
// 💪 flexed biceps
// U+1F3FB 💪🏻 flexed biceps, type-1-2
// U+1F3FC 💪🏼 flexed biceps, type-3
// U+1F3FD 💪🏽 flexed biceps, type-4
// U+1F3FE 💪🏾 flexed biceps, type-5
// U+1F3FF 💪🏿 flexed biceps, type-6
// 👈 white left pointing backhand index
// U+1F3FB 👈🏻 white left pointing backhand index, type-1-2
// U+1F3FC 👈🏼 white left pointing backhand index, type-3
// U+1F3FD 👈🏽 white left pointing backhand index, type-4
// U+1F3FE 👈🏾 white left pointing backhand index, type-5
// U+1F3FF 👈🏿 white left pointing backhand index, type-6
// 👉 white right pointing backhand index
// U+1F3FB 👉🏻 white right pointing backhand index, type-1-2
// U+1F3FC 👉🏼 white right pointing backhand index, type-3
// U+1F3FD 👉🏽 white right pointing backhand index, type-4
// U+1F3FE 👉🏾 white right pointing backhand index, type-5
// U+1F3FF 👉🏿 white right pointing backhand index, type-6
//  white up pointing index
// +1F3FB ☝🏻 white up pointing index, type-1-2
// +1F3FC ☝🏼 white up pointing index, type-3
// +1F3FD ☝🏽 white up pointing index, type-4
// +1F3FE ☝🏾 white up pointing index, type-5
// +1F3FF ☝🏿 white up pointing index, type-6
// 👆 white up pointing backhand index
// U+1F3FB 👆🏻 white up pointing backhand index, type-1-2
// U+1F3FC 👆🏼 white up pointing backhand index, type-3
// U+1F3FD 👆🏽 white up pointing backhand index, type-4
// U+1F3FE 👆🏾 white up pointing backhand index, type-5
// U+1F3FF 👆🏿 white up pointing backhand index, type-6
// 🖕 reversed hand with middle finger extended
// U+1F3FB 🖕🏻 reversed hand with middle finger extended, type-1-2
// U+1F3FC 🖕🏼 reversed hand with middle finger extended, type-3
// U+1F3FD 🖕🏽 reversed hand with middle finger extended, type-4
// U+1F3FE 🖕🏾 reversed hand with middle finger extended, type-5
// U+1F3FF 🖕🏿 reversed hand with middle finger extended, type-6
// 👇 white down pointing backhand index
// U+1F3FB 👇🏻 white down pointing backhand index, type-1-2
// U+1F3FC 👇🏼 white down pointing backhand index, type-3
// U+1F3FD 👇🏽 white down pointing backhand index, type-4
// U+1F3FE 👇🏾 white down pointing backhand index, type-5
// U+1F3FF 👇🏿 white down pointing backhand index, type-6
//  victory hand
// +1F3FB ✌🏻 victory hand, type-1-2
// +1F3FC ✌🏼 victory hand, type-3
// +1F3FD ✌🏽 victory hand, type-4
// +1F3FE ✌🏾 victory hand, type-5
// +1F3FF ✌🏿 victory hand, type-6
// 🖖 raised hand with part between middle and ring fingers
// U+1F3FB 🖖🏻 raised hand with part between middle and ring fingers, type-1-2
// U+1F3FC 🖖🏼 raised hand with part between middle and ring fingers, type-3
// U+1F3FD 🖖🏽 raised hand with part between middle and ring fingers, type-4
// U+1F3FE 🖖🏾 raised hand with part between middle and ring fingers, type-5
// U+1F3FF 🖖🏿 raised hand with part between middle and ring fingers, type-6
// 🤘 sign of the horns
// U+1F3FB 🤘🏻 sign of the horns, type-1-2
// U+1F3FC 🤘🏼 sign of the horns, type-3
// U+1F3FD 🤘🏽 sign of the horns, type-4
// U+1F3FE 🤘🏾 sign of the horns, type-5
// U+1F3FF 🤘🏿 sign of the horns, type-6
// 🖐 raised hand with fingers splayed
// U+1F3FB 🖐🏻 raised hand with fingers splayed, type-1-2
// U+1F3FC 🖐🏼 raised hand with fingers splayed, type-3
// U+1F3FD 🖐🏽 raised hand with fingers splayed, type-4
// U+1F3FE 🖐🏾 raised hand with fingers splayed, type-5
// U+1F3FF 🖐🏿 raised hand with fingers splayed, type-6
//  raised hand
// +1F3FB ✋🏻 raised hand, type-1-2
// +1F3FC ✋🏼 raised hand, type-3
// +1F3FD ✋🏽 raised hand, type-4
// +1F3FE ✋🏾 raised hand, type-5
// +1F3FF ✋🏿 raised hand, type-6
// 👌 ok hand sign
// U+1F3FB 👌🏻 ok hand sign, type-1-2
// U+1F3FC 👌🏼 ok hand sign, type-3
// U+1F3FD 👌🏽 ok hand sign, type-4
// U+1F3FE 👌🏾 ok hand sign, type-5
// U+1F3FF 👌🏿 ok hand sign, type-6
// 👍 thumbs up sign
// U+1F3FB 👍🏻 thumbs up sign, type-1-2
// U+1F3FC 👍🏼 thumbs up sign, type-3
// U+1F3FD 👍🏽 thumbs up sign, type-4
// U+1F3FE 👍🏾 thumbs up sign, type-5
// U+1F3FF 👍🏿 thumbs up sign, type-6
// 👎 thumbs down sign
// U+1F3FB 👎🏻 thumbs down sign, type-1-2
// U+1F3FC 👎🏼 thumbs down sign, type-3
// U+1F3FD 👎🏽 thumbs down sign, type-4
// U+1F3FE 👎🏾 thumbs down sign, type-5
// U+1F3FF 👎🏿 thumbs down sign, type-6
//  raised fist
// +1F3FB ✊🏻 raised fist, type-1-2
// +1F3FC ✊🏼 raised fist, type-3
// +1F3FD ✊🏽 raised fist, type-4
// +1F3FE ✊🏾 raised fist, type-5
// +1F3FF ✊🏿 raised fist, type-6
// 👊 fisted hand sign
// U+1F3FB 👊🏻 fisted hand sign, type-1-2
// U+1F3FC 👊🏼 fisted hand sign, type-3
// U+1F3FD 👊🏽 fisted hand sign, type-4
// U+1F3FE 👊🏾 fisted hand sign, type-5
// U+1F3FF 👊🏿 fisted hand sign, type-6
// 👋 waving hand sign
// U+1F3FB 👋🏻 waving hand sign, type-1-2
// U+1F3FC 👋🏼 waving hand sign, type-3
// U+1F3FD 👋🏽 waving hand sign, type-4
// U+1F3FE 👋🏾 waving hand sign, type-5
// U+1F3FF 👋🏿 waving hand sign, type-6
// 👏 clapping hands sign
// U+1F3FB 👏🏻 clapping hands sign, type-1-2
// U+1F3FC 👏🏼 clapping hands sign, type-3
// U+1F3FD 👏🏽 clapping hands sign, type-4
// U+1F3FE 👏🏾 clapping hands sign, type-5
// U+1F3FF 👏🏿 clapping hands sign, type-6
// 👐 open hands sign
// U+1F3FB 👐🏻 open hands sign, type-1-2
// U+1F3FC 👐🏼 open hands sign, type-3
// U+1F3FD 👐🏽 open hands sign, type-4
// U+1F3FE 👐🏾 open hands sign, type-5
// U+1F3FF 👐🏿 open hands sign, type-6
//  writing hand
// +1F3FB ✍🏻 writing hand, type-1-2
// +1F3FC ✍🏼 writing hand, type-3
// +1F3FD ✍🏽 writing hand, type-4
// +1F3FE ✍🏾 writing hand, type-5
// +1F3FF ✍🏿 writing hand, type-6
// 💅 nail polish
// U+1F3FB 💅🏻 nail polish, type-1-2
// U+1F3FC 💅🏼 nail polish, type-3
// U+1F3FD 💅🏽 nail polish, type-4
// U+1F3FE 💅🏾 nail polish, type-5
// U+1F3FF 💅🏿 nail polish, type-6
// 👂 ear
// U+1F3FB 👂🏻 ear, type-1-2
// U+1F3FC 👂🏼 ear, type-3
// U+1F3FD 👂🏽 ear, type-4
// U+1F3FE 👂🏾 ear, type-5
// U+1F3FF 👂🏿 ear, type-6
// 👃 nose
// U+1F3FB 👃🏻 nose, type-1-2
// U+1F3FC 👃🏼 nose, type-3
// U+1F3FD 👃🏽 nose, type-4
// U+1F3FE 👃🏾 nose, type-5
// U+1F3FF 👃🏿 nose, type-6
// 👣 footprints
// 👀 eyes
// 👁 eye
// U+200D U+1F5E8 👁‍🗨 eye, left speech bubble
// 👅 tongue
// 👄 mouth
// 💋 kiss mark
// 💘 heart with arrow
//  heavy black heart
// 💓 beating heart
// 💔 broken heart
// 💕 two hearts
// 💖 sparkling heart
// 💗 growing heart
// 💙 blue heart
// 💚 green heart
// 💛 yellow heart
// 💜 purple heart
// 💝 heart with ribbon
// 💞 revolving hearts
// 💟 heart decoration
//  heavy heart exclamation mark ornament
// 💌 love letter
// 💤 sleeping symbol
// 💢 anger symbol
// 💣 bomb
// 💥 collision symbol
// 💦 splashing sweat symbol
// 💨 dash symbol
// 💫 dizzy symbol
// 💬 speech balloon
// 🗨 left speech bubble
// 🗯 right anger bubble
// 💭 thought balloon
// 🕳 hole
// 👓 eyeglasses
// 🕶 dark sunglasses
// 👔 necktie
// 👕 t-shirt
// 👖 jeans
// 👗 dress
// 👘 kimono
// 👙 bikini
// 👚 womans clothes
// 👛 purse
// 👜 handbag
// 👝 pouch
// 🛍 shopping bags
// 🎒 school satchel
// 👞 mans shoe
// 👟 athletic shoe
// 👠 high-heeled shoe
// 👡 womans sandal
// 👢 womans boots
// 👑 crown
// 👒 womans hat
// 🎩 top hat
// 🎓 graduation cap
// 📿 prayer beads
// 💄 lipstick
// 💍 ring
// 💎 gem stone
// 🐵 monkey face
// 🐒 monkey
// 🐶 dog face
// 🐕 dog
// 🐩 poodle
// 🐺 wolf face
// 🐱 cat face
// 🐈 cat
// 🦁 lion face
// 🐯 tiger face
// 🐅 tiger
// 🐆 leopard
// 🐴 horse face
// 🐎 horse
// 🦄 unicorn face
// 🐮 cow face
// 🐂 ox
// 🐃 water buffalo
// 🐄 cow
// 🐷 pig face
// 🐖 pig
// 🐗 boar
// 🐽 pig nose
// 🐏 ram
// 🐑 sheep
// 🐐 goat
// 🐪 dromedary camel
// 🐫 bactrian camel
// 🐘 elephant
// 🐭 mouse face
// 🐁 mouse
// 🐀 rat
// 🐹 hamster face
// 🐰 rabbit face
// 🐇 rabbit
// 🐿 chipmunk
// 🐻 bear face
// 🐨 koala
// 🐼 panda face
// 🐾 paw prints
// 🦃 turkey
// 🐔 chicken
// 🐓 rooster
// 🐣 hatching chick
// 🐤 baby chick
// 🐥 front-facing baby chick
// 🐦 bird
// 🐧 penguin
// 🕊 dove of peace
// 🐸 frog face
// 🐊 crocodile
// 🐢 turtle
// 🐍 snake
// 🐲 dragon face
// 🐉 dragon
// 🐳 spouting whale
// 🐋 whale
// 🐬 dolphin
// 🐟 fish
// 🐠 tropical fish
// 🐡 blowfish
// 🐙 octopus
// 🐚 spiral shell
// 🦀 crab
// 🐌 snail
// 🐛 bug
// 🐜 ant
// 🐝 honeybee
// 🐞 lady beetle
// 🕷 spider
// 🕸 spider web
// 🦂 scorpion
// 💐 bouquet
// 🌸 cherry blossom
// 💮 white flower
// 🏵 rosette
// 🌹 rose
// 🌺 hibiscus
// 🌻 sunflower
// 🌼 blossom
// 🌷 tulip
// 🌱 seedling
// 🌲 evergreen tree
// 🌳 deciduous tree
// 🌴 palm tree
// 🌵 cactus
// 🌾 ear of rice
// 🌿 herb
//  shamrock
// 🍀 four leaf clover
// 🍁 maple leaf
// 🍂 fallen leaf
// 🍃 leaf fluttering in wind
// 🍇 grapes
// 🍈 melon
// 🍉 watermelon
// 🍊 tangerine
// 🍋 lemon
// 🍌 banana
// 🍍 pineapple
// 🍎 red apple
// 🍏 green apple
// 🍐 pear
// 🍑 peach
// 🍒 cherries
// 🍓 strawberry
// 🍅 tomato
// 🍆 aubergine
// 🌽 ear of maize
// 🌶 hot pepper
// 🍄 mushroom
// 🌰 chestnut
// 🍞 bread
// 🧀 cheese wedge
// 🍖 meat on bone
// 🍗 poultry leg
// 🍔 hamburger
// 🍟 french fries
// 🍕 slice of pizza
// 🌭 hot dog
// 🌮 taco
// 🌯 burrito
// 🍳 cooking
// 🍲 pot of food
// 🍿 popcorn
// 🍱 bento box
// 🍘 rice cracker
// 🍙 rice ball
// 🍚 cooked rice
// 🍛 curry and rice
// 🍜 steaming bowl
// 🍝 spaghetti
// 🍠 roasted sweet potato
// 🍢 oden
// 🍣 sushi
// 🍤 fried shrimp
// 🍥 fish cake with swirl design
// 🍡 dango
// 🍦 soft ice cream
// 🍧 shaved ice
// 🍨 ice cream
// 🍩 doughnut
// 🍪 cookie
// 🎂 birthday cake
// 🍰 shortcake
// 🍫 chocolate bar
// 🍬 candy
// 🍭 lollipop
// 🍮 custard
// 🍯 honey pot
// 🍼 baby bottle
//  hot beverage
// 🍵 teacup without handle
// 🍶 sake bottle and cup
// 🍾 bottle with popping cork
// 🍷 wine glass
// 🍸 cocktail glass
// 🍹 tropical drink
// 🍺 beer mug
// 🍻 clinking beer mugs
// 🍽 fork and knife with plate
// 🍴 fork and knife
// 🔪 hocho
// 🏺 amphora
// 🌍 earth globe europe-africa
// 🌎 earth globe americas
// 🌏 earth globe asia-australia
// 🌐 globe with meridians
// 🗺 world map
// 🗾 silhouette of japan
// 🏔 snow capped mountain
//  mountain
// 🌋 volcano
// 🗻 mount fuji
// 🏕 camping
// 🏖 beach with umbrella
// 🏜 desert
// 🏝 desert island
// 🏞 national park
// 🏟 stadium
// 🏛 classical building
// 🏗 building construction
// 🏘 house buildings
// 🏙 cityscape
// 🏚 derelict house building
// 🏠 house building
// 🏡 house with garden
// 🏢 office building
// 🏣 japanese post office
// 🏤 european post office
// 🏥 hospital
// 🏦 bank
// 🏨 hotel
// 🏩 love hotel
// 🏪 convenience store
// 🏫 school
// 🏬 department store
// 🏭 factory
// 🏯 japanese castle
// 🏰 european castle
// 💒 wedding
// 🗼 tokyo tower
// 🗽 statue of liberty
//  church
// 🕌 mosque
// 🕍 synagogue
//  shinto shrine
// 🕋 kaaba
//  fountain
//  tent
// 🌁 foggy
// 🌃 night with stars
// 🌄 sunrise over mountains
// 🌅 sunrise
// 🌆 cityscape at dusk
// 🌇 sunset over buildings
// 🌉 bridge at night
//  hot springs
// 🌌 milky way
// 🎠 carousel horse
// 🎡 ferris wheel
// 🎢 roller coaster
// 💈 barber pole
// 🎪 circus tent
// 🎭 performing arts
// 🖼 frame with picture
// 🎨 artist palette
// 🎰 slot machine
// 🚂 steam locomotive
// 🚃 railway car
// 🚄 high-speed train
// 🚅 high-speed train with bullet nose
// 🚆 train
// 🚇 metro
// 🚈 light rail
// 🚉 station
// 🚊 tram
// 🚝 monorail
// 🚞 mountain railway
// 🚋 tram car
// 🚌 bus
// 🚍 oncoming bus
// 🚎 trolleybus
// 🚏 bus stop
// 🚐 minibus
// 🚑 ambulance
// 🚒 fire engine
// 🚓 police car
// 🚔 oncoming police car
// 🚕 taxi
// 🚖 oncoming taxi
// 🚗 automobile
// 🚘 oncoming automobile
// 🚙 recreational vehicle
// 🚚 delivery truck
// 🚛 articulated lorry
// 🚜 tractor
// 🚲 bicycle
//  fuel pump
// 🛣 motorway
// 🛤 railway track
// 🚨 police cars revolving light
// 🚥 horizontal traffic light
// 🚦 vertical traffic light
// 🚧 construction sign
//  anchor
//  sailboat
// 🚣 rowboat
// U+1F3FB 🚣🏻 rowboat, type-1-2
// U+1F3FC 🚣🏼 rowboat, type-3
// U+1F3FD 🚣🏽 rowboat, type-4
// U+1F3FE 🚣🏾 rowboat, type-5
// U+1F3FF 🚣🏿 rowboat, type-6
// 🚤 speedboat
// 🛳 passenger ship
//  ferry
// 🛥 motor boat
// 🚢 ship
//  airplane
// 🛩 small airplane
// 🛫 airplane departure
// 🛬 airplane arriving
// 💺 seat
// 🚁 helicopter
// 🚟 suspension railway
// 🚠 mountain cableway
// 🚡 aerial tramway
// 🚀 rocket
// 🛰 satellite
// 🛎 bellhop bell
// 🚪 door
// 🛌 sleeping accommodation
// 🛏 bed
// 🛋 couch and lamp
// 🚽 toilet
// 🚿 shower
// 🛀 bath
// U+1F3FB 🛀🏻 bath, type-1-2
// U+1F3FC 🛀🏼 bath, type-3
// U+1F3FD 🛀🏽 bath, type-4
// U+1F3FE 🛀🏾 bath, type-5
// U+1F3FF 🛀🏿 bath, type-6
// 🛁 bathtub
//  hourglass
//  hourglass with flowing sand
//  watch
//  alarm clock
//  stopwatch
//  timer clock
// 🕰 mantelpiece clock
// 🕛 clock face twelve oclock
// 🕧 clock face twelve-thirty
// 🕐 clock face one oclock
// 🕜 clock face one-thirty
// 🕑 clock face two oclock
// 🕝 clock face two-thirty
// 🕒 clock face three oclock
// 🕞 clock face three-thirty
// 🕓 clock face four oclock
// 🕟 clock face four-thirty
// 🕔 clock face five oclock
// 🕠 clock face five-thirty
// 🕕 clock face six oclock
// 🕡 clock face six-thirty
// 🕖 clock face seven oclock
// 🕢 clock face seven-thirty
// 🕗 clock face eight oclock
// 🕣 clock face eight-thirty
// 🕘 clock face nine oclock
// 🕤 clock face nine-thirty
// 🕙 clock face ten oclock
// 🕥 clock face ten-thirty
// 🕚 clock face eleven oclock
// 🕦 clock face eleven-thirty
// 🌑 new moon symbol
// 🌒 waxing crescent moon symbol
// 🌓 first quarter moon symbol
// 🌔 waxing gibbous moon symbol
// 🌕 full moon symbol
// 🌖 waning gibbous moon symbol
// 🌗 last quarter moon symbol
// 🌘 waning crescent moon symbol
// 🌙 crescent moon
// 🌚 new moon with face
// 🌛 first quarter moon with face
// 🌜 last quarter moon with face
// 🌡 thermometer
//  black sun with rays
// 🌝 full moon with face
// 🌞 sun with face
//  white medium star
// 🌟 glowing star
// 🌠 shooting star
//  cloud
//  sun behind cloud
//  thunder cloud and rain
// 🌤 white sun with small cloud
// 🌥 white sun behind cloud
// 🌦 white sun behind cloud with rain
// 🌧 cloud with rain
// 🌨 cloud with snow
// 🌩 cloud with lightning
// 🌪 cloud with tornado
// 🌫 fog
// 🌬 wind blowing face
// 🌀 cyclone
// 🌈 rainbow
// 🌂 closed umbrella
//  umbrella
//  umbrella with rain drops
//  umbrella on ground
//  high voltage sign
//  snowflake
//  snowman
//  snowman without snow
//  comet
// 🔥 fire
// 💧 droplet
// 🌊 water wave
// 🎃 jack-o-lantern
// 🎄 christmas tree
// 🎆 fireworks
// 🎇 firework sparkler
//  sparkles
// 🎈 balloon
// 🎉 party popper
// 🎊 confetti ball
// 🎋 tanabata tree
// 🎍 pine decoration
// 🎎 japanese dolls
// 🎏 carp streamer
// 🎐 wind chime
// 🎑 moon viewing ceremony
// 🎀 ribbon
// 🎁 wrapped present
// 🎗 reminder ribbon
// 🎟 admission tickets
// 🎫 ticket
// 🎖 military medal
// 🏆 trophy
// 🏅 sports medal
//  soccer ball
//  baseball
// 🏀 basketball and hoop
// 🏐 volleyball
// 🏈 american football
// 🏉 rugby football
// 🎾 tennis racquet and ball
// 🎱 billiards
// 🎳 bowling
// 🏏 cricket bat and ball
// 🏑 field hockey stick and ball
// 🏒 ice hockey stick and puck
// 🏓 table tennis paddle and ball
// 🏸 badminton racquet and shuttlecock
//  flag in hole
// 🏌 golfer
//  ice skate
// 🎣 fishing pole and fish
// 🎽 running shirt with sash
// 🎿 ski and ski boot
//  skier
// 🏂 snowboarder
// 🏄 surfer
// U+1F3FB 🏄🏻 surfer, type-1-2
// U+1F3FC 🏄🏼 surfer, type-3
// U+1F3FD 🏄🏽 surfer, type-4
// U+1F3FE 🏄🏾 surfer, type-5
// U+1F3FF 🏄🏿 surfer, type-6
// 🏇 horse racing
// 🏊 swimmer
// U+1F3FB 🏊🏻 swimmer, type-1-2
// U+1F3FC 🏊🏼 swimmer, type-3
// U+1F3FD 🏊🏽 swimmer, type-4
// U+1F3FE 🏊🏾 swimmer, type-5
// U+1F3FF 🏊🏿 swimmer, type-6
//  person with ball
// +1F3FB ⛹🏻 person with ball, type-1-2
// +1F3FC ⛹🏼 person with ball, type-3
// +1F3FD ⛹🏽 person with ball, type-4
// +1F3FE ⛹🏾 person with ball, type-5
// +1F3FF ⛹🏿 person with ball, type-6
// 🏋 weight lifter
// U+1F3FB 🏋🏻 weight lifter, type-1-2
// U+1F3FC 🏋🏼 weight lifter, type-3
// U+1F3FD 🏋🏽 weight lifter, type-4
// U+1F3FE 🏋🏾 weight lifter, type-5
// U+1F3FF 🏋🏿 weight lifter, type-6
// 🚴 bicyclist
// U+1F3FB 🚴🏻 bicyclist, type-1-2
// U+1F3FC 🚴🏼 bicyclist, type-3
// U+1F3FD 🚴🏽 bicyclist, type-4
// U+1F3FE 🚴🏾 bicyclist, type-5
// U+1F3FF 🚴🏿 bicyclist, type-6
// 🚵 mountain bicyclist
// U+1F3FB 🚵🏻 mountain bicyclist, type-1-2
// U+1F3FC 🚵🏼 mountain bicyclist, type-3
// U+1F3FD 🚵🏽 mountain bicyclist, type-4
// U+1F3FE 🚵🏾 mountain bicyclist, type-5
// U+1F3FF 🚵🏿 mountain bicyclist, type-6
// 🏎 racing car
// 🏍 racing motorcycle
// 🎯 direct hit
// 🎮 video game
// 🕹 joystick
// 🎲 game die
//  black spade suit
//  black heart suit
//  black diamond suit
//  black club suit
// 🃏 playing card black joker
// 🀄 mahjong tile red dragon
// 🎴 flower playing cards
// 🔇 speaker with cancellation stroke
// 🔈 speaker
// 🔉 speaker with one sound wave
// 🔊 speaker with three sound waves
// 📢 public address loudspeaker
// 📣 cheering megaphone
// 📯 postal horn
// 🔔 bell
// 🔕 bell with cancellation stroke
// 🎼 musical score
// 🎵 musical note
// 🎶 multiple musical notes
// 🎙 studio microphone
// 🎚 level slider
// 🎛 control knobs
// 🎤 microphone
// 🎧 headphone
// 📻 radio
// 🎷 saxophone
// 🎸 guitar
// 🎹 musical keyboard
// 🎺 trumpet
// 🎻 violin
// 📱 mobile phone
// 📲 mobile phone with rightwards arrow at left
//  black telephone
// 📞 telephone receiver
// 📟 pager
// 📠 fax machine
// 🔋 battery
// 🔌 electric plug
// 💻 personal computer
// 🖥 desktop computer
// 🖨 printer
//  keyboard
// 🖱 three button mouse
// 🖲 trackball
// 💽 minidisc
// 💾 floppy disk
// 💿 optical disc
// 📀 dvd
// 🎥 movie camera
// 🎞 film frames
// 📽 film projector
// 🎬 clapper board
// 📺 television
// 📷 camera
// 📸 camera with flash
// 📹 video camera
// 📼 videocassette
// 🔍 left-pointing magnifying glass
// 🔎 right-pointing magnifying glass
// 🔬 microscope
// 🔭 telescope
// 📡 satellite antenna
// 🕯 candle
// 💡 electric light bulb
// 🔦 electric torch
// 🏮 izakaya lantern
// 📔 notebook with decorative cover
// 📕 closed book
// 📖 open book
// 📗 green book
// 📘 blue book
// 📙 orange book
// 📚 books
// 📓 notebook
// 📒 ledger
// 📃 page with curl
// 📜 scroll
// 📄 page facing up
// 📰 newspaper
// 🗞 rolled-up newspaper
// 📑 bookmark tabs
// 🔖 bookmark
// 🏷 label
// 💰 money bag
// 💴 banknote with yen sign
// 💵 banknote with dollar sign
// 💶 banknote with euro sign
// 💷 banknote with pound sign
// 💸 money with wings
// 💳 credit card
// 💹 chart with upwards trend and yen sign
// 💱 currency exchange
// 💲 heavy dollar sign
//  envelope
// 📧 e-mail symbol
// 📨 incoming envelope
// 📩 envelope with downwards arrow above
// 📤 outbox tray
// 📥 inbox tray
// 📦 package
// 📫 closed mailbox with raised flag
// 📪 closed mailbox with lowered flag
// 📬 open mailbox with raised flag
// 📭 open mailbox with lowered flag
// 📮 postbox
// 🗳 ballot box with ballot
//  pencil
//  black nib
// 🖋 lower left fountain pen
// 🖊 lower left ballpoint pen
// 🖌 lower left paintbrush
// 🖍 lower left crayon
// 📝 memo
// 💼 briefcase
// 📁 file folder
// 📂 open file folder
// 🗂 card index dividers
// 📅 calendar
// 📆 tear-off calendar
// 🗒 spiral note pad
// 🗓 spiral calendar pad
// 📇 card index
// 📈 chart with upwards trend
// 📉 chart with downwards trend
// 📊 bar chart
// 📋 clipboard
// 📌 pushpin
// 📍 round pushpin
// 📎 paperclip
// 🖇 linked paperclips
// 📏 straight ruler
// 📐 triangular ruler
//  black scissors
// 🗃 card file box
// 🗄 file cabinet
// 🗑 wastebasket
// 🔒 lock
// 🔓 open lock
// 🔏 lock with ink pen
// 🔐 closed lock with key
// 🔑 key
// 🗝 old key
// 🔨 hammer
//  pick
//  hammer and pick
// 🛠 hammer and wrench
// 🗡 dagger knife
//  crossed swords
// 🔫 pistol
// 🏹 bow and arrow
// 🛡 shield
// 🔧 wrench
// 🔩 nut and bolt
//  gear
// 🗜 compression
//  alembic
//  scales
// 🔗 link symbol
//  chains
// 💉 syringe
// 💊 pill
// 🚬 smoking symbol
//  coffin
//  funeral urn
// 🗿 moyai
// 🛢 oil drum
// 🔮 crystal ball
// 🏧 automated teller machine
// 🚮 put litter in its place symbol
// 🚰 potable water symbol
//  wheelchair symbol
// 🚹 mens symbol
// 🚺 womens symbol
// 🚻 restroom
// 🚼 baby symbol
// 🚾 water closet
// 🛂 passport control
// 🛃 customs
// 🛄 baggage claim
// 🛅 left luggage
//  warning sign
// 🚸 children crossing
//  no entry
// 🚫 no entry sign
// 🚳 no bicycles
// 🚭 no smoking symbol
// 🚯 do not litter symbol
// 🚱 non-potable water symbol
// 🚷 no pedestrians
// 📵 no mobile phones
// 🔞 no one under eighteen symbol
//  radioactive sign
//  biohazard sign
//  upwards black arrow
//  north east arrow
//  black rightwards arrow
//  south east arrow
//  downwards black arrow
//  south west arrow
//  leftwards black arrow
//  north west arrow
//  up down arrow
//  left right arrow
//  leftwards arrow with hook
//  rightwards arrow with hook
//  arrow pointing rightwards then curving upwards
//  arrow pointing rightwards then curving downwards
// 🔃 clockwise downwards and upwards open circle arrows
// 🔄 anticlockwise downwards and upwards open circle arrows
// 🔙 back with leftwards arrow above
// 🔚 end with leftwards arrow above
// 🔛 on with exclamation mark with left right arrow above
// 🔜 soon with rightwards arrow above
// 🔝 top with upwards arrow above
// 🛐 place of worship
//  atom symbol
// 🕉 om symbol
//  star of david
//  wheel of dharma
//  yin yang
//  latin cross
//  orthodox cross
//  star and crescent
//  peace symbol
// 🕎 menorah with nine branches
// 🔯 six pointed star with middle dot
//  black universal recycling symbol
// 📛 name badge
//  fleur-de-lis
// 🔰 japanese symbol for beginner
// 🔱 trident emblem
//  heavy large circle
//  white heavy check mark
//  ballot box with check
//  heavy check mark
//  heavy multiplication x
//  cross mark
//  negative squared cross mark
//  heavy plus sign
//  heavy minus sign
//  heavy division sign
//  curly loop
//  double curly loop
//  part alternation mark
//  eight spoked asterisk
//  eight pointed black star
//  sparkle
//  double exclamation mark
//  exclamation question mark
//  black question mark ornament
//  white question mark ornament
//  white exclamation mark ornament
//  heavy exclamation mark symbol
//  wavy dash
//  copyright sign
//  registered sign
//  trade mark sign
//  aries
//  taurus
//  gemini
//  cancer
//  leo
//  virgo
//  libra
//  scorpius
//  sagittarius
//  capricorn
//  aquarius
//  pisces
//  ophiuchus
// 🔀 twisted rightwards arrows
// 🔁 clockwise rightwards and leftwards open circle arrows
// 🔂 clockwise rightwards and leftwards open circle arrows with circled one overlay
//  black right-pointing triangle
//  black right-pointing double triangle
//  black right-pointing double triangle with vertical bar
//  black right-pointing triangle with double vertical bar
//  black left-pointing triangle
//  black left-pointing double triangle
//  black left-pointing double triangle with vertical bar
// 🔼 up-pointing small red triangle
//  black up-pointing double triangle
// 🔽 down-pointing small red triangle
//  black down-pointing double triangle
//  double vertical bar
//  black square for stop
//  black circle for record
//  eject symbol
// 🎦 cinema
// 🔅 low brightness symbol
// 🔆 high brightness symbol
// 📶 antenna with bars
// 📳 vibration mode
// 📴 mobile phone off
// +20E3 #⃣ keycap number sign
// +20E3 *⃣ keycap asterisk
// +20E3 0⃣ keycap digit zero
// +20E3 1⃣ keycap digit one
// +20E3 2⃣ keycap digit two
// +20E3 3⃣ keycap digit three
// +20E3 4⃣ keycap digit four
// +20E3 5⃣ keycap digit five
// +20E3 6⃣ keycap digit six
// +20E3 7⃣ keycap digit seven
// +20E3 8⃣ keycap digit eight
// +20E3 9⃣ keycap digit nine
// 🔟 keycap ten
// 💯 hundred points symbol
// 🔠 input symbol for latin capital letters
// 🔡 input symbol for latin small letters
// 🔢 input symbol for numbers
// 🔣 input symbol for symbols
// 🔤 input symbol for latin letters
// 🅰 negative squared latin capital letter a
// 🆎 negative squared ab
// 🅱 negative squared latin capital letter b
// 🆑 squared cl
// 🆒 squared cool
// 🆓 squared free
//  information source
// 🆔 squared id
//  circled latin capital letter m
// 🆕 squared new
// 🆖 squared ng
// 🅾 negative squared latin capital letter o
// 🆗 squared ok
// 🅿 negative squared latin capital letter p
// 🆘 squared sos
// 🆙 squared up with exclamation mark
// 🆚 squared vs
// 🈁 squared katakana koko
// 🈂 squared katakana sa
// 🈷 squared cjk unified ideograph-6708
// 🈶 squared cjk unified ideograph-6709
// 🈯 squared cjk unified ideograph-6307
// 🉐 circled ideograph advantage
// 🈹 squared cjk unified ideograph-5272
// 🈚 squared cjk unified ideograph-7121
// 🈲 squared cjk unified ideograph-7981
// 🉑 circled ideograph accept
// 🈸 squared cjk unified ideograph-7533
// 🈴 squared cjk unified ideograph-5408
// 🈳 squared cjk unified ideograph-7a7a
//  circled ideograph congratulation
//  circled ideograph secret
// 🈺 squared cjk unified ideograph-55b6
// 🈵 squared cjk unified ideograph-6e80
//  black small square
//  white small square
//  white medium square
//  black medium square
//  white medium small square
//  black medium small square
//  black large square
//  white large square
// 🔶 large orange diamond
// 🔷 large blue diamond
// 🔸 small orange diamond
// 🔹 small blue diamond
// 🔺 up-pointing red triangle
// 🔻 down-pointing red triangle
// 💠 diamond shape with a dot inside
// 🔘 radio button
// 🔲 black square button
// 🔳 white square button
//  medium white circle
//  medium black circle
// 🔴 large red circle
// 🔵 large blue circle
// 🏁 chequered flag
// 🚩 triangular flag on post
// 🎌 crossed flags
// 🏴 waving black flag
// 🏳 waving white flag
// U+1F1E8 🇦🇨 flag for Ascension Island
// U+1F1E9 🇦🇩 flag for Andorra
// U+1F1EA 🇦🇪 flag for United Arab Emirates
// U+1F1EB 🇦🇫 flag for Afghanistan
// U+1F1EC 🇦🇬 flag for Antigua & Barbuda
// U+1F1EE 🇦🇮 flag for Anguilla
// U+1F1F1 🇦🇱 flag for Albania
// U+1F1F2 🇦🇲 flag for Armenia
// U+1F1F4 🇦🇴 flag for Angola
// U+1F1F6 🇦🇶 flag for Antarctica
// U+1F1F7 🇦🇷 flag for Argentina
// U+1F1F8 🇦🇸 flag for American Samoa
// U+1F1F9 🇦🇹 flag for Austria
// U+1F1FA 🇦🇺 flag for Australia
// U+1F1FC 🇦🇼 flag for Aruba
// U+1F1FD 🇦🇽 flag for Åland Islands
// U+1F1FF 🇦🇿 flag for Azerbaijan
// U+1F1E6 🇧🇦 flag for Bosnia & Herzegovina
// U+1F1E7 🇧🇧 flag for Barbados
// U+1F1E9 🇧🇩 flag for Bangladesh
// U+1F1EA 🇧🇪 flag for Belgium
// U+1F1EB 🇧🇫 flag for Burkina Faso
// U+1F1EC 🇧🇬 flag for Bulgaria
// U+1F1ED 🇧🇭 flag for Bahrain
// U+1F1EE 🇧🇮 flag for Burundi
// U+1F1EF 🇧🇯 flag for Benin
// U+1F1F1 🇧🇱 flag for St. Barthélemy
// U+1F1F2 🇧🇲 flag for Bermuda
// U+1F1F3 🇧🇳 flag for Brunei
// U+1F1F4 🇧🇴 flag for Bolivia
// U+1F1F6 🇧🇶 flag for Caribbean Netherlands
// U+1F1F7 🇧🇷 flag for Brazil
// U+1F1F8 🇧🇸 flag for Bahamas
// U+1F1F9 🇧🇹 flag for Bhutan
// U+1F1FB 🇧🇻 flag for Bouvet Island
// U+1F1FC 🇧🇼 flag for Botswana
// U+1F1FE 🇧🇾 flag for Belarus
// U+1F1FF 🇧🇿 flag for Belize
// U+1F1E6 🇨🇦 flag for Canada
// U+1F1E8 🇨🇨 flag for Cocos Islands
// U+1F1E9 🇨🇩 flag for Congo - Kinshasa
// U+1F1EB 🇨🇫 flag for Central African Republic
// U+1F1EC 🇨🇬 flag for Congo - Brazzaville
// U+1F1ED 🇨🇭 flag for Switzerland
// U+1F1EE 🇨🇮 flag for Côte d’Ivoire
// U+1F1F0 🇨🇰 flag for Cook Islands
// U+1F1F1 🇨🇱 flag for Chile
// U+1F1F2 🇨🇲 flag for Cameroon
// U+1F1F3 🇨🇳 flag for China
// U+1F1F4 🇨🇴 flag for Colombia
// U+1F1F5 🇨🇵 flag for Clipperton Island
// U+1F1F7 🇨🇷 flag for Costa Rica
// U+1F1FA 🇨🇺 flag for Cuba
// U+1F1FB 🇨🇻 flag for Cape Verde
// U+1F1FC 🇨🇼 flag for Curaçao
// U+1F1FD 🇨🇽 flag for Christmas Island
// U+1F1FE 🇨🇾 flag for Cyprus
// U+1F1FF 🇨🇿 flag for Czech Republic
// U+1F1EA 🇩🇪 flag for Germany
// U+1F1EC 🇩🇬 flag for Diego Garcia
// U+1F1EF 🇩🇯 flag for Djibouti
// U+1F1F0 🇩🇰 flag for Denmark
// U+1F1F2 🇩🇲 flag for Dominica
// U+1F1F4 🇩🇴 flag for Dominican Republic
// U+1F1FF 🇩🇿 flag for Algeria
// U+1F1E6 🇪🇦 flag for Ceuta & Melilla
// U+1F1E8 🇪🇨 flag for Ecuador
// U+1F1EA 🇪🇪 flag for Estonia
// U+1F1EC 🇪🇬 flag for Egypt
// U+1F1ED 🇪🇭 flag for Western Sahara
// U+1F1F7 🇪🇷 flag for Eritrea
// U+1F1F8 🇪🇸 flag for Spain
// U+1F1F9 🇪🇹 flag for Ethiopia
// U+1F1FA 🇪🇺 flag for European Union
// U+1F1EE 🇫🇮 flag for Finland
// U+1F1EF 🇫🇯 flag for Fiji
// U+1F1F0 🇫🇰 flag for Falkland Islands
// U+1F1F2 🇫🇲 flag for Micronesia
// U+1F1F4 🇫🇴 flag for Faroe Islands
// U+1F1F7 🇫🇷 flag for France
// U+1F1E6 🇬🇦 flag for Gabon
// U+1F1E7 🇬🇧 flag for United Kingdom
// U+1F1E9 🇬🇩 flag for Grenada
// U+1F1EA 🇬🇪 flag for Georgia
// U+1F1EB 🇬🇫 flag for French Guiana
// U+1F1EC 🇬🇬 flag for Guernsey
// U+1F1ED 🇬🇭 flag for Ghana
// U+1F1EE 🇬🇮 flag for Gibraltar
// U+1F1F1 🇬🇱 flag for Greenland
// U+1F1F2 🇬🇲 flag for Gambia
// U+1F1F3 🇬🇳 flag for Guinea
// U+1F1F5 🇬🇵 flag for Guadeloupe
// U+1F1F6 🇬🇶 flag for Equatorial Guinea
// U+1F1F7 🇬🇷 flag for Greece
// U+1F1F8 🇬🇸 flag for South Georgia & South Sandwich Islands
// U+1F1F9 🇬🇹 flag for Guatemala
// U+1F1FA 🇬🇺 flag for Guam
// U+1F1FC 🇬🇼 flag for Guinea-Bissau
// U+1F1FE 🇬🇾 flag for Guyana
// U+1F1F0 🇭🇰 flag for Hong Kong
// U+1F1F2 🇭🇲 flag for Heard & McDonald Islands
// U+1F1F3 🇭🇳 flag for Honduras
// U+1F1F7 🇭🇷 flag for Croatia
// U+1F1F9 🇭🇹 flag for Haiti
// U+1F1FA 🇭🇺 flag for Hungary
// U+1F1E8 🇮🇨 flag for Canary Islands
// U+1F1E9 🇮🇩 flag for Indonesia
// U+1F1EA 🇮🇪 flag for Ireland
// U+1F1F1 🇮🇱 flag for Israel
// U+1F1F2 🇮🇲 flag for Isle of Man
// U+1F1F3 🇮🇳 flag for India
// U+1F1F4 🇮🇴 flag for British Indian Ocean Territory
// U+1F1F6 🇮🇶 flag for Iraq
// U+1F1F7 🇮🇷 flag for Iran
// U+1F1F8 🇮🇸 flag for Iceland
// U+1F1F9 🇮🇹 flag for Italy
// U+1F1EA 🇯🇪 flag for Jersey
// U+1F1F2 🇯🇲 flag for Jamaica
// U+1F1F4 🇯🇴 flag for Jordan
// U+1F1F5 🇯🇵 flag for Japan
// U+1F1EA 🇰🇪 flag for Kenya
// U+1F1EC 🇰🇬 flag for Kyrgyzstan
// U+1F1ED 🇰🇭 flag for Cambodia
// U+1F1EE 🇰🇮 flag for Kiribati
// U+1F1F2 🇰🇲 flag for Comoros
// U+1F1F3 🇰🇳 flag for St. Kitts & Nevis
// U+1F1F5 🇰🇵 flag for North Korea
// U+1F1F7 🇰🇷 flag for South Korea
// U+1F1FC 🇰🇼 flag for Kuwait
// U+1F1FE 🇰🇾 flag for Cayman Islands
// U+1F1FF 🇰🇿 flag for Kazakhstan
// U+1F1E6 🇱🇦 flag for Laos
// U+1F1E7 🇱🇧 flag for Lebanon
// U+1F1E8 🇱🇨 flag for St. Lucia
// U+1F1EE 🇱🇮 flag for Liechtenstein
// U+1F1F0 🇱🇰 flag for Sri Lanka
// U+1F1F7 🇱🇷 flag for Liberia
// U+1F1F8 🇱🇸 flag for Lesotho
// U+1F1F9 🇱🇹 flag for Lithuania
// U+1F1FA 🇱🇺 flag for Luxembourg
// U+1F1FB 🇱🇻 flag for Latvia
// U+1F1FE 🇱🇾 flag for Libya
// U+1F1E6 🇲🇦 flag for Morocco
// U+1F1E8 🇲🇨 flag for Monaco
// U+1F1E9 🇲🇩 flag for Moldova
// U+1F1EA 🇲🇪 flag for Montenegro
// U+1F1EB 🇲🇫 flag for St. Martin
// U+1F1EC 🇲🇬 flag for Madagascar
// U+1F1ED 🇲🇭 flag for Marshall Islands
// U+1F1F0 🇲🇰 flag for Macedonia
// U+1F1F1 🇲🇱 flag for Mali
// U+1F1F2 🇲🇲 flag for Myanmar
// U+1F1F3 🇲🇳 flag for Mongolia
// U+1F1F4 🇲🇴 flag for Macau
// U+1F1F5 🇲🇵 flag for Northern Mariana Islands
// U+1F1F6 🇲🇶 flag for Martinique
// U+1F1F7 🇲🇷 flag for Mauritania
// U+1F1F8 🇲🇸 flag for Montserrat
// U+1F1F9 🇲🇹 flag for Malta
// U+1F1FA 🇲🇺 flag for Mauritius
// U+1F1FB 🇲🇻 flag for Maldives
// U+1F1FC 🇲🇼 flag for Malawi
// U+1F1FD 🇲🇽 flag for Mexico
// U+1F1FE 🇲🇾 flag for Malaysia
// U+1F1FF 🇲🇿 flag for Mozambique
// U+1F1E6 🇳🇦 flag for Namibia
// U+1F1E8 🇳🇨 flag for New Caledonia
// U+1F1EA 🇳🇪 flag for Niger
// U+1F1EB 🇳🇫 flag for Norfolk Island
// U+1F1EC 🇳🇬 flag for Nigeria
// U+1F1EE 🇳🇮 flag for Nicaragua
// U+1F1F1 🇳🇱 flag for Netherlands
// U+1F1F4 🇳🇴 flag for Norway
// U+1F1F5 🇳🇵 flag for Nepal
// U+1F1F7 🇳🇷 flag for Nauru
// U+1F1FA 🇳🇺 flag for Niue
// U+1F1FF 🇳🇿 flag for New Zealand
// U+1F1F2 🇴🇲 flag for Oman
// U+1F1E6 🇵🇦 flag for Panama
// U+1F1EA 🇵🇪 flag for Peru
// U+1F1EB 🇵🇫 flag for French Polynesia
// U+1F1EC 🇵🇬 flag for Papua New Guinea
// U+1F1ED 🇵🇭 flag for Philippines
// U+1F1F0 🇵🇰 flag for Pakistan
// U+1F1F1 🇵🇱 flag for Poland
// U+1F1F2 🇵🇲 flag for St. Pierre & Miquelon
// U+1F1F3 🇵🇳 flag for Pitcairn Islands
// U+1F1F7 🇵🇷 flag for Puerto Rico
// U+1F1F8 🇵🇸 flag for Palestinian Territories
// U+1F1F9 🇵🇹 flag for Portugal
// U+1F1FC 🇵🇼 flag for Palau
// U+1F1FE 🇵🇾 flag for Paraguay
// U+1F1E6 🇶🇦 flag for Qatar
// U+1F1EA 🇷🇪 flag for Réunion
// U+1F1F4 🇷🇴 flag for Romania
// U+1F1F8 🇷🇸 flag for Serbia
// U+1F1FA 🇷🇺 flag for Russia
// U+1F1FC 🇷🇼 flag for Rwanda
// U+1F1E6 🇸🇦 flag for Saudi Arabia
// U+1F1E7 🇸🇧 flag for Solomon Islands
// U+1F1E8 🇸🇨 flag for Seychelles
// U+1F1E9 🇸🇩 flag for Sudan
// U+1F1EA 🇸🇪 flag for Sweden
// U+1F1EC 🇸🇬 flag for Singapore
// U+1F1ED 🇸🇭 flag for St. Helena
// U+1F1EE 🇸🇮 flag for Slovenia
// U+1F1EF 🇸🇯 flag for Svalbard & Jan Mayen
// U+1F1F0 🇸🇰 flag for Slovakia
// U+1F1F1 🇸🇱 flag for Sierra Leone
// U+1F1F2 🇸🇲 flag for San Marino
// U+1F1F3 🇸🇳 flag for Senegal
// U+1F1F4 🇸🇴 flag for Somalia
// U+1F1F7 🇸🇷 flag for Suriname
// U+1F1F8 🇸🇸 flag for South Sudan
// U+1F1F9 🇸🇹 flag for São Tomé & Príncipe
// U+1F1FB 🇸🇻 flag for El Salvador
// U+1F1FD 🇸🇽 flag for Sint Maarten
// U+1F1FE 🇸🇾 flag for Syria
// U+1F1FF 🇸🇿 flag for Swaziland
// U+1F1E6 🇹🇦 flag for Tristan da Cunha
// U+1F1E8 🇹🇨 flag for Turks & Caicos Islands
// U+1F1E9 🇹🇩 flag for Chad
// U+1F1EB 🇹🇫 flag for French Southern Territories
// U+1F1EC 🇹🇬 flag for Togo
// U+1F1ED 🇹🇭 flag for Thailand
// U+1F1EF 🇹🇯 flag for Tajikistan
// U+1F1F0 🇹🇰 flag for Tokelau
// U+1F1F1 🇹🇱 flag for Timor-Leste
// U+1F1F2 🇹🇲 flag for Turkmenistan
// U+1F1F3 🇹🇳 flag for Tunisia
// U+1F1F4 🇹🇴 flag for Tonga
// U+1F1F7 🇹🇷 flag for Turkey
// U+1F1F9 🇹🇹 flag for Trinidad & Tobago
// U+1F1FB 🇹🇻 flag for Tuvalu
// U+1F1FC 🇹🇼 flag for Taiwan
// U+1F1FF 🇹🇿 flag for Tanzania
// U+1F1E6 🇺🇦 flag for Ukraine
// U+1F1EC 🇺🇬 flag for Uganda
// U+1F1F2 🇺🇲 flag for U.S. Outlying Islands
// U+1F1F8 🇺🇸 flag for United States
// U+1F1FE 🇺🇾 flag for Uruguay
// U+1F1FF 🇺🇿 flag for Uzbekistan
// U+1F1E6 🇻🇦 flag for Vatican City
// U+1F1E8 🇻🇨 flag for St. Vincent & Grenadines
// U+1F1EA 🇻🇪 flag for Venezuela
// U+1F1EC 🇻🇬 flag for British Virgin Islands
// U+1F1EE 🇻🇮 flag for U.S. Virgin Islands
// U+1F1F3 🇻🇳 flag for Vietnam
// U+1F1FA 🇻🇺 flag for Vanuatu
// U+1F1EB 🇼🇫 flag for Wallis & Futuna
// U+1F1F8 🇼🇸 flag for Samoa
// U+1F1F0 🇽🇰 flag for Kosovo
// U+1F1EA 🇾🇪 flag for Yemen
// U+1F1F9 🇾🇹 flag for Mayotte
// U+1F1E6 🇿🇦 flag for South Africa
// U+1F1F2 🇿🇲 flag for Zambia

// asdsssssasndvasjdHVAKJSH,DVjh,sadvlj,haSVDJ,havsd,hASVD.HKasd.has


