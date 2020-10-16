import React, {
  useState,
  useEffect
} from 'react';
import {
  Pie
} from 'react-chartjs-2';
import axios from 'axios';
import D3Chart from '../D3Chart/D3Chart';

const HomePage = (props) => {
  
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

      <div className="d3Chart">
        <h1>D3 Chart</h1>
       <D3Chart data={props.dChartData}
          width={100}
          height={100}
          innerRadius={80}
          outerRadius={150}>
          </D3Chart>
      </div>

      <div aria-label="Article 8" >
        <h1>Chart</h1>
        <Pie data = { props.chartData} options = {{responsive: true}} width="300px"/> 
      </div>
    </div>
  </main>
  );
}

export default HomePage;