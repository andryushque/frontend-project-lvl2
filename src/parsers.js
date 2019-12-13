import { safeLoad } from 'js-yaml';
import path from 'path';
import fs from 'fs';

const parsers = {
  '.json': (file) => JSON.parse(file),
  '.yml': (file) => safeLoad(file),
  '.yaml': (file) => safeLoad(file),
};

const parseFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  const fileExt = path.extname(filePath);

  const getParser = (format) => parsers[format];
  const parse = getParser(fileExt);
  const parsedData = parse(data);
  return parsedData;
};

export default parseFile;
