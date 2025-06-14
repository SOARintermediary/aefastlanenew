import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';
import FeatureGrid from './components/features/FeatureGrid';
import CompanyFormation from './pages/CompanyFormation';
import VisaServices from './pages/VisaServices';
import ProServices from './pages/ProServices';
import HrSolutions from './pages/HrSolutions';
import Blog from './pages/Blog';
import FreeZoneVsMainland from './pages/blog/FreeZoneVsMainland';
import MainlandBusinessLicense from './pages/blog/MainlandBusinessLicense';
import StartingBusinessForeigner from './pages/blog/StartingBusinessForeigner';
import BusinessActivitiesLicensing from './pages/blog/BusinessActivitiesLicensing';
import FreeZoneCompanySetup from './pages/blog/FreeZoneCompanySetup';
import GovernmentApprovalsStreamlined from './pages/blog/GovernmentApprovalsStreamlined';
import CompanyRenewalsClosures from './pages/blog/CompanyRenewalsClosures';
import VisaTypesBusinessOwners from './pages/blog/VisaTypesBusinessOwners';
import UAEResidenceVisaApplication from './pages/blog/UAEResidenceVisaApplication';
import GoldenVisaEligibility from './pages/blog/GoldenVisaEligibility';
import FamilyDependentsVisa from './pages/blog/FamilyDependentsVisa';

const AppContent = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div 
        className={`min-h-screen bg-white ${isRTL ? 'font-arabic' : 'font-sans'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
        lang={isRTL ? 'ar' : 'en'}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className={isRTL ? 'text-right' : 'text-left'}>
              <Hero />
              <Services />
              <FeatureGrid />
              <ContactForm />
            </main>
          } />
          <Route path="/company-formation" element={<CompanyFormation />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/pro-services" element={<ProServices />} />
          <Route path="/hr-solutions" element={<HrSolutions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/free-zone-vs-mainland" element={<FreeZoneVsMainland />} />
          <Route path="/blog/mainland-business-license-dubai" element={<MainlandBusinessLicense />} />
          <Route path="/blog/starting-business-uae-foreigner" element={<StartingBusinessForeigner />} />
          <Route path="/blog/business-activities-licensing" element={<BusinessActivitiesLicensing />} />
          <Route path="/blog/free-zone-company-setup" element={<FreeZoneCompanySetup />} />
          <Route path="/blog/government-approvals-streamlined" element={<GovernmentApprovalsStreamlined />} />
          <Route path="/blog/company-renewals-closures" element={<CompanyRenewalsClosures />} />
          <Route path="/blog/visa-types-business-owners" element={<VisaTypesBusinessOwners />} />
          <Route path="/blog/uae-residence-visa-application" element={<UAEResidenceVisaApplication />} />
          <Route path="/blog/golden-visa-eligibility" element={<GoldenVisaEligibility />} />
          <Route path="/blog/family-dependents-visa" element={<FamilyDependentsVisa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;