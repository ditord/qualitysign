// Function to toggle the embed code text field visibility
function toggleEmbedCode() {
    var embedCodeField1 = document.getElementById('embedCodeField1');
    if (embedCodeField.style.display === 'none' || !embedCodeField.style.display) {
      embedCodeField.style.display = 'block';
    } else {
      embedCodeField.style.display = 'none';
    }
  }
  
  // Function to copy the embed code to the clipboard
  function copyEmbedCode() {
    var embedCodeTextarea = document.getElementById('embedCodeTextarea');
    embedCodeTextarea.select(); // Selects the content of the textarea
    document.execCommand('copy'); // Copies the selected text to the clipboard
  
    // Optional: Show a message confirming that the text was copied
    alert('Embed code copied to clipboard.');
  }



// Function to toggle the visibility of a specific embed code text field
function toggleEmbedCode(fieldId) {
    var embedCodeField = document.getElementById(fieldId);
    if (embedCodeField.style.display === 'none' || !embedCodeField.style.display) {
      embedCodeField.style.display = 'block';
    } else {
      embedCodeField.style.display = 'none';
    }
  }
  
  // Function to copy the embed code from a specific textarea to the clipboard
  function copyEmbedCode(textareaId) {
    var embedCodeTextarea = document.getElementById(textareaId);
    embedCodeTextarea.select(); // Selects the content of the textarea
    document.execCommand('copy'); // Copies the selected text to the clipboard
  
    // Optional: Show a message confirming that the text was copied
    alert('Embed code copied to clipboard.');
  }
  

