/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from "react-redux";
import { btnValue } from "../store/btn-slice";
import { dataActions } from "../store/data-slice";
import { css } from "@emotion/react";
import Modal from "./Modal";

const input = css`
  display: block;
  margin: 0 10px 25px 10px;
  width: 85%;
  height: 25px;
  border-radius: 10px;
  border: solid 0.5px;
  padding: 0 10px;
  font-size: 1rem;
  color: #000;
  background-color: #fff;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 65%;
  }
`;

const label = css`
  display: block;
  text-align: left;
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
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const button = css`
  margin: 10px;
  margin-left: 30px;
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
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
const form = css`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const heading = css`
  color: #000;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function EditMusic(props) {
  const dispatch = useDispatch();
  const musicData = useSelector((state) =>
    state.DataStore.data.find((item) => item.id === props.id)
  );
  const cancelHandler = () => {
    dispatch(btnValue.editBtnClicked());
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const Id = musicData.id;
    const song = e.target.song.value;
    const artist = e.target.artist.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const editedMusic = {
      id: Id,
      song: song,
      artist: artist,
      genre: genre,
      rating: rating,
    };
    dispatch(dataActions.editData(editedMusic));
    dispatch({
      type: "EDIT_DATA",
      payload: { id: props.keys, update: editedMusic },
    });
    dispatch(btnValue.editBtnClicked());
  };

  return (
    <Modal>
      <h3 css={heading}>Edit music</h3>
      <form css={form} onSubmit={onSubmitHandler}>
        <label css={label} htmlFor="song">
          Song
        </label>
        <input
          required
          defaultValue={musicData.song}
          css={input}
          type="text"
          name="song"
          id="song"
          maxLength={20}
        />
        <label css={label} htmlFor="artist">
          Artist
        </label>
        <input
          required
          defaultValue={musicData.artist}
          css={input}
          type="text"
          name="artist"
          id="artist"
          maxLength={15}
        />
        <label css={label} htmlFor="genre">
          Genre
        </label>
        <input
          required
          defaultValue={musicData.genre}
          css={input}
          type="text"
          name="genre"
          id="genre"
          maxLength={10}
        />
        <label css={label} htmlFor="rating">
          Rating
        </label>
        <input
          required
          type={"number"}
          defaultValue={musicData.rating}
          css={input}
          name="rating"
          id="rating"
          min={1}
          max={5}
        />
        <button css={button} type="submit">
          Save
        </button>
        <button css={button} type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}
