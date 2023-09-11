const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const pickupLinesByCategory = {
  funny: [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Are you Siri? Because you autocomplete me.",
    "Are you a charger? Because I'm dying without you.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Wanna be Minecraft without the craft?",
    "Are you lighnting? Because you're McQueen.",
    "Is there an airport nearby or is that my heart taking off?",
    "Are you a loan? You've got my interest.",
    "If you were a triangle you'd be acute one.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a campfire? Because you're hot and I want s'more.",
    "Is your dad a boxer? Because you're a knockout!",
    "How can I plan our wedding without having your number?",
    "Are you a keyboard? Because you might just be my type.",
    "You know, I'm actually terrible at flirting. How about you try to pick me up instead?",
  ],
  romantic: [
    "All the good pick up lines are taken but you aren't.",
    "This must be a museum because you're a work of art.",
    "I'm lost. Can you give me directions to your heart?",
    "Well, here I am. What are your other two wishes?",
    "Hey, how was heaven when you left it?",
    "Are you a time traveler? Because I can see you in my future.",
    "Are you French? Because Eiffel for you.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your name Wi-Fi? Because I'm really feeling a connection.",
    "Do you have a name, or can I call you mine?",
    "Is your name Google? Because you have everything I've been searching for.",
  ],
  smooth: [
    "4+4=8 but you+me=fate",
    "Are you tired? You've been running through my mind all day.",
    "What's your favorite drink? I'm asking so I know what to buy you when we go on our first date.",
    "I should complain to Spotify for not making you this week's hottest single.",
    "Do you play soccer? Because you're a keeper.",
    "You look so familiar…did we have class together? I could've sworn we had chemistry.",
    "I'm learning about important dates in history, wanna be one of them?",
    "They say dating is a numbers game, so can I get yours?",
    "When I text you good morning tomorrow, what number should I text?",
    "Hi, my name is [your name], but you can call me tomorrow.",
    "Can I show your profile to my friends to prove that angels really do exist?",
  ],
  clever: [
    "123456789. The only number I don't see here is yours.",
    "Do you have Instagram? My parents always told me to follow my dreams.",
    "Are you an artist? You're really good at drawing me in.",
    "Angels should be in heaven. How'd you escape?",
    "If you and I were socks, we'd make a great pair.",
    "Well, here I am! What are your other two wishes?",
    "What is it like to be the most gorgeous person in this room?",
    "If you were words on a page, you'd be fine print.",
    "You must be a talented thief because you managed to steal my heart from all the way over here.",
  ],
  cute: [
    "They say nothing lasts forever. Want to be my nothing?",
    "Anyone who says Disney is the happiest place on earth has never stood next to you.",
    "Are you a time traveler? Because I can see you in my future.",
    "I'm not a photographer but I can picture you and me together.",
    "Are you French? Because Eiffel for you.",
    "Guess what I'm wearing? The smile you gave me.",
    "Are your parents bakers? Because you're a cutie pie.",
    "I had a good pickup line ready to go, but you're so good-looking I'm literally speechless.",
    "I think there's something wrong with my phone. Could you call it and see if it works?",
    "Did the sun come out, or did you just smile at me?",
    "Would you mind giving me a pinch? You're so cute, I must be dreaming.",
    "You are so fine , i forgot the pickup line.",
  ],
  cheesy: [
    "If I could rearrange the alphabet, I'd put U and I together.",
    "What do you call a string of people lifting a mozzarella cheese? A cheesy pickup line.",
    "Are your shoelaces tied? I don't want you falling for anyone else.",
    "Are you a parking ticket? Because you've got 'fine' written all over you.",
    "On a scale of 1 to 10, you're a 9…because I'm the 1 you need.",
    "Do you believe in love at first sight or should I walk by again?",
    "I'm not very good at math but I can give you the value you deserve.",
    "I'm no electrician but I can light up your day.",
    "Are you Google? You have everything I search for.",
    "Want a raisin? No? How about a date?",
    "Are you from Tennessee? Because you're the only 10 I see.",
    "Want to go outside and get some fresh air with me? You just took my breath away.",
    "I can't tell if that was an earthquake, or if you just seriously rocked my world.",
    "Do you know what the Little Mermaid and I have in common? We both want to be part of your world.",
  ],
  flirty: [
    "I have a phone number, you have a phone number—think of the possibilities.",
    "I've got all these forks and knives all I need is a little spoon.",
    "Your hand looks heavy, can I hold it for you?",
    "I always thought happiness started with an 'H' but it looks like it starts with 'U.'",
    "Did you just come out of an oven? Because you're too hot to handle.",
    "I think we've met before. Actually, never mind—I think it was just in my dreams.",
    "I bet my number sounds nicer than yours. Wanna hear it?",
    "Trust me, I'm not drunk—I'm just intoxicated by you.",
  ],
  corny: [
    "I hope someone knows how to do CPR because you just took my breath away.",
    "You're looking a little sick, you must be suffering from lack of Vitamin Me.",
    "Are you a WiFi router? Because I'm feeling a connection.",
    "Do you have a Band-Aid? I scraped my knees falling for you.",
    "If you were a transformer you'd be Optimus Fine.",
    "Let's play a game…not hide and seek though, people like you are hard to find.",
    "Do you like Star Wars? Because Yoda one for me.",
    "I never believed in love at first sight, then I saw you.",
    "It's a good thing I have my library card, because I am totally checking you out.",
    "If being beautiful was a crime, you'd be guilty as charged.",
    "My mom told me not to talk to strangers, but I'll make an exception for you.",
    "I'm really glad I just bought life insurance because when I saw you, my heart stopped.",
    "If you were a vegetable, you'd be a cute-cumber.",
  ],
};

// Sample data source (you can replace this with a database)
// const pickupLinesByCategory = {
//   funny: ["Line 1", "Line 2", "Line 3"],
//   romantic: ["Line 4", "Line 5", "Line 6"],
// };

// Define a route to get a random pickup line by category
app.get("/api/pickup-line/:category", (req, res) => {
  const { category } = req.params;
  const lines = pickupLinesByCategory[category] || [];
  const randomLine = lines[Math.floor(Math.random() * lines.length)];

  res.json({ pickupLine: randomLine });
});
app.get("/api/pickup-lines/:category", (req, res) => {
  const { category } = req.params;
  const lines = pickupLinesByCategory[category] || [];

  res.json({ pickupLine: lines });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
