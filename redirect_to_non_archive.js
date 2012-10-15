var matcher = /\/archive\/index.php\/t-/;
var token = "#redirecting"

if (matcher.test(window.location.href) && window.location.href.indexOf(token) == -1) {
  var url = window.location.href.replace(matcher, '/showthread.php?t=').replace(/\.html/, '');
  window.location.href = token;
  chrome.extension.sendRequest({ redirect: url });
}
