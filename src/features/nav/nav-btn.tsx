import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


interface Props {
   pageName: string,
   path: string,
   nextComponent: any,
}

export const NavBtn: React.FC<Props> = (props) => {
   const {pageName, path, nextComponent} = props
   return (
      <BrowserRouter>
      <div>
         <Link data-testid='a-tag' to={path}>{pageName}</Link>
      </div>
      <Switch>
         <Route path={path}>
            {nextComponent}
         </Route>
      </Switch>
      </BrowserRouter>
   );
}