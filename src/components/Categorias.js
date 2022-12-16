

import Categoria from './Categoria';

const categorias = [

    {
        title:'Categoria1',
        ObjectId: 0,
        

    },

    {
        title:'Categoria2',
        ObjectId: 1


    },
    {
        title:'Cartegoria3',
        ObjectId: 2

    }

]

function Categorias(){
    return(
        <div class="categorias">

         {categorias.map(function(x){
            return(
                    <div key={x.ObjectId} class="card">
                        <Categoria cart={x}  />
                    </div>
                 )

             })  
         }</div> 

         )

}

export default Categorias;



