import ExportedImage from "next-image-export-optimizer";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";


export default function Anime({className,src, alt, width= 1000,height=500, style}) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView]);
    return(
        
         <object ref={ref}  type="image/svg+xml" data={src} className={`anime ${className}` } width={width} height={height} alt={alt} style={style} >
         <ExportedImage src={src} width={width} height={height} alt={alt} />
        </object>
    )
}