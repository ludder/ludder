#! /usr/bin/env node

const boxen = require("boxen");
const { bold, cyan } = require("chalk").default;

const lines = [
  bold("Tom Greuter"),
  "Freelance Web Developer",
  "",
  bold("       Web: ") + cyan("https://tomgreuter.nl"),
  bold("      Blog: ") + cyan("https://tomgreuter.nl/tech"),
  bold("    GitHub: ") + cyan("https://github.com/ludder"),
  bold("  LinkedIn: ") + cyan("https://linkedin.com/in/tomgreuter")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "cyan",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
