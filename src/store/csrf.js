import Cookies from 'js-cookie'

export async function fetch(url, options = {}) {
  console.log('CSRF POINT 1')
  options.method = options.method || 'GET';
  options.headers = options.headers || {};
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] =
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
  }
  console.log('CSRF POINT 2')

  const res = await window.fetch(url, options);

  const contentType = res.headers.get('content-type');
  console.log("THIS IS THE CONTENT TYPE:", contentType)
  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    res.data = data;
  }

  if (res.status >= 400) throw res;
  return res;
}

export function restoreCSRF() {
  return fetch('/api/csrf/restore');
}