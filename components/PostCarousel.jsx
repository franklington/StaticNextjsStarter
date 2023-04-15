import Link from 'next/link'
import { slugify, sortByDate } from '../utils'
import ExportedImage from "next-image-export-optimizer";
import Post from './Post';



export default function PostCarousel({  orderBy, limit = -1, order, posts}) {
  const filteredPosts = posts.slice(0, limit);

  return (
    <div className='row'>
      <div className='col'>
      {filteredPosts.map((post, index) => (
            <Post key={index} post={post} />
        ))}
      </div>
    </div>
 


  )
}
