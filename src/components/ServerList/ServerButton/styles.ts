import styled from "styled-components";

import { ServerButtonProps } from ".";

export const Button = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--discord)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  svg {
    width: 36px;
    height: 36px;
    fill: var(--white);
  }
  &::before {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    position: absolute;
    width: auto;
    height: 16px;
    padding: 0 4px;
    bottom: -4px;
    right: -4px;
    background-color: var(--notification);
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    line-height: 16px;
    font-size: 13px;
    font-weight: 600;
    color: var(--white);

  content: '${props => props.mentions && props.mentions}';
  display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};


  }

  transition: border-radius 0.3s, background-color 0.3s;

  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
