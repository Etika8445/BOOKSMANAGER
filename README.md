# Personal Bookshelf

A React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technology Stack](#technology-stack)

## Features

- **Book Search**: Real-time search for books using the Open Library API.
- **Personal Bookshelf**: Add books from search results to a personal bookshelf.
- **LocalStorage**: Persist the user's bookshelf in the browser's local storage.
- **Responsive Design**: Optimized for various screen sizes.

## Demo

You can view a live demo of the application [here](#).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a web browser (Chrome, Firefox, Safari, etc.)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/personal-bookshelf.git

2. Navigate to the project directory
   ```bash
   cd personal-bookshelf

3. Install the dependencies
   ```bash
   npm install

## Running the Application

To run the application locally, follow these steps:

1.  Start the development server
    ```bash
    npm run dev
    
2.  Open your web browser and navigate to http://localhost:5173.

## Usage

**Book Search Page**
- Type a book's name in the search input field to get real-time search results.
- Browse through the list of search results displayed as cards.
- Click the "Add to Bookshelf" button on a card to add the book to your personal bookshelf.

**Personal Bookshelf Page**
-Click on the "My Bookshelf" button to navigate to your personal bookshelf page.
-View the books you have added.
-Your bookshelf is stored in localStorage, so it persists across page reloads and browser sessions.

## Technology Stack

- **React:** Front-end library for building user interfaces
- **Open Library API:** Used for fetching book data
- **localStorage:** Web Storage API for persisting user data
- **CSS:** For styling the components
