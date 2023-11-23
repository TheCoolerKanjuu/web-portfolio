import {motion} from "framer-motion"

export const Portfolio = () => {
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
            <p>portfolio page</p>
        </motion.div>)
}