
import {Link} from 'react-router-dom'

export  default function  NoFoundPage() {
  return (
    <div>
        <p>404 </p>

        <p>no se encuentra en una pagina</p>
         <Link to ="/"> regresar
         </Link>
            
    </div>
  );
}