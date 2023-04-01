/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { btnValue } from "../store/btn-slice";
import IdGenerator from "./IdGenerator";

const input = css`
  display: block;
  margin: 0 10px 30px 10px;
  width: 85%;
  height: 30px;
  border-radius: 10px;
  border: solid 0.5px;
  padding: 0 10px;
  font-size: 1rem;
  color: #000;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
const label = css`
  display: block;
  // margin: 10px;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

const button = css`
  margin: 10px;
  margin-left: 30px;
  width:  90px;
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

export default function AddMusic(props) {
  const dispatch = useDispatch();
  const cancelHandler = () => {
    dispatch(btnValue.addBtnClicked());
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const song = e.target.song.value;
    const artist = e.target.artist.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const newMusic = {
      id: IdGenerator(),
      song: song,
      artist: artist,
      genre: genre,
      rating: rating,
    };
    dispatch(dataActions.addData(newMusic));
    dispatch(btnValue.addBtnClicked());
    dispatch({ type: "ADD_DATA", payload: newMusic })
  };


  return (
    <>
      <h3
        css={css`
          color: #000;
          font-weight: bold;
          margin: 10px;
          text-align: center;
        `}
      >
        Add music
      </h3>
      <form onSubmit={onSubmitHandler}>
        <label css={label} htmlFor="song">
          Song
        </label>
        <input css={input} type="text" name="song" id="song" maxLength={20}  />
        <label css={label} htmlFor="artist">
          Artist
        </label>
        <input css={input} type="text" name="artist" id="artist" maxLength={15}  />
        <label css={label} htmlFor="genre">
          Genre
        </label>
        <input css={input} type="text" name="genre" id="genre" maxLength={10} />
        <label css={label} htmlFor="rating">
          Rating
        </label>
        <input css={input} type="number" name="rating" id="rating"  min={1} max={5} />
        <button css={button} type="submit">
          Add
        </button>
        <button css={button} type="reset">
          Reset
        </button>
        <button css={button} type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </form>
    </>
  );
}
