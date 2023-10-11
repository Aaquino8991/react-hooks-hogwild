import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ toggleGreasedFilter, handleSort, sortOption, greasedOnly }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
    <div className="nav">
      <label>
        <input type="checkbox" checked={greasedOnly} onChange={toggleGreasedFilter} />
        Show Greased Hogs Only
      </label>
      <div>
        <label>
          Sort By:
          <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
    </div>
	</div>
	);
};

export default Nav;
