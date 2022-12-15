
import Cardbg from './Cardbg';

function car(prop){

    const card = prop.card


    
    return(
                <>
                
       <Cardbg />
            <div class="dark-bg"></div>

        <h2>{prop.title}</h2>

         <p>
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Sapiente tenetur dicta cupiditate.
            </p>

            <button>Ver más</button>

        </>


    
    )
}


export default car;