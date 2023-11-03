import React from "react";
import SearchPanel from "./common/components/search-filter/SearchPanel";

const Books = () => {
    return (
        <div className="h-screen flex-1 p-8">
            <SearchPanel />
        </div>
    );
}

export default Books;