import { useState } from "react";

import { Wrapper, FilterResult, FilterSize, FilterSort } from "./style";

const FilterComponent = ({
  count,
  size,
  sort,
  sortProducts,
  filterProducts
}) => {
  return (
    <Wrapper>
      <FilterResult>{count} products</FilterResult>
      <FilterSort>
        Order
        <select value={sort} onChange={sortProducts}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </FilterSort>
      <FilterSize>
        Filter
        <select value={size} onChange={filterProducts}>
          <option value="All">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </FilterSize>
    </Wrapper>
  );
};

export default FilterComponent;
