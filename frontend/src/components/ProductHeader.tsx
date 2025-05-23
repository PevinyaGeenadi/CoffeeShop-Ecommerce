import { TbArrowRight } from "react-icons/tb";

// @ts-ignore
const ProductHeader = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      Home <TbArrowRight /> Menu <TbArrowRight /> {product.category}{" "}
      <TbArrowRight /> {product.name}
    </div>

    
  );
};

export default ProductHeader;