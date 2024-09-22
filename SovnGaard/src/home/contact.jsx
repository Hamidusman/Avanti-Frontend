

function Contact(){

    return(
        <section className="md:px-20">

            <header className="text-2xl my-5 text-smoke font-bold">Our <span className="text-primary">Contacts</span></header>

            <form action="" method="post" className="text-smoke my-5
                                                     flex flex-col items-center">
                <div className="flex flex-col mb-4 ">
                    <label htmlFor="">Your Email</label>
                    <input type="email" className="rounded-md text-matte px-2 w-[330px]" />
                </div>

                <div className="flex flex-col mb-4 ">
                    <label htmlFor="">Your Message</label>
                    <textarea className="w-[330px] h-[270px] rounded-md text-matte p-1" name="" id=""></textarea>
                </div>
                <button type="submit" className="bg-gray hover:bg-primary hover:text-matte
                                                 px-7 py-1 mb-4 rounded-md 
                                                 w-[330px]">Send</button>
            </form>

        </section>
    )
    
}

export default Contact