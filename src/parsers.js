import YAML from 'js-yaml';
import INI from 'ini';

const parsers = {
  json: JSON.parse,
  yml: YAML.safeLoad,
  ini: INI.parse,
};

const parseData = (data, type) => parsers[type](data);

export default parseData;
