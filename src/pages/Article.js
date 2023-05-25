import React from 'react'
import articleContent from './Article-content';

//useParams  ARE USED GET URL PARAMETERS TO SHOW A PERTICULAR ARTICLE WITH ID OR NAME
import { useParams } from 'react-router-dom';
import Articles from '../components/Articles';

const Article = () => {
  const {name} = useParams();
  const article = articleContent.find((article) => article.name === name);
  if(!article) return(<h1 className="sm:text-4xl text-2xl font-bold my-6 text-red-900 text-center ">Article doesn't exists</h1>)
  return (
    <>
    <h1 className="sm:text-4xl text-2xl font-bold my-6 text-red-900 ">
    {article.title}</h1>
    {article.content.map((paragraph , index)=> ( <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p> ) )}
    

     <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900 text-center">Other Articles</h1>

     <div className="flex flex-wrap -m-4">
     <Articles articles={articleContent}/>
     </div>

     </>
  )
}

export default Article