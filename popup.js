// popup.js

document.addEventListener('DOMContentLoaded', function() {
  var codeTextarea = document.getElementById('codeTextarea');
  var snippetNameInput = document.getElementById('snippetName');
  var saveSnippetButton = document.getElementById('saveSnippet');
  var snippetList = document.getElementById('snippetList');
  var clearTextareaButton = document.getElementById('clearTextarea');

  // Load saved snippets from storage
  chrome.storage.sync.get('snippets', function(result) {
    var savedSnippets = result.snippets || [];
    displaySnippets(savedSnippets);
  });

  // Clear text area
  clearTextareaButton.addEventListener('click', function() {
    codeTextarea.value = '';
    snippetNameInput.value = '';
  });


  // Save a new code snippet
  saveSnippetButton.addEventListener('click', function() {
    var code = codeTextarea.value.trim();
    var snippetName = snippetNameInput.value.trim();

    if (code && snippetName) {
      // Retrieve existing snippets from storage
      chrome.storage.sync.get('snippets', function(result) {
        var savedSnippets = result.snippets || [];

        // Add the new snippet
        savedSnippets.push({ name: snippetName, code: code });

        // Save the updated snippets to storage
        chrome.storage.sync.set({ 'snippets': savedSnippets });

        // Display the updated list of snippets
        displaySnippets(savedSnippets);

        // Clear the input fields
        codeTextarea.value = '';
        snippetNameInput.value = '';
      });
    }
  });

  // Display the list of saved snippets
  function displaySnippets(snippets) {
    snippetList.innerHTML = ''; // Clear existing list

    snippets.forEach(function(snippet, index) {
      var listItem = document.createElement('li');
      listItem.className = 'snippetItem';

      // Display the snippet name
      var nameSpan = document.createElement('span');
      nameSpan.textContent = snippet.name;
      listItem.appendChild(nameSpan);

      // Add a button to delete the snippet
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        // Remove the selected snippet from the list
        snippets.splice(index, 1);
        // Save the updated snippets to storage
        chrome.storage.sync.set({ 'snippets': snippets });
        // Display the updated list of snippets
        displaySnippets(snippets);
      });
      listItem.appendChild(deleteButton);


      // Add a click event to load the snippet into the textarea
      listItem.addEventListener('click', function() {
        codeTextarea.value = snippet.code;
        snippetNameInput.value = snippet.name;
      });

      snippetList.appendChild(listItem);
    });
  }
});

