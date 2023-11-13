import React from 'react';
import Card from '../Card';
import "./index.css"

const OurProducts = () => {
  const apiData = [
    {
      id: 1,
      img: "https://lh3.googleusercontent.com/yfjTMOe1-xmhvhsuqz2D0QoyuXvAlw7AEr8SMqrblnl6y2rCrGcUGt_pNMYSuvoA4HdDFUwGqxsq_tGPA7HAW9mnohS51g4-jHoytQ",
      title: "Card 1",
      desc: "Lorem ipsum dolor sit amet. 1",
    },
    {
      id: 2,
      img: "https://lh3.googleusercontent.com/ZZa1yngiVsLhPZhNHeC_t13c2BIdD4kuPG4zk9-01vcZxkocLlrXw5CBHFVR1YXHefV6pwjbwCvi5BWfQszOvQbG4r1Gp-psLwwa52JGzY5iTYrnUA",
      title: "Card 2",
      desc: "Lorem ipsum dolor sit amet. 2",
    },
    {
      id: 3,
      img: "https://lh3.googleusercontent.com/WZZW8egBznCpFPKboxMmcMfElahmhpHs59xdCK6vq_NOCE6p9SuZu9VEuivUqTYBjXugN9_5BIE95VzQ76rl9kYQVhKDheu5afEb",
      title: "Card 3",
      desc: "Lorem ipsum dolor sit amet. 3",
    },
  ];

  return (
    <>
      <section id='ourProducts'>
        <div className="container">
        <h1>Our Logos</h1>
        <div className="cards">
        {apiData.map((data) => (
        <Card key={data.id} img={data.img} title={data.title} desc={data.desc} />
      ))}
        </div>
        </div>
      </section>
      
    </>
  );
};

export default OurProducts;