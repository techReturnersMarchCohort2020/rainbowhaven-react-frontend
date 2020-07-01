import React, { useState } from "react";

import ListClients from "./ListClients";
import ListVolunteers from "./ListVolunteers";
import AddClient from "./AddClient";
import AppHeader from "./AppHeader";

import "./Home.css";

function Home() {
  const [items, setClients] = useState([
    {
      id: "001",
      full_name: "Client Name1",
      email: "client1@gmail.com",
      phone: "0161 555 5555",
      address: "M4 4EW",
      completed: false,
    },
    {
      id: "002",
      full_name: "Client Name2",
      email: "client2@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: false,
    },
    {
      id: "003",
      full_name: "Client Name3",
      email: "client3@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
    },
    {
      id: "004",
      full_name: "Client Name4",
      email: "client4@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
    },
    {
      id: "005",
      full_name: "Client Name5",
      email: "client5@gmail.com",
      address: "M4 4EW",
      phone: "0161 555 5555",
      completed: true,
    },
  ]);

  const activeTasks = items.filter((item) => !item.completed);

  const completedTasks = items.filter((item) => item.completed);

  function addClient(full_name, email, phone, address) {
    const newClient = {
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      completed: false,
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
            key={item.id}
            full_name={item.full_name}
            email={item.email}
            phone={item.phone}
            address={item.address}
            completed={item.completed}
            createDate={item.createDate}
          />
        ))}
        <div className="Item__border" />
        {completedTasks.map((item) => (
          <ListClients
            key={item.id}
            full_name={item.full_name}
            email={item.email}
            phone={item.phone}
            address={item.address}
            completed={item.completed}
            createDate={item.createDate}
          />
        ))}
        <div className="Item__border" />
        <AddClient addClient={addClient} />
        <div className="Item__border" />
        <ListVolunteers />
      </div>
    </div>
  );
}

export default Home;
