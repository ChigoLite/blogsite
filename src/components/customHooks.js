import React,{useState,useEffect} from 'react';
import axios from 'axios'

const UsecustomHooks = (url) => {
    const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const req = async () => {
    try {
   const response=   await axios.get(url)
      setNews(response.data.articles)
      setLoading(false)
    
    } catch (error) {
      setLoading(false)
   
    }

  }
  useEffect(() => {
    req()
  }, []);
  return {loading,news};
}


export default UsecustomHooks;
