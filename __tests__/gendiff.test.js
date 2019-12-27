import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const fileExtensions = ['.json', '.yml', '.ini'];
const outputFormats = ['tree', 'plain', 'json'];
const testDirectory = path.join(__dirname, '/__fixtures__/');
const getPathToFile = (fileName, fileExt = '') => path.join(testDirectory, `${fileName}${fileExt}`);
const getData = (fileName) => fs.readFileSync(getPathToFile(fileName), 'utf-8');

test.each(outputFormats)('gendiff test, output formats: tree (default), plain and json', (outputFormat) => {
  fileExtensions.forEach((fileExt) => {
    const received = gendiff(getPathToFile('before', fileExt), getPathToFile('after', fileExt), outputFormat);
    const expected = getData(`${outputFormat}Difference.txt`);
    expect(received).toEqual(expected);
  });
});
