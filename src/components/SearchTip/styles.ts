import styled from "styled-components";

interface SearchTipProps {
  turnOnPopUp: boolean
}

export const Container = styled.div<SearchTipProps>`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  width: 90%;
  max-width: 280px;
  padding: 1rem;

  transform: ${props => props.turnOnPopUp ? 'translate3d(-50%, 0, 0)' : 'translate3d(-50%, 30px, 0)'};
  background-color: #fff;
  border-radius: .25rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  opacity: ${props => props.turnOnPopUp ? '1' : '0'};
  visibility: ${props => props.turnOnPopUp ? 'visible' : 'hidden'};

  transition: transform .3s, opacity .3s, visibility .3s;

  p {
    text-align: center;
  }
`;
