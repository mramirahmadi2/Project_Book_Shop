import React from 'react';
import PanelManage from '../PanelManage.component';
import axios from 'axios';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import '../TableProducts/Table.css';
import { Link } from 'react-router-dom';

function AwaitingApproval() {

  let DateOk = new Date()

  const [Get, setGet] = React.useState(null);
  React.useEffect(() => {
    axios.get(`http://localhost:3002/orders`).then(res => {
      console.log(res);
      setGet(res.data)
    }
    ).catch(err => {
      console.log(err);

    })
  }, []);


  if (!Get) return null;
  const handelDelete = async(id) =>{
    await axios.delete(`http://localhost:3002/orders/${id}`);
    window.location.reload();
    
  }

  async function Delete (id){
    await axios.delete(`http://localhost:3002/orders/${id}`);
    window.location.reload();
  }
  const handelPost = (id)=>{
   let firstName= ""
   let familyName= ""
   let addres= ""
   let number= ""
  
   let Sum = ""

   Get.map((Get)=>{
     if(Get.id == id ){
       return(
         firstName= Get.firstName,
         familyName= Get.familyName,

         addres= Get.addres,
         number= Get.number,
       
         Sum = Get.sum
       )
     }
   })

     let userData ={
     firstName,
      familyName,
      addres,
      number,
      DateOk,
      Sum 
     }


   
    axios.post(`http://localhost:3002/order`, userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
      alert(`سفارش مشتری تایید شد`);
  }).catch(err => {
      console.log(err);

  });
  Delete (id);
  
  }
  let showOrders = Get.map(Get =>
    <tr key={Get.id}>
      <td><Box sx={{
        display: 'flex',

      }}> <Box sx={{
        mt: 2,
        mr: 5
      }}><Link to={'/detailOrder/'+Get.id}> <span> {Get.firstName} {Get.familyName}</span></Link></Box></Box> </td>
      <td>
        <Box sx={{
          mt: 2,
          mr: 5
        }}>
          {Get.number}
        </Box>
      </td>

      <td>
        <Box sx={{
          mt: 2,
          mr: 5
        }}>
           {Get.sum}
        </Box>
      </td>

      <td>
        <Box sx={{
          display: 'flex'
        }}>
          <Button onClick={()=>handelDelete(Get.id)} color='error' variant="outlined" sx={{
            width: 160,
            mr: 5
          }} startIcon={<DeleteIcon sx={{
            ml: 2,
          }} />}>
            حذف سفاررش
          </Button>
          <Button onClick={()=>handelPost(Get.id)} color='success' variant="outlined" sx={{
            width: 150,
            mr: 5
          }} startIcon={<AddCircleOutlineSharpIcon sx={{
            ml: 2,

          }} />}>
            تایید سفارش
          </Button>
        </Box>
      </td>

    </tr>
  )

    return ( 
        <div>
          <PanelManage/>
          <div>
          <Box sx={{
            mt: 0,
            mr: 15,
            fontFamily: 10,
            width:60
          }}>
            <table   >
              <tr>
                <th >نام سفارش دهنده</th>
                <th>شماره تماس</th>
                <th>مبلغ </th>
                <th>ویرایش</th>
              </tr>

              <tbody>
                {
                  showOrders
                }
              </tbody>





            </table>
          </Box>
          </div>
        </div>
     );
}

export default AwaitingApproval;