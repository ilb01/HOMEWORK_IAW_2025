import React from 'react'
import Article from './Article';
import NotFound from './NotFound';

const ArticleList = ({ articles }) => {
    if (articles.length <= 0) return <NotFound />
    else
        return (
            <section className="articulos">
                {
                    articles.map(e =>
                        <Article key={e.id} title={e.title} img={e.img} desc={e.desc} />
                    )
                }
            </section>
        )
}

export default ArticleList;