import axios from "axios";
import { useEffect, useState } from "react";

const Phone = () => {

    const [phones, setPhone] = useState([])

    useEffect(()=>{
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=> {
            const value =data.data.data
            const PhoneData  = value.map(phone=>
            {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(PhoneData)
            setPhone(PhoneData)
        });

    },[])

    return (
        <div>
            
        </div>
    );
};

export default Phone;