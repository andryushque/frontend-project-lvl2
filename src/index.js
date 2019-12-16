import parseFile from './parsers';
import buildAST from './buildAST';
import render from './render';

const gendiff = (filePathBefore, filePathAfter) => {
  const fileBefore = parseFile(filePathBefore);
  const fileAfter = parseFile(filePathAfter);
  const ast = buildAST(fileBefore, fileAfter);
  const result = render(ast);
  return result;
};

export default gendiff;
