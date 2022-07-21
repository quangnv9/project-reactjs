import { Option } from './constants';

// const keyMaps = {
//   id: 'value',
//   name: 'label',
// };

export const formatArr = (arr: Option[], keyMaps: any) => {
  const result: any[] = arr.map((item) => renameKeys(keyMaps, item));
  return result;
};

let renameKeys = (keysMap: any, object: any) => {
  const result = Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: object[key] },
    }),
    {}
  );
  return result;
};
