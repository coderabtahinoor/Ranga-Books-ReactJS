import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';

const Bookmarks = ({ bookmarked }) => {

    //calculate the total book price
    let total = 0
    for (const book of bookmarked) {
        total = total + book.price
    }
    
    return (
        <>
            <div className="sticky top-24">
                <div className="bg-purple-700 rounded-lg p-2">
                    {/* bookmark history title  */}
                    <h1 className="text-2xl pt-3 text-white text-center font-semibold flex items-center justify-center">
                        Bookmarks History
                    </h1>

                    {/* bookmark total  */}
                    <div className="flex items-center justify-between pt-4 py-3 text-white text-lg px-2">
                        <span className="flex items-center"><BsBookmark className="text-2xl mr-2" /> Total Bookmarks</span>
                        <span className="font-bold">{bookmarked.length}</span>
                    </div>

                    {/* bookmark book total price  */}
                    <div className="flex items-center justify-between pt-4 py-3 text-white text-lg px-2">
                        <span className="flex items-center"><AiOutlineDollar className="text-2xl mr-2" /> Total Book Price</span>
                        <span className="font-bold">{total}tk.</span>
                    </div>

                </div>

                {/* bookMarksCard  */}
                <div className="my-6 flex flex-col-reverse ">
                    {bookmarked.map(bookmarkBook => {
                        return (
                            <div className="flex bg-purple-200 shadow-xl rounded-lg p-3 my-3 space-x-2" key={Math.random()}>
                                <img src={bookmarkBook.image} alt={bookmarkBook.name} className=" h-24 object-contain" />

                                <div className="flex flex-col text-gray-700">
                                    <h1 className="text-xl font-semibold">{bookmarkBook.name}</h1>
                                    <p>{bookmarkBook.author}</p>
                                    <h2 className="text-lg pt-3 font-bold text-gray-500">Price: {bookmarkBook.price}tk.</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Bookmarks
