import fs from 'fs';
import path from 'path';
import gendiff from '../src';

test('gendiff test', () => {
  const filePath1 = path.join(__dirname, '/__fixtures__/before.json');
  const filePath2 = path.join(__dirname, '/__fixtures__/after.json');
  const received = gendiff(filePath1, filePath2);
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/jsonDifference.txt'), 'utf8');
  expect(received).toEqual(expected);
});
