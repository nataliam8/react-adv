import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={img ? img : product.img ?? noImage}
      alt="Coffee Mug"
    />
  );
};
