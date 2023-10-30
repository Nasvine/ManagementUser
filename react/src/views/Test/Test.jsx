import React, { useEffect, useState } from 'react';
import On from './On';
import Off from './Off';



function Test() {

   const [count, setCount] = useState(1); 
   const [intep, setIntep] = useState(false); 

   const Appuyer = ()=>{
       setCount(count => count+1);
}

const Allumer = ()=>{
       setIntep(intep => !intep);
   }
   useEffect(()=>{
    console.log(intep);
    return () =>{
        console.log(intep);
        <On />
    }
   }, [])

   useEffect(()=>{
    return () =>{
        alert("Bienvenu sur mon site e-commerce");
    }
   }, [])



    return ( 
        <div>
            UseEffet
            {intep ? <Off /> : <On /> }
            

            <button onClick={Appuyer}> Appuyer sur le bouton {count}</button>
             <br />
             <br />
             <br />
            <button onClick={Allumer}> Click</button>
        </div>
     );
}

export default Test;