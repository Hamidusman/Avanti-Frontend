import React from "react";
import { motion } from "framer-motion";
import Reveal from "../animations/reveal";

function Hero(){
    return(
        <section className="hero bg-cover
                            md:px-20 px-2
                            text-smoke  h-[max-content] md:h-[500px] font-bold flex flex-col md:flex-row justify-between items-center ">
                            
            <div className="flex flex-col  pt-10 text-center md:text-left md:items-start items-center">
                <Reveal>
                    
                    <motion.p
                    whileHover={{}}
                    transition={{duration: 0.5}} className="text-[25px]  sm:text-[28px] md:text-[33px] lg:text-[35px]">Experience Something <span className="text-primary">Greater With Avanti</span></motion.p>
                    <p className="text-lg md:text-[22px] lg:text-[25px]">Secure a spot at our <span className="text-primary">First-Rate</span> Hotel.</p>

                </Reveal>
            <motion.a
            whileHover={{y: 5}}
            transition={{duration: 0.4}} className="animate-pulse px-5 py-3 mt-5 text-matte hover:bg-accent bg-primary rounded-md w-[fit-content]" href="http://">Reserve Now!</motion.a>
            </div>
            <Reveal>
            <img src="src\animations\Hotel Booking-amico (1).svg" alt="" className="w-[400px] h-[400px] md:mr-20 " /></Reveal>
        </section>
    )
}

export default Hero
