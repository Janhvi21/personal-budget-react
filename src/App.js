import React,{
  useState,
  useEffect
} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import axios from 'axios';

function App() {
  const [d3ChartData, setD3ChartData] = useState([])
  const [chartData, setChartData] = useState({})
  const chart = () => {
    let chartLabel=[];
    let chartData=[];
    axios.get("http://localhost:4000/budget").then(res => {
      for (const data of res.data.myBudget) {
       chartLabel.push(data.title);
       chartData.push(data.budget);
      }
      const d3ChartData = res.data.myBudget.map(data => {
        return ({
          'value': data.budget,
          'labels': data.title
        })
      })
      setD3ChartData(d3ChartData)
      setChartData({
      labels:chartLabel,
      datasets: [{
        label: 'Chart JS',
        data: chartData,
        backgroundColor: [
          "#98abc5",
          "#8a89a6",
          "#7b6888",
          "#6b486b",
          "#a05d56",
          "#d0743c",
          "#ff8c00",
        ],
      }]

    })
    })
    
  }
  useEffect(() => {
    chart();
  }, [])
  return (
    <Router>
     <Menu></Menu>
     <Hero></Hero>
     <div className="mainContainer">
        <Switch>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/">
              <HomePage dChartData={d3ChartData} chartData={chartData} ></HomePage>
            </Route>
        </Switch>
     </div>
     
     <Footer></Footer>
    </Router>
  );
}

export default App;
