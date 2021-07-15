import React from "react";
import { Container, Content, ProductsContainer, SideBar } from "./style";
import Products from "../Products";
import FilterComponent from "../FIlterComponent";

const Main = ({ products, filterProducts, sortProducts }) => {
  return (
    <Container>
      <Content>
        <ProductsContainer>
          <FilterComponent
            count={products?.products?.length}
            size={products?.size}
            sort={products?.sort}
            sortProducts={sortProducts}
            filterProducts={filterProducts}
          />
          <Products products={products?.products} />
        </ProductsContainer>
        <SideBar>CardItem</SideBar>
      </Content>
    </Container>
  );
};

export default Main;
