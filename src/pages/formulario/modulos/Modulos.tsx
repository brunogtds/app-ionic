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

  function perfil(){
    history.push('/perfil');
  }

  function saude(){
    history.push('/saude');
  }

  function contato(){
    history.push('/contatosocial')
  }

  function habitos(){
    history.push('/habitos');
  }

  function sonoSintomas(){
    history.push('/sonosintomas');
  }


  

  const [modulo1Enviado, setModulo1Enviado] = React.useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="ion-toolbar-formulario">
          <IonTitle><b>FORMULÁRIOS</b></IonTitle>
        </IonToolbar>
       
      </IonHeader>
     
      <IonContent fullscreen className="ion-text-center ion-padding" color="light">
        <div className="ion-text-center">
           
            <div id="outer">
            <div id="inner-modules">

            <div>
            <IonButton  onClick={perfil} color="white" fill="solid" shape="round" id="button-forms">  <IonIcon slot="start" icon={personOutline}/>Sobre você</IonButton></div>
     
            <div>
            <IonButton disabled={true}  onClick={saude} color="white" fill="solid" shape="round" id="button-forms-saude"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton>
            </div>
            
            <div>
            <IonButton disabled={true} onClick={contato} key={'contatoSocial'} color="white" fill="solid" shape="round" id="button-forms-social"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
            </div>

            <div>
            <IonButton disabled={true} onClick={habitos} color="white" fill="solid" shape="round" id="button-forms-habitos"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos</div></IonButton> 
            </div>

            <div>
            <IonButton disabled={true} onClick={sonoSintomas} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Sono e sintomas</div></IonButton> 
            </div>
            
           </div> 
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Modulos;
