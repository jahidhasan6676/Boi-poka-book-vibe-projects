import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, author, image, rating, category, tags, bookName,totalPages } = book;
    
    return (
       <Link to={`/book/${bookId}`}>
        <div className="card bg-base-100  border p-3">
            <figure className="bg-gray-200 p-5 rounded-md">
                <img className="h-[200px] rounded-md "
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between ">
                    {
                        tags.map((tag,index) => <button className="btn btn-xs text-green-400" key={index}>{tag}</button>)
                    }

                </div>
                <h2 className="text-xl font-bold">{bookName}</h2>
                <h5 className="font-medium">By:
                    {author}
                </h5>
                <div className="border border-dashed"></div>

                <div className=" flex justify-between items-center mt-2 ">
                    <div className="font-medium">{category}</div>
                    <div>{totalPages}</div>
                   
                    <div className="flex items-center gap-2">
                    <div>{rating}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;