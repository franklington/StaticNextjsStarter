import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";


import { ImageUrl } from "../utils";

export default function ItemPost({ post: {post } }) {
   
  // const imageUrl= process.env.SITE_URL + post.images[0]
 

  // console.log(imageUrl,' imageUrl ')

  const date = new Date(post.date)

  return (
    <div className="card mb-4">
         

      <Link href={`/blog/${post.slug}`} > <ExportedImage className="card-img-top" src={ ImageUrl(post.images[0])} alt={post.title} /></Link>
      <div className="card-body">
      <h1>itempost</h1>
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.summary}</p>
        <Link className='btn' href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>

    
  )
}