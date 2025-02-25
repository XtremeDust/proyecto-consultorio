"use client";
import React, { useEffect, useRef, useState } from 'react';

const Carouself = () => {
    const [numList, setnumList] = useState(0);
    const images = [
        "./carousel/1.jpg",
        "./carousel/2.jpg",
        "./carousel/3.jpg",
    ];

    const intervalRef = useRef(null);

    const prev = () => {
        setnumList((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setnumList((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            next();
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);


    return (
        <div className="relative overflow-hidden w-full rounded-3xl" >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${numList * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-full  rounded-3xl"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-w-full mx-auto h-[800px] object-cover rounded-3xl"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prev}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/65 hover:bg-white/85 text-black rounded-full p-4 transition delay-150 ease-in-out hover:-translate-x-1"
            >
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
            </button>
            <button
                onClick={next}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/65 hover:bg-white/85 text-black rounded-full p-4 transition delay-150 ease-in-out hover:translate-x-1"
            >
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
            </button>
        </div>
    );
};

export default Carouself;