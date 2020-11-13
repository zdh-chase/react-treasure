import { Route, HashRouter, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { ROUTER_CONFIG } from '@/router/Config';

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        {
          ROUTER_CONFIG.map((elem, index) => {
            return (
              <Route
                key={index}
                path={elem.path}
                render={() => {
                  return (
                    <DocumentTitle title={elem.title}>
                      <elem.component />
                    </DocumentTitle>
                  );
                }}
              />
            );
          })
        }
      </Switch>
    </HashRouter>
  );
}
