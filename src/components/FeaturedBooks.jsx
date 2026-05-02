import React from "react";
import BookCard from "./BookCard";

const FeaturedBooks = async () => {

    const res = await fetch('https://boi-nei.vercel.app/data.json');
    const books = await res.json();
    const topBooks = books.slice(0, 4);

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {topBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    ) 
}

export default FeaturedBooks;