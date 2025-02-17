import { Fragment } from "react";
import "./style.css";
const withHeader = (ChildComponent) => {
  return (props) => {
    return (
      <Fragment>
        <div className="header">
          <span>Header Street Food</span>
        </div>
        <ChildComponent {...props} />
      </Fragment>
    );
  };
};
export default withHeader;
