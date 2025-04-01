# Jest を無駄に jsdom 環境で実行した場合どれくらい遅くなるのか

`testEnvironment: 'node'` で問題ないテストを `testEnvironment: 'jsdom'` で実行した場合、どれくらい遅くなるのか気になったので。


## セットアップ

`[test-files-count]` には生成するテストファイルの数を指定。デフォルトは 1000。

```sh
npm i 
npm run generate-tests -- [test-files-count]
```

生成されるテストファイルの中身

```ts
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
```


## 実行

```sh
npm run test:node
npm run test:jsdom
```

## 結果

君の目で確かめよう！！！！！！！！！！！！！！！！！！！！！！！！！！！(投げやり)