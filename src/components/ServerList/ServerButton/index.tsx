import React from "react";

import { Button } from "./styles";

import { ReactComponent as DiscordLogo } from "../../../assets/discord.svg";

export interface ServerButtonProps {
  isSelected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({
  isSelected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={isSelected ? "active" : ""}
    >
      {isHome && <DiscordLogo />}
    </Button>
  );
};

export default ServerButton;
