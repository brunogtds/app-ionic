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
import mascote_progress_bar from '../img/img-progress-bar.png';

import Calendar from 'react-calendar';
import matutino_wave from '../img/Matutino_boas-vindas.svg';
import neutro_wave from '../img/Neutro_boas-vindas.svg';
import vespertino_wave from '../img/Vespertino_boas-vindas.svg';
import { useForm, Controller } from "react-hook-form";

import firebase from 'firebase';
import {StepComponentProps} from "react-step-builder";

import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css'

const CalendarPage= (props: StepComponentProps) => {

  const {data: user}= useUser();
  const [dataUser, setData] = useState()
  const db = firebase.firestore();
  const uid = user.uid

  const [meta01, setMeta01]= React.useState("Carregando meta...")
  const [meta02, setMeta02]= React.useState("")
  const [meta03, setMeta03]= React.useState("")
  const [meta04, setMeta04]= React.useState("Carregando meta...")
  const [meta05, setMeta05]= React.useState("")
  const [meta06, setMeta06]= React.useState("")

  const [freqMeta01, setFreqMeta01]= React.useState(0)
  const [freqMeta02, setFreqMeta02]= React.useState(0)
  const [freqMeta03, setFreqMeta03]= React.useState(0)
  const [freqMeta04, setFreqMeta04]= React.useState(0)
  const [freqMeta05, setFreqMeta05]= React.useState(0)
  const [freqMeta06, setFreqMeta06]= React.useState(0)

  const [freqMeta01Text, setFreqMeta01Text]= React.useState("")
  const [freqMeta02Text, setFreqMeta02Text]= React.useState("")
  const [freqMeta03Text, setFreqMeta03Text]= React.useState("")
  const [freqMeta04Text, setFreqMeta04Text]= React.useState("")
  const [freqMeta05Text, setFreqMeta05Text]= React.useState("")
  const [freqMeta06Text, setFreqMeta06Text]= React.useState("")

  const [metaDaily, setMetaDaily]= React.useState(0)
  const [meta02Daily, setMeta02Daily]= React.useState(0)
  const [meta03Daily, setMeta03Daily]= React.useState(0)
  const [meta04Daily, setMeta04Daily]= React.useState(0)
  const [meta05Daily, setMeta05Daily]= React.useState(0)
  const [meta06Daily, setMeta06Daily]= React.useState(0)

  const [percentageProgress, setPercetageProgress]= React.useState(0)

  const [loader, setLoader]= useState<boolean>(false)

  const [metaText, setMetaText]= React.useState("")
  const [displayMeta, setDisplayMeta]= React.useState(0)

  async function displayMetas(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
      
    if  (data != undefined){
      const data2: any= data;
      const dataMeta01Coleta01= data2.meta01Coleta01;
      const dataMeta01Coleta02= data2.meta01Coleta02;
      const dataMeta02Coleta02= data2.meta02Coleta02;
      const dataMeta01Coleta03= data2.meta01Coleta03;
      const dataMeta02Coleta03= data2.meta02Coleta03;
      const dataMeta03Coleta03= data2.meta03Coleta03;

      //display meta -> 1 === uma meta na primeira coleta
      //display meta -> 2 === meta principal segunda coleta + segunda meta segunda coleta
      //display meta -> 3 === meta principal sem segunda meta na segunda coleta
      //display meta -> 4 === meta principal terceira coleta + segunda meta e terceira meta terceira coleta
      //display meta -> 5 === meta principal terceira coleta sem segunda e terceira meta na terceira coleta

      if ((dataMeta01Coleta01 === undefined)){
        setMetaText("Você não definiu nenhuma meta...")
      } 
      else if ((!(dataMeta01Coleta01 === undefined)) && (dataMeta01Coleta02 === undefined)){
        setDisplayMeta(1)
      } else if ((!(dataMeta01Coleta02 === undefined)) && (dataMeta01Coleta03 === undefined)){
        if (!(dataMeta02Coleta02 === undefined)){
          setDisplayMeta(2)
        } else if (dataMeta02Coleta02 === undefined){
          setDisplayMeta(3)
        }
      } else if (!(dataMeta01Coleta03 === undefined)){
        if ((!(dataMeta02Coleta03 === undefined)) && (!(dataMeta03Coleta03 === undefined))){
          setDisplayMeta(4)
        } else if (((dataMeta02Coleta03 === undefined)) && ((dataMeta03Coleta03 === undefined))){
          setDisplayMeta(5)
        }
      }
    }
  }

  function backCalendar(){
    history.push('/calendar');
  }
  
  async function updateMeta01Daily(){
    
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      meta01Daily: firebase.firestore.FieldValue.increment(1)
    });
    
    setLoader(true);
    toast('Meta marcada com sucesso!', 2000);
    backCalendar();
    
  }
  
  async function updateMeta02Daily(){
   
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      meta02Daily: firebase.firestore.FieldValue.increment(1)
    });
    
    setLoader(true);
    toast('Meta marcada com sucesso!', 2000);
    backCalendar();
  }
  
  async function updateMeta03Daily(){
    
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      meta03Daily: firebase.firestore.FieldValue.increment(1)
    });
    
    setLoader(true);
    toast('Meta marcada com sucesso!', 2000);
    backCalendar();
  }
  
  async function updateMeta04Daily(){
    
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      meta04Daily: firebase.firestore.FieldValue.increment(1)
    });
    
    setLoader(true);
    toast('Meta marcada com sucesso!', 2000);
    backCalendar();
  }

  async function updateMeta05Daily(){
    
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      meta05Daily: firebase.firestore.FieldValue.increment(1)
    });
    
    setLoader(true);
    toast('Meta marcada com sucesso!', 2000);
    backCalendar();
  }

  async function updateMeta06Daily(){
    
    const dbRef= await db.collection('metas').doc(uid);
    const data= (await dbRef).update({
      meta06Daily: firebase.firestore.FieldValue.increment(1)
    });
    
    setLoader(true);
    toast('Meta marcada com sucesso!', 2000);
    backCalendar();
  }

 

  async function getMeta01(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta01= data2.meta01Coleta01;
    const dataMetaFreqSemanal= data2.meta01Coleta01FreqSemanal;

    console.log("dataSaude: " + dataMeta01)
    console.log("dataSaude: " + dataMetaFreqSemanal)
    
    if (!(dataMeta01 === undefined)){
      if ((dataMeta01 === "luz")){
        setMeta01("Sua meta: se expor à luz natural...");
      } else if ((dataMeta01 === "exercicio")){
        setMeta01("Sua meta: se exercitar...");
      } else if ((dataMeta01 === "alimentação")){
        setMeta01("Sua meta: controlar sua alimentação...")
      } else if ((dataMeta01 === "sono")){
        setMeta01("Sua meta: controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMetaFreqSemanal === undefined)){
      if (dataMetaFreqSemanal > 0){
      setFreqMeta01(dataMetaFreqSemanal)
      setFreqMeta01Text(" "+ dataMetaFreqSemanal + " vezes por semana.")
      }
    }

  }
  }

  async function getMeta02(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta02= data2.meta01Coleta02;
    const dataMeta02FreqSemanal= data2.meta01Coleta02FreqSemanal;

    console.log("dataSaude: " + dataMeta02)
    
    if (!(dataMeta02 === undefined)){
      if ((dataMeta02 === "luz")){
        setMeta02("Sua meta: se expor à luz natural...");
      } else if ((dataMeta02 === "exercicio")){
        setMeta02("Sua meta: se exercitar...");
      } else if ((dataMeta02 === "alimentação")){
        setMeta02("Sua meta: controlar sua alimentação...")
      } else if ((dataMeta02 === "sono")){
        setMeta02("Sua meta: controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMeta02FreqSemanal === undefined)){
      if (dataMeta02FreqSemanal > 0){
      setFreqMeta02(dataMeta02FreqSemanal)
      setFreqMeta02Text(" "+ dataMeta02FreqSemanal + " vezes por semana.")
      }
    }
  }
  }

  async function getMeta03(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta03= data2.meta02Coleta02;
    const dataMeta03FreqSemanal= data2.meta02Coleta02FreqSemanal;

    console.log("dataSaude: " + dataMeta03)
    
    if (!(dataMeta03 === undefined)){
      if ((dataMeta03 === "luz")){
        setMeta03("Sua meta: se expor à luz natural...");
      } else if ((dataMeta03 === "exercicio")){
        setMeta03("Sua meta: se exercitar...");
      } else if ((dataMeta03 === "alimentação")){
        setMeta03("Sua meta: controlar sua alimentação...")
      } else if ((dataMeta03 === "sono")){
        setMeta03("Sua meta: controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMeta03FreqSemanal === undefined)){
      if (dataMeta03FreqSemanal > 0){
      setFreqMeta03(dataMeta03FreqSemanal)
      setFreqMeta03Text(" "+ dataMeta03FreqSemanal + " vezes por semana.")
      }
    }
  }
  }

  async function getMeta04(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta04= data2.meta01Coleta03;
    const dataMeta04FreqSemanal= data2.meta01Coleta03FreqSemanal;

    console.log("dataSaude: " + dataMeta04)
    
    if (!(dataMeta04 === undefined)){
      if ((dataMeta04 === "luz")){
        setMeta04("Sua meta: se expor à luz natural...");
      } else if ((dataMeta04 === "exercicio")){
        setMeta04("Sua meta: se exercitar...");
      } else if ((dataMeta04 === "alimentação")){
        setMeta04("Sua meta: controlar sua alimentação...")
      } else if ((dataMeta04 === "sono")){
        setMeta04("Sua meta: controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMeta04FreqSemanal === undefined)){
      if (dataMeta04FreqSemanal > 0){
      setFreqMeta04(dataMeta04FreqSemanal)
      setFreqMeta04Text(" "+ dataMeta04FreqSemanal + " vezes por semana.")
      }
    }
  }
  }

  async function getMeta05(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta05= data2.meta02Coleta03;
    const dataMeta05FreqSemanal= data2.meta02Coleta03FreqSemanal;

    console.log("data meta 05 errada???: " + dataMeta05)
    console.log("freq meta 05 errada???: " + dataMeta05FreqSemanal)
    
    if (!(dataMeta05 === undefined)){
      if ((dataMeta05 === "luz")){
        setMeta05("Sua meta: se expor à luz natural...");
      } else if ((dataMeta05 === "exercicio")){
        setMeta05("Sua meta: se exercitar...");
      } else if ((dataMeta05 === "alimentação")){
        setMeta05("Sua meta: controlar sua alimentação...")
      } else if ((dataMeta05 === "sono")){
        setMeta05("Sua meta: controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMeta05FreqSemanal === undefined)){
      if (dataMeta05FreqSemanal > 0){
      setFreqMeta05(dataMeta05FreqSemanal)
      setFreqMeta05Text(" "+ dataMeta05FreqSemanal + " vezes por semana.")
      }
    }
  }
  }

  async function getMeta06(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMeta06= data2.meta03Coleta03;
    const dataMeta06FreqSemanal= data2.meta03Coleta03FreqSemanal;

    console.log("dataSaude: " + dataMeta06)
    
    if (!(dataMeta06 === undefined)){
      if ((dataMeta06 === "luz")){
        setMeta06("Sua meta: se expor à luz natural...");
      } else if ((dataMeta06 === "exercicio")){
        setMeta06("Sua meta: se exercitar...");
      } else if ((dataMeta06 === "alimentação")){
        setMeta06("Sua meta: controlar sua alimentação...")
      } else if ((dataMeta06 === "sono")){
        setMeta06("Sua meta: controlar a regularidade do seu sono...")
      }
    }

    if (!(dataMeta06FreqSemanal === undefined)){
      if (dataMeta06FreqSemanal > 0){
      setFreqMeta06(dataMeta06FreqSemanal)
      setFreqMeta06Text(" "+ dataMeta06FreqSemanal + " vezes por semana.")
      }
    }
  }
  }
 
  async function getMetaDaily(){
    const dbRef= await db.collection('metas').doc(uid).get();
    const data= (await dbRef).data();
    
    if  (data != undefined){
    const data2: any= data;
    const dataMetaDaily= data2.meta01Daily;
    const dataMetaDaily02= data2.meta02Daily;
    const dataMetaDaily03= data2.meta03Daily;
    const dataMetaDaily04= data2.meta04Daily;
    const dataMetaDaily05= data2.meta05Daily;
    const dataMetaDaily06= data2.meta06Daily;
    
    if (!(dataMetaDaily === undefined)){
      setMetaDaily(dataMetaDaily)
    }
    if (!(dataMetaDaily02 === undefined)){
      setMeta02Daily(dataMetaDaily02)
    }
    if (!(dataMetaDaily03 === undefined)){
      setMeta03Daily(dataMetaDaily03)
    }
    if (!(dataMetaDaily04 === undefined)){
      setMeta04Daily(dataMetaDaily04)
    }
    if (!(dataMetaDaily05 === undefined)){
      setMeta05Daily(dataMetaDaily05)
    }
    if (!(dataMetaDaily06 === undefined)){
      setMeta06Daily(dataMetaDaily06)
    }
  }
  }

  function openDay(){
    displayMetas();
    console.log('meta: ' + displayMeta);
    getMeta01();
    getMeta02();
    getMeta03();
    getMeta04();
    getMeta05();
    getMeta06();
    getMetaDaily();
    setShowModalDay(true);
  }
  
  function checkMetas(){
    setLoader(true);
    toast('Metas carregadas com sucesso...', 2000);
    displayMetas();
    getMeta01();
    getMeta02();
    getMeta03();
    getMeta04();
    getMeta05();
    getMeta06();
    getMetaDaily();
    showModalProgressoFunction();
    
  }

  function showModalProgressoFunction(){
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
        <IonLoading message="Por favor aguarde..." duration={5000} isOpen={loader}/>
    
      <div id="outer">
      <div id="inner texto-padrao">
      <div className="texto-main-calendar">Seu progresso:</div>
      <div className="texto-padrão-calendar">Clique no dia e marque se você realizou sua meta!</div>
      <div className="texto-padrão bold">Lembre que sugerimos que você faça seu desafio em 14 dias!</div>
        
      <div className={"calendar-div"}>
          <Calendar className={"react-calendar"} onChange={onChange} onClickDay={openDay} value={value}/>
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
                   
                   <div className={"goals"}>
                     <p>Clique no botão indicando sua meta!</p>
                    {metaText}
                
                   {displayMeta === 1 ? 
                   <p>
                   {freqMeta01 > metaDaily ? <IonButton className={"button-control"} disabled={metaDaily > freqMeta01} onClick={updateMeta01Daily}>Meta principal</IonButton>  :null }
                  </p> :null} 

                  
                  {displayMeta === 1 ? 
                   <p>
                   {metaDaily >= freqMeta01 ? <p>Parabéns, você completou sua meta! Na segunda etapa da pesquisa você poderá escolher mais metas.</p>  :null }
                  </p> :null} 
                   
                   {displayMeta === 2 ? 
                   <p>
                   {freqMeta02 > meta02Daily ?  <IonButton className={"button-control"} disabled={meta02Daily > freqMeta02} onClick={updateMeta02Daily}>Meta principal</IonButton>  :null}
                  
                 
                   </p> :null} 

                   {displayMeta === 2 ? 
                   <p>
                     {freqMeta03 > meta03Daily ?   <IonButton className={"button-control"} disabled={meta03Daily > freqMeta03} onClick={updateMeta03Daily}>Segunda meta</IonButton>  :null}
                   </p> :null}


                   {displayMeta === 2 ? 
                   <p>
                   {meta02Daily >= freqMeta02 ? <p>Parabéns, você completou a meta 01!</p>  :null }
                  </p> :null} 

                  {displayMeta === 2 ? 
                   <p>
                   {meta03Daily >= freqMeta03 ? <p>Parabéns, você completou a meta 02!</p>  :null }
                  </p> :null} 

                   {displayMeta === 3 ? 
                   <p>
                     {freqMeta02 > meta02Daily ? <IonButton className={"button-control"} disabled={meta02Daily > freqMeta02} onClick={updateMeta02Daily}>Meta principal</IonButton>:null}
                    </p> :null}

                   {displayMeta === 3 ? 
                   <p>
                   {meta02Daily >= freqMeta02 ? <p>Parabéns, você completou a meta!</p>  :null }
                  </p> :null} 

                   {displayMeta === 4 ? 
                   <p>
                    {freqMeta04 > meta04Daily ? <IonButton className={"button-control"} disabled={meta04Daily > freqMeta04} onClick={updateMeta04Daily}>Meta principal</IonButton> :null} 
                   
                  
                   
                   </p> :null} 

                   {displayMeta === 4 ? 
                   <p> 
                     {freqMeta05 > meta05Daily ?  <IonButton className={"button-control"} disabled={meta05Daily > freqMeta05} onClick={updateMeta05Daily}>Segunda meta</IonButton> :null}
                   </p>:null}

                   {displayMeta === 4 ? 
                   <p> 
                     {freqMeta06 > meta06Daily ?  <IonButton className={"button-control"} disabled={meta06Daily > freqMeta06} onClick={updateMeta06Daily}>Terceira meta</IonButton>  :null}
                   </p>:null}


                   {displayMeta === 4 ? 
                   <p>
                   {meta04Daily >= freqMeta04 ? <p>Parabéns, você completou a meta 01!</p>  :null }
                  </p> :null} 

                  {displayMeta === 4 ? 
                   <p>
                   {meta05Daily >= freqMeta05 ? <p>Parabéns, você completou a meta 02!</p>  :null }
                  </p> :null} 

                  {displayMeta === 4 ? 
                   <p>
                   {meta06Daily >= freqMeta06 ? <p>Parabéns, você completou a meta 03!</p>  :null }
                  </p> :null} 



                   {displayMeta === 5 ? 
                   <p>
                     {freqMeta04 > meta04Daily ? <IonButton className={"button-control"} disabled={meta04Daily > freqMeta04} onClick={updateMeta04Daily}>Meta principal</IonButton> :null}
                    </p> :null}

                   {displayMeta === 5 ? 
                   <p>
                   {meta04Daily >= freqMeta04 ? <p>Parabéns, você completou a meta!</p>  :null }
                  </p> :null} 


                  
                   </div>
          </IonContent>
      </IonModal>

      <div className={"track-goals"}>
      <IonButton onClick={checkMetas}>Acompanhar metas</IonButton>
      </div>

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

              <div className={"goals"}>
                     <p>Acompanhe aqui seu progresso!</p>
                     <p>{metaText}</p>
              </div>

                     {/* ------------------- CENÁRIO 1 ------------------- 
                     ------------------- ------------------- ------------------- */}
     
                {displayMeta === 1 ? <p>
                  <div className={"goals"}>
                    <p>{meta01}{freqMeta01Text}</p>
                   </div>
                    <div className={"circle-progress-bar-div"}>
                    <CircularProgressbarWithChildren className={"circle-progress-bar"} value={metaDaily} maxValue={freqMeta01} background={true}
                    styles={buildStyles({ 

                      pathColor: '#F58B44',
                      backgroundColor: '#f2b546',
                      trailColor: '#f2b546'
                    })}
                    >
                      
                      <div>
                        <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                      </div>
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                       {`${((metaDaily * 100)/freqMeta01).toFixed(2)}%`}
                      </div>

                    </CircularProgressbarWithChildren>
                    </div> </p>:null}

                   {/* ------------------- CENÁRIO 2 ------------------- 
                     ------------------- ------------------- ------------------- */}

                    {displayMeta === 2 ? <p>

                       <div className={"goals"}>
                      <p>{meta02}{freqMeta02Text}</p>
                      </div>
                   
                   <div className={"circle-progress-bar-div"}>
                   <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta02Daily} maxValue={freqMeta02} background={true}
                   styles={buildStyles({ 

                     pathColor: '#F58B44',
                     backgroundColor: '#f2b546',
                     trailColor: '#f2b546'
                   })}
                   >
                     
                     <div>
                       <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                     </div>
                     <div style={{ fontSize: 16, marginTop: -5 }}>
                      {`${((meta02Daily * 100)/freqMeta02).toFixed(2)}%`}
                     </div>

                   </CircularProgressbarWithChildren>
                   </div>

                    </p> :null}

                    {displayMeta === 2 ? <p>
                      <div className={"goals"}>
                      <p>{meta03}{freqMeta03Text}</p>
                      </div>

                      <div className={"circle-progress-bar-div"}>
                      <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta03Daily} maxValue={freqMeta03} background={true}
                      styles={buildStyles({ 

                      pathColor: '#F58B44',
                      backgroundColor: '#f2b546',
                      trailColor: '#f2b546'
                      })}
                      >

                      <div>
                      <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                      </div>
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                      {`${((meta03Daily * 100)/freqMeta03).toFixed(2)}%`}
                      </div>

                      </CircularProgressbarWithChildren>
                      </div>

                      </p> :null}

                      {/* ------------------- CENÁRIO 3 ------------------- 
                     ------------------- ------------------- ------------------- */}

                      {displayMeta === 3 ? <p>
                        <div className={"goals"}>
                      <p>{meta02}{freqMeta02Text}</p>
                      </div>

                      <div className={"circle-progress-bar-div"}>
                      <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta02Daily} maxValue={freqMeta02} background={true}
                      styles={buildStyles({ 

                      pathColor: '#F58B44',
                      backgroundColor: '#f2b546',
                      trailColor: '#f2b546'
                      })}
                      >

                      <div>
                      <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                      </div>
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                      {`${((meta02Daily * 100)/freqMeta02).toFixed(2)}%`}
                      </div>

                      </CircularProgressbarWithChildren>
                      </div>

                      </p> :null}

                      {/* ------------------- CENÁRIO 4 ------------------- 
                     ------------------- ------------------- ------------------- */}

                      {displayMeta === 4 ? <p>
                        <div className={"goals"}>
                      <p>{meta04}{freqMeta04Text}</p>
                      </div>

                      <div className={"circle-progress-bar-div"}>
                      <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta04Daily} maxValue={freqMeta04} background={true}
                      styles={buildStyles({ 

                      pathColor: '#F58B44',
                      backgroundColor: '#f2b546',
                      trailColor: '#f2b546'
                      })}
                      >

                      <div>
                      <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                      </div>
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                      {`${((meta04Daily * 100)/freqMeta04).toFixed(2)}%`}
                      </div>

                      </CircularProgressbarWithChildren>
                      </div>

                      </p> :null}

                      {displayMeta === 4 ? <p>
                        <div className={"goals"}>
                      <p>{meta05}{freqMeta05Text}</p>
                      </div>

                      <div className={"circle-progress-bar-div"}>
                      <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta05Daily} maxValue={freqMeta05} background={true}
                      styles={buildStyles({ 

                      pathColor: '#F58B44',
                      backgroundColor: '#f2b546',
                      trailColor: '#f2b546'
                      })}
                      >

                      <div>
                      <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                      </div>
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                      {`${((meta05Daily * 100)/freqMeta05).toFixed(2)}%`}
                      </div>

                      </CircularProgressbarWithChildren>
                      </div>

                      </p> :null}

                      {displayMeta === 4 ? <p>
                        <div className={"goals"}>
                      <p>{meta06}{freqMeta06Text}</p>
                      </div>

                      <div className={"circle-progress-bar-div"}>
                      <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta06Daily} maxValue={freqMeta06} background={true}
                      styles={buildStyles({ 

                      pathColor: '#F58B44',
                      backgroundColor: '#f2b546',
                      trailColor: '#f2b546'
                      })}
                      >

                      <div>
                      <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                      </div>
                      <div style={{ fontSize: 16, marginTop: -5 }}>
                      {`${((meta06Daily * 100)/freqMeta06).toFixed(2)}%`}
                      </div>

                      </CircularProgressbarWithChildren>
                      </div>

                      </p> :null}

                       {/* ------------------- CENÁRIO 5 ------------------- 
                     ------------------- ------------------- ------------------- */}

                    {displayMeta === 5 ? <p>
                      <div className={"goals"}>
                    <p>{meta04}{freqMeta04Text}</p>
                    </div>

                    <div className={"circle-progress-bar-div"}>
                    <CircularProgressbarWithChildren className={"circle-progress-bar"} value={meta04Daily} maxValue={freqMeta04} background={true}
                    styles={buildStyles({ 

                    pathColor: '#F58B44',
                    backgroundColor: '#f2b546',
                    trailColor: '#f2b546'
                    })}
                    >

                    <div>
                    <img style={{ width: 50, marginTop: -5 }} src={mascote_progress_bar} className={"mascote-circular-progress"}/> 
                    </div>
                    <div style={{ fontSize: 16, marginTop: -5 }}>
                    {`${((meta04Daily * 100)/freqMeta04).toFixed(2)}%`}
                    </div>

                    </CircularProgressbarWithChildren>
                    </div>

                    </p> :null}


                   
        </IonContent>

      </IonModal>
                  
      </div>
      </div>
      </IonContent>

   
  );
};

export default CalendarPage;
