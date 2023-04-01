/** @jsxImportSource @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import Edit from "../assets/Edit.png";
import Delete from "../assets/Delete.png";
import imgList from "../assets/List.png";
import { css } from "@emotion/react";
import { btnValue } from "../store/btn-slice";

const listStyle = css`
  margin: 10px;
  width: 210px;
  min-width: 210px;
  height: 300px;
  min-height: 300px;
  background-color: #000000;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const itemStyle = css`
  margin: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: silver;
  margin: 10px;
`;
const h4Style = css`
  color: silver;
  margin: 10px;
`;

const buttonStyle = css`
  background-color: transparent;
  border: none;
  color: silver;
  font-weight: bold;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:hover {
    background-color: red;
  }
`;
const imgStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Border = (props) => {
  return (
    <div css={imgStyle}>
    <button css={buttonStyle} onClick={props.onEditHandler}>
      <img src={Edit} alt="edit" />
    </button>
    <img
      src={imgList}
      alt="list"
      css={css`
        width: 50%;
        object-fit: cover;
        height: 70%;
        display: flex;
        margin: auto;
        background-color: red;
        border-radius: 50%;
      `}
    />
    <button css={buttonStyle} onClick={props.onDeleteHandler}>
      <img src={Delete} alt="delete" />
    </button>
  </div>

  )}

export default function List(props) {
  const { id } = props;
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(btnValue.deleteBtnClicked(id));


  };

  const onEditHandler = () => {
    dispatch(btnValue.editBtnClicked(id));
  };

  const data = useSelector((state) =>
    state.DataStore.data.find((item) => item.id === id)
  );

  return (
    <>
      <div css={listStyle}>
        <Border onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} />
        <div css={itemStyle}>
          <h4 css={h4Style}>Song:  {data.song}</h4>
          <h4 css={h4Style}>Artist: {data.artist}</h4>
          <h4 css={h4Style}>Genre: {data.genre}</h4>
          <h4 css={h4Style}>Rating: {data.rating}</h4>
        </div>
      </div>
    </>
  );
}
