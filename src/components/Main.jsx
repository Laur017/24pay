/* eslint-disable no-unused-vars */
import Qr1 from '../assets/img-qr/qr1.png'
import Qr2 from '../assets/img-qr/qr2.png'
import {useState, useEffect} from 'react'

export default function Main() {
    const [secunde, setSecunde] = useState(13);
    const [qrState, setQrState] = useState(true);
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    
    if(minute - 20 < 0){
        minute = 60 + (minute - 20);
        hour-=1;
    } else if (minute - 20 < 10){
        minute = '0' + (minute-20)
    } else {
        minute = minute - 20
    }

    useEffect(()=>{
        if(secunde > -1){
            setTimeout(()=> setSecunde(secunde-1), 1000)
        } else {
            setSecunde(13)
            setQrState(!qrState)
        }
    },[secunde]) // dont forget to put secunde aici 

  return (
    <div className="main-div">
        <div className="content1">
            <img src={qrState ? Qr1 : Qr2} className='qr-image'/>
            <p>Cod control valabil {secunde} secunde.</p>
            <div className="valability">
                <div className="color"></div>
                <p>Valabilitate:</p>
            </div>
            <div className="progress-bar">
                <div className="prog"></div>
            </div>
            <div className="date-val">
                <p>{date}.{month}.{year}|{hour}:{minute}</p>
                <p>{date}.{month}.{year}|{hour + 2}:{minute}</p>
            </div>
        </div>
        <div className="content2">
            <div>
                <label>
                    <p>
                        Tip Bilet
                    </p>
                    <p>
                        Bilet urban 3 lei
                    </p>
                </label>
                
            </div>
            <div>
                <label>
                    <p>
                        Data achiziției
                    </p>
                    <p>
                    {date}.{month}.{year}|{hour}:{minute}
                    </p>
                </label>
                <label>
                    <p>
                        Nr. comandă
                    </p>
                    <p>
                        103275337
                    </p>
                </label>
            </div>
            
        </div>
    </div>
  )
}
