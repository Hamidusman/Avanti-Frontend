import React, { useState } from "react";
import Header from "../base-components/header";
import Reveal from "../animations/reveal";
import { useLocation } from "react-router-dom";

function BookingForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    roomtier: "",
    check_in: "",
    check_out: "",
  });

  const [errors, setErrors] = useState({});
  const [daysDifference, setDaysDifference] = useState(0);
  const location = useLocation();
  const room = location.state?.room;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const calculateDateDifference = (arrival, exit) => {
    const arrivalDate = new Date(arrival);
    const exitDate = new Date(exit);

    const timeDifference = exitDate.getTime() - arrivalDate.getTime();
    const differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    setDaysDifference(differenceInDays > 0 ? differenceInDays : 0);
  };

  const handleArrivalDateChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, check_in: value }));
    if (formData.check_out) {
      calculateDateDifference(value, formData.check_out);
    }
  };

  const handleExitDateChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, check_out: value }));
    if (formData.check_in) {
      calculateDateDifference(formData.check_in, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/booking/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          roomtier: room.id,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Booking successful:", result);
      } else {
        const errorData = await response.json();
        setErrors(errorData);
        console.error("Booking failed:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-[100%] flex justify-center">
        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="flex mt-5 gap-5 px-5 py-5 flex-col justify-center rounded-2xl text-smoke w-[360px] text-[14px]"
          >
            <h1 className="text-center text-lg mb-5 font-bold text-[27px]">
              Make Payment For {room.title || "Room"}
            </h1>
 
            <div className="flex flex-col">
              <label htmlFor="firstname" className="font-bold">
                Firstname:{" "}
              </label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="rounded-md focus:ring-1 focus:ring-primary transition mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
              />
              {errors.firstname && <p className="error">{errors.firstname}</p>}
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="lastname" className="font-bold">
                Lastname:{" "}
              </label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="rounded-md focus:ring-1 focus:ring-primary transition mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
              />
              {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Email:{" "}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-md focus:ring-1 focus:ring-primary transition mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="check_in" className="font-bold">
                Expected Date Of Arrival:{" "}
              </label>
              <input
                type="date"
                id="check_in"
                value={formData.check_in}
                onChange={handleArrivalDateChange}
                className="rounded-md focus:ring-1 focus:ring-primary transition ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
              />
              {errors.check_in && <p className="error">{errors.check_in}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="check_out" className="font-bold">
                Expected Date Of Exit:{" "}
              </label>
              <input
                type="date"
                id="check_out"
                value={formData.check_out}
                onChange={handleExitDateChange}
                className="rounded-md focus:ring-1 focus:ring-primary transition ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent"
              />
              {errors.check_out && <p className="error">{errors.check_out}</p>}
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

            <button
              className="px-3 py-2 bg-primary rounded-md text-matte font-bold hover:bg-matte hover:text-primary transition duration-500"
              type="submit"
            >
              Make Payment
            </button>
          </form>
        </Reveal>
      </div>
    </>
  );
}

export default BookingForm;
