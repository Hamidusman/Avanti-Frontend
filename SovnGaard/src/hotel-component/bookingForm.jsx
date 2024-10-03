import React, { useState } from "react";
import Header from "../base-components/header";
import Reveal from "../animations/reveal";
import { useLocation } from "react-router-dom";

function BookingForm() {
  const [arrivalDate, setArrivalDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(0);
  const location = useLocation();
  const room = location.state?.room || {};
  
  const calculateDateDifference = (arrival, exit) => {
    const arrivalDate = new Date(arrival);
    const exitDate = new Date(exit);

    const timeDifference = exitDate.getTime() - arrivalDate.getTime();

    const differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    setDaysDifference(differenceInDays > 0 ? differenceInDays : 0);
  };

  const handleArrivalDateChange = (e) => {
    setArrivalDate(e.target.value);
    if (exitDate) {
      calculateDateDifference(e.target.value, exitDate);
    }
  };

  const handleExitDateChange = (e) => {
    setExitDate(e.target.value);
    if (arrivalDate) {
      calculateDateDifference(arrivalDate, e.target.value);
    }
  };

  return (
    <>
      <Header />
      <div className="w-[100%] flex justify-center">
        <Reveal>
          <form className="flex mt-5 gap-5 px-5 py-5 flex-col justify-center rounded-2xl text-smoke w-[360px] text-[14px]">
            <h1 className="text-center text-lg mb-5 font-bold text-[27px]">
              Make Payment For {room.title || "Room"}
            </h1>

            <div>
              <div className="flex flex-col">
                <label htmlFor="firstname" className="font-bold">
                  Firstname:{" "}
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="rounded-md focus:ring-1 focus:ring-primary transition mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
                />
              </div>

              <div className="flex flex-col mt-5">
                <label htmlFor="lastname" className="font-bold">
                  Lastname:{" "}
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="rounded-md focus:ring-1 focus:ring-primary transition mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Email:{" "}
              </label>
              <input
                type="email"
                id="email"
                className="rounded-md focus:ring-1 focus:ring-primary transition mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="arrival-date" className="font-bold">
                Expected Date Of Arrival:{" "}
              </label>
              <input
                type="date"
                id="arrival-date"
                className="rounded-md focus:ring-1 focus:ring-primary transition ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
                value={arrivalDate}
                onChange={handleArrivalDateChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="exit-date" className="font-bold">
                Expected Date Of Exit:{" "}
              </label>
              <input
                type="date"
                id="exit-date"
                className="rounded-md focus:ring-1 focus:ring-primary transition ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
                value={exitDate}
                onChange={handleExitDateChange}
              />
            </div>

            <p>
              Total nights:{" "}
              <span className="text-primary">
                {daysDifference > 0 ? daysDifference : "Invalid date range"}
              </span>
            </p>

            <p>
              Total Price:{" "}
              <span className="text-primary">
                {daysDifference > 0 ? `₦${room.price * daysDifference}` : "Invalid"}
              </span>
            </p>

            <button className="px-3 py-2 bg-primary rounded-md text-matte font-bold hover:bg-matte hover:text-primary transition duration-500">
              Make Payment
            </button>
          </form>
        </Reveal>
      </div>
    </>
  );
}

export default BookingForm;
