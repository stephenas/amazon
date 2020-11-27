import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, price, total, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: total,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p className="title">{title}</p>
        <p className="price">
          ₹<strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️ </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

// import React from "react";
// import "./Product.css";
// import { useStateValue } from "../../StateProvider";

// export const Product = ({ id, title, price, rating, image }) => {
//   const [{}, dispatch] = useStateValue();

//   const addToBasket = () => {
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };

//   return (
//     <div className="product">
//       <div className="productInfo">
//         <p className="title">{title}</p>
//         <p className="price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="rating">
//           {Array(rating)
//             .fill()
//             .map((_) => (
//               <p>⭐️ </p>
//             ))}
//         </div>
//       </div>
//       <img src={image} alt="" />
//       <button onClick={addToBasket}>Add to basket</button>
//     </div>
//   );
// };
