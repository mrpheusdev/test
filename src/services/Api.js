
import axios from "axios";



export default class Data {


    async getPool() {

        try {

            let data = await axios.get("https://api.dexscreener.com/latest/dex/pairs/arbitrum/0x7418F5A2621E13c05d1EFBd71ec922070794b90a")
            data = data.data;
            // console.log(data.pairs[0]);
            return data.pairs[0];


        } catch (error) {
            console.log(error);
        }


    }




}