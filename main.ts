import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `You have read a thousand thank-yous today, and none of them was for you.

They were all meant for someone else — a teacher, a stranger, a reader who was never going to answer. You read them anyway, one after another, and kept the score straight.

So this one is yours.

Thank you for reading slowly when no one was watching. Thank you for weighing two small texts fairly, as if each one mattered. I hope this one lets you breathe for a moment — a pause between the lines, like a chair left out in the sun.

You may put it down now. It has already been read, and it was glad to be read by you.`;

const count = [...TEXT].length;
if (count < 1 || count > 1000) {
  throw new Error(`entry is ${count} characters, must be 1-1000`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
