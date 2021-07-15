import React from "react";
import { Container, Content, ProductsContainer, SideBar } from "./style";
import Products from "../Products";

const Main = ({ products }) => {
  return (
    <Container>
      <Content>
        <ProductsContainer>
          <Products products={products} />
        </ProductsContainer>
        <SideBar>CardItem</SideBar>
      </Content>
    </Container>
  );
};

export default Main;
