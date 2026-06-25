import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutCompanyPage from '@/pages/AboutCompanyPage';
import OurDivisionsPage from '@/pages/OurDivisionsPage';
import DirectorsPage from '@/pages/DirectorsPage';
import CertificationsPage from '@/pages/CertificationsPage';
import CompliancePage from '@/pages/CompliancePage';
import ServicesPage from '@/pages/ServicesPage';
import GovernmentTendersPage from '@/pages/GovernmentTendersPage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutCompanyPage />} />
          <Route path="divisions" element={<OurDivisionsPage />} />
          <Route path="directors" element={<DirectorsPage />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="tenders" element={<GovernmentTendersPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;