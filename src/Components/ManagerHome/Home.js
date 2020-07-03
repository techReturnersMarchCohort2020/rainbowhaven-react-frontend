import React, { useState } from "react";

import ListClients from "./ListClients";
import ListVolunteers from "./ListVolunteers";
import AddClient from "./AddClient";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import { v4 as uuidv4 } from "uuid";

import "./Home.css";
import AddVolunteer from "./AddVolunteer";

function Home() {
  const [items, setClients] = useState([
    {
      client_id: uuidv4(),
      full_name: "Client Name1",
      email: "client1@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      completed: false,
      deleted: false,
      date: "2 days ago",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name2",
      email: "client2@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: false,
      deleted: false,
      date: "2 days ago",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name3",
      email: "client3@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "2 days ago",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name4",
      email: "client4@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "2 days ago",
    },
    {
      client_id: uuidv4(),
      full_name: "Client Name5",
      email: "client5@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "2 days ago",
    },
  ]);

  const [volunteer, setVolunteers] = useState([
    {
      full_name: "Volunteer Name1",
      email: "volunteer1@gmail.com",
      phone: "0161 555 5555",
      address: "1 woodsley terrace",
      postcode: "SK5 1BZ",
      password: "12345",
    },
    {
      full_name: "Volunteer Name2",
      email: "volunteer2@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      postcode: "SK5 1BZ",
      password: "12345",
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

  function deleteVolunteer(volunteer_email) {
    const updatedVolunteer = volunteer.filter(
      (volunteer) => volunteer.email !== volunteer_email
    );
    setVolunteers(updatedVolunteer);
  }

  function addClient(full_name, email, phone, address) {
    const newClient = {
      client_id: uuidv4(),
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      completed: false,
      // date: moment(),
    };

    const updatedClients = [...items, newClient];
    setClients(updatedClients);
  }

  function addVolunteer(full_name, email, phone, address, postcode, password) {
    const newVolunteer = {
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      postcode: postcode,
      password: password,
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
                      key={volunteer.volunteer_email}
                      full_name={volunteer.full_name}
                      email={volunteer.email}
                      phone={volunteer.phone}
                      address={volunteer.address}
                      postcode={volunteer.postcode}
                      password={volunteer.password}
                      deleteVolunteer={deleteVolunteer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item__border" />

        <div className="Item__border" />
      </div>
    </div>
  );
}

export default Home;
