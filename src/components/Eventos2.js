

import Eventos from './Eventos';
import Eventosbg from './Eventosbg'
import vid1 from '../img/Heavy_Club_Dance_Scene.mp4';
import vid2 from '../img/videorotar.mp4';
import vid3 from '../img/videodj.mp4';
import vid4 from '../img/videocopagirando.mp4';

const eventoslist = [

    {
        title: 'Evento1',
        ObjectId: 0,
        videoitem: 'img/Heavy_Club_Dance_Scene.mp4'


    },

    {
        title: 'Evento2',
        ObjectId: 1,
        videoitem: 'img/videorotar.mp4'


    },
    {
        title: 'Evento3',
        ObjectId: 2,
        videoitem: 'img/videodj.mp4'

    },
    {
        title: 'Evento4',
        ObjectId: 3,
        videoitem: 'img/videocopagirando.mp4'

    }

]

function Eventos2() {
    
    return (
       
            
            <section id="timeline">
                
                {eventoslist.map(function (x) {
                    return (
                        <div key={x.ObjectId} class="tl.item">
                            <Eventosbg vid = {x.videoitem} />
                            <Eventos evnt={x} />
                        </div>
                    )

                })
                }</section>
      
    )

}

export default Eventos2;



