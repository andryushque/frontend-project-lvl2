import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const dataFormats = ['json', 'yml', 'ini'];
const testDirectory = path.join(__dirname, '/__fixtures__/');
const getData = (fileName) => fs.readFileSync(`${testDirectory}${fileName}`, 'utf-8').replace(/\r/g, '');

test.each(dataFormats)('gendiff test - tree format (default)', (dataFormat) => {
  const received = gendiff(`${testDirectory}/before.${dataFormat}`, `${testDirectory}/after.${dataFormat}`, 'tree');
  const expected = getData('treeDifference.txt');
  expect(received).toEqual(expected);
});

test.each(dataFormats)('gendiff test - plain format', (dataFormat) => {
  const received = gendiff(`${testDirectory}/before.${dataFormat}`, `${testDirectory}/after.${dataFormat}`, 'plain');
  const expected = getData('plainDifference.txt');
  expect(received).toEqual(expected);
});

test.each(dataFormats)('gendiff test - json format', (dataFormat) => {
  const received = gendiff(`${testDirectory}/before.${dataFormat}`, `${testDirectory}/after.${dataFormat}`, 'json');
  const expected = getData('jsonDifference.txt').replace(/\n/g, '');
  expect(received).toEqual(expected);
});
