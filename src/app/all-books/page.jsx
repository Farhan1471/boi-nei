import BookCard from "@/components/BookCard";
import LeftSidebar from "@/components/LeftSidebar";
import React from "react";


const AllBooksPage = async () => {

    const res = await fetch('https://boi-nei.vercel.app/data.json');
    const books = await res.json();

    const response  = await fetch('https://boi-nei.vercel.app/category.json');
    const categories = await response.json();
    // console.log(categories)

    return(
        <div>
            <LeftSidebar categories={categories} activeId={"1"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    )
}

export default AllBooksPage;