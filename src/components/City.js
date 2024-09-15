import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import windSound from '../assets/city/wind.ogg';
import music from '../assets/city/music.mp3';
import arrow from '../assets/right-arrow.png';

export const City = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        // Tentative de lecture du son
        audioRef.current.play().catch(error => {
          console.log("La lecture automatique a été bloquée par le navigateur.", error);
        });
      }
    };

    // Lancer la lecture automatiquement lorsque le composant est monté
    playAudio();

  }, []);

  const handleArrowClick = () => {
    navigate('/loveu')
  };

  const handleArrowCastle = () => {
    navigate('/hallway')
  };

  return (
    <div className='sky'>
      <section className='city-bg'>
        {/* Audio avec des sources multiples */}
        <audio ref={audioRef} autoPlay loop style={{ display: 'none' }}>
          <source src={windSound} type='audio/ogg' />
          <source src={music} type='audio/mp3' />
        </audio>
        {/* Flèches */}
        <span className='' onClick={handleArrowClick}>
          <img className='arrowl-city' alt="arrow" src={arrow} />
        </span>
        <span className='' onClick={handleArrowCastle}>
          <img className='arrowm-city' alt="arrow" src={arrow} />
        </span>
        <span className='' href="#">
          <img className='arrowr-city' alt="arrow" src={arrow} />
        </span>
      </section>
    </div>
  );
};
