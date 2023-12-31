import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "100%" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}
export default App;
