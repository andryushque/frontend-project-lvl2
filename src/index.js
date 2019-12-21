import parseFile from './parsers';
import buildAST from './buildAST';
import renderTree from './formatters/renderTree';
import renderPlain from './formatters/renderPlain';

const renderFormats = {
  tree: renderTree,
  plain: renderPlain,
};

const getRenderFormat = (format) => renderFormats[format];

const gendiff = (filePathBefore, filePathAfter, format = 'tree') => {
  const fileBefore = parseFile(filePathBefore);
  const fileAfter = parseFile(filePathAfter);
  const ast = buildAST(fileBefore, fileAfter);
  const renderFormat = getRenderFormat(format);
  const result = renderFormat(ast);
  return result;
};

export default gendiff;
