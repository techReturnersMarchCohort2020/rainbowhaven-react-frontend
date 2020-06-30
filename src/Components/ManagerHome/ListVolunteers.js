import React from "react";

function ListVolunteers(props) {
  function handleDeleteClick() {
    console.log("The delete button has been clicked!");
    props.deleteTask(props.id);
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="Volunteer__card card text-center m-2">
        <div className="card-body">
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Name: {props.full_name}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Email: {props.email}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Phone: {props.phone}
          </h4>
          <h4
            className={`${
              props.completed ? "text-muted complete" : "Item__card-title"
            } card-title`}
          >
            Address: {props.address}
          </h4>
        </div>
        <div className="card-footer text-muted bg-light">
          <button
            className="btn btn-sm Item__button"
            type="button"
            onClick={handleDeleteClick}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListVolunteers;
