import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from "./Register";
import Nav from "./Nav";
import TabelaJogos from "./TabelaJogos";
import Bets from "../components/Bets";
import CreateBolao from "./CreateBolao";
import RenderedGroups from "./RenderedGroups";

import bolaoApi from "../api/bolaoApi";


const App = () => {
  const [matches, setMatches] = useState([]);
  const [groupClicked, setGroupClicked] = useState("GROUP_A");

  const worldCupMatches = async () => {
    const response = await bolaoApi.get("/match");
    setMatches(response.data);
    console.log(response);
  };

  useEffect(() => {
    worldCupMatches();
  }, []);

  return (
    <div className="appMain">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<RenderedGroups setGroupClicked={setGroupClicked} matches={matches} />} />
          <Route path="/tabela-jogos" element={<TabelaJogos matches={matches} groupClicked={groupClicked} setGroupClicked={setGroupClicked} />} />
          <Route path="/create-bolao" element={<CreateBolao />} />
          <Route path="/bets" element={<Bets matches={matches} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;

