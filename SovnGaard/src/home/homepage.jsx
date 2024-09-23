

import Hero from './hero'
import About from './about'
import Review from './review'
import Header from '../base-components/header'

import Contact from './contact'

function Home(){
    return(
        <>
            <Header />
            <main>
                
            <Hero />
            <About />
            <Review />
            <Contact />
            </main>
        </>
    )
}

export default Home