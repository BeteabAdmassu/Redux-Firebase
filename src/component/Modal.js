/** @jsxImportSource @emotion/react */
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnValue } from "../store/btn-slice";

import { css } from "@emotion/react";

const Backdrop = (props) => {
  const btnValues = useSelector((state) => state.btnStore);
  const dispatch = useDispatch();

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 110vh;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.8);
      `}
      onClick={
        btnValues.addBtnValue
          ? () => dispatch(btnValue.addBtnClicked())
          : btnValues.editBtnValue
          ? () => dispatch(btnValue.editBtnClicked())
          : btnValues.deleteBtnValue
          ? () => dispatch(btnValue.deleteBtnClicked())
          : null
      }
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 300px;
        left: 50vw;
        transform: translate(-50%, -50%);
        width: 30vw;
        background-color: white;
        padding: 1rem;
        border-radius: 14px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 30;
        animation: slide-down 300ms ease-out forwards;
      `}
    >
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>,
    </Fragment>
  );
};

export default Modal;
