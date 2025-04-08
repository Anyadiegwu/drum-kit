import React from 'react'
import style from "../style/DrumKit.module.css";


function DrumKit() {




    document.addEventListener("keypress", function(KeyboardEvent){
        MakeSound.hit(KeyboardEvent.key)
        console.log(KeyboardEvent.key)
    })

    const handleClick = (e) => {
    const value = e.target.value
    MakeSound.hit(value)

   } 

class makeSound {
 
    hit(key){
        switch (key) {
            case "w":
                let tom1 = new Audio("../sounds/tom-1.mp3")
                tom1.play()
                break;
            case "a":
                let tom2 = new Audio("../sounds/tom-2.mp3")
                tom2.play()
                break;
            case "s":
                let tom3 = new Audio("../sounds/tom-3.mp3")
                tom3.play()
                break;
            case "d":
                let tom4 = new Audio("../sounds/tom-4.mp3")
                tom4.play()
                break;
            case "j":
                let snare = new Audio("../sounds/snare.mp3")
                snare.play()
                break;
            case "k":
                let kick = new Audio("../sounds/kick-bass.mp3")
                kick.play()
                break;
            case "l":
                let crash = new Audio("../sounds/crash.mp3")
                crash.play()
                break;
            default:
                break;
        }
    }
}
const MakeSound = new makeSound()

  return (
    <div className={style.body}>
        <h1 id={style.title}>Drum Kit</h1>
        <div className={style.set}>
            <button className={`${style.w} ${style.drum}`} value="w" onClick={handleClick}>w</button>
            <button className={`${style.a} ${style.drum}`} value="a" onClick={handleClick}>a</button>
            <button className={`${style.s} ${style.drum}`} value="s" onClick={handleClick}>s</button>
            <button className={`${style.d} ${style.drum}`} value="d" onClick={handleClick}>d</button>
            <button className={`${style.j} ${style.drum}`} value="j" onClick={handleClick}>j</button>
            <button className={`${style.k} ${style.drum}`} value="k" onClick={handleClick}>k</button>
            <button className={`${style.l} ${style.drum}`} value="l" onClick={handleClick}>l</button>
        </div>
    </div>
  )
}
export default DrumKit