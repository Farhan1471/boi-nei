import BookCard from "@/components/BookCard";
import Category from "@/components/Category";
import React from "react";


const AllBooksPage = async ({searchParams}) => {
    const {category} = await searchParams;

    const res = await fetch('https://boi-nei.vercel.app/data.json');
    const books = await res.json();

     const filteredBooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) : books

    return(
        <div className="grid grid-cols-5 gap-5 mt-8">  
            <div>
                <Category activeCategory={category} />
            </div>

            <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    )
}

export default AllBooksPage;