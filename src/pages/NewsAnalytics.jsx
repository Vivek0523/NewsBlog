import React, { useState, useEffect } from "react";
import axios from "axios";

const defaultNewsData = [
  {
    date: "Sun, 05 Jan 2025 01:04:09 GMT",
    images: [
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/df67/l…bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/fd66/l…5dea50-cad5-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/0279/l…dcdd10-cac1-11ef-bb47-87a9dea68aa1.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/ce27/l…28ad40-cace-11ef-9fd6-0be88a764111.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/5184/l…1c42b0-cadb-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/b38f/l…3ed130-c9d2-11ef-9fd6-0be88a764111.jpg.webp 1536w",
    ],
    publisher: {
      href: "https://www.bbc.com",
      title: "BBC.com",
    },
    short_description:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans BBC.comFIRST ALERT WEATHER: Winter storm kicks into gear tonight & for Sunday KY3'Heaviest snowfall in over a decade': Mega winter storm bears down on millions Yahoo! VoicesWhat to know about the heavy snow and ice storms soon to hit a swath of the U.S. The Washington PostKansas City Weather: Blizzard warning, winter storm Saturday, Sunday WDAF FOX4 Kansas City",
    text: "Tens of millions of Americans are bracing for a huge winter storm that could bring the heaviest snowfall and coldest temperatures in over a decade. The storm, which started in the middle of the US, will move east in the next couple of days, the National Weather Service (NWS) said. Parts of the US not accustomed to severe cold, including Mississippi and Florida, have been warned to expect treacherous conditions. Forecasters say the extreme weather is being caused by the polar vortex, an area of cold air that circulates around the Arctic. 'For some, this could be the heaviest snowfall in over a decade,' the National Oceanic and Atmospheric Administration said. AccuWeather forecaster Dan DePodwin said: 'This could lead to the coldest January for the US since 2011.' He added that 'temperatures that are well below historical average' could linger for a week. Those low temperatures will be on the east coast as well, where the storm is expected to reach by Sunday evening. In the central US, there will be 'considerable disruptions to daily life' and 'dangerous or impossible driving conditions and widespread closures' into Sunday, according to the NWS. Some areas of Kansas and Indiana could see at least 8in (20.3cm) of snow. In parts of the Midwest, blizzards are possible. 'Whiteout conditions will make travel extremely hazardous, with impassable roads and a high risk of motorists becoming stranded,' the NWS warned. Sleet and freezing rain is forecast for Missouri, Illinois, and swathes of Kentucky and West Virginia. As the storm moves east, millions more Americans will see record low temperatures, forecasters said. Cities including Washington DC, Baltimore and Philadelphia are preparing for snowy and icy conditions from Sunday into Monday. Snowfall of between 5-12in could be recorded in parts of Virginia. Also on Sunday, portions of the southern US including Arkansas, Louisiana and Mississippi may see severe thunderstorms. Private meteorologist Ryan Maue said: 'It's going to be a mess, a potential disaster. This is something we haven't seen in quite a while.' American, Delta, Southwest and United airlines are waiving change fees for passengers because of the potential flight disruptions.",
    title:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans",
    top_image:
      "https://ichef.bbci.co.uk/news/1024/branded_news/df67/live/16bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg",
    url: "https://www.bbc.com/news/articles/c0kvlkvzdgzo",
  },
  {
    date: "Sun, 05 Jan 2025 01:04:09 GMT",
    images: [
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/df67/l…bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/fd66/l…5dea50-cad5-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/0279/l…dcdd10-cac1-11ef-bb47-87a9dea68aa1.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/ce27/l…28ad40-cace-11ef-9fd6-0be88a764111.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/5184/l…1c42b0-cadb-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/b38f/l…3ed130-c9d2-11ef-9fd6-0be88a764111.jpg.webp 1536w",
    ],
    publisher: {
      href: "https://www.bbc.com",
      title: "BBC.com",
    },
    short_description:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans BBC.comFIRST ALERT WEATHER: Winter storm kicks into gear tonight & for Sunday KY3'Heaviest snowfall in over a decade': Mega winter storm bears down on millions Yahoo! VoicesWhat to know about the heavy snow and ice storms soon to hit a swath of the U.S. The Washington PostKansas City Weather: Blizzard warning, winter storm Saturday, Sunday WDAF FOX4 Kansas City",
    text: "Tens of millions of Americans are bracing for a huge winter storm that could bring the heaviest snowfall and coldest temperatures in over a decade. The storm, which started in the middle of the US, will move east in the next couple of days, the National Weather Service (NWS) said. Parts of the US not accustomed to severe cold, including Mississippi and Florida, have been warned to expect treacherous conditions. Forecasters say the extreme weather is being caused by the polar vortex, an area of cold air that circulates around the Arctic. 'For some, this could be the heaviest snowfall in over a decade,' the National Oceanic and Atmospheric Administration said. AccuWeather forecaster Dan DePodwin said: 'This could lead to the coldest January for the US since 2011.' He added that 'temperatures that are well below historical average' could linger for a week. Those low temperatures will be on the east coast as well, where the storm is expected to reach by Sunday evening. In the central US, there will be 'considerable disruptions to daily life' and 'dangerous or impossible driving conditions and widespread closures' into Sunday, according to the NWS. Some areas of Kansas and Indiana could see at least 8in (20.3cm) of snow. In parts of the Midwest, blizzards are possible. 'Whiteout conditions will make travel extremely hazardous, with impassable roads and a high risk of motorists becoming stranded,' the NWS warned. Sleet and freezing rain is forecast for Missouri, Illinois, and swathes of Kentucky and West Virginia. As the storm moves east, millions more Americans will see record low temperatures, forecasters said. Cities including Washington DC, Baltimore and Philadelphia are preparing for snowy and icy conditions from Sunday into Monday. Snowfall of between 5-12in could be recorded in parts of Virginia. Also on Sunday, portions of the southern US including Arkansas, Louisiana and Mississippi may see severe thunderstorms. Private meteorologist Ryan Maue said: 'It's going to be a mess, a potential disaster. This is something we haven't seen in quite a while.' American, Delta, Southwest and United airlines are waiving change fees for passengers because of the potential flight disruptions.",
    title:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans",
    top_image:
      "https://ichef.bbci.co.uk/news/1024/branded_news/df67/live/16bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg",
    url: "https://www.bbc.com/news/articles/c0kvlkvzdgzo",
  },
  {
    date: "Sun, 05 Jan 2025 01:04:09 GMT",
    images: [
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/df67/l…bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/fd66/l…5dea50-cad5-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/0279/l…dcdd10-cac1-11ef-bb47-87a9dea68aa1.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/ce27/l…28ad40-cace-11ef-9fd6-0be88a764111.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/5184/l…1c42b0-cadb-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/b38f/l…3ed130-c9d2-11ef-9fd6-0be88a764111.jpg.webp 1536w",
    ],
    publisher: {
      href: "https://www.bbc.com",
      title: "BBC.com",
    },
    short_description:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans BBC.comFIRST ALERT WEATHER: Winter storm kicks into gear tonight & for Sunday KY3'Heaviest snowfall in over a decade': Mega winter storm bears down on millions Yahoo! VoicesWhat to know about the heavy snow and ice storms soon to hit a swath of the U.S. The Washington PostKansas City Weather: Blizzard warning, winter storm Saturday, Sunday WDAF FOX4 Kansas City",
    text: "Tens of millions of Americans are bracing for a huge winter storm that could bring the heaviest snowfall and coldest temperatures in over a decade. The storm, which started in the middle of the US, will move east in the next couple of days, the National Weather Service (NWS) said. Parts of the US not accustomed to severe cold, including Mississippi and Florida, have been warned to expect treacherous conditions. Forecasters say the extreme weather is being caused by the polar vortex, an area of cold air that circulates around the Arctic. 'For some, this could be the heaviest snowfall in over a decade,' the National Oceanic and Atmospheric Administration said. AccuWeather forecaster Dan DePodwin said: 'This could lead to the coldest January for the US since 2011.' He added that 'temperatures that are well below historical average' could linger for a week. Those low temperatures will be on the east coast as well, where the storm is expected to reach by Sunday evening. In the central US, there will be 'considerable disruptions to daily life' and 'dangerous or impossible driving conditions and widespread closures' into Sunday, according to the NWS. Some areas of Kansas and Indiana could see at least 8in (20.3cm) of snow. In parts of the Midwest, blizzards are possible. 'Whiteout conditions will make travel extremely hazardous, with impassable roads and a high risk of motorists becoming stranded,' the NWS warned. Sleet and freezing rain is forecast for Missouri, Illinois, and swathes of Kentucky and West Virginia. As the storm moves east, millions more Americans will see record low temperatures, forecasters said. Cities including Washington DC, Baltimore and Philadelphia are preparing for snowy and icy conditions from Sunday into Monday. Snowfall of between 5-12in could be recorded in parts of Virginia. Also on Sunday, portions of the southern US including Arkansas, Louisiana and Mississippi may see severe thunderstorms. Private meteorologist Ryan Maue said: 'It's going to be a mess, a potential disaster. This is something we haven't seen in quite a while.' American, Delta, Southwest and United airlines are waiving change fees for passengers because of the potential flight disruptions.",
    title:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans",
    top_image:
      "https://ichef.bbci.co.uk/news/1024/branded_news/df67/live/16bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg",
    url: "https://www.bbc.com/news/articles/c0kvlkvzdgzo",
  },
  {
    date: "Sun, 05 Jan 2025 01:04:09 GMT",
    images: [
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/df67/l…bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/fd66/l…5dea50-cad5-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/0279/l…dcdd10-cac1-11ef-bb47-87a9dea68aa1.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/ce27/l…28ad40-cace-11ef-9fd6-0be88a764111.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/5184/l…1c42b0-cadb-11ef-94cb-5f844ceb9e30.jpg.webp 1536w",
      "https://www.bbc.com/bbcx/grey-placeholder.png",
      "https://ichef.bbci.co.uk/news/240/cpsprodpb/b38f/l…3ed130-c9d2-11ef-9fd6-0be88a764111.jpg.webp 1536w",
    ],
    publisher: {
      href: "https://www.bbc.com",
      title: "BBC.com",
    },
    short_description:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans BBC.comFIRST ALERT WEATHER: Winter storm kicks into gear tonight & for Sunday KY3'Heaviest snowfall in over a decade': Mega winter storm bears down on millions Yahoo! VoicesWhat to know about the heavy snow and ice storms soon to hit a swath of the U.S. The Washington PostKansas City Weather: Blizzard warning, winter storm Saturday, Sunday WDAF FOX4 Kansas City",
    text: "Tens of millions of Americans are bracing for a huge winter storm that could bring the heaviest snowfall and coldest temperatures in over a decade. The storm, which started in the middle of the US, will move east in the next couple of days, the National Weather Service (NWS) said. Parts of the US not accustomed to severe cold, including Mississippi and Florida, have been warned to expect treacherous conditions. Forecasters say the extreme weather is being caused by the polar vortex, an area of cold air that circulates around the Arctic. 'For some, this could be the heaviest snowfall in over a decade,' the National Oceanic and Atmospheric Administration said. AccuWeather forecaster Dan DePodwin said: 'This could lead to the coldest January for the US since 2011.' He added that 'temperatures that are well below historical average' could linger for a week. Those low temperatures will be on the east coast as well, where the storm is expected to reach by Sunday evening. In the central US, there will be 'considerable disruptions to daily life' and 'dangerous or impossible driving conditions and widespread closures' into Sunday, according to the NWS. Some areas of Kansas and Indiana could see at least 8in (20.3cm) of snow. In parts of the Midwest, blizzards are possible. 'Whiteout conditions will make travel extremely hazardous, with impassable roads and a high risk of motorists becoming stranded,' the NWS warned. Sleet and freezing rain is forecast for Missouri, Illinois, and swathes of Kentucky and West Virginia. As the storm moves east, millions more Americans will see record low temperatures, forecasters said. Cities including Washington DC, Baltimore and Philadelphia are preparing for snowy and icy conditions from Sunday into Monday. Snowfall of between 5-12in could be recorded in parts of Virginia. Also on Sunday, portions of the southern US including Arkansas, Louisiana and Mississippi may see severe thunderstorms. Private meteorologist Ryan Maue said: 'It's going to be a mess, a potential disaster. This is something we haven't seen in quite a while.' American, Delta, Southwest and United airlines are waiving change fees for passengers because of the potential flight disruptions.",
    title:
      "Biggest winter storm in over a decade forecast to hit tens of millions of Americans",
    top_image:
      "https://ichef.bbci.co.uk/news/1024/branded_news/df67/live/16bc05f0-cae4-11ef-8d88-4f10fb85187a.jpg",
    url: "https://www.bbc.com/news/articles/c0kvlkvzdgzo",
  },
];

function NewsAnalytics() {
  const [newsData, setNewsData] = useState(defaultNewsData); // Set default data initially
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null); // State for selected article
  const articlesPerPage = 10;

  useEffect(() => {
    async function fetchNews() {
      const options = {
        method: "POST",
        url: "https://newsnow.p.rapidapi.com/newsv2_top_news",
        headers: {
          "x-rapidapi-key": "85871ab233msh29d7b7d321a41aap1117dbjsn0c0c64f95ee",
          "x-rapidapi-host": "newsnow.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          location: "us",
          language: "en",
          page: 1,
          time_bounded: false,
          from_date: "01/02/2021",
          to_date: "05/06/2021",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data.news && response.data.news.length > 0) {
          setNewsData(response.data.news);
        } else {
          setNewsData(defaultNewsData); // Use default data if API response is empty
        }
      } catch (error) {
        console.error(error);
        setNewsData(defaultNewsData); // Use default data if there's an error
      }
    }

    fetchNews();
  }, [currentPage]);

  const totalPages = Math.ceil(newsData.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to open the article in expanded view
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  // Function to close the article view
  const closeArticleView = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}

      {/* If there's a selected article, show full article view */}
      {selectedArticle ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closeArticleView}
              className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full"
            >
              X
            </button>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                {selectedArticle.title}
              </h2>
              <img
                className="w-full mb-4"
                src={selectedArticle.top_image}
                alt="article"
              />
              <p className="text-lg mb-4">
                {selectedArticle.short_description}
              </p>
              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-2 gap-80">
          {newsData.length > 0 ? (
            newsData.map((article, index) => (
              <div
                key={index}
                className="w-64 rounded overflow-hidden shadow-lg p-4 cursor-pointer" // Adjust width here
                onClick={() => handleArticleClick(article)}
              >
                <img className="w-full" src={article.top_image} alt="article" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {article.title || "Untitled"}
                  </div>
                  <p className="text-gray-700 text-base">
                    {article.short_description || "No description available."}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {/* Date and Publisher */}
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Published on:</strong>{" "}
                    {new Date(article.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Publisher:</strong>{" "}
                    <a
                      href={article.publisher.href}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.publisher.title}
                    </a>
                  </p>

                  {/* Tags */}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{article.publisher.title || "General"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading news articles...</p>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      {newsData.length > articlesPerPage && !selectedArticle && (
        <div className="flex justify-center mt-4">
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === number + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsAnalytics;
