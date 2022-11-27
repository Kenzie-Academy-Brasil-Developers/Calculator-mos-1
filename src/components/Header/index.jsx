import './style.css'
import NuKenzie from '../../img/NuKenzie.svg'

export const Header = ({Logout})=>{
    return(
        <div className='father-header'>
            <img src={NuKenzie}/>
            <button type='button' className='button-for-init' onClick={Logout}>Inicio</button>
        </div>
    )
}