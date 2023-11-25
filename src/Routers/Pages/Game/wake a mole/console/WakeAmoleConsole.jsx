import React, { memo, useState } from 'react'
import './console.css'
import * as $ from 'jquery';
import sound from '../../../../../../src/audio/countdown.mp3'
import sound1 from '../../../../../audio/correct.mp3'
import sound2 from '../../../../../audio/entry.mp3'
import sound3 from '../../../../../audio/cheer.mp3'

const WakeAmoleConsole = ({ states }) => {

  const {  start, setstart, countdown, setcountdown ,score, setScore,playername,scoreboard,setscorebord} =states

  const [hide, setHide] = useState(false);
  const [display, setdisplay] = useState(false);
  const [time, setTime] = useState(0);

  const Countdown = function () {
    setTimeout(() => {
      new Audio(sound).play()
    }, 700)
    var counter = 3;
    var timer = setInterval(function () {
      $("#countdown").remove();


      var countdown = $(
        '<span id="countdown">' + (counter === 0 ? "Fight" : counter) + "</span>"
      );
      countdown.appendTo(".container");
      setTimeout(() => {
        if (counter > -1) {
          $("#countdown").css({ "font-size": "40vw", opacity: 0 });
        } else {
          $("#countdown").css({ "font-size": "10vw", opacity: 50 });
        }
      }, 20);
      counter--;

      if (counter === -1) {
        clearInterval(timer);
        setTimeout(() => {
          setHide(!hide)
          setdisplay(!display)
          $("#countdown").remove();
          startgame()
        }, 1000)
      }
    }, 1000);
  };

  if (countdown) {
    Countdown();
    setcountdown(!countdown)

  }

  const insert = document.getElementsByClassName('cells')

  const startgame = () => {
    let check = 0;
    let timer = 0;


    console.log(check, insert);


    let stop = setInterval(() => {

      insert[check].classList.remove('push');



      let randomValue = Math.floor(Math.random() * 9);
      check = randomValue;
      insert[randomValue].classList.add('push')
      new Audio(sound2).play()

      for (let index of insert) {
        index.addEventListener('click', () => {

          if (index.classList.contains('push')) {
            new Audio(sound1).play();
            setScore((score) => score + 1);
            index.classList.remove('push');
          }
          // else {
          //   new Audio(sound2).play();
          // }

        })
      }
      timer++;
      if (timer === 30) {
        clearInterval(stop)
        setstart(!start)
        setdisplay(false)
        setscorebord(!scoreboard)
        new Audio(sound3).play()
      }
      setTime((time) => time + 1);

    }, 1000)
  }
 
  return (
    <>


      <div className="container">
        {display &&
          <div className="display">

            <div className='time'>Time : {time}</div>
            <div className='score'>{playername} : {score}</div>

          </div>}
        {(hide ?
          <div className="cell-container row row-cols-3 background">
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
            <div className="cells"></div>
          </div>
          : <div className="container cell-container" ></div>)
        }
      </div>
    </>
  )
}

export default memo(WakeAmoleConsole)