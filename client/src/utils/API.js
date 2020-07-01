import axios from "axios";
//GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes

export default {
  // Gets all books
  getBooks: function() {
    return axios.get('api/books');
  },
  getGoogle: function(q){
    return axios.get('api/google', {
      params: { q: q }
 });
  },
  viewGoogle: function(id){
    return axios.get('api/google', {
      body: id
    })
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
