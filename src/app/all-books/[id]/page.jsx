import React from "react";

const BookDetailsPage = async ({params}) => {

    const {id} = await params;
    const res = await fetch('https://boi-nei.vercel.app/data.json');
    const books = await res.json();

    const book = books.find(b => b.id == id);

    return(
        <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <img src={book.image_url} alt={book.title} />
            <p>{book.description}</p>
        </div>
    )
}

export default BookDetailsPage;