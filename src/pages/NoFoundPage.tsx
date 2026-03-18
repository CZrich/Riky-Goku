
import {redirect} from 'react-router-dom'
export function NoFoundPage() {
  return (
    <div>
        <p>404 </p>

        <p>no se encuentra en una pagina</p>
         <button onClick={()=> redirect("/")}>
            regresar
         </button>
    </div>
  );
}