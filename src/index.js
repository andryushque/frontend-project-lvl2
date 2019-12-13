import _ from 'lodash';
import parseFile from './parsers';

const gendiff = (filePathBefore, filePathAfter) => {
  const file1 = parseFile(filePathBefore);
  const file2 = parseFile(filePathAfter);
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);

  const fileKeys = _.union(keys1, keys2);

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
