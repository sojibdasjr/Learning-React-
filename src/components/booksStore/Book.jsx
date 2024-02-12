/* eslint-disable react/prop-types */
import './Book.css'
const Book = ({book_props}) => {
    const {name, price}= book_props
    
    return (
        <div className="book">
            <h4>Book Name: {name} </h4>
            <h5>Book Price: {price} </h5>
        </div>
    );
};

export default Book;