import react from "react";
import Marquee from "react-fast-marquee";

const MovingText = () => {
    return(
        <div className="mx-8 flex justify-between gap-4 bg-gray-100 py-2 px-4 rounded">
            <button className=" bg-[#697BAE] text-white py-1 px-3 rounded">News:</button>
            <Marquee pauseOnHover={true}>
                New Arrivals: [Book Name] | Special Discount on Memberships Ekushey Book Fair 2024: Exclusive Offers on Bestsellers  
            </Marquee>
        </div>
    )
}

export default MovingText;