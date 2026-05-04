import { Card } from "@heroui/react";
import React from "react";

const Review = () => {
    return(
        <div className="mt-8 ">
            <h1 className="text-center text-2xl font-semibold">Community Voice</h1>
            <p className="text-gray-600 text-center">Hear from our collective of readers, researchers, and book lovers who make ScholasticArch their digital home.</p>

            <div className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 sm:justify-center">
                <Card className="border rounded-xl p-4 flex flex-col">
                    <p className="font-bold text text-center">Farhan</p>
                    <p className="text-sm text-gray-600 text-justify"><i>A beautifully written story that captures emotions deeply and keeps readers engaged until the end.</i></p>
                </Card>
                <Card className="border rounded-xl p-4 flex flex-col">
                    <p className="font-bold text-center">Shuvo</p>
                    <p className="text-sm text-gray-600 text-justify"><i>A thought-provoking book that offers valuable insights and unforgettable storytelling experience throughout.</i></p>
                </Card>
                <Card className="border rounded-xl p-4 flex flex-col">
                    <p className="font-bold text-center">Tamim</p>
                    <p className="text-sm text-gray-600 text-justify"><i>A compelling story with relatable characters and meaningful themes that leave a lasting impression on readers.</i></p>
                </Card>
                <Card className="border rounded-xl p-4 flex flex-col">
                    <p className="font-bold text-center">Munem</p>
                    <p className="text-sm text-gray-600 text-justify"><i>This book perfectly balances emotion, realism, and storytelling, making it both enjoyable and deeply memorable.</i></p>
                </Card>
            </div>
        </div>
    )
}

export default Review;    