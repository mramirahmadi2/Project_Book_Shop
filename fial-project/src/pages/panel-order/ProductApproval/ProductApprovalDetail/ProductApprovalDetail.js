import React from 'react'
import axios from 'axios';
import PanelManage from 'pages/panel-order/PanelManage.component';
import { Box } from '@mui/material';
import { useParams , useNavigate } from 'react-router-dom';
import Style from './Style.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import moment from 'jalali-moment';

function ProductApprovalDetail() {

 
  let {id} = useParams();
  let navigation = useNavigate();
  const [Get, setGet] = React.useState(null);
  const [Basket, setBasket] = React.useState(null);
  React.useEffect(() => {
    axios.get(`http://localhost:3002/order`).then(res => {
      console.log(res);
      setGet(res.data)
    }
    ).catch(err => {
      console.log(err);

    })
  }, []);
  React.useEffect(() => {
    axios.get(`http://localhost:3002/basket`).then(res => {
      console.log(res);
      setBasket(res.data)
    }
    ).catch(err => {
      console.log(err);

    })
  }, []);

  if (!Get) return null;
 


 


  if (!Basket) return null;

  let IdUser = {id};
 
  
  
  

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
      
      Sum 
     }


   
    axios.post(`http://localhost:3002/orders`, userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
      alert(`?????????? ?????????? ?????????? ????`);
  }).catch(err => {
      console.log(err);

  });
  Delete (id);
  navigation('/ProductApproval')
  
  }

  
  let Order = Basket.map((Basket) =>
    <tr key={Basket.id}>
      <td><Box sx={{
        display: 'flex',

      }}> <span > <img className={Style.imageTitle} src={`http://localhost:3002/files/${Basket.image}`} alt={Basket.group} /></span> <Box sx={{
        mt: 2,
        mr: 5
      }}> <span> {Basket.title}</span></Box></Box> </td>
      <td>
        <Box sx={{
          mt: 2,
          mr: 5
        }}>
          {Basket.writer}
        </Box>
      </td>

      <td>
        <Box sx={{
          mt: 2,
          mr: 5
        }}>
          ?????????? {Basket.price}
        </Box>
      </td>

     

    </tr>
  )

  return (
    <div>
    <PanelManage/>
      <Box
      sx={{
        mt:20,
        mr:5
      }}
      
      >{Get.map((Get)=>{
        if(Get.id == IdUser.id){
         return( <h3>{Get.firstName} {Get.familyName}</h3>)
          
        }
      })
        
      }
      </Box>
      <div>
      <Box
      sx={{
        mt:2,
        mr:5
      }}
      
      >{Get.map((Get)=>{
        if(Get.id== IdUser.id){
         return( <p>???????? :{Get.addres} </p>)
          
        }
      })
        
      }
      </Box>
      <Box
      sx={{
        mt:2,
        mr:5
      }}
      
      >{Get.map((Get)=>{
        if(Get.id== IdUser.id){
         return( <p>???????? ?????????????? ??????: {Get.sum} </p>)
          
        }
      })
        
      }
      </Box>
      
      <Box
      sx={{
        mt:2,
        mr:5
      }}
      
      >{Get.map((Get)=>{
        if(Get.id== IdUser.id){
         return( <p> ???????? ?????? ???????? {moment(Get.dateNow, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')} </p>)
          
        }
      })
        
      }
      </Box>
      
      </div>
      <Box sx={{
        mt: -20,
        mr: 25,
        fontFamily: 20,
      }}>
        <table  >
          <tr>
            <th >?????????????? ??????????</th>
            <th>??????????????</th>
            <th>???????? ??????????</th>
           
          </tr>

          <tbody>
            {
              Order
            }
          </tbody>


          <Box sx={{
            display: 'flex',
            mt: 5,
            mr: 25,
            mb:10
          }}>
            <Button onClick={()=>handelDelete(IdUser.id)} color='error' variant="outlined" sx={{
              width: 160,
              mr: 5
            }} startIcon={<DeleteIcon sx={{
              ml: 2,
            }} />}>
              ?????? ????????????
            </Button>
            <Button onClick={()=>handelPost(IdUser.id)} color='success' variant="outlined" sx={{
              width: 150,
              mr: 5
            }} startIcon={<AddCircleOutlineSharpIcon sx={{
              ml: 2,
  
            }} />}>
              ?????????? ??????????
            </Button>
          </Box>


        </table>
      </Box>
    </div>
  )
}

export default ProductApprovalDetail
