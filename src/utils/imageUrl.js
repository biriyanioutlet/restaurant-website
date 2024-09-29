const getBaseUrl = () => {
  // eslint-disable-next-line no-undef
  return process.env.PUBLIC_URL || '';
};

/**
 * This utility function takes a relative URL path and adds the base URL to it.
 * @param {string} url - The relative URL to which the base URL will be added.
 * @returns {string} - The complete URL.
 */
export const addBaseUrl = (url) => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}${url}`;
};
