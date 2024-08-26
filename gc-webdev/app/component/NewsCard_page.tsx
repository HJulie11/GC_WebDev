import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { title } from 'process';

// TODO: make props interface to get different progress bars

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const NewsCard_page = () => {
  const [cnnVideos, setCnnVideos] = useState<VideoItem[]>([]);
  const [bbcVideos, setBbcVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCupvZG-5ko_eiXAupbDfxWw&maxResults=10&order=date&key=AIzaSyDpref1bV9m7s7igwJqZG1JhC_gsXX60L0"
    )
    .then((response) => response.json())
    .then((data) => {
      setCnnVideos(data.items);
    })
  }, []);

  return (
    <>
    {cnnVideos.map((video) => (
        <Link legacyBehavior
          key={video.id.videoId}
          href={{
            pathname: `/dictation`,
            query: {
              title: video.snippet.title,
              url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
              thumbnail: video.snippet.thumbnails.medium.url,
              key: video.id.videoId
            },
          }}
          passHref
          >
            <a className='flex flex-col w-[320px] shadow-md mr-5 mb-5 rounded-lg'>
              <div className='w-[320px] h-[180px] rounded-top-right-lg round-top-left-lg'>
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} width={320} height={180} />
              </div>
              <div className='w-[300px] flex flex-col'>
                  <div className='font-semi-bold text-[20px] ml-5 mt-5'>{video.snippet.title}</div>
                  <div className='w-[250px] h-[10px] rounded-full bg-gray-30 mt-5 ml-5'></div>
                  <div className='text-[15px] ml-5 mt-5 mb-5'>Not started</div>
              </div>
            </a>
          </Link>
      ))}
    </>
  )
}

export default NewsCard_page