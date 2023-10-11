/* eslint-disable no-unused-vars */
import Qr1 from '../assets/img-qr/qr2.png'

export default function Main() {
  return (
    <div className="main-div">
        <div className="content1">
            <img src={Qr1} />
            <p>Cod control valabil 12 secunde.</p>
            <div className="valability">
                <div className="color"></div>
                <p>Valabilitate:</p>
            </div>
            <div className="progress-bar">
                <div className="prog"></div>
            </div>
            <div className="date-val">
                <p>09.10.2023|12:17</p>
                <p>09.10.2023|14:17</p>
            </div>
        </div>
        <div className="content2"></div>
    </div>
  )
}
