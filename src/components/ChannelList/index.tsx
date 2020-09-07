import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "./ChannelButton";
const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton name="geral" isSelected={true} />
      <ChannelButton name="asmr" />
    </Container>
  );
};

export default ChannelList;
