import Reveal from "../animations/reveal";

function About(){
    return(
        <section className="about 
                             my-10 md:px-20  px-2">
            
        <heading className="text-smoke text-2xl my-5 font-bold">About <span className="text-primary">SovnGaard</span></heading>
        <Reveal>
            <div>
                <p className='text-smoke text-[16px] my-10' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quia temporibus ut molestias. Voluptatibus enim magnam, nostrum deleniti voluptatum velit ut unde laboriosam eum similique sunt laborum! Fugiat, aspernatur nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quia temporibus ut molestias. Voluptatibus enim magnam, nostrum deleniti voluptatum velit ut unde laboriosam eum similique sunt laborum! Fugiat, aspernatur nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quia temporibus ut molestias. Voluptatibus enim magnam, nostrum deleniti voluptatum velit ut unde laboriosam eum similique sunt laborum! Fugiat, aspernatur nesciunt.</p>
                <img src="" alt="" />
            </div>
        </Reveal>
        </section>
    )
}

export default About