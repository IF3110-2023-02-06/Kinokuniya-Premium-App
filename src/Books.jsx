import React from "react";
import SearchPanel from "./common/components/search-filter/SearchPanel";
import SeriesCard from "./common/components/cards/SeriesCard";

const Books = () => {
    const series = {
        title: "Kino Land",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc eget aliquam ultricies, diam dui aliquet purus, eget aliquam erat nunc in lorem."
    }

    return (
        <div className="h-screen flex-1 p-8">
            <SearchPanel />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 p-4">
                <SeriesCard {...series} />
                <SeriesCard {...series} />
                <SeriesCard {...series} />
            </div>
        </div>
    );
}

export default Books;