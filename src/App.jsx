import "./App.css";
import { MyComponent } from "./myComponent";
import MyPageComponent from "./myPageComponent";
import Button from "./components/button";

function App() {
  return (
    <>
      {/* render garrery component: */}
      <MyPageComponent />
      {/* render MyComponent here: */}
      <MyComponent />
      {/* render Button here: */}
      <Button />
    </>
  );
}

export default App;
