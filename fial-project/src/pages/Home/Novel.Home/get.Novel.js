import React from 'react';
import axios from "axios";
import getProducts from 'components/api/GetAxios';
import Card from '../../../components/card/Card.component';
import stylehome from '../stylehome.module.css';

function getNovels() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Get, setGet] = React.useState(null);
    let i = 0;
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        axios.get(getProducts).then(res => {
            console.log(res);
            setGet(res.data)
        }
        ).catch(err => {
            console.log(err);
  
        })
    }, []);
  
  
    if (!Get) return null;
    const Novel = Get.map((Get) => {

        if (Get.group === 'Educational' && i <= 2) {

            i++;
            return (
                <div>
                    <Card key={Get.id}>
                        <img className={stylehome.img} src={`http://localhost:3002/files/${Get.image}`} alt={Get.group} />

                        <h3>{Get.title}</h3>

                        <p>نویسنده:{Get.writer}</p>
                        <p>قیمت:{Get.price}تومان</p>

                    </Card>
                </div>
            )
        }
    })
    return (
        <div>
        {Novel}


        </div>
    );
}

export default getNovels;