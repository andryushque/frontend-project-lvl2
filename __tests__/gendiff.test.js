import fs from 'fs';
import path from 'path';
import gendiff from '../src';

test('gendiff tree json test', () => {
  const filePathBeforeJSON = path.join(__dirname, '/__fixtures__/before.json');
  const filePathAfterJSON = path.join(__dirname, '/__fixtures__/after.json');

  const received = gendiff(filePathBeforeJSON, filePathAfterJSON, 'tree');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/treeDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff tree yml test', () => {
  const filePathBeforeYML = path.join(__dirname, '/__fixtures__/before.yml');
  const filePathAfterYML = path.join(__dirname, '/__fixtures__/after.yml');

  const received = gendiff(filePathBeforeYML, filePathAfterYML, 'tree');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/treeDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff tree ini test', () => {
  const filePathBeforeINI = path.join(__dirname, '/__fixtures__/before.ini');
  const filePathAfterINI = path.join(__dirname, '/__fixtures__/after.ini');

  const received = gendiff(filePathBeforeINI, filePathAfterINI, 'tree');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/treeDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff plain json test', () => {
  const filePathBeforeJSON = path.join(__dirname, '/__fixtures__/before.json');
  const filePathAfterJSON = path.join(__dirname, '/__fixtures__/after.json');

  const received = gendiff(filePathBeforeJSON, filePathAfterJSON, 'plain');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/plainDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff plain yml test', () => {
  const filePathBeforeYML = path.join(__dirname, '/__fixtures__/before.yml');
  const filePathAfterYML = path.join(__dirname, '/__fixtures__/after.yml');

  const received = gendiff(filePathBeforeYML, filePathAfterYML, 'plain');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/plainDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});

test('gendiff plain ini test', () => {
  const filePathBeforeINI = path.join(__dirname, '/__fixtures__/before.ini');
  const filePathAfterINI = path.join(__dirname, '/__fixtures__/after.ini');

  const received = gendiff(filePathBeforeINI, filePathAfterINI, 'plain');
  const expected = fs.readFileSync(path.join(__dirname, '/__fixtures__/plainDifference.txt'), 'utf8').replace(/\r/g, '');
  expect(received).toEqual(expected);
});
