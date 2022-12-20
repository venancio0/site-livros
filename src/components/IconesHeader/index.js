import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import './estilo.css'

const icones = [perfil, sacola]

function IconesHeader(){
    return(
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            ) ) }
        </ul>
    )
}

export default IconesHeader