import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Entry from "./Components/Entry";
import Login from "./Components/Login";
import EntryPage from "./Components/EntryPage";
import Services from "./Components/Services";
import Equipment from "./Components/Equipment";
import Contacts from "./Components/Contacts";
import Hours from "./Components/Hours";
import FacilityPage from "./Components/FacilityPage";
import { MDBContainer,MDBNavbar,MDBNavbarBrand} from 'mdb-react-ui-kit';




function App() {
  return (
    <div className="mainArea">
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            Health Facility Register
          </MDBNavbarBrand>
        </MDBContainer>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/newentry' element={<Entry/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/entry/:entryId' element={<EntryPage/>}/>
       <Route path='/editservices/:entryId' element={<Services/>}/>
       <Route path='/editequipment/:entryId' element={<Equipment/>}/>
       <Route path='/editcontacts/:entryId' element={<Contacts/>}/>
       <Route path='/edithours/:entryId' element={<Hours/>}/>
       <Route path='/facilitypage/:entryId' element={<FacilityPage/>}/>


     </Routes>
     </BrowserRouter>
   </div>
    
  );
}

export default App;
