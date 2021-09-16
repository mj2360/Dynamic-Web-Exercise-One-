import React from 'react'; 

function ArticleCard({article}){ //here you are passing down single prop -> article 
    return(
        <div className="ArticleCardWrapper">
            <div className="ArticleCardImage">
                {/* dot notation to read through the json */}
                <img src={article.image.url} alt={article.image.alt}/>
            </div>
            <div className="ArticleCardText">
                <h2 className="ArticleCardTitle">{article.title}</h2>
                <p className="ArticleCardDate">{article.publishedDate}</p>
                <p className="ArticleCardBlurb">{article.blurb}</p>
                <p className="ArticleCardLink">
                    <a href="#">Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;