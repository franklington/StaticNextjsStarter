import Anime from "../components/Anime";
import { useRef, useEffect } from "react";
import { useInView,motion } from "framer-motion";
import AnimatedText from "./AnimatedText";


export default function Banner({className}) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return(
        <header ref={ref}  className={`grid bg-primary b-radius p-2 py-md-1 py-4 al-center ${className}` } >
              <div className="col-12 order-sm-2 col-sm-6">
                <Anime className="px-5" src="./images/hero.svg" alt="SharingClub" width={360} height={400} 
                        style={{
                            transform: isInView ? "none" : "translateX(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                          }}
                ></Anime>

            </div>
        
            <div className="col-12 order-sm-1 col-sm-6  mt-5 al-start ju-center">  
                <AnimatedText text={"Share the planet to own future. "} tag={"h1"} delayTime={0} animate={isInView} className="mb-1 text-center text-sm-left"></AnimatedText>
                <h1 ></h1>
                <AnimatedText staggered={false} delayTime={1} text={"The Sharing Club is about to connect people, build strong communties, fight waste and actively shape the world to a better place."} tag={"p"} animate={isInView} className="short  text-center text-sm-left"></AnimatedText>

                <motion.div className='fl-row ju-center ju-sm-start gap-1 mt-2 mb-4 mb-md-0'
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration:1,
                                delay:2.3
                            }}
                        
                >
                    <button className='primary mb-2'>Join us</button>
                    <button className="bg-white">Learn more</button>

                </motion.div>
            </div>
          
        </header>
    )
}