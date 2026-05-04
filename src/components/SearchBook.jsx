'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';

export default function Search() {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);

    useEffect(() => {
        fetch('https://boi-nei.vercel.app/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                setBooks(data);
            });
    }, []);

    useEffect(() => {
        if (!search) {
            setSearchedBooks([]);
            return;
        }
        setSearchedBooks(
            books.filter(book =>
                book.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, books]);

    const handleSearch = () => {
        setSearch(inputValue);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className='relative flex flex-1 shrink-0 w-full max-w-md'>
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Search books..."
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={handleSearch}
                    type="button"
                >
                    Search
                </button>
            </div>

            <div className="mt-4 w-full max-w-md">
                {searchedBooks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {searchedBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : search ? (
                    <div className="text-gray-500 mt-2">No results found.</div>
                ) : null}
            </div>
        </div>
    );
}