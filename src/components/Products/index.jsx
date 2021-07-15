import {
  Wrapper,
  ProductsData,
  Product,
  ProductPrice,
  ButtonPrimary
} from "./style";

import { formatCurrency } from "../../util";

const Products = ({ products }) => {
  return (
    <Wrapper>
      <ProductsData>
        {products &&
          products.map(item => {
            return (
              <li key={item.id}>
                <Product>
                  <a href={`#${item.id}`}>
                    <img src={item.image} alt="product" />
                    <p>{item.title}</p>
                  </a>

                  <ProductPrice>
                    <div>{formatCurrency(item.price)}</div>
                    <ButtonPrimary>Add Card</ButtonPrimary>
                  </ProductPrice>
                </Product>
              </li>
            );
          })}
      </ProductsData>
    </Wrapper>
  );
};

export default Products;
