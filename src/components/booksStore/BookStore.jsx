/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Book from "./Book";
const BookStore = ({book_data}) => {
    
    return (
        <div>
            <h1>Show Book Component {book_data.length} </h1>
            {book_data.map(book=><Book book={book}></Book>)}
        </div>
    );
};

export default BookStore;