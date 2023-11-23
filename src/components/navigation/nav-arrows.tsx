import {useLocation, useNavigate} from "react-router-dom";
import "./nav-arrows.css"
import {motion} from "framer-motion";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function NavArrows() {

    const location = useLocation()
    const navigate = useNavigate();

    const routes = ["/home","/contact-me","/portfolio"]

    function handleLeftClick() {
        console.log(location.pathname)
        let index = routes.indexOf(location.pathname)
        if(index == 0) navigate("/portfolio")
        else navigate(routes[index - 1])
    }

    function handleRightClick() {
        console.log(location.pathname)
        let index = routes.indexOf(location.pathname)
        if(index == 2) navigate("/home")
        else navigate(routes[index + 1])
    }

    return(
        <>
            <div className="example-container nav-arrow left">
                <motion.div initial={{opacity: 0.6}} whileHover={{ scale: 1.2, opacity: 0.8 }} whileTap={{ scale: 0.8, opacity: 1 }} onClick={handleLeftClick}>
                    <ArrowBackIosIcon/>
                </motion.div>
            </div>
            <div className="example-container nav-arrow right">
                <motion.div initial={{opacity: 0.6}} whileHover={{ scale: 1.2, opacity: 0.8 }} whileTap={{ scale: 0.8, opacity: 1 }} onClick={handleRightClick}>
                    <ArrowForwardIosIcon/>
                </motion.div>
            </div>
        </>

    )
}