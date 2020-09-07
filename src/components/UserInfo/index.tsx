import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <div>
          <Avatar />
        </div>
        <UserData>
          <strong>XXXExaltasamba</strong>
          <span>#4140</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
