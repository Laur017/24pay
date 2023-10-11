/* eslint-disable no-unused-vars */
import Back from '../assets/back.png'
import Logo from '../assets/logo.png'
import Bt from '../assets/bt.png'

export default function Header() {
  return (
    <div className='header-div'>
        <img src={Back} className='back-logo'/>
        <div>
            <img src={Logo} className='logo-24'/>
            <p>susținut de</p>
            <img src={Bt} className='bt-logo'/>
        </div>
    </div>
  )
}
