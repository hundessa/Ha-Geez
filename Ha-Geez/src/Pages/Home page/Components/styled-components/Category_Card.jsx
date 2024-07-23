import styled from "styled-components"

export const Category_Card = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    /* filter: blur(2px); */
    filter: ${(props) => (props.isBlurred ? "blur(3px)" : "blur(0px)")};
    transition: filter 1s ease;
    z-index: 0;
  }

  /* &:hover ${props => props.hoverElement}::before {
    filter: blur(5px);
  } */

  & > * {
    position: relative;
    z-index: 1;
  }
`
export const Category_name = styled.button`
    color: ${props => props.color};
    font-weight: bold;
    border-width: 1px;
    border-color: white;
    padding: 2px 10px;
    background-color: ${(props) => props.backgroundColor || "transparent"};
  border-style: solid;
  /* cursor: pointer; */
  transition: background-color .4s, color .8s;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "white"};
    color: ${(props) => props.hoverColor || "black"};
  }
`



// import styled from "styled-components";

// export const Card = styled.button.attrs(props => ({
//   style: {
//     backgroundImage: `url(${props.backgroundImage})`
//   }
// }))`
//   width: 300px;
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   border-radius: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 1.5rem;
// `;
