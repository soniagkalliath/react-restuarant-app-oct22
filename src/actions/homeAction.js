import axios from "axios";
import { SUCCESS,FAIL } from "../constants/restuarantConstant";

export const RestuarantsList = () => async (dispatch) =>{
   try{
    const {data} = await axios.get('https://restuarnt-app.onrender.com/restaurants')
    console.log(data);
    dispatch({
        payload:data ,type:SUCCESS
    })
    }
    catch(error){
        dispatch({
            payload:error ,type:FAIL
        })
    }
}