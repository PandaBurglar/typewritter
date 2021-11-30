const sentence = "hello there from lighthouse labs\n";

let delay = 0;
let increment = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write (char); // more control and avoid automatically adding an extra "newline character" at the end each time.
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.  
  delay += increment;
};