import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function pickUpVolunteer() {
  // // const history = useHistory();
  // function handleDeliverClick(event) {
  //     event.preventDefault();
  //     if (true){
  //         alert("Submitted");
  //         // let path = "/manager";
  //         // history.push(path);
  //         <a href="/manager">Back?</a>
  //     }
  // }

  return (
    <form>
      <h4>The Existing Volunteers are:</h4>
      <div className="form-group">
        <ul className="list-group ">
          <div>
            <li className="list-group-item d-flex justify-content-between align-items-center ">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label " for="customRadio1">
                  Volunteer Name 1
                </label>
              </div>
            </li>
          </div>
          <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="customRadio2">
                  Volunteer Name 2
                </label>
              </div>
            </li>
          </div>
          <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio3"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="customRadio3">
                  Volunteer Name 3
                </label>
              </div>
            </li>
          </div>
          <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio4"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="customRadio4">
                  Volunteer Name 4
                </label>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div class="text-center">
        <Button variant="primary" style={{ width: "100px", color: "white" }}>
          {" "}
          <a href="/manager" style={{ color: "white" }}>
            Deliver
          </a>
        </Button>
      </div>
    </form>
  );
}

export default pickUpVolunteer;
