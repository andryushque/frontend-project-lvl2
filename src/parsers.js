import YAML from 'js-yaml';
import INI from 'ini';
import path from 'path';
import fs from 'fs';

const parsers = {
  '.json': (file) => JSON.parse(file),
  '.yml': (file) => YAML.safeLoad(file),
  '.ini': (file) => INI.parse(file),
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
