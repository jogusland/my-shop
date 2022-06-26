import React from "react";
import { withRouter } from "react-router-dom";
import studioBag from "../../assets/studio-bag.png";
import "./main-section.styles.scss";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafter for sport</h2>
          <p>
            descriptionsdfjoejwfijewofiewjfoiejwfiewjfjewifjejwfjewofijewfew
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product/1")}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
