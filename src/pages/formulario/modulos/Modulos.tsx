import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonIcon, IonLabel, IonNote} from '@ionic/react';

import '../Forms.css';

import { IonButton} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {useUser} from 'reactfire';

import {AuthCheck} from 'reactfire';

import thinking from '../../../img/thinking.png';

import {alarm, document} from  'ionicons/icons';

import {personOutline, peopleOutline, bedOutline, walkOutline, documentOutline} from  'ionicons/icons';
import { PropTypes } from 'mobx-react';


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

  const [modulo1Enviado, setModulo1Enviado] = React.useState(false);

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

            <div id="outer">
            <div id="inner-modules">

            <div>
            <IonButton size="large" onClick={modulo1} color="tertiary" fill="outline">  <IonIcon slot="start" icon={personOutline}/><div>Módulo 1 <br/> <span className="button-text"> Sobre você</span></div></IonButton></div>
     
            <div>
            <IonButton size="large"  onClick={modulo2} color="tertiary" fill="outline"><IonIcon slot="start" icon={walkOutline}/><div>Módulo 2 <br/> <span className="button-text"> Hábitos</span></div></IonButton>
            </div>
            
            <div>
            <IonButton size="large"  onClick={modulo3} color="tertiary" fill="outline"><IonIcon slot="start" icon={peopleOutline}/><div>Módulo 3 <br/> <span className="button-text"> Social </span></div></IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo4} color="tertiary" fill="outline"><IonIcon slot="start" icon={bedOutline}/><div>Módulo 4 <br/> <span className="button-text"> Cronotipo</span></div></IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo5} color="tertiary" fill="outline"><IonIcon slot="start" icon={documentOutline}/><div>Módulo 5 <br/> <span className="button-text"> GAD-7 </span></div></IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo6} color="tertiary" fill="outline"><IonIcon slot="start" icon={documentOutline}/><div>Módulo 6 <br/> <span className="button-text"> WHO-5 </span></div></IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo7} color="tertiary" fill="outline"><IonIcon slot="start" icon={documentOutline}/><div>Módulo 7 <br/> <span className="button-text"> PHQ-9 </span></div></IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo8} color="tertiary" fill="outline"><IonIcon slot="start" icon={documentOutline}/><div>Módulo 8 <br/> <span className="button-text"> ISI </span></div></IonButton> 
            </div>
            <div>
            <IonButton size="large"  onClick={modulo9} color="tertiary" fill="outline"><IonIcon slot="start" icon={documentOutline}/><div>Módulo 9 <br/> <span className="button-text"> PSS </span></div></IonButton> 
           </div>
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Modulos;
