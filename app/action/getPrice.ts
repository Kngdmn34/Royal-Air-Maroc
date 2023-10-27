

import axios from 'axios'

const getPrice = async (cityName: string ) => {

    const options = {
        method: 'GET',
        url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/latest',
        params: {
          destination: `${cityName}`,
          origin: 'MA',
          period_type: 'year',
          one_way: ' true',
          show_to_affiliates: 'true',
          trip_class: '0',
          currency: 'MAD',
          page: '1',
          sorting: 'price',
          limit: '30'
        },
        headers: {
          'X-Access-Token': process.env.XAccessToken as string ,
          'X-RapidAPI-Key': process.env.XRapidAPIKey as string ,
          'X-RapidAPI-Host': process.env.XRapidAPIHost as string 
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}

export default getPrice