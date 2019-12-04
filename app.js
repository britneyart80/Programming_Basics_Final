const funFacts = [
  "You can buy eel flavored ice cream in Japan.",
  "It's considered rude to write in red ink in Portugal.",
  "Bobcats are the most common wildcat in North America.",
  "A cat's tail contains nearly 10 percent of all the bones in its body.",
  "The calcium in our bones and the iron in our blood come from ancient explosions of giant stars.",
  "The Nile crocodile can hold its breath for up to 2 hours while waiting for prey.",
  "Jellyfish are not fish. They have no brain, no heart, and no bones.",
  "The Chinese giant salamander can grow to be 6 feet long, making it the largest salamander in the world.",
  "People reportedly prefer blue toothbrushes over red ones.",
  "Some people used to believe that kissing a donkey could relieve a toothache.",
  "Because the speed of earth's rotation changes over time, a day in the age of dinosaurs was 23 hours long.",
  "Hummingbird's wings can beat up to 200 times per second.",
  "There are more than 1200 water parks in North America!",
  "A seahorse can move its eyes in opposite directions.",
  "To cook an egg, a sidewalk needs to be 158 degrees Farenheit.",
  "It would take 100 Earths lined up end-to-end to stretch across the face of the sun.",
  "Corn is grown on every continent except Antarctica.",
  "You lose about 50 - 100 hairs a day.",
  "'Armadillo' is a spanish word meaning 'little armored one'.",
  "All apes laugh when they are tickled.",
  "The quills on African porcupines are as long as three pencils."
]

const compliments = [
  "I bet you make babies smile.",
  "If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now.",
  "I bet you sweat glitter!",
  "Jokes are funnier when you tell them :')",
  "You're more fun than a ball pit filled with candy.",
  "How do you keep being so funny and making everyone laugh?",
  "Your kindness is a balm to all who encounter it.",
  "Your insides are even more beautiful than your outside.",
  "You're so thoughtful.",
  "You could survive a zombie apocalypse.",
  "You're a smart cookie.",
  "You're a great example to others.",
  "Hanging out with you is always fun.",
  "The people you love are lucky to have you in their lives.",
  "You're a gift to those around you.",
  "Your hair looks stunning.",
  "Has anyone ever told you that you have great posture?",
  "On a scale from 1 to 10, you're an 11.",
  "You're better than a triple-scoop ice cream cone. With sprinkles.",
  "If you were a box of crayons, you'd be the big industrial name-brand one with a built-in sharpener.",
  "You're even better than a unicorn because you're real."
]

const showerThoughts = [
  "The brain named itself and declared itself the most important part of the body.",
  "You are naturally gifted at something that hasn't been invented yet.",
  "Wifi is a tap, cellular data is a water bottle.",
  "A mosh pit is technically just a human Beyblade arena.",
  "Astronauts are the ultimate combo of nerd and jock.",
  "People are named Timothy, Timmy and Tim. Then there's Jimmy and Jim, but no Jimothy *cries*.",
  "You can't look at a word or a number without reading it.",
  "Granola and yogurt is slow motion cereal.",
  "Relationships are expensive ways of finding how someone dislikes you with time.",
  "It's a shame that dreams aren't multiplayer.",
  "You always notice your first hiccup, but you rarely notice your last.",
  "The word 'quiet' is often said aloud.",
  "Submarines in the sea are human fish tanks.",
  "Whenever you learn the definition of a word, you seem to see it way more often.",
  "Lemonade is made out of lemons, but Gatorade doesn't even have a little bit of gator in it.",
  "Clapping is a single player high five.",
  "If you drop a piece of bread, there's a reasonable chance you and someone else on the other side of the earth have just made a globe sandwich.",
  "Atom and atom repel from each other, so technically you're levitating when standing, at a molecular level.",
  "You've had to pee since well before you woke up this morning.",
  "Lowercase 'bed' looks like a bed.",
  "You are the engine of your bicycle."
  ]


$(document).ready(function () {

  $("body").mousemove(function (event) {
    const x = event.pageX
    const y = event.pageY

    const div = document.createElement("div")
    $(div).addClass("sparkle")
    $("body").append(div)
    $(div)
    .css("position", "absolute")
    .css("top", y)
    .css("left", x)

    setTimeout(function() {
      $(div)
      .remove()
    }, 1000)
  })

  $("#compliment-btn").on("click", function () {
    const random = Math.floor(Math.random() * compliments.length)
    $("#message").text(compliments[random])
    $("#message-header").text("Here's a compliment!")
    confetti.start();
    setTimeout(function() {
      confetti.stop();
    }, 3000);
  })

  $("#shower-btn").on("click", function () {
    const random = Math.floor(Math.random() * compliments.length)
    $("#message").text(showerThoughts[random])
    $("#message-header").text("Here's a shower thought!")
    confetti.start();
    setTimeout(function() {
      confetti.stop();
    }, 3000);
  })

  $("#fact-btn").on("click", function () {
    const random = Math.floor(Math.random() * compliments.length)
    $("#message").text(funFacts[random])
    $("#message-header").text("Here's a fun fact!")
    confetti.start();
    setTimeout(function() {
      confetti.stop();
    }, 3000);
  })
})

// document.getElementByClassName("close").addEventListener("click", confetti.stop());
