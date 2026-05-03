import React from "react";

const Stats = () => {
    return(
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Books Stats</h2>

            <div className="flex flex-wrap gap-6 justify-center items-center">
                <div className="card w-52 bg-base-100 shadow-md border rounded-xl">
                    <div className="card-body text-center">
                        <h2 className="text-[#244D3F] text-3xl font-semibold">32</h2>
                        <p className="text-[#64748B]">Total Books</p>
                    </div>
                </div>
                <div className="card w-52 bg-base-100 shadow-md border rounded-xl">
                    <div className="card-body text-center">
                        <h2 className="text-[#244D3F] text-3xl font-semibold">28</h2>
                        <p className="text-[#64748B]">Books Borrowed</p>
                    </div>
                </div>
            
                <div className="card w-52 bg-base-100 shadow-md border rounded-xl">
                    <div className="card-body text-center">
                        <h2 className="text-[#244D3F] text-3xl font-semibold">15</h2>
                        <p className="text-[#64748B]">Total Users</p>
                    </div>
                </div>

                <div className="card w-52 bg-base-100 shadow-md border rounded-xl">
                    <div className="card-body text-center">
                        <h2 className="text-[#244D3F] text-3xl font-semibold">15</h2>
                        <p className="text-[#64748B]">Category</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;