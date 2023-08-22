import axios from "axios";
import { useEffect, useState } from "react"; 
 
const useFetch = (endpoint) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null); 

  const API_KEY = '4e52feba147b45edbf9572a23f10651d'

  const options = {
    method: "GET",
    url: `https://newsapi.org/v2/${endpoint}&apikey=${API_KEY}`,
  };

  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await axios.request(options);

      setdata(response.data.articles);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  }; 

  return {data , isLoading , error , refetch }
}; 

export default useFetch
