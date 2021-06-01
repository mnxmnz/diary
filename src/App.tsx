import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Calendar from './components/common/Calendar';
import Title from './components/common/Title';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Calendar />
      <Title />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
