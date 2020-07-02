import React, { useState } from "react";

import ListClients from "./ListClients";
import ListVolunteers from "./ListVolunteers";
import AddClient from "./AddClient";
import AppHeader from "./AppHeader";

import "./Home.css";

function Home() {
  const [items, setClients] = useState([
    {
      client_id: "001",
      full_name: "Client Name1",
      email: "client1@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      completed: false,
      deleted: false,
      date: "20 hours ago",
    },
    {
      client_id: "002",
      full_name: "Client Name2",
      email: "client2@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: false,
      deleted: false,
      date: "20 hours ago",
    },
    {
      client_id: "003",
      full_name: "Client Name3",
      email: "client3@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "20 hours ago",
    },
    {
      client_id: "004",
      full_name: "Client Name4",
      email: "client4@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "20 hours ago",
    },
    {
      client_id: "005",
      full_name: "Client Name5",
      email: "client5@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
      deleted: false,
      date: "20 hours ago",
    },
  ]);

  const [volunteer, setVolunteers] = useState([
    {
      volunteer_id: "001",
      full_name: "Volunteer Name1",
      email: "volunteer1@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      available: true,
    },
  ]);

  const activeTasks = items && items.filter((task) => !task.completed);

  const completedTasks = items && items.filter((task) => task.completed);

  const allAvailableVolunteer =
    volunteer && volunteer.filter((volunteer) => volunteer.available);

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

  function deleteVolunteer(volunteer_id) {
    const updatedVolunteer = volunteer.filter(
      (volunteer) => volunteer.volunteer_id !== volunteer_id
    );
    setVolunteers(updatedVolunteer);
  }

  function addClient(full_name, email, phone, address) {
    const newClient = {
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
  return (
    <div className="home_body">
      <AppHeader />
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
        <div className="Item__border" />
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
        <div className="Item__border" />
        <AddClient addClient={addClient} />
        <div className="Item__border" />
        {allAvailableVolunteer.map((volunteer) => (
          <ListVolunteers
            key={volunteer.volunteer_id}
            id={volunteer.volunteer_id}
            full_name={volunteer.full_name}
            email={volunteer.email}
            phone={volunteer.phone}
            deleteVolunteer={deleteVolunteer}
            address={volunteer.address}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
