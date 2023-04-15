import Link from 'next/link'
import { slugify } from '../utils'
import ExportedImage from "next-image-export-optimizer";



export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)
  return (
    <div className="card mb-4">
      <Link href={`/blog/${post.slug}`} > 
        <ExportedImage className="card-img-top" src={`/${post.frontmatter.image}`} width={1000} height={500} alt="..." />
      </Link>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
       
        <div> {
                  post.frontmatter.tags.map(
                    tag => {

                      const slug = slugify(tag)

                      return (<Link className='btn' key={tag} href={`/tag/${slug}`}>
                       
                          <h6 className=' post-title'>#{tag}</h6>
                        
                      </Link>)
                    }
                  )
                } </div>
        <h2 className="card-title">{post.frontmatter.title}</h2>
        <p className="card-text">{post.frontmatter.summary}</p>
        <Link  className='btn' href={`/blog/${post.slug}`}>
        Read More

        </Link>
      </div>
    </div>
  )
}