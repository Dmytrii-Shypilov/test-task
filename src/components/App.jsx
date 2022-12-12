import MainPage from "pages/MainPage";
import JobPage from "pages/JobPage/JobPage";

import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

export const App = () => {
  return (
   
      <Routes>
          <Route path="/test-task" element={<MainPage/>}></Route>
          <Route path="test-task/:id" element={<JobPage/>}></Route>
       </Routes>
  )
};
