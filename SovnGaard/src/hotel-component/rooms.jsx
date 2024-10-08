import { useState, useEffect } from "react";
import Header from '../base-components/header'
import axios from "axios";

function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/hotel'); // Adjust endpoint as needed
                setRooms(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <>
        <Header />
        <section className="text-smoke px-20">
            <h1 className="text-[35px] text-center mt-10">Take A Look At Our Available Rooms</h1>

            <div className="my-10 flex gap-10 justify-center flex-wrap">
                {rooms.map((room) => (
                    <a href={`/hotel/${room.id}`} key={room.id} className="tiers-container transition duration-500 ease-in-out">
                        <div className="img w-[340px] h-[280px] bg-primary my-1"></div>
                        <div className="texts">
                            <p className="mb-1">Title: {room.title}</p>
                            <p className="mb-1">Price: <span className="font-bold">N{room.price}/Night</span></p>
                            <p className="mb-1">Available Rooms: <span className="font-bold">{room.available_rooms}</span></p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
        </>
    );
}

export default Rooms;
