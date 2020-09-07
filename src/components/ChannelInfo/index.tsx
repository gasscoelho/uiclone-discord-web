import React from "react";

import { Container, HashTagIcon, Title, Separator, Description } from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />
      <Title>geral</Title>
      <Separator />
      <Description>
        Nomeie 5 personagens de Naruto pra ser aceito como um ninja!
      </Description>
    </Container>
  );
};

export default ChannelInfo;
