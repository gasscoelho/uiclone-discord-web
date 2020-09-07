import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "./ChannelMessage";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="XXXExaltasamba"
          date="07/09/2020"
          content="Hoje é meu aniversário!"
        />

        <ChannelMessage
          author="devendrex"
          date="07/09/2020"
          content={
            <>
              <Mention>@XXXExaltasamba</Mention>, cade meu fone?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
