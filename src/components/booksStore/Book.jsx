/* eslint-disable react/prop-types */
import './Book.css'
const Book = ({book}) => {
    console.log(book);
    const {name, price}= book
    
    return (
        <div className="book">
            <h4>Book Name: {name} </h4>
            <h5>Book Price: {price} </h5>
        </div>
    );
};

export default Book;