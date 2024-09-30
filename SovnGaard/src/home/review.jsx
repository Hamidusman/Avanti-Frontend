import Reveal from "../animations/reveal"
import { useState, useEffect } from "react"
import axios from 'axios'
import NumberCount from "../animations/numberCount" 

function Review() {
    const [stats, setStats] = useState({ bookings: 0, total_rooms: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/stat/kkk/');
                setStats({
                    bookings: response.data.bookings,
                    total_rooms: response.data.total_rooms,
                });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchStats();
    }, []);

    const statItem = [
        {label: 'Total Bookings', value: stats.bookings},
        {label: 'Rooms', value: stats.total_rooms},
    ]

    return(
        <section  className=" 
                             my-10 md:px-20  px-2     ">

            <header className="  text-2xl my-5 text-smoke font-bold">What The <span className="text-primary">Numbers</span> Say</header>

            <div className="cotainers my-10 flex flex-wrap gap-5 justify-center text-matte">
                {statItem.map((item, index) =>
                <Reveal key={index}>
                    <div className="stat-box w-[190px] h-[170px]  bg-primary
                                    flex flex-col justify-center items-center">
                        <h1 className="text-[45px]">
                            {item.value}
                        </h1>
                        <p>{item.label}</p>
                    </div>
                </Reveal>
                )}
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