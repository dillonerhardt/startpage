import React from "react";
import styled from "styled-components";
import ListItem from "./components/ListItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 20px;
`;

export default ({ title, items }) => (
  <div>
    <Title>{title}</Title>
    {items.length > 0 && (
      <List>
        {items.map((i) => (
          <ListItem key={i.name} {...i} />
        ))}
      </List>
    )}
  </div>
);
