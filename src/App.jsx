import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { RouteLayout } from "./RootLayout/RouteLayout";
import { FAQ } from "./pages/help/faq";
import { Contact } from "./pages/help/contact";
import { PageNotFound } from "./pages/PageNotFound";


// lAYOUTS
import { HelpLayout } from "./RootLayout/HelpLayout";
import { CareersLayout } from "./RootLayout/CareersLayout";
import { Careers, careersLoaders } from "./pages/careers/Careers";
import {
  CareersDetails, CareersDetailsLoaders,
  
} from "./pages/careers/CareersDetails";
import { CareersError } from "./pages/careers/CareersError";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* HELP LAYOUT SECTION*/}
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Careers LAYOUT SECTION*/}
        <Route path="careers" element={<CareersLayout />}  errorElement = {<CareersError />}>
          <Route index element={<Careers />} loader={careersLoaders}></Route>
          <Route
            path=":id"
            element={<CareersDetails />}
            
            loader={CareersDetailsLoaders}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <main className="mt-20">
      <RouterProvider router={router} />
    </main>
  );
}
