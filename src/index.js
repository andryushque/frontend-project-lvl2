import _ from 'lodash';
import fs from 'fs';

const parse = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

const gendiff = (filePath1, filePath2) => {
  const file1 = parse(filePath1);
  const file2 = parse(filePath2);

  const reduceFunc1 = (acc, key) => {
    if (_.has(file1, key) === true) {
      if (file1[key] === file2[key]) {
        return [`\n   ${key}: ${file1[key]}`, ...acc];
      }
      return [`\n + ${key}: ${file2[key]}`, `\n - ${key}: ${file1[key]}`, ...acc];
    }
    return [...acc, `\n + ${key}: ${file2[key]}`];
  };

  const result1 = Object.keys(file2).reduce(reduceFunc1, []);

  const reduceFunc2 = (acc, key) => {
    if (_.has(file2, key) === false) {
      return [...acc, `\n - ${key}: ${file1[key]}`];
    }
    return acc;
  };

  const result2 = Object.keys(file1).reduce(reduceFunc2, result1);

  return ['{', ...result2, '\n}'].join('');
};

export default gendiff;
