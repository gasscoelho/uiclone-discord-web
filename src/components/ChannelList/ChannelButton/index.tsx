import React from "react";

import { Container, HashTagIcon, InviteIcon, SettingsIcon, ActionsIconContainer } from "./styles";

export interface ChannelButtonProps {
  name: string;
  isSelected?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({ name, isSelected }) => {
  return (
    <Container className={isSelected ? "active" : ""}>
      <div>
        <HashTagIcon />
        <span>{name}</span>
      </div>
      <ActionsIconContainer>
        <InviteIcon />
        <SettingsIcon />
      </ActionsIconContainer>
    </Container>
  );
};

export default ChannelButton;
