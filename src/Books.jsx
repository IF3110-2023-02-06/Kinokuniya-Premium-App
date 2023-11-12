import React from "react";
import { useState, useEffect } from "react";
import SearchPanel from "./common/components/search-filter/SearchPanel";
import BookCard from "./common/components/cards/BookCard";
import { REST_BASE_URL } from "./common/constants";

const Books = () => {

    const [books, setBooks] = useState([]);
    const [series, setSeries] = useState(['All Series']);
    const [loading, setLoading] = useState(true);

    function formatDate(isoDate) {
        const date = new Date(isoDate);
        const day = date.getDate();
        const year = date.getFullYear();
      
        const suffix = getDaySuffix(day);
        const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
      
        return `${monthName} ${day}${suffix}, ${year}`;
    }
      
    function getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        const lastDigit = day % 10;
        switch (lastDigit) {
            case 1:
            return 'st';
            case 2:
            return 'nd';
            case 3:
            return 'rd';
            default:
            return 'th';
        }
    }

    function formatAuthorName(author) {
        // Capitalize first letter of each name
        const names = author.split(" ");
        const formattedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
        return formattedNames.join(" ");
    }

    function formatDesc(desc) {
        // Truncate description to 100 characters
        return desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
    }

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
            <h1 className="text-2xl font-semibold text-white p-4">Loading...</h1>
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
                            />
                        )
                    }) : <h1 className="text-2xl font-semibold text-white">No books found</h1>
                }
            </div>
        </div>
    );
}

export default Books;