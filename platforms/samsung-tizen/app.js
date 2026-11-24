(function(){'use strict';
  var address='https://life.orosapp.us/?platform=tizen&intro=0&rs=720&fps=30&aa=0&tvbuild=013';
  function openSite(){window.location.replace(address);}
  document.getElementById('retry').addEventListener('click',openSite);
  document.addEventListener('keydown',function(e){if(e.keyCode===13)openSite();});
  setTimeout(openSite,100);
})();
