import YAML from 'js-yaml';
import INI from 'ini';

const parsers = {
  json: JSON.parse,
  yml: YAML.safeLoad,
  ini: INI.parse,
};

const getParser = (ext) => parsers[ext];
const parseData = (data, ext) => {
  const parse = getParser(ext);
  const result = parse(data);
  return result;
};

export default parseData;
