import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../base-components/header";

function Room() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [amenities, setAmenities] = useState([]);

  // Fetch room data
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/hotel/${id}`);
        setRoom(response.data);
      } catch (error) {
        console.error("Error fetching room data", error);
      }
    };
    fetchRoom();
  }, [id]);

  // Fetch amenities data from an API
  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/amenities"); // Replace with actual API endpoint for amenities
        setAmenities(response.data);
      } catch (error) {
        console.error("Error fetching amenities data", error);
      }
    };
    fetchAmenities();
  }, []);

  if (!room) return <h1>Loading....</h1>;

  // Map amenity IDs from the room to the actual amenity names
  const getAmenityName = (id) => {
    const amenity = amenities.find((a) => a.id === id);
    return amenity ? amenity.name : "Unknown Amenity";
  };

  return (
    <>
      <Header />
      <div className="w-[100%] bg-smoke text-center font-bold text-[12px]">
        If you are impressed by my work, You could buy me my favorite biscuit (Fabs!) here
      </div>

      <section className="mx-2 md:mx-10">
        <article className="mt-5 flex lg:flex-row flex-col">
          <div>
            <h1 className="text-2xl mb-1 text-primary font-bold">{room.title}</h1>
            <div
              className="w-[350px] h-[230px]
              flex-wrap wrap
              sm:bg-gray sm:w-[580px] sm:h-[320px]
              md:w-[710px] md:h-[450px]
              bg-primary"
            ></div>
          </div>

          <div className="lg:ml-5 mt-3 lg:mt-0 text-smoke flex lg:flex-col flex-col-reverse font-bold">
            <div className="">
              <h1 className="text-2xl text-primary">Room Details</h1>
              <ul className="">
                <li className="mt-5">Room Type: {room.room_type}</li>
                <li className="mt-5">Bathrooms: 1</li>
                <li className="mt-5">
                  Room Count: {room.available_rooms} of {room.available_rooms}
                </li>
                <li className="mt-5">Rating: (WIP)</li>
                <li className="mt-5">Amenities:</li>
                <ul className="ml-5">
                  {room.Amenities.map((amenityId) => (
                    <li key={amenityId}>- {getAmenityName(amenityId)}</li>
                  ))}
                </ul>
              </ul>
            </div>
            <div className="my-5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-5 py-3 bg-gray rounded-md hover:bg-primary hover:text-matte"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </article>

        <section>
          <header className="text-primary text-2xl my-5 font-bold text-primary">
            Description
          </header>
          <p className="text-smoke">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum nam illum, at ut labore adipisci facilis nobis sequi. Odit similique maiores ratione fugiat deleniti quia totam ab iure accusantium!
          </p>
        </section>
      </section>
    </>
  );
}

export default Room;
