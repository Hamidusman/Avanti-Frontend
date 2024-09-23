import Reveal from "../animations/reveal"

function Review(){
    return(
        <section  className=" 
                             my-10 md:px-20     ">

            <header className="  text-2xl my-5 text-smoke font-bold">What The <span className="text-primary">Numbers</span> Say</header>

            <div className="cotainers my-10 flex flex-wrap gap-5 justify-center text-matte">
                <Reveal>
                <div className="stat-box w-[190px] h-[170px]  bg-primary
                                flex flex-col justify-center items-center">
                    <h1 className="text-[45px]">23</h1>
                    <p>Total Reservations</p>
                </div>
                </Reveal>
                <Reveal>
                <div className="stat-box w-[190px] h-[170px]  bg-primary
                                flex flex-col justify-center items-center">
                    <h1 className="text-[45px]">23</h1>
                    <p>Total Reservations</p>
                </div>
                </Reveal>
                <Reveal>
                <div className="stat-box w-[190px] h-[170px]  bg-primary
                                flex flex-col justify-center items-center">
                    <h1 className="text-[45px] ">23</h1>
                    <p>Total Reservations</p>
                </div>
                </Reveal>
                <Reveal>
                <div className="stat-box w-[190px] h-[170px]  bg-primary
                                flex flex-col justify-center items-center">
                    <h1 className="text-[45px]">23</h1>
                    <p>Total Reservations</p>
                </div>
                </Reveal>
            </div>

            
            <heading className="text-smoke  text-2xl my-5 font-bold">Customers <span className="text-primary">Feedback</span></heading>

            <div className="flex h-100 w-100  justify-around flex-wrap">
                
                <Reveal>
                        
                    <div className="review-card w-[260px] h-[290px] bg-gray text-smoke text-[17px] text-center
                                    flex flex-col px-2 py-3 mt-5 justify-between items-center
                                    rounded-lg">

                        <span>ksidwpsonsdwsldldwdw
                            dwddwsdwdds
                            sdwdwwwwwwassss
                            ssssssssssssssssssss
                        </span>

                        <h5>Hamid Usman</h5>

                    </div>
                </Reveal>
                <Reveal>
                        
                    <div className="review-card w-[260px] h-[290px] bg-gray text-smoke text-[17px] text-center
                                    flex flex-col px-2 py-3 mt-5 justify-between items-center
                                    rounded-lg">

                        <span>ksidwpsonsdwsldldwdw
                            dwddwsdwdds
                            sdwdwwwwwwassss
                            ssssssssssssssssssss
                        </span>

                        <h5>Hamid Usman</h5>

                    </div>
                </Reveal>
                <Reveal>
                        
                    <div className="review-card w-[260px] h-[290px] bg-gray text-smoke text-[17px] text-center
                                    flex flex-col px-2 py-3 mt-5 justify-between items-center
                                    rounded-lg">

                        <span>ksidwpsonsdwsldldwdw
                            dwddwsdwdds
                            sdwdwwwwwwassss
                            ssssssssssssssssssss
                        </span>

                        <h5>Hamid Usman</h5>

                    </div>
                </Reveal>
                
            </div>


        </section>
    )
}

export default Review