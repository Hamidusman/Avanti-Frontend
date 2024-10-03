import React from "react";
import Header from "../base-components/header";
import Reveal from "../animations/reveal";
function BookingForm(){
    return(
    <>
    
        <Header />
        <div className="w-[100%] flex justify-center">
            <Reveal>
            <form className="flex mt-5 gap-5 px-5 py-5 flex-col justify-center rounded-2xl  text-smoke w-[360px] md:w-[auto]
             text-[14px]">
                <h1 className="text-center text-lg mb-5 font-bold text-[27px]">Make Payment For Da Classica</h1>
            
            <div className="">
                <div className="flex flex-col">
                    <label htmlFor="" className="font-bold">Firstname: </label>
                    <input type="text" className="rounded-md focus:ring-1 focus:ring-primary  transition
                    mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent" />
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="font-bold">Lastname: </label>
                    <input type="text" className="rounded-md focus:ring-1 focus:ring-primary  transition
                    mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent" />
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="" className="font-bold">Email: </label>
                <input type="email" className="rounded-md focus:ring-1 focus:ring-primary  transition
                    mt-2 ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">Expected Date Of Arrival: </label>
                <input type="date" className="rounded-md focus:ring-1 focus:ring-primary  transition
                    ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">Expected Date Of Exit: </label>
                <input type="date" className="rounded-md focus:ring-1 focus:ring-primary  transition
                    ease-in-out focus:outline-none border-[1px] focus:border-transparent border-dark-200 duration-150 py-1 px-2 w-full bg-transparent" />
            </div>
            <p>Room price X Total Nights = <span className="text-primary">"Total Price (Non-refundable)"</span></p>

            <button className="px-3 py-2 bg-primary rounded-md text-matte font-bold hover:bg-matte hover:text-primary transition duration-500">Make Payment</button>
                

            </form></Reveal>
        </div>
    </>
    )
}

export default BookingForm 