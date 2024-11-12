const jokes = [
  "Why was the cat sitting on the computer? Because it wanted to keep an eye on the mouse!",
  "Why do cats always get their way? Because they are purr-suasive!",
  "What's a cat's favorite color? Purr-ple!",
  "Why was the cat so good at video games? Because it had nine lives!",
  "What's a cat's favorite movie? The Sound of Mew-sic!",
  "Why did the cat join the Red Cross? It wanted to be a first aid kit!",
  "What do you call a pile of cats? A meow-tain!",
  "Why don't cats play poker in the jungle? Too many cheetahs!",
  "What's a cat's favorite dessert? Mice cream!",
  "How do cats end a fight? They hiss and make up!",
];

export const getJokes = (req, res) => {
  res.status(200).json({
    jokes,
  });
};
