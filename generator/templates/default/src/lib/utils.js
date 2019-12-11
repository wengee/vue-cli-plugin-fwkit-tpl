const utils = {};

utils.escapeHtml = (str) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return `${str}`.replace(/[&<>"']/g, m => map[m]);
};


utils.nl2br = (str, escape = true) => {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }

  let originStr = str;
  if (escape) {
    originStr = utils.escapeHtml(originStr);
  }

  return `${originStr}`.replace(/(\r\n|\n\r|\r|\n)/g, '<br>$1');
};

utils.parseQuery = (queryString) => {
  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};

utils.isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod', 'Nokia'];
  let flag = true;
  for (let i = 0; i < Agents.length; i += 1) {
    if (userAgentInfo.indexOf(Agents[i]) >= 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

export default utils;
