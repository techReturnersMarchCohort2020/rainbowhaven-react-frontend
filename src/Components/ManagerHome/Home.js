import React, { useState } from "react";

import ListClients from "./ListClients";
import ListVolunteers from "./ListVolunteers";
import AddClient from "./AddClient";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import ClientMap from "./ClientMap";

import "./Home.css";
import AddVolunteer from "./AddVolunteer";

function Home() {
  const [items, setClients] = useState([
    {
      client_id: uuidv4(),
      full_name: "Client Name1",
      email: "client1@gmail.com",
      phone: "0161 555 5555",
      address: " 1 hyde terrace",
      postcode: "M4 4EW",
      completed: false,
      // deleted: false,
      date: "2 days ago",
      zone: "2",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name2",
      email: "client2@gmail.com",
      address: "3 woodhay street",
      postcode: "M4 4EW",
      phone: "0161 555 5555",
      completed: false,
      // deleted: false,
      date: "2 days ago",
      zone: "1",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name3",
      email: "client3@gmail.com",
      address: "2 woodlane",
      postcode: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      // deleted: false,
      date: "2 days ago",
      zone: "2",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name4",
      email: "client4@gmail.com",
      address: "2 roundhay",
      postcode: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      // deleted: false,
      date: "2 days ago",
      zone: "1",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name5",
      email: "client5@gmail.com",
      address: "M4 4EW",
      postcode: "M28 7EW",
      phone: "0161 555 5555",
      completed: true,
      // deleted: false,
      date: "2 days ago",
      zone: "1",
    },
  ]);

  const [volunteer, setVolunteers] = useState([
    {
      volunteer_Id: uuidv4(),
      full_name: "Volunteer Name1",
      email: "volunteer1@gmail.com",
      phone: "0161 555 5555",
      address: "1 woodsley terrace",
      postcode: "SK5 1BZ",
      password: "12345",
      zone: "1",
    },
    {
      volunteer_Id: uuidv4(),
      full_name: "Volunteer Name2",
      email: "volunteer2@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      postcode: "SK5 1BZ",
      password: "12345",
      zone: "2",
    },
  ]);

  const activeTasks = items && items.filter((task) => !task.completed);

  const completedTasks = items && items.filter((task) => task.completed);

  function deleteClient(client_id) {
    const updatedClients = items.filter((item) => item.client_id !== client_id);
    setClients(updatedClients);
  }

  function completeDelivery(client_id) {
    const updatedClients = items.map((item) => {
      if (item.client_id === client_id) {
        item.completed = true;
      }
      return item;
    });
    setClients(updatedClients);
  }

  function deleteVolunteer(volunteer_Id) {
    const updatedVolunteer = volunteer.filter(
      (volunteer) => volunteer.volunteer_Id !== volunteer_Id
    );
    setVolunteers(updatedVolunteer);
  }

  function addClient(full_name, email, phone, address, postcode, zone) {
    const newClient = {
      client_id: uuidv4(),
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      postcode: postcode,
      completed: false,
      zone: zone,
      date: moment(),
    };

    const updatedClients = [...items, newClient];
    setClients(updatedClients);
  }

  function addVolunteer(
    full_name,
    email,
    phone,
    address,
    postcode,
    password,
    zone
  ) {
    const newVolunteer = {
      volunteer_Id: uuidv4(),
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      postcode: postcode,
      password: password,
      zone: zone,
    };

    const updatedVolunteer = [...volunteer, newVolunteer];
    setVolunteers(updatedVolunteer);
  }
  return (
    <div className="home_body">
      <AppHeader />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing clients</h3>
                <div className="row">
                  {activeTasks.map((item) => (
                    <ListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      postcode={item.postcode}
                      zone={item.zone}
                      deleteClient={deleteClient}
                      completeDelivery={completeDelivery}
                      createDate={item.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item__border" />
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">
                  Existing clients - completed deliveries
                </h3>
                <div className="row">
                  {completedTasks.map((item) => (
                    <ListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      postcode={item.postcode}
                      zone={item.zone}
                      completed={item.completed}
                      deleteClient={deleteClient}
                      createDate={item.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item__border" />
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <AddClient addClient={addClient} />
          </div>
          <div className="col-sm-12 col-md-6">
            <AddVolunteer addVolunteer={addVolunteer} />
          </div>
        </div>
        <div className="Item__border" />

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing volunteers</h3>
                <div className="row">
                  {volunteer.map((volunteer) => (
                    <ListVolunteers
                      key={volunteer.volunteer_Id}
                      volunteer_Id={volunteer.volunteer_Id}
                      full_name={volunteer.full_name}
                      email={volunteer.email}
                      phone={volunteer.phone}
                      address={volunteer.address}
                      postcode={volunteer.postcode}
                      password={volunteer.password}
                      zone={volunteer.zone}
                      deleteVolunteer={deleteVolunteer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item__border" />
        <div>
            <ClientMap/>
        </div>
        <div className="Item__border" />
      </div>
    </div>
  );
}

export default Home;
