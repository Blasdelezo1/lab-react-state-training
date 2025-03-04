import './Counter.css'
import { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)




    const handleCounterUp = () => {
        setCounter(counter + 1)
    }

    const handleCounterDown = () => {

        if (counter === 0) {

            return
        }
        setCounter(counter - 1)
    }



    return (
        <div className="Counter">


            <p>You clicked {counter} times</p>

            <button onClick={handleCounterDown}> - </button>

            <button onClick={handleCounterUp}> + </button>
        </div>
    )
}

export default Counter