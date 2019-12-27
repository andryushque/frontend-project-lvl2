import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const fileExtensions = ['.json', '.yml', '.ini'];
const testDirectory = path.join(__dirname, '/__fixtures__/');
const getPathToFile = (fileName, fileExt = '') => path.join(testDirectory, `${fileName}${fileExt}`);
const getData = (fileName) => fs.readFileSync(getPathToFile(fileName), 'utf-8');

test.each(fileExtensions)('gendiff test - tree format (default)', (fileExt) => {
  const received = gendiff(getPathToFile('before', fileExt), getPathToFile('after', fileExt));
  const expected = getData('treeDifference.txt');
  expect(received).toEqual(expected);
});

test.each(fileExtensions)('gendiff test - plain format', (fileExt) => {
  const received = gendiff(getPathToFile('before', fileExt), getPathToFile('after', fileExt), 'plain');
  const expected = getData('plainDifference.txt');
  expect(received).toEqual(expected);
});

test.each(fileExtensions)('gendiff test - json format', (fileExt) => {
  const received = gendiff(getPathToFile('before', fileExt), getPathToFile('after', fileExt), 'json');
  const expected = getData('jsonDifference.txt');
  expect(received).toEqual(expected);
});
