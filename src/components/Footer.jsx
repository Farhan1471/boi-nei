import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="border-t py-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Boi Nei. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;