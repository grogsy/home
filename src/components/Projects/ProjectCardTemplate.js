import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ProjectCard = props => {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <img
        className="card-img-top"
        src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
        alt="ffff"
      />
      <div className="card-body example-custom-css">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="#" className="btn btn-primary">
          Go somewhere
        </Link>
        <Link className="react-link" to="#">
          <FontAwesomeIcon className="card-icon" icon={faGithub} size="3x" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
