import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s;

  & + & { 
    margin-top: 4px;
  }

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    font-size: 15px;
    color: var(--senary);
  }
  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const ActionsIconContainer = styled.div`
  svg {
    display: none;
  }

  ${Container}:hover &, ${Container}.active & {
    svg {
      display: inline;
    }
  }
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  margin-left: 4px;
  transition: color 0.3s;

  &:hover {
    color: var(--white);
  }
`;
