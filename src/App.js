import React, { useState, useEffect } from "react";
import "./App.css";
import FlightTable from "./FlightTable";
import Toolbar from "./Toolbar";
import AgencyDialog from "./AgencyDialog";

function createFlightData(tid, aid, cid, sdate, edate, tp, bs) {
  return { tid, aid, cid, sdate, edate, tp, bs };
}

let rows_flight = [
  createFlightData(
    22,
    "Sunshine Travel (70001)",
    "Neubasler (77)",
    "Jun 24, 2019",
    "Jun 28, 2019",
    "750.00 USD",
    "A"
  ),

  createFlightData(
    106,
    "Your Choice (70005)",
    "Buchholm (5)",
    "Jun 13, 2019",
    "Jul 16, 2019",
    "650 AFN",
    "A"
  ),
  createFlightData(
    103,
    "Travel from Walldorf (70010)",
    "Buchholm (11)",
    "Jun 10, 2019",
    "Jul 14, 2019",
    "800 AFN",
    "X"
  ),
];

function createAgencyData(
  id,
  name,
  street,
  postalcode,
  city,
  country,
  phone,
  email,
  web
) {
  return {
    id,
    name,
    street,
    postalcode,
    city,
    country,
    phone,
    email,
    web,
    checked: false,
  };
}

const rows_agency = [
  createAgencyData(
    70001,
    "Sunshine Travel",
    "134 West Street",
    "54323",
    "Rochester",
    "US",
    "+1 901-632-5620",
    "info@sunshine-travel.sap",
    "http://www.sunshine-travel.sap"
  ),
  createAgencyData(
    70002,
    "Fly High",
    "Berliner Allee 11",
    "40880",
    "Duesseldorf",
    "DE",
    "+65 777-5566",
    "info@burns-burns-burns.sg",
    "http://www.burns-burns-burns.sg"
  ),

  createAgencyData(
    70005,
    "Your Choice",
    "Gustav-Jung-Str. 425",
    "90455",
    "Nuernberg",
    "DE",
    "+49 9256-4548-0",
    "info@yc.sap",
    "http://www.yc.sap"
  ),
];

function App() {
  const [flights, setFlights] = useState({
    flight: [],
  });

  const [agencies, setAgencies] = useState({
    agency: [],
  });

  useEffect(() => {
    setFlights({ ...flights, flight: rows_flight });
    setAgencies({ ...agencies, agency: rows_agency });
  }, []);

  console.log(agencies.agency);

  const [adialog, setAdialog] = useState(false);
  const [agency, setAgency] = useState({
    agencyid: [],
  });

  const [selected, setSelected] = useState({
    search: "",
    agency: [],
    items: [],
  });

  const [asearch, setAsearch] = useState(false);

  const [go, setGo] = useState(false);

  const [asearchfields, setAsearchfields] = useState({
    id: "",
    name: "",
    street: "",
    postalcode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    web: "",
  });
  console.log(asearchfields);

  const setAgencySearchFields = (key, value) => {
    setAsearchfields({ ...asearchfields, [key]: value });
  };

  const checkBoxHandle = (row) => {
    const selectedIndex = agencies.agency.indexOf(row);

    let newselected = { ...selected };
    //selected = selected.agency;
    console.log(newselected.agency);
    console.log(agencies.agency[selectedIndex]);
    if (newselected.agency.includes(agencies.agency[selectedIndex])) {
      let i = newselected.agency.indexOf(agencies.agency[selectedIndex]);
      newselected.agency.splice(i, 1);
      let newagencies = { ...agencies };
      newagencies.agency[i].checked = false;
      setAgencies({ ...newagencies });
    } else {
      newselected.agency.push(agencies.agency[selectedIndex]);
    }
    checkedAgency(newselected.agency);
  };
  const checkedAgency = (checkedagency) => {
    checkedagency.map((agency) => {
      return (agency.checked = true);
    });

    console.log(checkedagency);
    setSelected({ ...selected, agency: checkedagency });
    console.log(selected.agency);
    let selecteditems = [];
    for (let i = 0; i < selected.agency.length; i++) {
      selecteditems[i] =
        selected.agency[i].name + " (" + selected.agency[i].id + ")";
    }
    console.log(selecteditems);
    setSelected({ ...selected, items: selecteditems });

    let modifiedagencies = { ...agencies };
    for (let i = 0; i < modifiedagencies.agency.length; i++) {
      for (let j = 0; j < selected.agency.length; j++) {
        if (agencies.agency[i].id != selected.agency[j].id) {
          //modifiedagencies.agency[i].checked = false;
        }
        if (agencies.agency[i].id === selected.agency[j].id) {
          modifiedagencies.agency[i].checked = true;
        }
      }
    }
    setAgencies(modifiedagencies);
  };
  console.log(agencies.agency);
  console.log(selected.agency);
  console.log(selected.items);

  const adialogOpen = () => {
    setAdialog(!adialog);
    console.log("Dialog");
  };

  const okButton = () => {
    setAdialog(!adialog);
    setAsearch(!asearch);
    console.log("OKBUTTON");
  };

  const goButton = () => {
    let newrows = [];
    if (selected.items.length == 0) {
      return;
    }
    if (rows_flight.length > 0) {
      for (let i = 0; i < rows_flight.length; i++) {
        console.log("i: " + i);
        for (let j = 0; j < selected.items.length; j++) {
          console.log("j: " + j);
          if (rows_flight[i].aid === selected.items[j]) {
            newrows.push(rows_flight[i]);
          }
        }
      }
      console.log(newrows);
      setFlights({ ...flights, flight: newrows });
    }
    /*
      const { city } = this.state;
      rows.filter((obj) => obj.city === city);
    */
  };

  const setFilterData = (key, data) => {
    this.setstate({ [key]: data });
  };

  const agencyGoButton = () => {
    let filteragency;
    let count = 0;
    {
      filteragency = rows_agency.filter((row) => {
        if (asearchfields.id.length > 0) {
          count++;
          return row.id == asearchfields.id;
        }
        if (asearchfields.name.length > 0) {
          count++;
          return row.name == asearchfields.name;
        }
        if (asearchfields.street.length > 0) {
          count++;
          return row.street === asearchfields.street;
        }
        if (asearchfields.postalcode.length > 0) {
          count++;
          return row.postalcode === asearchfields.postalcode;
        }
        if (asearchfields.city.length > 0) {
          count++;
          return row.city === asearchfields.city;
        }
        if (asearchfields.country.length > 0) {
          count++;
          return row.country === asearchfields.country;
        }
        if (asearchfields.phone.length > 0) {
          count++;
          return row.phone === asearchfields.phone;
        }
        if (asearchfields.email.length > 0) {
          count++;
          return row.email === asearchfields.email;
        }
        if (asearchfields.web.length > 0) {
          count++;
          return row.web === asearchfields.web;
        }
      });

      console.log(filteragency);
    }
    if (count == 0) setAgencies({ ...agencies, agency: rows_agency });
    else setAgencies({ ...agencies, agency: filteragency });
  };

  const handleChipDelete = (sitem) => {
    {
      let newselected = { ...selected };
      let newitems = selected.items.filter((item) => {
        //console.log(agencies.agency.indexOf(selected.items.indexOf(item)));
        if (item === sitem) {
          //console.log(agencies.agency.indexOf(selected.items.indexOf(item)));
          let n = selected.items.indexOf(item);
          let i = agencies.agency.indexOf(selected.agency[n]);
          newselected.agency.splice(n, 1);
          console.log(i);
          let newagencies = { ...agencies };
          newagencies.agency[i].checked = false;
          setAgencies({ ...newagencies });
        } else return item;
      });

      setSelected({ ...selected, agency: newselected.agency, items: newitems });
    }
  };

  const uncheckrow = (row) => {};

  return (
    <div>
      <Toolbar
        selected={selected}
        asearch={asearch}
        adialogOpen={adialogOpen}
        goButton={goButton}
      ></Toolbar>
      <FlightTable
        flights={flights}
        data={rows_flight}
        selected={selected}
        go={go}
      />
      <AgencyDialog
        checkBoxHandle={checkBoxHandle}
        handleDelete={handleChipDelete}
        agencies={agencies}
        agencyGoButton={agencyGoButton}
        setAgencySearchFields={setAgencySearchFields}
        selected={selected}
        checkedAgency={checkedAgency}
        adialog={adialog}
        adialogOpen={adialogOpen}
        setFilterData={setFilterData}
        okButton={okButton}
      ></AgencyDialog>
    </div>
  );
}

export default App;
