import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Notify from "./pages/Notify/Notify"
import Calendar from "./pages/Calendar/Calendar"
import Task from "./pages/Task/Task"
import UserSettings from "./pages/UserSettings/UserSettings"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="home" element={<UserDashboard />} />
        <Route path="notifications" element={<Notify />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="task" element={<Task />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
  );
}