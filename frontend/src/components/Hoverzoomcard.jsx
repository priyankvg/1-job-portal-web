import React from 'react';
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled component for the card container
const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slightly zooms in the card */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increases shadow on hover */
  }
`;

// Styled component for the card image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1); /* Zoom in the image on hover */
  }
`;

// Styled component for the card content
const CardContent = styled.div`
  padding: 16px;
  text-align: center;

  h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
    color: #333;
  }

  p {
    margin: 0;
    color: #777;
    font-size: 16px;
  }
`;

const HoverZoomCard = () => {
  return (
    <div onClick={()=> useNavigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer ' >
        </div>
  );
};

export default HoverZoomCard;
