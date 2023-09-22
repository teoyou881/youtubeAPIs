import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react';
import MyIframe from './components/makeIframe.js';

function getUrl() {
  return "https://www.youtube.com/embed/8OnUoe1kXpA?si=fihVSKur9EIfvIt0";
}

export default function App() {
  const [date, setDate] = useState(new Date());
  var url1 = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=LEUGWFF5lPotyXBt";
  var url2 = "https://www.youtube.com/embed/Eqapyhp1-g8?si=-B49c2dx-sSu3lRr";
  var url3 = getUrl();

  return (
    <div>
      <h1>Select a Date Range to Search</h1>
      <div name="calendar_container">
        <Calendar onChange={setDate} value={date} selectRange={true}/>
      </div>
      <div>
        {date.length > 0 ? (
        <p>
          <span>Start:</span>{' '} {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
        ) : (
        <p>
          <span>Review date:</span>{' '} {date.toDateString()}
        </p>
        )}
      </div>
      <h1>Most Viewed</h1>
      <MyIframe src={url1} title={"most_viewed"}/>
      <h1>Most Liked</h1>
      <MyIframe src={url2} title={"most_liked"}/>
      <h1>Most Disliked</h1>
      <MyIframe src={url3} title={"most_disliked"}/>
    </div>
  );
}