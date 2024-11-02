import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWishList } from "../utility/AddToLs";


const BookDetails = () => {
    const loadData = useLoaderData();

    const { bookId } = useParams();
    const id = parseInt(bookId);
    // console.log(bookId)
    const findData = loadData.find(data => data.bookId === id);
    console.log(findData)
    const { image, bookName, author, category, review, tags, publisher, yearOfPublishing, totalPages, rating } = findData;


    const handleMarkAsRead = (id) =>{
        addToReadList(id)
    }
    const handleAddToWish = (id) =>{
        addToWishList(id);
    }
    return (
        <div className="mb-14 mt-8">
          
            <div className="lg:flex justify-between gap-5">
                {/* image div */}
                <div className="bg-gray-200 p-6 rounded-md lg:w-[50%] ">
                    <img className="rounded-md h-[500px] w-full object-fit" src={image} />
                </div>
                {/* text div */}
                <div className="lg:w-[50%]">
                    <h2 className="text-xl font-bold mt-2">{bookName}</h2>
                    <h5 className="font-semibold mt-2 mb-2">By: {author}</h5>
                    <div className="border border-dashed"></div>
                    <h4 className="font-medium mt-2 mb-2">{category}</h4>
                    <div className="border border-dashed"></div>
                    <p className="text-gray-500 text-sm font-medium mt-2"><span className="font-bold text-black">Review: </span>{review}</p>
                    <div className="flex justify-between mt-3 mb-3">
                        {
                            tags.map((tag, index) => <button className="btn btn-xs text-green-400" key={index}>{tag}</button>)
                        }
                    </div>
                    <div className="border border-dashed"></div>
                    <p className="mt-3 mb-1">Number of Pages: <span className="font-bold">{totalPages}</span></p>
                    <p>Publishing: <span className="font-bold">{publisher}</span></p>
                    <p className="mb-1 mt-1">Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                    <p className="mb-5">Rating: <span className="font-bold">{rating}</span></p>
                    <div className="flex gap-5">
                    <button onClick={()=>handleMarkAsRead(bookId)}  className="btn">Mark as Read</button>
                    <button onClick={()=>handleAddToWish(bookId)} className="btn">Add to Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;