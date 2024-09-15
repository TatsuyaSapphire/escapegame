import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as HighVolumeIcon } from '../assets/high-volume.svg';
import { ReactComponent as MusicIcon } from '../assets/notemusic.svg'; 
import windSound from '../assets/city/wind.ogg'; 
import music from '../assets/city/music.mp3'; 
import sound from '../assets/castle/sound.mp3'; 
import love from '../assets/house/love.mp3'
import hallwayMusic from '../assets/castle/sound.mp3';
import { useLocation } from 'react-router-dom';

  // Mapping entre les routes et une musique unique
  const musicByRoute = {
    '/castle': sound, // Musique spécifique pour la page /castle
    '/hallway': hallwayMusic, // Musique spécifique pour la page /hallway
    '/loveu': love, // Musique par défaut pour la page d'accueil
    '/default': music, // Musique par défaut pour les autres pages
  };

export const Footer = () => {
  const windAudioRef = useRef(null); // Référence pour le son de vent
  const musicAudioRef = useRef(null); // Référence pour la musique

  const [isWindPlaying, setIsWindPlaying] = useState(false); // État pour savoir si le vent est joué
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // État pour savoir si la musique est jouée
  const location = useLocation(); // Utiliser useLocation pour détecter les changements d'URL


  useEffect(() => {
    if (musicAudioRef.current) {
      // Pause de la musique actuelle
      musicAudioRef.current.pause();

      // Récupérer la musique pour la route actuelle, ou la musique par défaut
      const selectedMusic = musicByRoute[location.pathname] || musicByRoute['/default'];

      // Changer la source de la musique
      musicAudioRef.current.src = selectedMusic;

      // Rejouer la musique si la musique était déjà en cours
      if (isMusicPlaying) {
        musicAudioRef.current.play().catch((error) => {
          console.log("Erreur lors de la lecture de la musique :", error);
        });
      }
    }
  }, [location, isMusicPlaying]); // Exécuter l'effet lorsque l'URL ou l'état de lecture change

  // Gestion du son d'ambiance (vent)
  const handleToggleWindSound = () => {
    if (windAudioRef.current) {
      if (isWindPlaying) {
        windAudioRef.current.pause(); // Mettre en pause le vent
      } else {
        windAudioRef.current.play().catch(error => {
          console.log("Erreur lors de la lecture du son du vent :", error);
        });
      }
      setIsWindPlaying(!isWindPlaying); // Inverser l'état du vent
    }
  };

  // Gestion de la musique
  const handleToggleMusicSound = () => {
    if (musicAudioRef.current) {
      if (isMusicPlaying) {
        musicAudioRef.current.pause(); // Mettre en pause la musique
      } else {
        musicAudioRef.current.play().catch(error => {
          console.log("Erreur lors de la lecture de la musique :", error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying); // Inverser l'état de la musique
    }
  };

  return (
    <footer className=''>
        {/* Ajout des éléments audio pour le vent et la musique */}
        <audio ref={windAudioRef} loop style={{ display: 'none' }}>
            <source src={windSound} type='audio/ogg' />
        </audio>
        <audio ref={musicAudioRef} loop style={{ display: 'none' }}></audio>

        <div className='row dashboard'>
            {/* Contrôle du son d'ambiance (vent) */}
            <div className='col'>
            <span onClick={handleToggleWindSound}>
                <HighVolumeIcon className={`icon-dashboard ${isWindPlaying ? 'active' : ''}`} />
            </span>
            </div>

            {/* Contrôle de la musique */}
            <div className='col'>
            <span onClick={handleToggleMusicSound}>
                <MusicIcon className={`icon-dashboard ${isMusicPlaying ? 'active' : ''}`} />
            </span>
            </div>
        </div>
    </footer>
  );
};
