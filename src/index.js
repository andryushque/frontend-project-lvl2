import _ from 'lodash';
import fs from 'fs';

const parse = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

const gendiff = (filePath1, filePath2) => {
  const file1 = parse(filePath1);
  const file2 = parse(filePath2);

  const fileKeys = _.union(Object.keys(file1), Object.keys(file2));

  const reduceFunc = (acc, key) => {
    if (_.has(file1, key) === true && _.has(file2, key) === true) {
      if (file1[key] === file2[key]) {
        return `${acc}\r\n    ${key}: ${file1[key]}`;
      }
      return `${acc}\r\n  + ${key}: ${file2[key]}\r\n  - ${key}: ${file1[key]}`;
    }

    if (_.has(file1, key) === false) {
      return `${acc}\r\n  + ${key}: ${file2[key]}`;
    }
    return `${acc}\r\n  - ${key}: ${file1[key]}`;
  };

  const result = fileKeys.reduce(reduceFunc, '');
  return `{${result}\r\n}\r\n`;
};

export default gendiff;
