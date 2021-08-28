import React from "react";
import Carousel from "react-grid-carousel";
import book_image from "../public/1.png";

const slideData = [
  {
    id: 1,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 2,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 3,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 4,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 5,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 6,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 7,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 8,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 9,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 10,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 11,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 12,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 13,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 14,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 15,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 16,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 17,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 18,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 19,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 20,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 21,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 22,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 23,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 24,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 25,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 26,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 27,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 28,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 29,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 30,
    image: "https://picsum.photos/800/600?random=1",
  }
]

const BookCard = () => {
  return (
    <div className="CaroslBook">
      <h1>Bestselling Books</h1>
      <hr/>
      <Carousel cols={5} rows={2} gap={10} loop>
        {slideData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div class="card card-flip h-100">
              <img src={slide.image} class="card-img-top" alt="..." />
              <div class="card-front text-white bg-light ">
                <div class="card-body">
                  <h3 class="card-title">Front</h3>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
              <div class="card-back bg-white">
                <div class="card-body">
                  <h3 class="card-title">Back</h3>
                  <p class="card-text">
                    Suprise this one has more more more more content on the
                    back!
                  </p>
                  <a href="#" class="btn btn-outline-secondary">
                    Action
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default BookCard;