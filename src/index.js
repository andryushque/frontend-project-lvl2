import fs from 'fs';
import path from 'path';
import parseData from './parsers';
import buildAST from './buildAST';
import getRender from './formatters';

const getData = (filePath) => fs.readFileSync(filePath, 'utf8');
const getExt = (filePath) => path.extname(filePath);
const gendiff = (filePathBefore, filePathAfter, format = 'tree') => {
  const dataBefore = getData(filePathBefore);
  const dataAfter = getData(filePathAfter);
  const extBefore = getExt(filePathBefore);
  const extAfter = getExt(filePathAfter);
  const objBefore = parseData(dataBefore, extBefore);
  const objAfter = parseData(dataAfter, extAfter);
  const ast = buildAST(objBefore, objAfter);
  const result = getRender(ast, format);
  return result;
};

export default gendiff;
