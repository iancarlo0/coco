

import Carta from './Card';

const card = [

    {
        title:'Categoria1',
        ObjectId: 0

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

function categorias(){
    return(
        <div class="card">

         {card.map(function(categ){
            return(
                      <div class="card-bg">
                        <Carta categ={categ}  />
                    </div>
                 )

             })  
         }</div> 
    )


}

export default categorias;



