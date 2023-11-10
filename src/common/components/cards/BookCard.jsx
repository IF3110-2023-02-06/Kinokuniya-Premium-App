import React from "react";

const BookCard = (book) => {
    return (
        <a
            href="#"
            className="relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-[#2B3242] to-[#161C30] backdrop-filter backdrop-blur-[20px] bg-opacity-10 drop-shadow-xl border-gray-700 border-[0.5px]"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#00486E] via-[#001C41] to-[#431237]"
            ></span>
            <div className="flex flex-col gap-y-6 items-center">
                <div class="hidden sm:block sm:shrink-0">
                    <img
                        src={book.coverImage}
                        alt="Book Cover Image"
                        className="w-20 rounded-sm object-cover shadow-sm border-gray-700 border-[0.1px]"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                        <h3 className="text-lg font-bold text-gray-100 sm:text-xl">
                            {book.title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-400">By {book.author}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="max-w-[40ch] text-sm text-gray-200">
                        {book.bookDesc}
                        </p>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                        <dd className="text-xs text-gray-300">{book.publishedDate}</dd>
                        <dt className="text-sm font-medium text-gray-400">Published</dt>
                        </div>
                    </dl>
                </div>
            </div>
        </a>
    )
}

export default BookCard