/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import EditMusic from "./EditMusic";
import DeleteMusic from "./DeleteMusic";

import List from "./List";
import { css } from "@emotion/react";

const bodyStyle = css`
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: center;
  color: silver;
  flex-wrap: wrap;
`;

export default function Body() {
  const data = useSelector((state) => state.DataStore.data);
  const editBtnValue = useSelector((state) => state.btnStore.editBtnValue);
  const deleteBtnValue = useSelector((state) => state.btnStore.deleteBtnValue);
  const tempId = useSelector((state) => state.btnStore.tempId);
  const tempKey = useSelector((state) => state.DataStore.data.find((item) => item.id === tempId));
  return (
    <>
      {editBtnValue && <EditMusic id={tempId} keys={tempKey.key}/>}
      {deleteBtnValue && <DeleteMusic id={tempId} keys={tempKey.key}/>}
      <div css={bodyStyle}>
        {data.length === 0 && (
          <div
            css={css`
              text-align: center;
            `}
          >
            <h3
              css={css`
                color: black;
              `}
            >
              {" "}
              No Music added!
            </h3>
            <h3
              css={css`
                color: black;
              `}
            >
              {" "}
              Click Add button to add music{" "}
            </h3>
          </div>
        )}
        {data.map((item) => {
          return <List key={item.id} id={item.id} />;
        })}

    
      </div>
    </>
  );
}
