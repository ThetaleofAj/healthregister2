import React from "react";
import { useState ,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import { MDBSpinner } from 'mdb-react-ui-kit';


function FacilityPage(){
   let params = useParams();
   const [data,setData] = useState()
   const [isLoading,setIsLoading] = useState(true)

   useEffect(()=>{
     fetch(`https://barbara1.pythonanywhere.com/api/entry/${params.entryId}`,{
         method: 'GET',
      })
      .then(res=>res.json())
      .then(
         (result)=>{
            console.log(result)
            setData(result)
            setIsLoading(false)
         },
         (error)=>{

         }
      )
   },[params.entryId])


   if(isLoading){
      return(
        <MDBSpinner color='light'>
        </MDBSpinner>
      )
   }



   return(
     <div className="thisView">
      <table>
        <tr>
          <th>NAME</th>
          <th>PROVINCE</th>
          <th>DISTRICT</th>
          <th>WARD</th>
          <th>COORDINATES</th>
          <th>INFRASTRUCTURE</th>
          <th>SERVICES</th>
          <th>EQUIPMENT</th>
          <th>OPERATING HOURS</th>
          <th>CONTACT</th>
        </tr>
        <tr>
          <td>{data.Name}</td>
          <td>{data.Province}</td>
          <td>{data.District}</td>
          <td>{data.Ward}</td>
          <td>{data.Coordinates}</td>
          <td>{data.infrastructure}</td>
          <td>{data.services == null ? (<p></p>):(<>
            {data.services.map(info=>(
               <> {info.service},</>
         ))}
          </>)}</td>
        <td>{data.equipment == null ? (<p></p>):(<>
            {data.equipment.map(info=>(
              <>{info.equipment},</>
         ))}
          </>)}</td>
          <td> {data.hours == null ? (<p></p>):(<>
            {data.hours.map(info=>(
              <>{info.day} | {info.hours}</>
         ))}
          </>)}
          </td>
          <td>
          {data.contacts == null ? (<p></p>):(<>
            {data.contacts.map(info=>(
              <>{info.details}</>
         ))}
          </>)}
          </td>
        </tr>
      </table>
     <MDBContainer>
      <Link to={`/entry/${data.id}`}>Edit entry</Link>
     </MDBContainer>
     </div>
      
   )

}

export default FacilityPage;