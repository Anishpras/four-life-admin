import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { db } from "./firebase";
import ApplicationDetail from "./pages/ApplicationDetail";
import ApplicationList from "./pages/ApplicationList";

function App() {
  const [applicationList, setApplicationList] = useState([]);
  console.log(applicationList);
  useEffect(() => {
    db.collection("applications")
      .orderBy("timeOfApplication", "desc")
      .onSnapshot((applications) => {
        setApplicationList(applications.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <ApplicationList applicationList={applicationList} />
        </Route>
        <Route path="/:id">
          <ApplicationDetail applicationList={applicationList} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
