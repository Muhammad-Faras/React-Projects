import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import { Section, CompaniesSection, FeatureSection, BigFeatureSection, ExampleSection, CtaSection, FooterSection, SubFooter } from './Components/Section/Section'
function App() {
  return (
    <div>
      <Navigation />
      <Section />
      <CompaniesSection />
      <FeatureSection />
      <BigFeatureSection />
      <ExampleSection />
      <CtaSection />
      <FooterSection />
      <SubFooter />
    </div>
  )
}

export default App
