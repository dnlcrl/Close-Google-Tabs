function stringStartsWith (string, prefix) {
  return string.slice(0, prefix.length) == prefix;
}

function close_all_tabs(){
  chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        //collect all of the urls here, I will just log them instead
        if (/google/.test(tab.url) && /search?/.test(tab.url)) 
          {
            console.log(tab.url)
            chrome.tabs.remove(tab.id, function() { });
          };
      });
    });
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
   // No tabs or host permissions needed!
   close_all_tabs();
});