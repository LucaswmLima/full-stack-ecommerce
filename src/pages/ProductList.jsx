import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    // Se a opção "All" for selecionada, remova completamente a propriedade do objeto de filtro
    if (value === "All") {
      const { [e.target.name]: removedFilter, ...newFilters } = filters;
      setFilters(newFilters);
    } else {
      // Caso contrário, adicione ou atualize a propriedade no objeto de filtro
      setFilters({ ...filters, [e.target.name]: value });
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value={"All"}>ALL</Option>
            <Option value={"white"}>White</Option>
            <Option value={"black"}>Black</Option>
            <Option value={"red"}>Red</Option>
            <Option value={"blue"}>Blue</Option>
            <Option value={"yellow"}>Yellow</Option>
            <Option value={"green"}>Green</Option>
            <Option value={"beige"}>Beige</Option>
            <Option value={"salmon"}>Salmon</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option value={"All"}>ALL</Option>
            <Option value={"xsmall"}>XS</Option>
            <Option value={"small"}>S</Option>
            <Option value={"medium"}>M</Option>
            <Option value={"large"}>L</Option>
            <Option value={"xlarge"}>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
