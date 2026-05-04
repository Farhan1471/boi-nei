'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBook({ value, onInputChange, onSearch }) {
    return (
        <div className="flex flex-col items-center w-full">
            <div className='relative flex flex-1 shrink-0 w-full max-w-md'>

                <input
                    className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Search books..."
                    onChange={onInputChange}
                    value={value}
                />

                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                
                <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={onSearch}
                    type="button"
                >
                    Search
                </button>
            </div>
        </div>
    );
}