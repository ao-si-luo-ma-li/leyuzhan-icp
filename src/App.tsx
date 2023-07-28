import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import routers from './router';
import './App.scss';
import { Footer, Header } from './components';

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({top: 0})
  }, [location])
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          {routers.map((item, index) => {
            const SingleDynamicComponent = lazy(() => item.component());
            return (
              <Route key={index} path={item.path} element={
                <Suspense>
                  <SingleDynamicComponent />
                </Suspense>
              }>
              </Route>
            );
          })}
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
