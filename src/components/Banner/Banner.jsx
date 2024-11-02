
import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row-reverse py-14">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    
                    <h1 className="py-6 text-2xl font-bold">
                    Books to freshen up your bookshelf
                    </h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;