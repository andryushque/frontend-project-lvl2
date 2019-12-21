import fs from 'fs';
import path from 'path';
import gendiff from '../src';

test('gendiff json test - Tree format', () => {
  const filePathBeforeJSON = path.join(__dirname, '/__fixtures__/before.json');
  const filePathAfterJSON = path.join(__dirname, '/__fixtures__/after.json');

  const received = gendiff(filePathBeforeJSON, filePathAfterJSON, 'tree');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/treeDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff yml test  - Tree format', () => {
  const filePathBeforeYML = path.join(__dirname, '/__fixtures__/before.yml');
  const filePathAfterYML = path.join(__dirname, '/__fixtures__/after.yml');

  const received = gendiff(filePathBeforeYML, filePathAfterYML, 'tree');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/treeDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff ini test - Tree format', () => {
  const filePathBeforeINI = path.join(__dirname, '/__fixtures__/before.ini');
  const filePathAfterINI = path.join(__dirname, '/__fixtures__/after.ini');

  const received = gendiff(filePathBeforeINI, filePathAfterINI, 'tree');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/treeDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff json test - Plain format', () => {
  const filePathBeforeJSON = path.join(__dirname, '/__fixtures__/before.json');
  const filePathAfterJSON = path.join(__dirname, '/__fixtures__/after.json');

  const received = gendiff(filePathBeforeJSON, filePathAfterJSON, 'plain');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/plainDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff yml test - Plain format', () => {
  const filePathBeforeYML = path.join(__dirname, '/__fixtures__/before.yml');
  const filePathAfterYML = path.join(__dirname, '/__fixtures__/after.yml');

  const received = gendiff(filePathBeforeYML, filePathAfterYML, 'plain');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/plainDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff ini test - Plain format', () => {
  const filePathBeforeINI = path.join(__dirname, '/__fixtures__/before.ini');
  const filePathAfterINI = path.join(__dirname, '/__fixtures__/after.ini');

  const received = gendiff(filePathBeforeINI, filePathAfterINI, 'plain');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/plainDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff json test - JSON format', () => {
  const filePathBeforeJSON = path.join(__dirname, '/__fixtures__/before.json');
  const filePathAfterJSON = path.join(__dirname, '/__fixtures__/after.json');

  const received = gendiff(filePathBeforeJSON, filePathAfterJSON, 'json');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/jsonDifference.txt'), 'utf8').replace(/\r?\n/g, '');
  expect(received).toEqual(expected);
});

test('gendiff yml test  - JSON format', () => {
  const filePathBeforeYML = path.join(__dirname, '/__fixtures__/before.yml');
  const filePathAfterYML = path.join(__dirname, '/__fixtures__/after.yml');

  const received = gendiff(filePathBeforeYML, filePathAfterYML, 'json');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/jsonDifference.txt'), 'utf8').replace(/\r?\n/g, '');
  expect(received).toEqual(expected);
});

test('gendiff ini test - JSON format', () => {
  const filePathBeforeINI = path.join(__dirname, '/__fixtures__/before.ini');
  const filePathAfterINI = path.join(__dirname, '/__fixtures__/after.ini');

  const received = gendiff(filePathBeforeINI, filePathAfterINI, 'json');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/jsonDifference.txt'), 'utf8').replace(/\r?\n/g, '');
  expect(received).toEqual(expected);
});
