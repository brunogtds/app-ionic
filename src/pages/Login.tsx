import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,} from '@ionic/react';

import Tab1 from './Home';

import distanciamentoExp from '../../src/img/distanciamentoExp.png';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">

        

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

       
      <IonLabel>Email:</IonLabel>
      <IonInput type="email"/>
      
      <IonLabel>Senha:</IonLabel>
      <IonInput type="password"/>

      <IonButton href="/Tab1">Login</IonButton>
      <IonButton>Cadastro</IonButton>
      
        
     
      </IonContent>
    </IonPage>
  );
};

export default Login;
