const getLocalStorageItem = <T>(key: string) => {
  const value = localStorage.getItem(key);
  const json = JSON.parse(value) as T;
  return json;
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  const toJson = JSON.stringify(value);
  localStorage.setItem(key, toJson);
};

export { getLocalStorageItem, setLocalStorageItem };
