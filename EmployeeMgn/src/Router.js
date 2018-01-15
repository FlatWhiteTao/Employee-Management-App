// define all differnet screens/routes for this app

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="EmployeeList"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
