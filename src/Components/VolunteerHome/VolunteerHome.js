import React, { useState } from "react";
import VolunteerListClients from "./VolunteerListClients";
import { v4 as uuidv4 } from "uuid";
import VolunteerHeader from "./VolunteerHeader";
import "./VolunteerHome.css";

function VolunteerHome() {
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

  const activeTasks = items && items.filter((task) => !task.completed);

  function completeDelivery(client_id) {
    const updatedClients = items.map((item) => {
      if (item.client_id === client_id) {
        item.completed = true;
      }
      return item;
    });
    setClients(updatedClients);
  }

  return (
    <div className="volonteer_home">
      <VolunteerHeader/>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Existing clients</h3>
                <div className="row">
                  {activeTasks.map((item) => (
                    <VolunteerListClients
                      key={item.client_id}
                      id={item.client_id}
                      full_name={item.full_name}
                      email={item.email}
                      phone={item.phone}
                      address={item.address}
                      createDate={item.date}
                      completeDelivery={completeDelivery}
                    />
                  ))}
                  <div className="Item__border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerHome;
