import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=360&t=st=1671367485~exp=1671368085~hmac=4a751ab3c628516db5e629dd49243fc3f07aeab98f0fcb86b6f1b6f4f9a27908",
            img2: "https://img.freepik.com/free-photo/sad-handsome-man_1368-5130.jpg?t=st=1671342650~exp=1671343250~hmac=b90df2e0dbf437cd18e9a8bd23e4923fcf02ebcfcb6c4d96ef58db9542c537b5",
            title: "Men's Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img2: "https://img.freepik.com/free-photo/cheerful-traditional-indian-woman-white-background-studio-shot_1157-48206.jpg?w=360&t=st=1671365818~exp=1671366418~hmac=115360a77e68d6a5003bbf6c9aeb3a6aa5355d677b4b10a21a4404b5a0b3d8ce",
            img: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            title: "Ethnic Wear",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
          id: 3,
          img: "https://img.freepik.com/free-photo/man-portrait_1296-630.jpg?w=360&t=st=1671365558~exp=1671366158~hmac=6a92a1006c46f7ec14400df37b2702e884496fc4ef34566acb54e6516539cce1",
          img2: "https://img.freepik.com/free-photo/full-length-portrait-bearded-man-shirt-pointing-away_171337-15725.jpg?t=st=1671367210~exp=1671367810~hmac=56c20a76abba5b4ac100796e1c2bae0c400098350c3c96c4297cf84228b96e68",
          title: "Men's Jeans",
          isNew: true,
          oldPrice: 19,
          price: 12,
      },
      {
        id: 4,
        img: "https://img.freepik.com/free-photo/portrait-beautiful-woman-wearing-traditional-sari-garment_23-2149565112.jpg?t=st=1671365778~exp=1671366378~hmac=379dc4433b391a73bca1261869be549df33bd084c36a50f1d2607a0ae69e3607",
        img2: "https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400843.jpg?w=360&t=st=1671365941~exp=1671366541~hmac=5a82d08119e0765428c6df713c5ba00fcca5991791c2e339ffa60373607f3d5d",
        title: "Indian Saree",
        isNew: true,
        oldPrice: 19,
        price: 12,
    }
    ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ullam,
          in eius rerum laboriosam sint velit veniam nesciunt sequi deleniti
          dolores facilis ea adipisci assumenda placeat aut ex autem natus.
        </p>
      </div>
      <div className="bottom">
        {
            data.map(item => (<Card item={item} key={item.id}/>))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
