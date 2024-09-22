import React from "react";

function Hero(){
    return(
        <section className="hero bg-cover bg-center
                            md:px-20
                            text-smoke  h-[100%] font-bold  ">
                            
            <div className="flex flex-col justify-center items-center pt-10">
            <p className="text-[36px]">Experience Something <span className="text-primary">Greater With SovnGaard</span></p>
            <p className="text-2xl">Secure a spot at our <span className="text-primary">First-Rate</span> Hotel.</p>

            <a className="px-5 py-3 mt-5 text-matte hover:bg-accent bg-primary rounded-md" href="http://">Reserve Now!</a>
            </div>

            <div className="slides my-20 flex justify-between">
                <div className="slide w-[350px] bg-primary h-[270px]
                                bg-[url('assets\dubai-night-featured-1244x700.jpg')] bg-cover">

                </div>
                <div className="slide w-[350px] bg-primary h-[270px]
                                bg-[url('assets\dubai-night-featured-1244x700.jpg')] bg-cover">

                </div>
                <div className="slide w-[350px] bg-primary h-[270px]
                                bg-[url('assets\dubai-night-featured-1244x700.jpg')] bg-cover">

                </div>
            </div>
        </section>
    )
}

export default Hero