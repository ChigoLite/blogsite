import React from 'react';
import Home from './components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sharedroute from './routes/sharedroute';
import SingleArticle from './components/singleArticle';
import UsecustomHooks from './components/customHooks';
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c94c6630bbce4993968f358584d864f0';

const App = () => {
  const {news} = UsecustomHooks(url)

  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Sharedroute />}>
          <Route index element={ <Home news={ news}/>}/>
          <Route path='/single/:id' element={<SingleArticle news={ news} />}/>
        </Route>
     </Routes>
</BrowserRouter> 
    
  );
}

export default App;
