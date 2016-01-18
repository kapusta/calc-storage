(function(s) {

  // http://stackoverflow.com/questions/2848462/count-bytes-in-textarea-using-javascript/12206089#12206089
  var getUTF8Length = function(s) {
    var len = 0;
    for (var i = 0; i < s.length; i++) {
      var code = s.charCodeAt(i);
      if (code <= 0x7f) {
        len += 1;
      } else if (code <= 0x7ff) {
        len += 2;
      } else if (code >= 0xd800 && code <= 0xdfff) {
        len += 4; i++;
      } else if (code < 0xffff) {
        len += 3;
      } else {
        len += 4;
      }
    }
    return len;
  };


  var l = 0;
  Object.keys(s).forEach(function(key, idx, arr) {
    l += getUTF8Length(s[key]);
  });
  console.log(Math.ceil(l/1024) + " kb");
}(window.sessionStorage));
