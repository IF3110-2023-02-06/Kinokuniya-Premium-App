import React from "react";

const SeriesCard = (series) => {
    return (
        <a
            href="#"
            className="relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-[#2B3242] to-[#161C30] backdrop-filter backdrop-blur-[20px] bg-opacity-10 drop-shadow-xl border-gray-700 border-[0.5px]"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#00486E] via-[#001C41] to-[#431237]"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                <h3 className="text-lg font-bold text-gray-100 sm:text-xl">
                    {series.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-400">By John Doe</p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                </div>
            </div>

            <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-200">
                {series.desc}
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                <dd className="text-xs text-gray-300">31st June, 2021</dd>
                <dt className="text-sm font-medium text-gray-400">Published</dt>
                </div>
            </dl>
        </a>
    )
}

export default SeriesCard;