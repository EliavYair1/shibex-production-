import { Component } from 'react';
import '../components/css_files/shibexChart.css'
class ShibexChart extends Component {
  state = {};
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://widget.nomics.com/embed.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <>
   
      
   <div className="chartWrapper">
            <div
              className="nomics-ticker-widget chart"
              data-name="Shibex"
              data-base="SHIBX3"
              data-quote="USD"
            ></div>
          </div>
      </>
    );
  }
}

export default ShibexChart;
