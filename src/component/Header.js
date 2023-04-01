/** @jsxImportSource @emotion/react */

// import { useState } from "react";
import { css } from "@emotion/react";
import img from "../assets/Music.jpg";
import Add from "../assets/Add.png";
import Modal from "./Modal";
import AddMusic from "./AddMusic";

import { btnValue } from "../store/btn-slice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {

  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.btnStore.addBtnValue);

  
  const onClickHandler = () => {
    dispatch(btnValue.addBtnClicked());
  };

  const buttonStyle = css`
    background-color: transparent;
    position: absolute;
    top: 4em;
    left: 2vw;
    border: none;
    border-radius: 20px;
    border-color: red;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    color: silver;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: #000;
    }
  `;

  return (
    <div>
      <header
        css={css`
          height: 10em;
        `}
      >
        <img
          src={img}
          alt="music"
          css={css`
            width: 100%;
            object-fit: cover;
            height: 100%;
          `}
        />
        <h2
          css={css`
            background-color: transparent;
            color: silver;
            position: absolute;
            top: 0em;
            left: 2vw;
            border: none;
          `}
        >
          My
          <span
            css={css`
              color: red;
            `}
          >
            M
          </span>
          usic List
        </h2>
        <button onClick={onClickHandler} css={buttonStyle}>
          Add
          <img
            src={Add}
            alt="add"
            css={css`
              margin-left: 10px;
            `}
          />
        </button>
      </header>
      {clicked && (
        <Modal>
          <AddMusic />
        </Modal>
      )}
    </div>
  );
}
