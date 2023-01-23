chrome.action.onClicked.addListener(function(tab) {    
    try {
        chrome.scripting.executeScript({
          target: {
            tabId: tab.id,
          },
          files: ["script.js"]
        });
      } catch (err) {
        console.error(`failed to execute script: ${err}`);
      }
});