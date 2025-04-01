import fs from 'node:fs/promises';
import path from 'node:path';

const TEST_FILE_CONTENTS = `
import { sum } from '../src/sum';

describe('#{TEST_ID}.test.ts', () => {
  test('should return 3 when 1 and 2 are passed', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('should return -1 when -1 and 0 are passed', () => {
    expect(sum(-1, 0)).toBe(-1);
  });

  test('should return 0 when 0 and 0 are passed', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
`;

async function main() {
  const testFilesCount = process.argv[2] ? parseInt(process.argv[2], 10) : 1000;

  const promises: Promise<unknown>[] = [];

  for (let i = 1; i <= testFilesCount; i++) {
    const paddedI = String(i).padStart(3, '0');
    const testFileName = path.resolve(__dirname, `../tests/${paddedI}.test.ts`);
    const testFileContents = TEST_FILE_CONTENTS.replace(/#{TEST_ID}/g, `${i}`);
    promises.push(fs.writeFile(testFileName, testFileContents));
  }
  await Promise.all(promises);
  console.log(`Created ${testFilesCount} test files.`);
}

void main();
