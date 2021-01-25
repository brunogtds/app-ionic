import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Home';
import Tab2 from './pages/Forms';
import Tab3 from './pages/Recommendation';

import {home, bed, person} from  'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Main from './pages/Main';

/*Tela login*/

import Login from './pages/Login';




const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/login" component={Login} exact={true}/>
    
      <IonTabs>
        <IonRouterOutlet>
        

          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Main} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Início</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={bed} />
            <IonLabel>Formulário</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={person} />
            <IonLabel>Recomendações</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>


      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App; 

/*
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/login" component={Login} exact={true}/>
      <Route path="/dashboard" component={Dashboard} exact={true}/>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App; */