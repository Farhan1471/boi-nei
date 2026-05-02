import BookCard from "@/components/BookCard";
import React from "react";


const AllBooksPage = async () => {

    const res = await fetch('https://boi-nei.vercel.app/data.json');
    const books = await res.json();

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
    )
}

export default AllBooksPage;