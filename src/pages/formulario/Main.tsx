import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon} from '@ionic/react';

import './Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../img/thinking.png';

import {alarm} from  'ionicons/icons';

import Main14Days from '../formulario/14days/Main14Days';
import Main14DaysP2 from '../formulario/14daysP2/Main14DaysP2';


const Main: React.FC = () => {

  const history= useHistory();

  function main14days(){
    history.push('/Main14Days');
  }

  function main14daysp2(){
    history.push('/Main14DaysP2')
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Estudos</IonTitle>
        </IonToolbar>
       
      </IonHeader>
     
      <IonContent fullscreen className="ion-text-center ion-padding">
        <div className="ion-text-center">
            <img src={thinking} height="100px" width="100px"/>
            <div>
            <IonButton size="large" onClick={main14days}><IonIcon slot="start" icon={alarm}/>Diário inicial</IonButton>
            <IonButton size="large"  onClick={main14daysp2}><IonIcon slot="start" icon={alarm}/>Diário final</IonButton>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
