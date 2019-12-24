import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const fileExtensions = ['json', 'yml', 'ini'];
const testDirectory = path.join(__dirname, '/__fixtures__/');
const getPathToFileBefore = (fileExtension) => path.join(testDirectory, `before.${fileExtension}`);
const getPathToFileAfter = (fileExtension) => path.join(testDirectory, `after.${fileExtension}`);
const getData = (fileName) => fs.readFileSync(path.join(testDirectory, fileName), 'utf-8').replace(/\r/g, '');

test.each(fileExtensions)('gendiff test - tree format (default)', (fileExtension) => {
  const received = gendiff(getPathToFileBefore(fileExtension), getPathToFileAfter(fileExtension));
  const expected = getData('treeDifference.txt');
  expect(received).toEqual(expected);
});

test.each(fileExtensions)('gendiff test - plain format', (fileExtension) => {
  const received = gendiff(getPathToFileBefore(fileExtension), getPathToFileAfter(fileExtension), 'plain');
  const expected = getData('plainDifference.txt');
  expect(received).toEqual(expected);
});

test.each(fileExtensions)('gendiff test - json format', (fileExtension) => {
  const received = gendiff(getPathToFileBefore(fileExtension), getPathToFileAfter(fileExtension), 'json');
  const expected = getData('jsonDifference.txt').trim();
  expect(received).toEqual(expected);
});
