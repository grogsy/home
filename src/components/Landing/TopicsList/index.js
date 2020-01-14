import React from "react";
// import TopicContainer from "./TopicContainer";
import data from "../../data";
import "./topic.css";

const RightBox = props => {
  return (
    // <React.Fragment>
    //   {data.lists.map(item => (
    //     <TopicContainer headerText={item.name} listItems={item.content} />
    //   ))}
    // </React.Fragment>
    <div className="accordion" id="lists-main">
      {data.lists.map((item, index) => (
        <>
          <div className="card my-1">
            <div
              className="card-header list-card-header"
              style={{ backgroundColor: "#3e4358", width: "328px" }}
            >
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target={"#" + item.name}
                type="button"
              >
                <h6 className="mb-0">{item.name}</h6>
              </button>
            </div>
          </div>
          <div
            id={item.name}
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#lists-main"
          >
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {item.content.map(listItem => (
                  <li className="topic-list-item list-group-item">
                    {/* {listItem === "Food" ? (
                      <abbr title="'Food is a hobby...?'">{listItem}</abbr>
                    ) : (
                      listItem
                    )} */}
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default RightBox;
