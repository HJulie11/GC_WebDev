import React from 'react';

interface NewsCardProps {
    title: string;
    url: string;
    thumbnail: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, url, thumbnail }) => {
    return (
        <div className="w-[320px] h-[180px] shadow-md mr-5 rounded-lg flex-shrink-0">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                />
            </a>
        </div>
    );
}

export default NewsCard;