import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Your Week in One Line — entry runner.
// Reads entry.txt at runtime, validates the 1-100 character gate,
// and writes the single line to MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: same input always produces the same output.
// Overnight, nineteen small bets went out the door.
// The scoreboard kept the biggest number for itself.
// A plot twist only counts if the ending changes hands.
// This runner only carries the line; it never rewrites it.

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const text = readFileSync(entryPath, "utf8");
const length = [...text].length;

if (length < 1 || length > 100 || text.trim().length === 0) {
  console.error(
    `entry.txt must be 1-100 non-whitespace characters, got ${length}`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
