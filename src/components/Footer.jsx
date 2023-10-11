/* eslint-disable no-unused-vars */
import Home from '../assets/home_a.png'
import Menu from '../assets/menu.png'
import Scan from '../assets/scanner.png'
import Bag from '../assets/bag.png'
import Wallet from '../assets/wallet.png'


export default function Footer() {
  return (
    <div className="footer-div">
        <label>
            <img src={Home} />
            <p className='akas-p'>Acasă</p>
        </label>
        <label>
            <img src={Menu} />
            <p>Servicii</p>
        </label>
        <label className='scan-label'>
            <img src={Scan} />
            <p>Scanează</p>
        </label>
        <label>
            <img src={Bag} />
            <p>Tranzacții</p>
        </label>
        <label>
            <img src={Wallet} />
            <p>Portofel</p>
        </label>
    </div>
  )
}
