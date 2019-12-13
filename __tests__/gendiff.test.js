import fs from 'fs';
import path from 'path';
import gendiff from '../src';

test('gendiff json test', () => {
  const filePathBeforeJSON = path.join(__dirname, '/__fixtures__/before.json');
  const filePathAfterJSON = path.join(__dirname, '/__fixtures__/after.json');

  const received = gendiff(filePathBeforeJSON, filePathAfterJSON);
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/difference.txt'), 'utf8');
  expect(received).toEqual(expected);
});

test('gendiff yml test', () => {
  const filePathBeforeYML = path.join(__dirname, '/__fixtures__/before.yml');
  const filePathAfterYML = path.join(__dirname, '/__fixtures__/after.yml');

  const received = gendiff(filePathBeforeYML, filePathAfterYML);
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/difference.txt'), 'utf8');
  expect(received).toEqual(expected);
});
