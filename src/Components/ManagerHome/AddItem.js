import React, { Fragment, useState } from "react";
function AddItem(props) {
  const [full_name, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleAddTaskClick(e) {
    e.preventDefault();
    props.addTask(full_name);
    setText("");
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p4">
              <div className="card-body">
                <h3 className="text-center">Form for new clients</h3>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleTextChange}
                        value={full_name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        // onChange={handleTextChange}
                        // value={email}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        // onChange={handleTextChange}
                        // value={phone}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        // onChange={handleTextChange}
                        // value={address}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-outline-danger btn-block"
                      onClick={handleAddTaskClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddItem;
