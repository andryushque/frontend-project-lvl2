import parseFile from './parsers';
import buildAST from './buildAST';
import getRender from './formatters';

const gendiff = (filePathBefore, filePathAfter, format = 'tree') => {
  const obj1 = parseFile(filePathBefore);
  const obj2 = parseFile(filePathAfter);
  const ast = buildAST(obj1, obj2);
  const result = getRender(format)(ast);
  return result;
};

export default gendiff;
