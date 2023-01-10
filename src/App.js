import { Route, Switch, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes.js";
import NewQuote from "./pages/NewQuote.js";
import QuoteDetails from "./pages/QuoteDetails.js";
import NotFound from "./pages/NotFound.js";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
