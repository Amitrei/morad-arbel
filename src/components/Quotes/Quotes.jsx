import { useEffect, useState } from "react";
import delay from "delay";
import "./quotes.scss";
import { fetchQoutes } from "../../utils/fetchData";
import { motion } from "framer-motion";
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [mainQuote, setMainQuote] = useState(
    "החדר במיקום מעולה, הג׳קוזי משקיף על הר ארבל וזה ממש תענוג "
  );
  const [from, setFrom] = useState("Booking.com");
  useEffect(() => {
    const fetchData = async () => {
      setQuotes(await fetchQoutes());
    };

    fetchData();
  }, [quotes]);

  // (async () => {
  //   for (const qoute of quotes) {
  //     const result = await delay(8000, { value: qoute });
  //     setMainQuote(result.content);
  //     setFrom(result.from);
  //   }
  // })();

  return (
    <div className="quotes-container">
      <p className="main-qoute">{mainQuote}</p>
      <span className="qoute-from">{from}</span>
    </div>
  );
};

export default Quotes;
