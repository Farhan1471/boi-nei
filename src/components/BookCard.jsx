import React from "react";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({book}) =>{
    return(
        <Card className="border rounded-xl h-full p-4 flex-col">
            <div className="relative w-full aspect-square">
                <Image
                    src={book.image_url}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={book.title}
                    className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{book.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{book.title}</h2>
                <p className="text-sm text-gray-600">{book.author}</p>
            </div>

            <Link href={`/all-books/${book.id}`}><Button className="w-full bg-[#697BAE] text-white hover:bg-[#5a6796]">View Details</Button></Link>
            
        </Card>
    )
}

export default BookCard;