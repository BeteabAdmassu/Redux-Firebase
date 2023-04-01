import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Header from "./component/Header";
import Body from "./component/Body";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch({ type: "FETCH_DATA" });
    };

    fetchData();
  }, []);


  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
