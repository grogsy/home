/* eslint-disable jsx-a11y/alt-text */
import React from "react";

/**
 * Plans to use an image modal using bootstrap
 */

const Modal = props => {
  return (
    <React.Fragment>
      <div
        class="modal"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img
                height="400"
                width="400"
                src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        data-toggle="modal"
        data-target="#exampleModalLong"
        className="modal-image"
        height="200"
        width="200"
        src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
      />
    </React.Fragment>
  );
};

export default Modal;
