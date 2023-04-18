
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo';
import Post from '../components/Post'
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar"
import PostCarousel from "../components/PostCarousel"
import { sortByDate, slugify, ImageUrl } from '../utils'
import DemoItems from '../components/DemoItems';
import Anime from "../components/Anime";
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

export default function Home({ posts }) {


  return (
    <grid>
      <NextSeo
        title="Welcome to my blog home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
        openGraph={{
          url: 'http://officialrajdeepsingh.dev',
          title: 'Welcome to my blog home page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}
      />

          {/* HERO BANNER */}

          <Banner className=" col-12" />

          {/* EARTHS */}
          <div class="col-12"><h2 className='alternative text-center mt-1'>We own to much ...</h2></div>
          <div class="col-12 fl-col my-2 ju-center al-sm-center al-start ">
          <Anime src="./images/hand_one.svg" alt="Pointing" width="300" className="hand-one ml-3"></Anime>

          </div>
          <grid class="col-12 gap-4">
          <div className='col-12 order-md-2 col-md-6 mt-sm-5'>
              <h2 className='alternative'>...and share to little.</h2>
              <p className='short'>Since 1971, more than 50 years, we incur debts to the planet every year. Every year we push the boundaries further and further. Today, 1.75 Earths would be needed to provide enough resources for all people. Resources which aren’t shared equally, unfortunately.</p>
            </div>
            <div className='col-12 order-md-1 col-md-6 py-md-5'>
              <Anime src="./images/earths.svg" alt="Earthovershoot Day" width="1000"></Anime>
            </div>


          </grid>

          <gap></gap>

          {/* LAERNSHARING QUOTE */}
          <div class="col-12 fl-col al-center ju-center">
            <blockquote className='text-center'>As children we learn how to <mark>share</mark>... </blockquote>
            <Anime src="./images/hand_two.svg" alt="Pointing" width="300" height="500"className=" hand-two my-3"></Anime>

            <blockquote className='text-center'>... but somehow we <mark class="alter">unlearn</mark> it when we become older.</blockquote>
            <div class="fl-col al-center  pt-3">
              <p class="text-center short">Even though we face many problems like global warming growing unequality and self isolation.</p>
            </div>
          </div>
          <gap></gap>
          {/* Isolation */}
          <div className='col-12 col-md-6 px-3'><Anime src="./images/isolation.svg" alt="Social Isolation"></Anime></div>
          <div className='col-12 col-md-6 problem-list-point'>
            
              <label>1</label>
              <div className='fl-col'>
                <h2>Social Isolation</h2>
                <p className='short'>
                  Social isolation is more common now due to changes in family structures, technology use, community structures, and social norms. This favors that more and more people live alone and think only of themselves.
                </p>
                <Link className='btn mt-1' href="/" >Read more</Link>
              </div>
          </div>
          <gap></gap>
          {/* TRASH */}
          <div className='col-12 '>
          <div className='fullwidth'>
              <Anime src="./images/trash.svg" alt="Trash Infographic" ></Anime>

              </div>
            
          </div>
          <div className='col-12 mt-n1'>
            <div className='bg bg-black '></div>
            <div className='fg fl-col al-center inverted'>


              <div className='problem-list-point'>
                <label>2</label>
                <div className='fl-col'>
                  <h2>Waste</h2>
                  <p className='short'>
                    Social isolation is more common now due to changes in family structures, technology use, community structures, and social norms. This favors that more and more people live alone and think only of themselves.
                  </p>
                  <Link className='btn inverted mt-1' href="/" >Read more</Link>
                </div>
              </div>
              <gap></gap>
              <blockquote class="inverted"><mark>4,8</mark> tons of waste were generated per EU inhabitant in 2020. </blockquote>
            </div>
          </div>
          {/* globalwarming */}
          <div className='col-12 mt-n1'>

            <div className='bg bg-gradient'></div>
            <div className='fg fl-col al-center '>
              <gap></gap>
              <div className='grid'>
                
               <gap></gap>

                <div className='col-12 col-md-6 fl-col ju-center'>
                  <div className='problem-list-point'>
                    <label>3</label>
                    <div className='fl-col'>
                      <h2>Global Warming</h2>
                      <p className='short'>
                        Social isolation is more common now due to changes in family structures, technology use, community structures, and social norms. This favors that more and more people live alone and think only of themselves.                     </p>
                      <Link className='btn mt-1' href="/" >Read more</Link>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6 px-3'><Anime src="./images/sun.svg" alt="Gobal warming"></Anime></div>
              </div>
            </div>

          </div>
          <gap></gap>
          <div className='col-12 fl-col al-center'>
            <blockquote>Sharing problems is the <mark>answer</mark>. </blockquote>
          </div>
          <gap></gap>
          <div className='col-12'>
            <div className='p-relative'>
              <Anime src="./images/flowers.svg" alt="Social Isolation" className=""></Anime>
              <div className='fl-col p-absolute flowers'>
                <h2>Together we are strong</h2>
                <p className='short'>
                  It’s like watering your plants when you’re on holidays. Someone takes care about a problem when you don’t have time. No matter if it’s time, a tool or a car.
                  Everyone has resources which aren’t used. That’s why we founded the Sharing Club. </p>
              </div>

            </div>

          </div>
          <gap></gap>

          <div className='col-12'>
            <h2 className='text-center mb-5'>What you definitly get</h2>
            <div className='grid gap-2'>
              <div className='col-12 col-sm-4 fl-col al-center text-center gap-1'>
                <Anime src="./images/hands.svg" alt="Friends Icon" className="side-icons"></Anime>
                <div className='fl-col'>
                  <h3 className='mt-2 mb-1'>Make Friends</h3>
                  <p className='short'>When you share something with others you&apos;ll get back something. Sometimes it&apos;s true friendship.</p>
                </div>
              </div>
              <div className='col-12 col-sm-4 fl-col  al-center text-center gap-1'>
                <Anime src="./images/money.svg" alt="Friends Icon" className="side-icons"></Anime>
                <div className='fl-col'>
                  <h3 className='mt-2 mb-1'>Save Money</h3>
                  <p className='short'>It saves a lot of money when you don&apos;t have to buy everything to get things done.</p>
                </div>
              </div>
              <div className='col-12 col-sm-4 fl-col  al-center text-center gap-1'>
                <Anime src="./images/plant.svg" alt="Plants Icon" className="side-icons"></Anime>
                <div className='fl-col'>
                  <h3 className='mt-2 mb-1'>Fight Climate Change</h3>
                  <p className='short'>And of course using resources in a mindful way is better for the climate.</p>
                </div>
              </div>
            </div>
          </div>

          <gap></gap>

          <div className='col-12 fl-col al-center'>
            <blockquote>That&apos;s why we created: <br /><mark>The Sharing Toolkit</mark></blockquote>
          </div>

          <gap></gap>

          <div className='col-12  fl-col '>
            <div className='bg bg-pink bg-radius'></div>
            <div className='fg fl-col'>
              <gap></gap>
              <div className='grid'>
                <div className='col-12 col-md-6'>   <h2>The Sharing Toolkit</h2>
                  <p className='short'>
                    The Sharing Toolkit will help you to build up strong communities and do something good for planet earth. </p>
                  <Link className='btn primary mt-1' href="/" >See how it works </Link>
                </div>
                <div className='col-12 col-md-6'><ExportedImage src="./images/sharingtoolkit.jpg" width={800} height={800}></ExportedImage></div>
              </div>
              <gap></gap>

            </div>


          </div>

          <gap></gap>

          <div className='col-12'>
            <h2 className='text-center mb-5'>How it works</h2>
            <div className='grid gap-4'>
              <div className='col-12 col-md-4 fl-row gap-1'>
                <Anime src="./images/orderbox.svg" alt="Friends Icon" className="side-icons"></Anime>
                <div className='fl-col'>
                  <h3>Order the Toolkit</h3>
                  <p>Containing the Sharing Book, the Sharing Board, invitations, and Stickers.
                    On every order we donate 5€ to GreenPeace</p></div>
              </div>
              <div className='col-12 col-md-4 fl-row gap-1'>
                <Anime src="./images/sharingboard.svg" alt="Friends Icon" className="side-icons"></Anime>
                <div className='fl-col'>
                  <h3>Place Sharing Board</h3>
                  <p>
                    Place the Board in an area where everyone of your surroundings can access it and place the sickers on it.
                    Good places for example are your neighbourhood or in
                    your workplace. </p></div>
              </div>
              <div className='col-12 col-md-4 fl-row gap-1'>
                <Anime src="./images/invite.svg" alt="Plants Icon" className="side-icons"></Anime>
                <div className='fl-col'>
                  <h3>Invite people</h3>
                  <p>Hand out the invitations, no matter if you give them directly to them or place it on their door/desk/mailbox.</p>                </div>
              </div>
              <div className='col-2'></div>
              <div className='col-12 col-md-4 fl-row gap-1'>
                <Anime src="./images/wait.svg" alt="Plants Icon" className=""></Anime>
                <div className='fl-col'>
                  <h3>Wait a little bit</h3>
                  <p>People who like the idea will start to place their sticker on the board and begin to talk about it.</p>                </div>
              </div>
              <div className='col-12 col-md-4 fl-row gap-1'>
                <Anime src="./images/startsharing.svg" alt="Plants Icon" className=""></Anime>
                <div className='fl-col'>
                  <h3>Start sharing</h3>
                  <p>Have fun and enjoy. To have an even better experience you could think about creating a Groupchat (WhatsApp, Telegram, ...)</p>             </div>
              </div>
            </div>
          </div>





          <div class='col-12 fl-col fl-wrap al-start ju-start'>
            <title>Hallo</title>
            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a>Example Link</a>
            <div className='fl-row al-start fl-wrap'>
              <button className='primary'> Primary Button</button>
              <button className=''> Secondary Button</button>

            </div>


          </div>
          <div class="col-12">
            <blockquote><mark>Sharing</mark> problems is the answer.</blockquote>

          </div>


          <div class="col-12"><button>Test</button>
            <div class="grid">
              <div class="col-12 col-md-8">I&apos;m a column 2/3 wide</div>
              <div class="col-12 col-md-4">I&apos;m a column 1/3 wide</div>
            </div>

            <object type="image/svg+xml" data={"./images/Keyshaperanimation.svg"}>

              <img src={"./images/Small Animation Endless.svg"} />

            </object>


            <DemoItems className="col-12"></DemoItems>

            <PostCarousel className="col-12" limit={3} posts={posts}></PostCarousel>
            <Sidebar className="col-12" />
          </div>

      </grid>

  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))





  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )




    const { data: frontmatter } = matter(markdownWithMeta)


    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      }
    } else {
      return null
    }

  })

  //  remove null in tempPosts 
  const posts = tempPosts.filter(
    post => {
      return post && post
    }
  )
  const jsonString = JSON.stringify(posts)
  fs.writeFileSync('./search.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }


}



