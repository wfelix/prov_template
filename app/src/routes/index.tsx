import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { routesEndpoints } from './endpoint';

import Panel from '../pages/Panel';
import Master from '../layouts/Master';

const Routes: React.FC = () => {

  return (
    <Master>
        <Switch>
          <>
            <Route path={routesEndpoints.PAINEL} exact component={Panel} />
          </>
        </Switch>
    </Master>
  );
};

export default Routes;
