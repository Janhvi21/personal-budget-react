import React, {
  useState,
  useEffect
} from 'react';
import {
  Pie
} from 'react-chartjs-2';
import axios from 'axios';

const HomePage = () => {
  const [chartData, setChartData] = useState({})
  const chart = () => {
    let chartLabel=[];
    let chartData=[];
    axios.get("http://localhost:4000/budget").then(res => {
      console.log(res)
      for (const data of res.data.myBudget) {
       chartLabel.push(data.title);
       chartData.push(data.budget);
        //data.value[i] = res.data.myBudget[i].budget;
        //data.labels[i] = res.data.myBudget[i].title;
      }
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
      //createChart();
      //createChartD3();
    })
    
  }
  useEffect(() => {
    chart();
  }, [])
  return ( 
    <main className="container center">
    <div role="Articles" aria-label="Article Contents" className="page-area">
      <div aria-label="Article 1" className="text-box">
        <h1>Stay on track</h1>
        <article>
          Do you know where you are spending your money? If you really stop to
          track it down, you would get surprised! Proper budget management
          depends on real data... and this app will help you with that!
        </article>
      </div>
      <div aria-label="Article 2" className="text-box">
        <h1>Alerts</h1>
        <article>
          What if your clothing budget ended? You will get an alert. The goal
          is to never go over the budget.
        </article>
      </div>

      <div aria-label="Article 3" className="text-box">
        <h1>Results</h1>
        <article>
          People who stick to a financial plan, budgeting every expense, get
          out of debt faster! Also, they to live happier lives... since they
          expend without guilt or fear... because they know it is all good and
          accounted for.
        </article>
      </div>

      <div aria-label="Article 4" className="text-box">
        <h1>Free</h1>
        <article>
          This app is free!!! And you are the only one holding your data!
        </article>
      </div>

      <div aria-label="Article 5" className="text-box">
        <h1>Stay on track</h1>
        <article>
          Do you know where you are spending your money? If you really stop to
          track it down, you would get surprised! Proper budget management
          depends on real data... and this app will help you with that!
        </article>
      </div>

      <div aria-label="Article 6" className="text-box">
        <h1>Alerts</h1>
        <article>
          What if your clothing budget ended? You will get an alert. The goal
          is to never go over the budget.
        </article>
      </div>

      <div aria-label="Article 7" className="text-box">
        <h1>Results</h1>
        <article>
          People who stick to a financial plan, budgeting every expense, get
          out of debt faster! Also, they to live happier lives... since they
          expend without guilt or fear... because they know it is all good and
          accounted for.
        </article>
      </div>

      <div aria-label="Article 8" className="text-box">
        <h1>Chart</h1>
        <Pie data = { chartData}options = {{responsive: true}}/> 
      </div>
    </div>
  </main>
  );
}

export default HomePage;