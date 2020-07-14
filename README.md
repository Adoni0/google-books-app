# google-books-app

This is a new React-based Google Books Search app. This app utilizes React components, helper/util functions, and React lifecycle methods to query and display books based on user searches. Iv'e used Node, Express and MongoDB so that users can save books to review or purchase later.

This application has 2 pages, check out the following mockup gifs for each page:


Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

![](Search-page-gif.gif)


Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

![](Save-page.gif)