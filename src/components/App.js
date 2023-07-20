import React from "react";
import Future from "./Future/Future";
import SignUp from "../components/AcountLogin/SignUp";
import SignIn from "../components/AcountLogin/SignIn";
import Affiliate from "./Affiliate";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Contacts/ContactUs";
import Home from "./Home/Home";
import Blog from "./Blog";
import SingleBlogPage from "./SingleBlogPage";
import ForgetPassword from "./AcountLogin/ForgetPassword";
import Mobile_verification from "./AcountLogin/Mobile_verification";
import Email_verification from "./AcountLogin/Email_verification";
import Document_verification from "./AcountLogin/Document_verification";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Future />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlogPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/mobile-verification" element={<Mobile_verification/>} />
        <Route path="/email-verification" element={<Email_verification/>} />
        <Route path="/document-verification" element={<Document_verification/>} />

      </Routes>
    </>
  );
};

export default App;
