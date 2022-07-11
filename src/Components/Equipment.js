import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from "mdbreact";
import { MDBSpinner } from 'mdb-react-ui-kit';


function Equipment(){
   let params = useParams()
   const [data,setData] = useState()
   const [equipment,setEquipment] = useState()
   const [isLoading,setIsLoading] = useState(true)

   useEffect(()=>{
      fetch(`https://rabeccaNew.pythonanywhere.com/api/editequipment/${params.entryId}`,{
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

   const Edit =()=>{
      fetch(`https://rabeccaNew.pythonanywhere.com/api/editequipment/${params.entryId}`,{
         method: 'PUT',
         headers: {
            'Content-Type' : 'application/json', 
      },
      body: JSON.stringify({
         'equipment':equipment,
      })
      }).then(data=>data.json())
      .then(
         (result)=>{
            console.log(result)},
            window.location.reload(),
            window.alert('Change successfully made!')
      )
   }


   if(isLoading){
      return(
         <MDBSpinner color='light'>
         </MDBSpinner>
      )
   }


   return(
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Edit Equipment</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Equipment
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
              defaultValue={data.equipment}
              onChange={e=>setEquipment(e.target.value)}
            />
           <div className="text-center mt-4">
              <MDBBtn color="white" outline type="submit" onClick={Edit}>
                Edit
              </MDBBtn>
            </div>
            <br />
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   )

}
export default Equipment;
