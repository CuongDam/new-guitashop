import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: white;
    height: 650px;
    display: flex;
    justify-content: space-between;
    padding: 0.5 rem calc((100vw - 1000px) /2)
    z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #ccc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;

  &.active {
    color: orange;
  }
  &.hover {
    color: orange;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  position: absolute;
  left: 500px;
  top: 25px;

  @media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
    position: absolute;
    left: 330px;
    top: 20px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1366px){
    position: absolute;
    left: 535px;
    top: 20px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: block;
  }

  &.hover .btn-logout {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: orange;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: orange;
  font-size: 20px;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: absolute;
  left: 820px;
  top: 15px;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: orange;
}
    @media only screen and (min-width: 768px) and (max-width: 1366px){
        position: absolute;
        left: 630px;
        width: 113px;
        height: 52px;
        top: 9px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px){
        position: absolute;
        left: 860px;
        width: 113px;
        height: 52px;
        top: 9px;
    }
`;
