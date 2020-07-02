import React from "react";

function ListClients(props) {
  function handleDeleteClick() {
    console.log("The delete button has been clicked!");
    props.deleteClient(props.id);
  }
  function handleCompleteClick() {
    console.log("The complete button has been clicked!");
    props.completeDelivery(props.id);
  }
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="Item__card card text-center m-2">
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
          {props.completed ? (
            <h4 className="text-muted complete">Delivering: done</h4>
          ) : (
            <div>
              <h4 className="Item__card-title">Delivering: waiting...</h4>
              <small>Created on {props.createDate}</small>
            </div>
          )}
        </div>

        <div className="card-footer text-muted bg-light">
          {!props.completed && (
            <button
              className="btn btn-sm mr-3 Item__button"
              type="button"
              onClick={handleCompleteClick}
            >
              <i className="fa fa-thumbs-up"></i>
            </button>
          )}

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

export default ListClients;
