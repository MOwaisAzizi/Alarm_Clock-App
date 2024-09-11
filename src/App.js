import { useEffect, useState } from 'react'
import AudioPlayer from './AudioPlayer'

export default function App() {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [ischecked, setIsChecked] = useState(false)
  const[isStopInterval,setIsStopInterval] = useState(true)
  
  
  let date = new Date()
  const [getHour, setGetHour] = useState(date.getHours())
  const [getMinut, setGetMinut] = useState(date.getMinutes())
  
  const [showHour, setshowHour] = useState(null)
  const [showMin, setShowMin] = useState(null)
  
  useEffect(function () {
    // let interval
    
    // if(!isStopInterval){
      // console.log(date);
      
      let interval = setInterval(() => {
      date = new Date()
      setGetHour(date.getHours())
      setGetMinut(date.getMinutes())

      if(min==getMinut && hour==getHour && ischecked==true){
        clearInterval(interval)
        console.log('deleteing ');
        
      }
  }, 1000)
// }
//  return ()=> clearInterval
  }, [])


  function hourHandler(e) {
    setHour(Number(e.target.value))
  }

  function minHandler(e) {
    setMin(Number(e.target.value))
  }

  function showTimeHandler(e) {
    e.preventDefault()
    setIsChecked(true)
    setshowHour(hour)
    setShowMin(min)
    setIsStopInterval(false)

  }

  function stopHandler(e) {
    e.preventDefault()
    setIsChecked(false)
    setMin(0)
    setHour(0)
    setshowHour('')
    setShowMin('')
    setIsStopInterval(true)
  }
console.log(min,getMinut,hour,getHour,ischecked);

if(min==getMinut && hour==getHour && ischecked==true) console.log('equals');



  return (
    <div className='app'>
      <form>
        <div className='selectContainer'>
          <p>Hour</p>
          <select value={hour} onChange={hourHandler} >
            {
              Array.from({ length: 24 }, (_, i) => i).map(num => (
                <option value={num} key={num}>{String(num).padStart(2, 0)}</option>
              ))}
          </select>
        </div>
        <div className='selectContainer'>
          <p>Min</p>
          <select value={min} onChange={minHandler} style={{ marginLeft: '5px' }}>
            {
              Array.from({ length: 60 }, (_, i) => i).map(num => (
                <option value={num} key={num}>{String(num).padStart(2, 0)}</option>
              ))}
          </select>
        </div>

        {hour || min ? ((showHour || showMin && ischecked) || (hour == getHour && min == getMinut && ischecked)) ? <button onClick={stopHandler} className='stop'>Stop</button> :
          <button onClick={showTimeHandler} className='save'>Save</button> : null}
      </form>



      {
        (showHour || showMin) && <h2>{String(showHour).padStart(2, 0)}:{String(showMin).padStart(2, 0)}{showHour > 0 && showHour < 12 ? ' am' : ' pm'}</h2>
      }
      {
        ischecked && hour == getHour && min == getMinut && <AudioPlayer />
      }

    </div>

  )

}

