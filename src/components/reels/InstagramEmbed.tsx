"use client"
import { useEffect } from 'react';

type InstagramEmbedProps = {
  href: string;
}



const InstagramEmbed = ({ href }: InstagramEmbedProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media bg-white border-0 rounded shadow-lg my-1 mx-auto max-w-md min-w-sm w-full sm:w-[calc(100%-2px)]"
      data-instgrm-permalink={`${href}/?utm_source=ig_embed&amp;utm_campaign=loading"`}
      data-instgrm-version="14"
    >

    </blockquote>
  );
};

export default InstagramEmbed;
