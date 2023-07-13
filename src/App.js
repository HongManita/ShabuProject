import logo from "./logo.svg";
import "./App.css";
import Homepage from "./All Page/Homepage";
import Loginpage from "./All Page/Loginpage";
import HomepageAddmin from "./Addmin/Page/HomepageAddmin";
import ProfileAddminpage from "./Addmin/Page/ProfileAddminpage";
import { Routes, Route } from "react-router-dom";
import Profilepage from "./All Page/Profilepage";
import Editemppage from "./Addmin/Page/Editemppage";
import Editmenupage from "./Addmin/Page/Editmenupage";
import Statpage from "./Addmin/Page/Statpage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/homepageaddmin" element={<HomepageAddmin />} />
        <Route path="/profileaddminpage" element={<ProfileAddminpage />} />
        <Route path="/profilepage" element={<Profilepage />} />
        <Route path="/editemppage" element={<Editemppage />} />
        <Route path="/editmenupage" element={<Editmenupage />} />
        <Route path="/statpage" element={<Statpage />} />

      </Routes>
    </div>
  );
}

export default App;
