import { useState,useEffect } from 'react';

export default function EventCom({id, title, path, date, place, author, entryType, handleClick, bookmarkState=false}) {
    const [bookmarked, setBookmarked] = useState(false);
    
    useEffect(() => {setBookmarked(bookmarkState)}, []);

    const handleBookmarkClick = (e) => {
        e.stopPropagation();
        setBookmarked(!bookmarked);
    };

    return (
        <>
            <div onClick={() => handleClick(id)} className="bg-gray-100 w-64 m-2 h-[414px] rounded-xl cursor-pointer">
                <div className="w-64 h-64 relative">
                    <img className="w-full h-full object-cover rounded-t-lg" src={path} alt="" />
                    <div className="absolute bottom-2 right-2" onClick={handleBookmarkClick}>
                        {bookmarked ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14l7-7 7 7V5z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14l7-7 7 7V5z"/>
                            </svg>
                        )}
                    </div>
                </div>
                <div className="h-14 w-full">
                    <p className="px-4 pt-1 font-bold text-md line-clamp-2">{title}</p>
                    
                </div>
                <div className="flex justify-center items-start gap-y-1 px-3 pb-2  flex-col text-sm rounded-b-lg">
                   
                    <div className="flex items-center text-left gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <p>{date}</p>
                    </div>
                    <div className="flex items-center text-left gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-7.333 8-12a8 8 0 10-16 0c0 4.667 8 12 8 12z"/>
                        </svg>
                        <p>{place}</p>
                    </div>
                    <div className="flex items-center text-left gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2-2m0 0l2-2m-2 2l2 2m-2-2l-2 2m-6 2a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"/>
                        </svg>
                        <p>{entryType}</p>
                    </div>
                    <div className="flex items-center text-left gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
        </>
    );
}