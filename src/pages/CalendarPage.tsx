import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel, IonButtons, IonMenuButton, IonModal,  IonSelect, IonSelectOption} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from './ExplanationSlides';

import {auth} from '../firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';


import {AuthCheck} from 'reactfire';

import logo_clinicas from '../img/logo_clinicas.svg';
import logo_crono from '../img/logo_crono.svg';
import logo_innovaspace from '../img/logo_innovaspace.svg';
import logo_neurobio from '../img/logo_neurobio.svg';
import logo_nnnesp from '../img/logo_nnnesp.svg';
import logo_ufrgs from '../img/logo_ufrgs.svg';
import logo_unifesp from '../img/logo_unifesp.svg';
import logo_regente from '../img/logo_regente_branco.svg';
import Neutro_feliz from '../img/Neutro_feliz.svg';

import Calendar from 'react-calendar';
import matutino_wave from '../img/Matutino_boas-vindas.svg';
import neutro_wave from '../img/Neutro_boas-vindas.svg';
import vespertino_wave from '../img/Vespertino_boas-vindas.svg';
import { useForm, Controller } from "react-hook-form";

import firebase from 'firebase';
import {StepComponentProps} from "react-step-builder";

const CalendarPage= (props: StepComponentProps) => {

  const {data: user}= useUser();
  const [dataUser, setData] = useState()
  const db = firebase.firestore();
  const uid = user.uid

  const [meta01, setMeta01]= React.useState("Carregando meta...")
  const [meta02, setMeta02]= React.useState("")
  const [meta03, setMeta03]= React.useState("")
  const [freqMeta01, setFreqMeta01]= React.useState("")

  const [loader, setLoader]= useState<boolean>(false)
  
  async function updateMetaDaily(){
    console.log('entrou aqui!!!')
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      metaDaily: firebase.firestore.FieldValue.increment(1)
    });
    
    
  }
  

  async function getMeta01(){
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta01= data2.meta01;
    const dataMetaFreqSemanal= data2.metaFreqSemanal;

    console.log("dataSaude: " + dataMeta01)
    console.log("dataSaude: " + dataMetaFreqSemanal)
    
    if (!(dataMeta01 === undefined)){
      if ((dataMeta01 === "luz")){
        setMeta01("Sua meta era se expor à luz natural...");
      } else if ((dataMeta01 === "exercicio")){
        setMeta01("Sua meta era se exercitar...");
      } else if ((dataMeta01 === "alimentação")){
        setMeta01("Sua meta era controlar sua alimentação...")
      } else if ((dataMeta01 === "sono")){
        setMeta01("Sua meta era controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMetaFreqSemanal === undefined)){
      
      setFreqMeta01(" "+ dataMetaFreqSemanal + " vezes por semana.")
    }

  }
  }

  async function getMeta02(){
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta02= data2.meta02;

    console.log("dataSaude: " + dataMeta02)
    
    if (!(dataMeta02 === undefined)){
      
    }
  }
  }

  
  function checkMetas(){
    getMeta01();
    getMeta02();
    setShowModalProgresso(true);
  }


    const history= useHistory();
    const [value, onChange] = useState(new Date());

    const [showModalDay, setShowModalDay] = useState(false);
    const [showModalProgresso, setShowModalProgresso]= useState(false);

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

    const options = {
      cssClass: 'my-custom-interface'
    };
    



  return (
   
    
      <IonContent fullscreen className="ion-padding texto-padrão" color="background">
        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>
    
      <div id="outer">
      <div id="inner texto-padrao">
      <div className="texto-main-calendar">Seu progresso:</div>
      <div className="texto-padrão-calendar">Clique no dia e marque se você realizou sua meta!</div>
      <div className="texto-padrão bold">Lembre que sugerimos que você faça seu desafio em 14 dias!</div>
        
      <div className={"calendar-div"}>
          <Calendar className={"react-calendar"} onChange={onChange} onClickDay={() => setShowModalDay(true)} value={value}/>
      </div>
      
      <IonModal isOpen={showModalDay} showBackdrop={true} 
              cssClass='custom-modal selectable'
              onDidDismiss={() => setShowModalDay(false)}>

          <IonContent>
        
                      <IonToolbar color="white">
                        <div id="header-items">
                          
                        <p className={"header-title"}>O que você fez hoje?</p>


                      
                        <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalDay(false)}>Fechar</IonButton>
                        
                        </div>  
                       

                    </IonToolbar>
                   
                    <p><img src={matutino_wave} className="img-modal-calendar" /> </p>
                    <form className="ion-no-padding texto-default">
                   
                 <p>  <IonLabel className="questions">Você realizou sua meta hoje?</IonLabel> </p> 
              
                <p>   <IonItem lines="none" className={"ion-no-padding"}>
            


                  <Controller render={({onChange}) => (

                  <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." >
                  <IonSelectOption value="1" >Sim</IonSelectOption>
                  <IonSelectOption value="0" >Não</IonSelectOption>
                 
                  </IonSelect> )} control={control} name={'metaDaily'} rules={{required:true}}/>
                  {errors.metaDaily && <IonText color="danger">Campo obrigatório.</IonText>} 
               </IonItem>  </p>
      
              </form>

              <IonButton onClick={updateMetaDaily}>testar</IonButton>
          </IonContent>
      </IonModal>

      <IonButton onClick={checkMetas}>Acompanhar metas</IonButton>

      <IonModal isOpen={showModalProgresso} showBackdrop={true} 
              cssClass='custom-modal selectable'
              onDidDismiss={() => setShowModalProgresso(false)}>

<IonContent>
        
        <IonToolbar color="white">
          <div id="header-items">
            
          <p className={"header-title"}>Suas metas</p>


        
          <IonButton className={"button-header"} fill="clear"  slot="clear" onClick={() => setShowModalProgresso(false)}>Fechar</IonButton>
          
          </div>  
         

      </IonToolbar>
     
                    <p>{meta01}{freqMeta01}</p>


        </IonContent>

      </IonModal>
                  
      </div>
      </div>
      </IonContent>

   
  );
};

export default CalendarPage;
