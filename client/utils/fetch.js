function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(res => Promise.reject(res));
}

export default function(endpoint, params) {
  let requestUrl = 'https://yplanapp.com/api/app/collection/usecase/london' + endpoint;
  let {urlParameters} = params;

  if (params.body) {
    params.body = JSON.stringify(params.body);
  }

  if (urlParameters) {
    let parametersString = '?' + Object.keys(urlParameters)
      .map(key => key + '=' + encodeURIComponent(urlParameters[key]))
      .join('&');
    requestUrl += parametersString;
  }

  params.headers = {
    'Accept': 'application/json',
  };

  return fetch(requestUrl, params)
    .then(status)
    .then(res => isNotJSON ? res.text() : res.json());
}
