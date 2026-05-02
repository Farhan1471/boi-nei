import React from "react";


const LeftSidebar = ({ categories, activeId }) => {
    return(
        <div>
            <ul className="flex flex-col gap-3">
                {categories.map(category => (
                    <li key={category.id} className={`${activeId === category.id && "bg-green-200"} p-3 rounded-md font-semibold text-center text-md`}>
                        
                            {category.name}
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftSidebar;