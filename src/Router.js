import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
const { titleStyle } = style;

  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            titleStyle={titleStyle}
          />
        </Scene>

        <Scene key="main">
          <Scene
            initial
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Add Employee"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

const style = {
  titleStyle:
  {
    alignSelf: 'center',
  },
};

export default RouterComponent;
