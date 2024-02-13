process.stdout.write('hello from spinner1.js... \rheyyy\n');

let rotations = 2;
let timer = 100;
while (rotations > 0) {
  setTimeout(() => process.stdout.write(`\r|   `), timer);
  timer += 200;
  setTimeout(() => process.stdout.write(`\r/   `), timer);
  timer += 200;
  setTimeout(() => process.stdout.write(`\r-   `), timer);
  timer += 200;
  setTimeout(() => process.stdout.write(`\r\\   `), timer);
  timer += 200;
  rotations -= 1;
}
