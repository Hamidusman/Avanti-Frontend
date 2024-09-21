import {React, useState} from "react";

function Header(){

    return(
        <header className="py-4 text-matte sticky top-0 md:px-20 py-4 bg-primary
                           flex justify-between items-center rounded-sm shadow-inner-lg">
            <h1 className="text-[32px]">SG</h1>
            <h1 className="text-[32px]">Sovn<span className="text-primary">Gaard</span></h1>
            <ul className="flex text-[19px] gap-2">
                <li>kkd</li>
                <li>kkd</li>
                <li>kkd</li>
            </ul>

        </header>
    )
}
export default Header