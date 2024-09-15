import React from 'react';
import BackArrowIcon from '../assets/return-arrow.png';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate


export const BackArrow = () => {
  const navigate = useNavigate(); // Initialisation du hook useNavigate

  const handleBackClick = () => {
    navigate(-1); // Retour à la page précédente
  };

  return (
    <span className='' onClick={handleBackClick}>
        <img className='arrowm-city' alt="arrow" src={BackArrowIcon} />
    </span>
  );
};
