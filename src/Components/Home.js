import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBCol,MDBBtn,MDBSpinner} from 'mdb-react-ui-kit';



function Home(){
   const [searchItem,setSearchItem] = useState('');
   const [data,setData] = useState();
   const [isLoading,setIsLoading] = useState(true)
    

   useEffect(()=>{
      fetch('https://rabeccaNew.pythonanywhere.com/api/')
      .then(res=>res.json())
      .then(
         (result)=>{
            setData(result)
            setIsLoading(false)
            console.log(result)
         },
         (error)=>{
         }
      )
   },[]) 

   

   if(isLoading){
      return(
         <MDBSpinner color='light'>
      </MDBSpinner>
      )
   }

   const Logout =()=>{
      localStorage.removeItem('token')
      window.location.reload()
   }
   const onSubmit =()=>{
      fetch(`https://rabeccaNew.pythonanywhere.com/api/?search=${searchItem}`)
      .then(res=>res.json())
      .then(
         (result)=>{
            setData(result)
            setIsLoading(false)
            console.log(result)
         },
         (error)=>{
         }
      )

   }

   return(
      <div className="mainBody">
         <div>
         <MDBCol md="9">
         <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={e=>setSearchItem(e.target.value)} onKeyDown={onSubmit} />
       </MDBCol>
         </div>
         <div className="entryArea">
         
         <Link to='/newentry' className="AddEntry">
            Add entry
         </Link>
         {localStorage.getItem('token') == null ? (<>
             <Link to='/login'>
                Login
             </Link>
         </>):(
         <MDBBtn color="green" onClick={Logout} outline>Logout
         </MDBBtn>)}
         </div>
         <table>
            <tr>
               <th>NAME</th>
               <th>PROVINCE</th>
               <th>DISTRICT</th>
               <th>WARD</th>
               <th>COORDINATES</th>
            </tr>
            {data.map(info=>(
               <tr>
            <td><Link to={`/facilitypage/${info.id}`}>{info.Name}</Link></td>
               <td>{info.Province}</td>
               <td>{info.District}</td>
              <td>{info.Ward}</td>
             <td>{info.Coordinates}</td>
             </tr>
            ))}
         </table>
      </div>
   );

}

export default Home;
