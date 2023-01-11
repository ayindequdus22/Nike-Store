import React from 'react';
import {  Hero, Sales, FlexContent, Stories, Footer,Navbar,Cart} from './components';
import { heroapi,highlight,popularsales,sneaker,topratesales,story,footerAPI } from './data/data.js';

const App = () => {
  return (
   <>
  <Navbar/>
  <Cart/> 
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
<FlexContent highlight={highlight} ifExists/> 
  <Sales endpoint={topratesales}/>
<FlexContent highlight={sneaker} />
<Stories story={story}/>
      </main>
<Footer footerAPI={footerAPI}/>
   </>
  )
}

export default App;