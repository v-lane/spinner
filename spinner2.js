let timerIcons = ['|   ', '/   ', '-   ', '\\   '];
let rotations = 2;
let timer = 100;
while (rotations > 0) {
  for (const icon of timerIcons) {
    setTimeout(() => process.stdout.write(`\r ${icon}`), timer);
    timer += 200;
  }
  rotations -= 1;
}
setTimeout(() => console.log(),timer);