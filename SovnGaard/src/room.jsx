
import { motion, useScroll } from "framer-motion";
import './App.css'
function Room(){
    return(
        <>
            <div className="w-[100%] bg-smoke text-center font-bold text-[12px]">If you are impressed by my work, You could buy me my favorite biscuit (Fabs!) here</div>

            <section className="md:mx-10">
                <article className="mt-5 flex">
                    <div>
                        <h1 className="text-2xl mb-1 text-primary font-bold">Da Classica</h1>
                        <div className="w-[750px] h-[450px] bg-primary"></div>
                        
                    </div>

                    
                    <div className="ml-5 text-smoke font-bold">
                        <h1 className="text-2xl  text-primary">Room Details</h1> 
                        <ul className="">
                            <li className="mt-5">Beds: 1</li>
                            <li className="mt-5">Bathrooms: 1</li>
                            <li className="mt-5">Room Count: 2 Of 10</li>
                            <li className="mt-5">Rating: 3.6/5.0</li>
                            <li className="mt-5">Wi-Fi Access:</li>
                            <li className="mt-5">Pool Access:</li>
                            
                            <li className="mt-5">Sauna Room:</li>
                            <li className="mt-5">VIP Lounge:</li>
                            <li className="mt-5">Spa Room:</li>  
                            <div className="mt-5">
                                <a href="http://" className="px-5 py-3 bg-gray
                                                             rounded-md
                                                             hover:bg-primary hover:text-matte">Book Now</a>
                            </div>
                        </ul>
                    </div>

                </article>
                

                <section >
                    <header  className="text-primary text-2xl my-5 font-bold text-primary">Description</header>
                    <p className="text-smoke">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum nam illum, at ut labore adipisci facilis nobis sequi. Odit similique maiores ratione fugiat deleniti quia totam ab iure accusantium!</p>
                </section>
            </section>
        </>
    )
}

export default Room