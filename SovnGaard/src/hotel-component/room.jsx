
import { motion, useScroll } from "framer-motion";
import axios from "axios";
import Modal from "../assets/modal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function Room(){

    const {id} = useParams();
    const [ room, setRoom ] = useState(null)
    const[openModal, setOpen] = useState(false)

    useEffect(() => {
        const fetchRoom = async () => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/hotel/${id}`)
                setRoom(response.data)
            }
            catch(error){
                console.error('Error fetching data', error)
            }
        }
        fetchRoom()
    }, [id])

    if (!room) return <h1>Loading....</h1>

    const close = () => setOpen(false)
    const open = () => setOpen(true)
    
    return(
        <>
            <div className="w-[100%] bg-smoke text-center font-bold text-[12px]">If you are impressed by my work, You could buy me my favorite biscuit (Fabs!) here</div>

            <section className="md:mx-10">
                <article className="mt-5 flex lg:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl mb-1 text-primary font-bold">{room.title}</h1>
                        <div className="w-[350px] h-[230px]
                        flex-wrap wrap
                                        sm:bg-gray sm:w-[580px] sm:h-[320px]
                                        md:w-[710px] md:h-[450px]
                                         bg-primary"></div>
                        
                    </div>

                    
                    <div className="lg:ml-5 mt-3 lg:mt-0 text-smoke flex lg:flex-col flex-col-reverse font-bold">
                        <div className="">
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
                            </ul>
                        </div>
                        <div className="my-5">
                            <motion.button
                            whileHover={{ scale:1.1 }}
                            whileTap={{ scale:0.9 }}
                            className="px-5 py-3 bg-gray 
                                       rounded-md
                                       hover:bg-primary
                                       hover:text-matte"
                            onClick={() => (openModal ? close() : open())}
                            >Launch</motion.button>

                            {openModal && <Modal openModal={openModal} handleClose={close} />}
                        </div>
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