import React, { Fragment } from "react";
import { food_list } from "../Constant";

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h3>Street Food List</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((it, index) =>
            it.items.map((ls, inx) => (
              <tr key={`${inx}-${index}`}>
                {inx < 1 && <th rowSpan={it.items.length}>{it.category}</th>}
                <td>{ls.name}</td>
                <td>{`${ls.price}`}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};
