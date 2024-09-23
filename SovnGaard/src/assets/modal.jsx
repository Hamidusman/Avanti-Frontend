import { motion } from "framer-motion";
import '../App.css'
import Backdrop from "./backdrop";

const Modal = ({handleClose, text }) =>{
    return(
        <Backdrop onClick={handleClose}>
            <motion.div className="text-primary"
            onClick={(e) = e.stopPropagation()}>kksd

            </motion.div>
        </Backdrop>
    )
}

export default Modal