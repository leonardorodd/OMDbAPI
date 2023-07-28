import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Preview from "./pages/Preview"
import NotFound from "./pages/NotFound"

export default function Router() {
  return (
    <Routes>
      <Route path="/OMDbAP" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}