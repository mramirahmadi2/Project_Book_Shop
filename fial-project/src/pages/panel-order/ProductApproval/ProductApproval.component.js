import React from 'react';
import PanelManage from '../PanelManage.component';
import axios from 'axios';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';



function ProductApproval() {
    const [Get, setGet] = React.useState(null);
    React.useEffect(() => {
      axios.get(`http://localhost:3002/order`).then(res => {
        console.log(res);
        setGet(res.data)
      }
      ).catch(err => {
        console.log(err);
  
      })
    }, []);
  
  
    if (!Get) return null;
    const handelDelete = async(id) =>{
      await axios.delete(`http://localhost:3002/order/${id}`);
      window.location.reload();
      
    }

    async function Delete (id){
      await axios.delete(`http://localhost:3002/order/${id}`);
      window.location.reload();
    }
    const handelPost = (id)=>{
     let firstName= ""
     let familyName= ""
     let addres= ""
     let phoneNumber= ""
     let   BasketData = ""
     let sum = ""
  
     Get.map((Get)=>{
       if(Get.id == id ){
         return(
           firstName= Get.firstName,
           familyName= Get.familyName,
  
           addres= Get.addres,
           phoneNumber= Get.phoneNumber,
           BasketData = Get.Basket,
           sum = Get.Sum
         )
       }
     })
  
       let userData ={
       firstName,
        familyName,
        addres,
        phoneNumber,
        BasketData ,
        sum 
       }
  
  
     
      axios.post(`http://localhost:3002/orders`, userData).then((response) => {
        console.log(response.status);
        console.log(response.data.token);
        alert(`سفارش مشتری رد شد`);
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
        }}> <span> {Get.firstName}{Get.familyName}</span></Box></Box> </td>
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
             {Get.Sum}
          </Box>
        </td>
  
        <td>
          <Box sx={{
            display: 'flex'
          }}>
            <Button onClick={()=>handelDelete(Get.id)} color='success' variant="outlined" sx={{
              width: 160,
             
              mr: 5
            }} startIcon={<LocalShippingIcon sx={{
              ml: 2,
            }} />}>
              سفارش ارسال شد
            </Button>
            <Button onClick={()=>handelPost(Get.id)} color='error' variant="outlined" sx={{
              width: 150,
              mr: 5
            }} startIcon={<DoNotDisturbOnTotalSilenceIcon sx={{
              ml: 2,
  
            }} />}>
              رد سفارش
            </Button>
          </Box>
        </td>
  
      </tr>
    )
  
    return (<div>
        <PanelManage/>
        <div>
        <Box sx={{
          mt: 0,
          mr: 15,
          fontFamily: 10,
          width:60
        }}>
          <table  >
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
    </div>);
}

export default ProductApproval;