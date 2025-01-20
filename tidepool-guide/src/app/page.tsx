import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      
      <div className="text-center">
        <p className="text-black text-lg">Home Page</p>
        <h1 className="text-2xl font-bold">Test</h1>
        <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" /><div className="wf-width-cont surf-fc-widget"><div className="widget-container"><div className="external-cont"><iframe className="surf-fc-i" allowtransparency="true" src="//www.surf-forecast.com/breaks/Laguna-Beach/forecasts/widget/a" scrolling="no" frameBorder="0" marginWidth="0" marginHeight="0"></iframe><div className="footer"><a className="logo" href="//www.surf-forecast.com/"><img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width="1" height="1" /></a><div className="about" id="cmt">View detailed surf forecast for <a href="//www.surf-forecast.com/breaks/Laguna-Beach">Laguna Beach</a>. Visit <a href="//www.surf-forecast.com/breaks/Laguna-Beach">surf-forecast.com</a> for more details, long range forecasts, surf reports, swell and weather maps.</div></div></div></div></div>
      </div>
    </div>
  );
}

export default Home;
