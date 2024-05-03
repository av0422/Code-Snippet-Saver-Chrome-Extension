// Creating a context menu item for deleting snippets
chrome.contextMenus.create({
  title: 'Delete Snippet',
  contexts: ['selection'],
  id: 'deleteSnippet'
});

// Adding an event listener for context menu clicks
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "deleteSnippet") {

    // Informing the content script to delete the selected snippet
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'deleteSnippet' });
    });
  }
});
