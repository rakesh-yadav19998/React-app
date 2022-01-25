import './App.css';
import { Header, Footer } from './component';
import React, { Suspense } from 'react';
import { TitleContext } from './titleContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';


const Counter = React.lazy(() => import('./component/counter/counter'));
const AboutUs = React.lazy(() => import('./component/aboutUs/aboutUs'));
const ContactUs = React.lazy(() => import('./component/contactUs/contactUs'));
const FakeData = React.lazy(() => import('./component/apiData/fakeData'));
const ReactQuery = React.lazy(() => import('./component/reactQuery/reactQuery'));
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client = { queryClient }>
        <Router>
          <TitleContext.Provider value="React">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/fakeData" element={<FakeData />} />
                <Route path="/reactQuery" element={<ReactQuery />} />
              </Routes>
            </Suspense>
          </TitleContext.Provider>
        </Router>
      </QueryClientProvider>
      <Footer>  Footer section </Footer>
    </div>
  );
}

export default App;


