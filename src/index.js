import path from 'path';
import parseFile from './parsers';
import buildAST from './buildAST';
import getRenderFormat from './formatters';

const gendiff = (filePathBefore, filePathAfter, format = 'tree') => {
  if (path.extname(filePathBefore) !== path.extname(filePathAfter)) {
    throw new Error('Please, use files with the same extension!');
  }
  const fileBefore = parseFile(filePathBefore);
  const fileAfter = parseFile(filePathAfter);
  const ast = buildAST(fileBefore, fileAfter);
  const renderFormat = getRenderFormat(format);
  const result = renderFormat(ast);
  return result;
};

export default gendiff;
