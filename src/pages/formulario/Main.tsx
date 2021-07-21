import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon, IonToggle, IonItem, IonLabel} from '@ionic/react';

import './Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../img/thinking.png';

import {alarm} from  'ionicons/icons';


import Modulos from '../formulario/modulos/Modulos';


const Main: React.FC = () => {

  const history= useHistory();
  const [checkedQuestionario, setCheckedQuestionario] = useState(false);
  const [checkedActigrafo, setCheckedActigrafo] = useState(false);

  
  function main14daysp2(){
    history.push('/Main14DaysP2')
  }

  function modulos(){
    history.push('/modulos')
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle><b>Estudos</b></IonTitle>
        </IonToolbar>
       
      </IonHeader>
     
      <IonContent fullscreen className="ion-text-center ion-padding" color="light">
        <div className="ion-text-center">
            <img src={thinking} height="100px" width="100px"/>
            <div>
            {/* <IonButton size="large" onClick={main14days} color="tertiary">Diário inicial</IonButton>
            <IonButton size="large"  onClick={main14daysp2} color="tertiary">Diário final</IonButton> */}
           {/* <IonButton size="large" onClick={modulos} color="tertiary">Questionário</IonButton> */}

           <div id="outer">
           <div id="inner">
            
            <IonItem color="light"><IonLabel>Questionário</IonLabel>
            <IonToggle checked={checkedQuestionario} onIonChange={e => setCheckedQuestionario(e.detail.checked)} />
            </IonItem>
            {checkedQuestionario === true ?
              <IonItem color="light"> 
                <IonLabel>Texto explicando pesquisa.</IonLabel>
                <IonButton color="tertiary" onClick={modulos}>Iniciar</IonButton>
              </IonItem> : null
            }
            
            <br/>
            <IonItem color="light"><IonLabel>Actígrafo</IonLabel>
            <IonToggle checked={checkedActigrafo} onIonChange={e => setCheckedActigrafo(e.detail.checked)} />
            </IonItem>
            

            </div> 
            </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
