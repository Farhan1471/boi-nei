"use client";

import BookCard from "@/components/BookCard";
import Category from "@/components/Category";
import SearchBook from "@/components/SearchBook";
import React, { useEffect, useState } from "react";


const AllBooksPage = ({searchParams}) => {

    const params = React.use(searchParams);
        if (!params) {
            return <div>Loading...</div>;
        }
    const category = params.category || null;

    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://farhans-boi-nei.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    let filteredBooks = books;
    
    if (category) {
        filteredBooks = books.filter(
            (book) => book.category.toLowerCase() === category.toLowerCase()
        );
    }

    let booksToShow = filteredBooks;
    if (searchTerm) {
        booksToShow = filteredBooks.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }

    function handleSearch() {
        setSearchTerm(searchValue);
    }

    return (
        <div className="container mx-auto mt-8">
            <SearchBook
                value={searchValue}
                onInputChange={handleInputChange}
                onSearch={handleSearch}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-5 mt-8">
                <div>
                    <Category activeCategory={category} />
                </div>

                <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {booksToShow.length > 0 ? (
                        booksToShow.map((book) => <BookCard key={book.id} book={book} />)
                    ) : searchTerm ? (
                        <div className="text-gray-500 mt-2">No results found.</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;