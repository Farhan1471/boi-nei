import BorrowButton from "@/components/BorrowButton";
import { ToastContainer } from "react-toastify";
import React from "react";

const BookDetailsPage = async ({params}) => {

    const {id} = await params;
    const res = await fetch('https://boi-nei.vercel.app/data.json');
    const books = await res.json();

    const book = books.find(b => b.id == id);

    return(
        <div className="flex justify-between gap-10 mt-8">
            <div>
                <img src={book.image_url}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={book.title}
                    className="object-cover rounded-xl" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">{book.title}</h1>
                <p className=""><i>{book.author}</i></p>
                <p>{book.available_quantity} copies left</p>

                <p>Description</p>
                <p>{book.description}</p>

                <BorrowButton />
            </div>
            <ToastContainer />
        </div>
    )
}

export default BookDetailsPage;