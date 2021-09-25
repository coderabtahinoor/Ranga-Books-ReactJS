import React from 'react';
import { AiFillStar, AiOutlineUser } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';

const Book = (props) => {
    const { id, name, author, image, price, rating, reviews } = props.book;

    return (
        <div className="bg-white rounded-lg p-6 box-border shadow-xl flex flex-col">
            <img src={image} alt={id} className="object-cover rounded-lg" style={{height:'300px'}} />
            <div className="flex flex-col flex-grow">
                <h1 className="text-xl text-gray-700 font-semibold text-center py-3">{name}</h1>
                <p className="text-gray-500 text-base text-center">Author : {author} </p>
                <h3 className="text-lg text-gray-700 font-bold pb-2 text-center">Price: {price}tk.</h3>
                {/* rating and reviews  */}
                <div className="flex items-center justify-center space-x-3">
                    {/* rating  */}
                    <div className="flex flex-row items-center">
                        <AiFillStar className="text-yellow-500 text-lg" />
                        <span className="text-gray-500 text-sm">{rating}</span>
                    </div>
                    {/* reviews  */}
                    <div className="flex flex-row items-center">
                        <AiOutlineUser className="text-gray-500 text-lg" />
                        <span className="text-gray-500 text-sm">{reviews}</span>
                    </div>
                </div>
            </div>

            <div>
                <button className="transition duration-300 w-full py-3 rounded-lg my-2 bg-purple-700 text-white hover:text-purple-700 hover:bg-white border-2 hover:border-purple-200 ring-purple-200 focus:ring-4" onClick={() => props.handleBookMarks({...props})}>
                    <p className="flex items-center justify-center "><BsBookmark className="text-xl mr-2" />Add to bookmark</p>
                </button>
            </div>
        </div>
    )
}

export default Book
