import { takeEvery, put} from "redux-saga/effects";
import { dataActions } from "../store/data-slice";

export function* fetchData() {
  const data = yield fetch(
    "https://react-http-cb5d3-default-rtdb.europe-west1.firebasedatabase.app/data.json"
  ).then((res) => res.json());
  yield put(dataActions.setData(data));
}

// export function* addData(action) {
//   yield fetch(
//     "https://react-http-cb5d3-default-rtdb.europe-west1.firebasedatabase.app/data.json",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(action.payload),
//     }
//   );
// }
export function* addData(action) {
  const timestamp = new Date().getTime(); // generate a unique timestamp
  const newData = { ...action.payload, timestamp }; // add timestamp to payload
  yield fetch(
    "https://react-http-cb5d3-default-rtdb.europe-west1.firebasedatabase.app/data.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }
  );
}



export function* editData(action) {
  yield fetch(
    `https://react-http-cb5d3-default-rtdb.europe-west1.firebasedatabase.app/data/${action.payload.id}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload.update),
    }
  );
}

export function* deleteData(action) {
  yield fetch(
    `https://react-http-cb5d3-default-rtdb.europe-west1.firebasedatabase.app/data/${action.payload}.json`,
    {
      method: "DELETE",
    }
  );
}

export default function* fetchSaga() {
  yield takeEvery("FETCH_DATA", fetchData);
  yield takeEvery("ADD_DATA", addData);
  yield takeEvery("EDIT_DATA", editData);
  yield takeEvery("DELETE_DATA", deleteData);
}
