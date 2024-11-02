import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../utility/AddToLs';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    const [sort, setSort] = useState()

    useEffect(() => {
        const storedReadList = getStoredList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)

    }, []);

    const handleSort = sortType => {
        setSort(sortType);

        if(sortType === 'ratings'){
            const ratingsReadList = [...readList].sort((a,b) => a.rating - b.rating)
            setReadList(ratingsReadList)
        }

        if(sortType === 'pages'){
            const pagesRatingsList = [...readList].sort((a,b) => b.totalPages - a.totalPages);
            setReadList(pagesRatingsList)
        }
    }
    return (
        <div className='mt-6'>
             <h2 className='font-bold text-xl text-center'>Listed Books</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort? `Sort by: ${sort}` : 'Sort By'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSort("ratings")}><a>Ratings</a></li>
                    <li onClick={()=>handleSort("pages")}><a>Pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
           
        </div>
    );
};

export default ListedBooks;