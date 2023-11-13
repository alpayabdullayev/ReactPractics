import React from 'react';
import FoodsCard from '../FoodsCard';
import "./index.css"

const Blog = () => {
  const arr = [
    {
      id: 1,
      img: "https://imageproxy.wolt.com/venue/627397d0084a6f9ee7dc00d6/dd41adf0-cd22-11ec-bdae-faf1757ec267_img_1138.jpg",
      date: "28 yanvar",
      title: "Doner'de Xumarit"
    },
    {
      id: 2,
      img: "https://imageproxy.wolt.com/venue/627397d0084a6f9ee7dc00d6/dd41adf0-cd22-11ec-bdae-faf1757ec267_img_1138.jpg",
      date: "28 yanvar",
      title: "ET Doner'de Xumarit"
    },
    {
      id: 3,
      img: "https://imageproxy.wolt.com/venue/627397d0084a6f9ee7dc00d6/dd41adf0-cd22-11ec-bdae-faf1757ec267_img_1138.jpg",
      date: "28 yanvar",
      title: "Cigkofte'de Xumarit"
    },
  ];

  return (
    <section id='blog'>
      <div className="container">
            <div className="blogtop">
                <h1>BLOG</h1>
            </div>

            <div className="blogCards">
            <div className="row">
            {arr.map((data) => (
            <FoodsCard key={data.id} img={data.img} date={data.date} title={data.title} />
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
