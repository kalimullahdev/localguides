import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import './Slider.css';
import { Box, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";




function Slider() {
  const [localGuideIntro] = useState(data);
  const [index, setIndex] = React.useState(0);
  const history = useHistory();

  function moveToReg(){
    history.push("/register");
  }
  
  useEffect(() => {
    const lastIndex = localGuideIntro.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, localGuideIntro]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);



  return (
    <section className="section">
      <div className="section-center">
        {localGuideIntro.map((person, personIndex) => {
          const { id, image, name, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === localGuideIntro.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>

      <Box m={3}>
        <Button variant="contained" color="primary" size="small"  onClick={ () => moveToReg() }  >
          Skip
        </Button>
      </Box>
      
    </section>
  );
}

export default Slider;
