export const getFileNameFromUrl = (url) => {
  return url.substring(url.lastIndexOf("/") + 1);
};
