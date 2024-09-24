import React from "react";
import Header from "../base-components/header";
import Reveal from "../animations/reveal";
function BookingForm(){
    return(
    <>
    
        <Header />
        <div className="w-[100%] flex justify-center">
            <Reveal>
            <form className="flex mt-5 gap-5 px-5 py-5 flex-col justify-center rounded-3xl text-smoke w-[300px]
             text-[14px]">
                <h1 className="text-center text-lg mb-5 font-bold">Make Payment For Da Classica</h1>
            
            <div className="">
                <div className="flex flex-col">
                    <label htmlFor="" className="font-bold">Firstname: </label>
                    <input type="text" className="bg-transparent form-input text-[14px]" />
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="font-bold">Lastname: </label>
                    <input type="text" className="bg-transparent form-input text-[14px]" />
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="" className="font-bold">Email: </label>
                <input type="email" className="bg-transparent form-input text-[14px]" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">Expected Date Of Arrival: </label>
                <input type="date" className="bg-transparent border-[2px]
                border-primary p-1
                rounded-md w-[fit-content] text-[14px]" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">Total Nights: </label>
                <input type="number" className="bg-transparent border-primary border-[2px] rounded-md text-[14px] w-[40px] " />
            </div>
            <p>Room price X Total Nights = <span className="text-primary">"Total Price (Non-refundable)"</span></p>

            <button className="px-3 py-2 bg-primary rounded-md text-matte font-bold hover:bg-matte hover:text-primary transition duration-500">Make Payment</button>
                

            </form></Reveal>
        </div>
    </>
    )
}

export default BookingForm 