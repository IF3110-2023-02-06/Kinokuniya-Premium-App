import React from "react";
import { useState, useEffect } from "react";
import SearchPanel from "./common/components/search-filter/SearchPanel";
import BookCard from "./common/components/cards/BookCard";
import { REST_BASE_URL } from "./common/constants";
import { formatAuthorName, formatDesc, formatDate, formatPrice } from "./common/formatter";
import { useNavigate } from "react-router";

const Books = () => {

    const [books, setBooks] = useState([]);
    const [series, setSeries] = useState(['All Series']);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const checkAuth = async () => {
		const response = await fetch(`${REST_BASE_URL}/user/check`,
		{
		  headers: {
			"Authorization": localStorage.getItem("token") ?? ""
		  }
		});

		
		if (!response.ok) {
			navigate('/login');
		}

        setLoading(false);
	};

    useEffect(() => {
		checkAuth();
	}, []);

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/books');
        }
    });

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await fetch(`${REST_BASE_URL}/book?title=${""}&series=${"All Series"}`, {
                headers: {
                    "Authorization": localStorage.getItem("token") ?? ""
                }
            });
    
            if (!response.ok) {
                console.log(data.message);
                return;
            }
    
            const data = await response.json();
            const books = data.data;
    
            setBooks(books);
            setLoading(false);
        })()
    }, []);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await fetch(`${REST_BASE_URL}/series`, {
                headers: {
                    "Authorization": localStorage.getItem("token") ?? ""
                }
            });

            if (!response.ok) {
                console.log(data.message);
                return;
            }

            const data = await response.json();
            const series = data.data;

            series && setSeries(['All Series', ...series.map(s => s.seriesName)]);
            setLoading(false);
        })()
    }, []);

    if (loading) return (
        <div className="h-full w-full flex-1 p-8 min-h-screen">
        </div>
    )

    return (
        <div className="h-full w-full flex-1 p-8 min-h-screen">
            <SearchPanel setSearch={setBooks} categories={series}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 p-4">
                {
                    books.length > 0 ? books.map((book) => {
                        console.log(`${REST_BASE_URL}/image/${book.coverPath}`);
                        return (
                            <BookCard
                                key={book.id}
                                title={book.title}
                                author={formatAuthorName(book.author)}
                                bookDesc={formatDesc(book.bookDesc)}
                                publishedDate={formatDate(book.publicationDate)}
                                price={formatPrice(book.price)}
                            />
                        )
                    }) : <h1 className="text-2xl font-semibold text-white">No books found</h1>
                }
            </div>
        </div>
    );
}

export default Books;