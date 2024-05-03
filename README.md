# Code Snippet Saver Chrome Extension
### Video Demo:  <https://www.youtube.com/watch?v=2M_f5Mm1KHo>
## Description:
My project provides a seamless way to manage and organize your frequently used code snippets directly within the Chrome browser.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Design Choices](#design-choices)
- [Usage Examples](#usage-examples)


### Getting Started
After installation, click on the Code Snippet Saver icon in the Chrome toolbar to open the popup interface. Here, you can enter, save, and manage your code snippets with ease.

### Features

#### 1. Save with Names
Give your code snippets meaningful names for easy identification and quick retrieval.

#### 2. Visualizing Snippets

Visual representation of saved snippets within the popup interface, providing an at-a-glance view of your code library.

#### 3. Deleting Unwanted Snippets

Effortlessly remove snippets you no longer need, streamlining your code library.

#### 4. Clearing Text Area

Clear the text area with one click rather than erasing it the traditional way.

### File Structure

- **manifest.json**: Configuration file that defines the extension's properties and permissions.
- **popup.html**: HTML file defining the structure of the popup interface.
- **popup.js**: JavaScript file handling the logic and functionality of the popup.
- **popup.css**: Styling file to enhance the visual appeal of the popup.
- **background.js**: Script running in the background, managing extension-level operations.

### Technologies Used

- **HTML, CSS, JavaScript**: Foundation for the extension's frontend, providing a user-friendly interface.
- **Chrome Extension API**: Enabling seamless integration and functionality within the Chrome browser.

### Design Choices

The decision to use a popup interface was made to ensure quick access and a non-intrusive user experience. By keeping the design simple, we aim to provide a lightweight solution for managing code snippets without disrupting your workflow.

### Usage Examples

#### Saving a Code Snippet

1. Open the Code Snippet Saver popup.
2. Enter your code snippet in the provided textarea.
3. Give your snippet a descriptive name in the "Snippet Name" input field.
4. Click "Save Snippet" to store your code.

#### Deleting a Code Snippet

1. Open the Code Snippet Saver popup.
2. Click on the snippet you want to delete.
3. Click the "Delete" button to remove the snippet from your library.

#### Clearing Text Area

1. Open the Code Snippet popup.
2. Click on the "Clear Text area button" to remove text and start anew.