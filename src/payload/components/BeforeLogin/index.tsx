
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'
import '../../../tailwind.css';


const BeforeLogin: React.FC = () => {
  return (
    <div>
      <div className="text-center">
      <h1 className={`mx-auto max-w-4xl   mb-8 font-display font-medium tracking-tight text-slate-900 text-5xl lg:text-5xl   md:text-5xl sm:text-4xl `} id="login-tilte-hyd">
                ANTIQUITÄTEN <br></br><span className={`relative text-red-500     lg:text-7xl sm:text-6xl xs:text-5xl text-7xl font-extralight tracking-tight`} id="login-subtilte-hyd">MARKUS KRAL </span> </h1>
        
        <p className='text-2xl text-black'>   Falls Sie Hilfe brauchen - einfach per Whatsapp an den HYD - Support eine Nachricht senden: </p>

      <div className="flex justify-center mb-12"> 
          <div className="text-black text-green-500 hover:text-green-500 m-2 mx-12 text-2xl font-display font-light"> +43 670 2024825 </div>
      
     </div> 
      
      </div>
    </div>
  )
}

export default BeforeLogin
