"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";

const Category = ({activeCategory}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://farhans-boi-nei.vercel.app/category.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    },[]);

    return (
        <div className="w-64 p-4">
            <h3 className="mb-4">Browse Collection</h3>
            <div className="flex flex-row gap-3 lg:flex-col space-y-3">
                {(() => {
                    let allBooksClass = `border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold text-center ${!activeCategory ? "bg-[#697BAE] text-white" : ""}`;
                    return (
                        <Link href="/all-books" className={allBooksClass}>
                            All Books
                        </Link>
                    );
                })()}

                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/all-books?category=${category.name.toLowerCase()}`}
                        className={`border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold text-center ${activeCategory?.toLowerCase() === category.name.toLowerCase() ? "bg-[#697BAE] text-white" : ""}`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;