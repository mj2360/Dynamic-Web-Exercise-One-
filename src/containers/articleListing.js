import React from 'react';
//use .. notation because you are travelling through the directory, going back one folder and then to components folder 
import ArticleCard from "../components/ArticleCard";
import Data from '../components/data.json';

// use curly brackets to inser javascript into html 
function ArticleListing(){
    const articlesTitle = 'Articles'; 
    return(
        <div className="PageWrapper">
            <h2 className="HeaderOneStyle ArticleListingHeader">{articlesTitle}</h2>
            
            {Data.map((article, key) =>( // here we are looping over ArticleCard 6 times
                 <ArticleCard article={article} key={key} />
            ))}
           
        </div>
    );
}

export default ArticleListing; 