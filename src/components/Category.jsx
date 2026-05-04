import Link from "next/link";
import React from "react";

const Category = async ({activeCategory}) => {
    const response  = await fetch('https://ame.scratchive.com/category.json');
    const categories = await response.json();
  return (
    <div className="w-64 p-4">
        <h3 className="mb-4">Browse Collection</h3>
        <div className="flex flex-row gap-3 lg:flex-col space-y-3">
            <Link href={`/all-books`} className={`border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold text-center ${!activeCategory ? "bg-[#697BAE] text-white" : ""}`}>
                All Books
            </Link>

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
  )
}

export default Category;