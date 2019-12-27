import renderTree from './renderTree';
import renderPlain from './renderPlain';
import renderJson from './renderJson';

const renderFormats = {
  tree: renderTree,
  plain: renderPlain,
  json: renderJson,
};

export default (data, format) => renderFormats[format](data);
