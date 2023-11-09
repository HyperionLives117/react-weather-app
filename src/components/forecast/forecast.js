import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = ["Mon", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay;
 const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  

  return (
    <>
      <label className="title"> Seven day forecast </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="minMax">{Math.round(item.main.temp_min)}°F / {Math.round(item.main.temp_max)}°F</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Cloud coverage</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind Speed</label>
                        <label>{item.wind.speed} MPH</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Sea Level</label>
                        <label>{item.main.sea_level} FT</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Feels like</label>
                        <label>{Math.round(item.main.feels_like)} F°</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
