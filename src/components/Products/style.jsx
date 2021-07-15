import styled from "styled-components";

export const Wrapper = styled.ul``;

export const ProductsData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  li {
    flex: 0 1 29rem;
    height: 47rem;
    padding: 1rem;
    a {
      text-decoration: none;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  img {
    background-size: cover;
    background-position: center;
    width: 100%;
    max-height: 37rem;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div,
  button {
    text-align: center;
    flex: 1;
  }
  div {
    font-size: 2rem;
  }
  button {
    padding: 1rem;
    border: 1px solid #fff;
    background-color: #1d1d1d;
    color: #fff;
    cursor: pointer;
  }
`;

export const ButtonPrimary = styled.button``;
