import React from "react";
import { motion } from "framer-motion";
import Reveal from "../animations/reveal";

function Hero(){
    return(
        <section className="hero bg-cover bg-center
                            md:px-20 px-2
                            text-smoke  h-[100vh] font-bold  ">
                            
            <div className="flex flex-col text-center justify-center items-center pt-10">
                <Reveal>
                    
                    <motion.p
                    whileHover={{scale: 0.95}}
                    transition={{duration: 0.5}} className="text-[25px]  sm:text-[28px] md:text-[33px] lg:text-[40px]">Experience Something <span className="text-primary">Greater With Avanti</span></motion.p>
                    <p className="text-lg md:text-[22px] lg:text-[25px]">Secure a spot at our <span className="text-primary">First-Rate</span> Hotel.</p>

                </Reveal>
            <motion.a
            whileHover={{y: 5}}
            transition={{duration: 0.4}} className="animate-pulse px-5 py-3 mt-5 text-matte hover:bg-accent bg-primary rounded-md" href="http://">Reserve Now!</motion.a>
            </div>

            <div className="slides my-20 w-100 flex gap-10 justify-between">
                <div className="slide left-0 w-[340px] bg-primary h-[240px]
                    
                    bg-[url('assets\dubai-night-featured-1244x700.jpg')] bg-cover">

                </div>
                <div className="slide left-0 w-[340px] bg-primary h-[240px]
                    
                    bg-[url('assets\dubai-night-featured-1244x700.jpg')] bg-cover">

                </div>
            </div>

            <div className="slider w-100 ">
                
                <div >
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
