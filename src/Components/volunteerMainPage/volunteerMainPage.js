import React from "react";
import "./volunteerMainPage.css";

function volunteerMainPage() {
    return (

        <div>
            <h3>Your Existing Clients</h3>

            <div className="container" align="center">
                <div className="row col-10 list-group-item d-flex justify-content-between align-items-center ">
                    <div className="col-12 col-md-6  task-text " align="left" > Client Details <br />Name  <br /> Tele <br />  Address</div>
                    <div className="col-12 col-md-5" >

                        <button type="button" className=" btn btn-primary"  >  Delivered </button>
                    </div>
                </div>
            </div>

            <div className="container" align="center">
                <div className="row col-10 list-group-item d-flex justify-content-between align-items-center ">
                    <div className="col-12 col-md-6  task-text" align="center"> Client Details <br />Name  <br /> Tele <br />  Address</div>
                    <div className="col-12 col-md-5" >

                        <button type="button" className=" btn btn-primary "  >  Delivered </button>
                    </div>
                </div>
            </div>
            <div className="container" align="center">
                <div className="row col-10 list-group-item d-flex justify-content-between align-items-center ">
                    <div className="col-12 col-md-6  task-text" align="center"> Client Details <br />Name  <br /> Tele <br />  Address</div>
                    <div className="col-12 col-md-5" >

                        <button type="button" className=" btn btn-primary "  >  Delivered </button>
                    </div>
                </div>
            </div>

        </div>


    );


}
        
export default volunteerMainPage;