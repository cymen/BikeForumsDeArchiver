var matcher = /\/archive\/index.php\/t-/;
var token = "#redirecting";

var getPageNumber = function(url) {
  // http://www.bikeforums.net/archive/index.php/t-769181-p-33.html
  var matches = url.match(/p-([0-9]+)+\.html$/)
  if (matches) {
    return matches[matches.length-1];
  }
}

if (matcher.test(window.location.href) && window.location.href.indexOf(token) == -1) {
  var url = window.location.href
    .replace(matcher, '/showthread.php/')
    .replace(/\.html/, '')
    .replace(/-p-[0-9]+/, '');
  var pageNumber = getPageNumber(window.location.href);
  if (pageNumber) {
    url += '/page' + pageNumber;
  }

  window.location.href = token;
  chrome.extension.sendRequest({ redirect: url });
}
