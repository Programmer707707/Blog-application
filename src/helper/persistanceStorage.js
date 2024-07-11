//i created these methods to make my work easier and more understandable

export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)); // when we get the data using key from localstorage we use JSON.parse()
  } catch (err) {
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data)); // when we set the data we change the data to String using JSON.stringfy()
  } catch {
    return null;
  }
};
