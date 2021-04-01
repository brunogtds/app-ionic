import React, {useContext, useEffect} from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonLoading, IonToast
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Home';

import Tab3 from './pages/recomendacoes/Recommendation';

import {home, bed, person, informationCircle} from  'ionicons/icons';
import {useState, ChangeEvent} from 'react';

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

//import Main from './pages/formulario/14days/Main14Days';
import Main from './pages/formulario/Main';
import Main14Days from './pages/formulario/14days/Main14Days';
import Main14DaysP2 from './pages/formulario/14daysP2/Main14DaysP2';

/*ExplanationSlides*/

import ExplanationSlides from './pages/ExplanationSlides';

/*Tela login*/

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperacaoSenha from './pages/RecuperacaoSenha';

/*Módulos recomendações*/
import Mode1 from './pages/recomendacoes/Mode1';
import Mode2 from './pages/recomendacoes/Mode2';
import Mode3 from './pages/recomendacoes/Mode3';

/*Sobre */
import Sobre from './pages/Sobre';

/*auth */

import {config} from './firebaseConfig/firebaseConfig';
import { FirebaseAppProvider, AuthCheck } from "reactfire";
import {Suspense} from "react";

const PublicRoutes: React.FC = () => {

  return(
    <IonRouterOutlet>
      <Route path="/login" component={Login} exact={true}/>
      <Route path="/cadastro" component={Cadastro} exact={true}/>
      <Route path="/recuperacao_senha" component={RecuperacaoSenha} exact={true}/>
      <Redirect exact path="/" to="/login"/>
      
    </IonRouterOutlet>
  )
};

const PrivateRoutes: React.FC = () => {

  return(
    <IonTabs>
        <IonRouterOutlet>
        

          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Main} exact={true} />
          <Route path="/main14days" component={Main14Days} exact={true}/>
          <Route path="/main14daysP2" component={Main14DaysP2} exact={true}/>
          <Route path="/tab3" component={Tab3} />
          <Route path="/explanationslides" component={ExplanationSlides}/>
          <Route path="/mode1" component={Mode1}/>
          <Route path="/mode2" component={Mode2}/>
          <Route path="/mode3" component={Mode3}/>
          <Route path="/sobre" component={Sobre}/>
         
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Início</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={bed} />
            <IonLabel>Formulários</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={person} />
            <IonLabel>Recomendações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sobre" href="/sobre">
            <IonIcon icon={informationCircle} />
            <IonLabel>Sobre</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  )
};

const App: React.FC = () => {

    return (
      <FirebaseAppProvider firebaseConfig={config}>
        <IonApp>
          <IonReactRouter>
            <Suspense fallback={<IonLoading isOpen={true} />}>
              <AuthCheck fallback={<PublicRoutes/>}>
                <PublicRoutes/>
                <PrivateRoutes/>
              </AuthCheck>
            </Suspense>
          </IonReactRouter>
        </IonApp>
      </FirebaseAppProvider>
    );
};
export default App;

