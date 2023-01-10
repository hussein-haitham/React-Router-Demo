import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";

function NewQuote() {
  const history = useHistory();
  const { sendRequest, status, error } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed" && !error) history.push("/quotes");
  }, [status, history, error]);
  const addQuoteHandler = ({ author, text }) => {
    sendRequest({ author, text });
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
