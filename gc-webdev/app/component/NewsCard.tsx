import React from 'react'

interface NewsCardProps {
        title: string; // title of the news (API)
        url: string; // url to start studying (dictation)
        thumbnail: string; // thumbnail of the news (API)
}

const NewsCard: React.FC<NewsCardProps> = ({ title, url, thumbnail = '' }) => {
    return (
        <div className='w-[320px] h-[180px] shadow-md mr-5 rounded-lg'>
            <a href={url}>
                <img src={thumbnail} alt={title} width={320} height={180} />
            </a>
        </div>
        
    )
}

export default NewsCard