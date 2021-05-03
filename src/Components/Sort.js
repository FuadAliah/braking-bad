import React, { Fragment } from "react";

export const ByName = (props) => {
  return (
    <Fragment>
      <button type="submit" className="btn" onClick={props.nameSorted}>
        {props.name}
      </button>
    </Fragment>
  );
};
export const ByID = (props) => {
  return (
    <Fragment>
      <button type="submit" className="btn" onClick={props.NumsSorted}>
        {props.id}
      </button>
    </Fragment>
  );
};
