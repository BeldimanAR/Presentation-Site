import React, { useEffect } from "react";

// LIBRARIES
import { Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import Layout from "components/Layout/Layout";
import HomePage from "view/HomePage/HomePage";
import ImpactStrategy from "view/ImpactStrategy/ImpactStrategy";
import ContactPage from "view/ContactPage/ContactPage";
import AboutUs from "view/AboutUs/AboutUs";
import Pharma from "view/Pharma/Pharma";
import Agriculture from "view/Agriculture/Agriculture";
import RealEstate from "view/RealEstate/RealEstate";
import GreenEnergy from "view/GreenEnergy/GreenEnergy";
import PortOperator from "view/PortOperator/PortOperator";
import Refinery from "view/Refinery/Refinery";
import InformationTechnology from "view/InformationTechnology/InformationTechnology";
import Factory from "view/Factory/Factory";
import Projects from "view/Projects/Projects";
import BridgeLoanFunds from "view/BridgeLoanFunds/BridgeLoanFunds";
import Project from "view/Project/Project";
import LoadingComponent from "config/LoadingComponent";
import Terms from "view/Terms/Terms";

const AppRoutes = () => {
  // CONSTANTS USING HOOKS
  const { pathname } = useLocation();

  // USE EFFECT FUNCTIONS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          // <Layout>
          <HomePage />
          // </Layout>
        }
      />

      <Route
        path="/impact-strategy"
        element={
          <Layout>
            <ImpactStrategy />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />

      <Route
        path="/pharma"
        element={
          <Layout>
            <Pharma />
          </Layout>
        }
      />

      <Route
        path="/agriculture"
        element={
          <Layout>
            <Agriculture />
          </Layout>
        }
      />
      <Route
        path="/real-estate"
        element={
          <Layout>
            <RealEstate />
          </Layout>
        }
      />
      <Route
        path="/green-energy"
        element={
          <Layout>
            <GreenEnergy />
          </Layout>
        }
      />
      <Route
        path="/port-operator"
        element={
          <Layout>
            <PortOperator />
          </Layout>
        }
      />
      <Route
        path="/refinery"
        element={
          <Layout>
            <Refinery />
          </Layout>
        }
      />
      <Route
        path="/information-technology"
        element={
          <Layout>
            <InformationTechnology />
          </Layout>
        }
      />
      <Route
        path="/factory"
        element={
          <Layout>
            <Factory />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <Terms />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/project/:id"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />
      <Route
        path="/bridge-loan-funds"
        element={
          <Layout>
            <BridgeLoanFunds />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
