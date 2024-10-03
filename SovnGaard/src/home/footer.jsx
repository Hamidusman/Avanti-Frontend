import React from "react";

function Footer(){
    return(
        <footer className=" px-2 md:px-20 bg-primary min-h-[180px] flex flex-col md:flex-row justify-between">
            <div className="gap mt-5 md:mt-2">
                <h1 className="text-[25px] font-bold mb-1">Hamid.io</h1>
                <p className="">©2024 Abdulhamid Usman. All Rights Reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-20">
            <div className="gap mt-5 md:mt-0">
                <h1 className="text-[22px] font-bold mb-1">Contacts</h1>
                <ul className="flex flex-col gap-1 text-[14]">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li>+234 8160803194</li>
                </ul>
            </div>
            <div className="gap mt-5 md:mt-0">
                <h1 className="text-[22px] font-bold mb-1">Tech Stack</h1>
                <ul className="flex flex-col gap-[1px] text-[14]">
                    <li>React</li>
                    <li>Django REST Framework</li>
                    <li>SupaBase</li>
                    <li>Tailwind</li>
                    <li>FramerMotion</li>
                    <li>Docker</li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer