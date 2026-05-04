'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

 
export default function Search() { 
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);

    useEffect(()=>{
        fetch('https://boi-nei.vercel.app/data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }, [])

    useEffect(() => {
        if (!search) {
            setSearchedBooks([]);
            return;
        }
        setSearchedBooks(
            books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, books])

  return (
    <div className="flex flex-col items-center w-full">
        <div className='relative flex flex-1 shrink-0 w-full max-w-md'>
            <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Search books..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>


        <div className="mt-4 w-full max-w-md">
            {searchedBooks.length > 0 ? (
            <ul>
                {searchedBooks.map(book => (
                <li key={book.id} className="border-b py-2">
                    <div className="font-bold">{book.title}</div>
                    <div className="text-sm text-gray-600">{book.author}</div>
                </li>
                ))}
            </ul>
            ) : search ? (
            <div className="text-gray-500 mt-2">No results found.</div>
            ) : null}
        </div>
        
    </div>
  );
}