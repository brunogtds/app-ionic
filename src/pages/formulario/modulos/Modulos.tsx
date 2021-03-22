import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon, IonLabel} from '@ionic/react';

import '../Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../../img/thinking.png';

import {alarm} from  'ionicons/icons';


const Modulos: React.FC = () => {

  const history= useHistory();

  function modulo1(){
      history.push('/modulo1');
  }

  function modulo2(){
    history.push('/modulo2');
  }

  function modulo3(){
    history.push('/modulo3');
  }

  function modulo4(){
    history.push('/modulo4');
  }

  function modulo5(){
    history.push('/modulo5');
  }

  function modulo6(){
    history.push('/modulo6');
  }

  function modulo7(){
    history.push('/modulo7');
  }

  function modulo8(){
    history.push('/modulo8');
  }

  function modulo9(){
    history.push('/modulo9');
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle><b>Estudos</b></IonTitle>
        </IonToolbar>
       
      </IonHeader>
     
      <IonContent fullscreen className="ion-text-center ion-padding">
        <div className="ion-text-center">
            <img src={thinking} height="100px" width="100px"/>
            <div>
            <IonButton size="large" onClick={modulo1} color="tertiary" fill="outline">Módulo 1</IonButton>
           
            <IonButton size="large"  onClick={modulo2} color="tertiary" fill="outline">Módulo 2</IonButton> 
           
            <IonButton size="large"  onClick={modulo3} color="tertiary" fill="outline">Módulo 3</IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo4} color="tertiary" fill="outline">Módulo 4</IonButton> 
           
            <IonButton size="large"  onClick={modulo5} color="tertiary" fill="outline">Módulo 5</IonButton> 
           
            
            <IonButton size="large"  onClick={modulo6} color="tertiary" fill="outline">Módulo 6</IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo7} color="tertiary" fill="outline">Módulo 7</IonButton> 
           
            <IonButton size="large"  onClick={modulo8} color="tertiary" fill="outline">Módulo 8</IonButton> 
            
            <IonButton size="large"  onClick={modulo9} color="tertiary" fill="outline">Módulo 9</IonButton> 
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Modulos;
