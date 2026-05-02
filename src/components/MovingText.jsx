import react from "react";
import Marquee from "react-fast-marquee";

const MovingText = () => {
    return(
        <div className="mx-8">
            <Marquee pauseOnHover={true}>
                New Arrivals: [Book Name] | Special Discount on Memberships Ekushey Book Fair 2024: Exclusive Offers on Bestsellers  
            </Marquee>
        </div>
    )
}

export default MovingText;