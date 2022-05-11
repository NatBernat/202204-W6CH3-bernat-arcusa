import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import { addDigitActionCreator } from "./redux/features/phoneSlice/phoneSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDigitActionCreator());
  }, [dispatch]);

  return (
    <div className="container">
      <Info />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <div className="actions">
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default App;
