import NuKenzie from   '../../img/NuKenzie-init.svg'
import { Button } from '../Button'
import './style.css'
import image from '../../img/GroupInit.png'


export const Init = ({isLoggedIn,Start,Logout})=>{

    return(
        <main className='main' >
            <div className='main-init'>
                <section className='section-dads'>
                    <img src={NuKenzie} alt="" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <p>de forma rápida e segura</p>
                    <Button Start={Start}/>
                </section>
                <section className='section-image'>
                    <img src={image} alt="" />
                </section>
                
            </div>
        </main>
    )
}