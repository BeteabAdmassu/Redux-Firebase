/** @jsxImportSource @emotion/react */

import Modal from "./Modal";
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { btnValue } from "../store/btn-slice";
import { dataActions } from "../store/data-slice";

const button = css`
  margin: 5%;
  width: 9em;
  width-min: 91px;
  height: 30px;
  border-radius: 10px;
  border: solid 0.5px;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default function DeleteMusic(props) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(dataActions.deleteData(props.id));
    dispatch({ type: "DELETE_DATA" , payload: props.keys});
    dispatch(btnValue.deleteBtnClicked());
  };

  const cancelHandler = () => {
    dispatch(btnValue.deleteBtnClicked());
  };

  return (
    <Modal>
      <h3
        css={css`
          color: black;
          text-align: center;
        `}
      >
        Are you sure you want to delete this song?
      </h3>
      <div css={css` display:flex;
                     justify-content: center;`}>
        <button css={button} onClick={deleteHandler}>
          Yes
        </button>
        <button css={button} onClick={cancelHandler}>
          No
        </button>
      </div>
    </Modal>
  );
}
