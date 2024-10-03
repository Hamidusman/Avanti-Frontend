

import Hero from './hero'
import About from './about'
import Review from './review'
import Header from '../base-components/header'

import Contact from './contact'
import Footer from './footer'

function Home(){
    return(
        <>
            <Header />
            <main>
                
            <Hero />
            <About />
            <Review />
            <Contact />
            <Footer />
            </main>
        </>
    )
}

export default Home