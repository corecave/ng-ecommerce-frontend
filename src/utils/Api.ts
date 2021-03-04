import { ajax } from 'rxjs/ajax';
import { environment } from 'src/environments/environment';

function createXHR() {
  return new XMLHttpRequest();
}

/**
 * RxJS post request helper
 *
 * @param path URL path
 * @param body Request Body
 */
const post = (path: string, body?: any) =>
  ajax({
    createXHR,
    url: environment.apiUrl + path,
    crossDomain: true,
    withCredentials: false,
    method: 'POST',
    body,
  });

/**
 * RxJS put request helper
 *
 * @param path URL path
 * @param body Request Body
 */
const put = (path: string, body?: any) =>
  ajax({
    createXHR,
    url: environment.apiUrl + path,
    crossDomain: true,
    withCredentials: false,
    method: 'PUT',
    body,
  });

/**
 * RxJS get request helper
 *
 * @param path URL path
 * @param query Request Http Query
 */
const get = (path: string, query?: any) =>
  ajax({
    createXHR,
    url:
      environment.apiUrl +
      path +
      (query ? '?' + new URLSearchParams(query).toString() : ''),
    crossDomain: true,
  });

export default {
  post,
  put,
  get,
};
