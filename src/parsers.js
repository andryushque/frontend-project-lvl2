import YAML from 'js-yaml';
import INI from 'ini';

const parsers = {
  json: JSON.parse,
  yml: YAML.safeLoad,
  ini: INI.parse,
};

const parseData = (data, type) => {
  const parse = parsers[type];
  const result = parse(data);
  return result;
};

export default parseData;
