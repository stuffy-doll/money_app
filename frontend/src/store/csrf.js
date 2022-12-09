import Cookies from 'js-cookie';

export const csrfFetch = async (url, options = {}) => {
  // Set options.method to 'GET' if there isn't a method
  options.method = options.method || 'GET';
  // Set options.headers to an empty object if there aren't any headers
  options.headers = options.headers || {};
  /*
  If options.method is not 'GET', then set the 'Content-Type' header to 'application/json',
  and set the 'XSRF-TOKEN' header to the value of the 'XSRF-TOKEN' cookie.
  */
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] =
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
  };
  // Call the default window's fetch with the url and the options passed in
  const res = await window.fetch(url, options);
  /*
  If the response status code is 400 or above, then throw an error with the error
  being in the response.
  */
  if (res.status >= 400) throw res;
  /*
  If the response status code is under 400, then return the response to the next
  promise chain.
  */
  return res;
};

// To get the 'XSRF-TOKEN' cookie. Should only be used in development.
export function restoreCSRF() {
  return csrfFetch('/api/csrf/restore');
};
