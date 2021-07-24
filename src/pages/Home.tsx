import React, {useState } from 'react';
import { IonContent, IonHeader, IonPage,IonToolbar } from '@ionic/react';

import logo_regente from '../img/logo_regente_branco.svg';
import './Home.css';


import { IonMenuButton, IonButtons, IonIcon, IonList, IonListHeader} from '@ionic/react';


import {IonButton, IonLoading} from '@ionic/react';
import {peopleOutline, bedOutline, walkOutline, trashBinOutline} from  'ionicons/icons';

import  { useHistory } from 'react-router-dom' 

import {logoutUser} from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';

import firebase from 'firebase';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Tab1: React.FC = () => {

  
  const [loader, setLoader]= useState<boolean>(false);


  function chamaSobre(){
    history.push('/sobre');
  }

  function chamaPerfil(){
    history.push('/perfil');
  }
  
  async function Logout(){
    setLoader(true)
    const res=  await logoutUser();

    if (res === true){
      toast('Logout efetuado!')
      history.replace('/login');
      setLoader(false); 
      
    }
  }

  function checkIfEmailVerified(){
    return user.emailVerified;
  }

  const history= useHistory();

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

  function saudePost(){
    history.push('/saudePost');
  }

  function contatoPost(){
    history.push('/contatoPost');
  }

  function habitosPost(){
    history.push('/habitosPost');
  }

  function sonosintomasPost(){
    history.push('/sonosintomasPost');
  }

  const [moduloSaudeEnviado, setSaudeModulo1Enviado] = React.useState(false);
  const [moduloContatoEnviado, setContatoModulo1Enviado] = React.useState(false);
  const [moduloHabitosEnviado, setHabitosModulo1Enviado] = React.useState(false);
  const [moduloSonoSintomasEnviado, setSonoSintomasModulo1Enviado] = React.useState(false);

  const {data: user}= useUser();
  const db = firebase.firestore();

  async function getSaudeDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSaude= data2.dateSaudeModule1;
    
    if (!(dataSaude === undefined)){
      setSaudeModulo1Enviado(true)
    }
  }

  async function getContatoDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataContato= data2.dateContatoModule1;
    
    if (!(dataContato === undefined)){
      setContatoModulo1Enviado(true)
    }
  }

  async function getSonoSintomasDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSono = data2.dateSonoModule1;
    const dataSintomas = data2.dateSintomasModule1;
    
    if (!(dataSono === undefined || dataSintomas === undefined)){
      setSonoSintomasModulo1Enviado(true)
    }
  }

  async function getHabitosDate(){
    const uid = user.uid
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataHabitos = data2.dateHabitosModule1;
    
    if (!(dataHabitos === undefined)){
      setHabitosModulo1Enviado(true)
    }
  }

  //Checking the dates
  getSaudeDate()
  getContatoDate()
  getHabitosDate()
  getSonoSintomasDate()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="orange">
        
        <div id="header-items">
          <img src={logo_regente} className={"logo"}/>
          <IonButtons slot="end"> <IonMenuButton id="main"></IonMenuButton> </IonButtons>
        </div>   
        
          {/*
          <div id="header-items">
          <IonButton fill="clear" onClick={chamaPerfil}>PERFIL</IonButton>
          <IonButton fill="clear" onClick={chamaSobre}>SOBRE</IonButton>
          <IonButton onClick={Logout} color="tertiary">SAIR</IonButton> 
          </div>    */}      
        </IonToolbar>
        
       
      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-text-center ion-padding" color="background">

        {/*
        <IonGrid>
       
       
       {/* <ExploreContainer name="Tab 1 page" /> */}
       {/* 
       <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Pesquisa</IonCardSubtitle>
       <IonCardTitle>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</IonCardTitle> 
       </IonCardHeader>

      <IonCardContent>
      <h1>TESTANDO AQUI - EDU!</h1>
      <p hidden={user.emailVerified}> O EMAIL NÃO É VERIFICADO!</p>
      <p> De qualquer forma, esse texto aparece!</p>
      <div>
           <AuthCheck fallback={<IonTitle><b>BEM VINDO!</b></IonTitle>}><IonTitle><b>BEM VINDO, {user.email}!</b></IonTitle></AuthCheck>
         
          </div>  
      </IonCardContent>

      <IonCardContent>
    
       
        <div className="ion-text-wrap">
        
        <div>
        Caro participante, 
        </div>
        <div>
        Agradecemos a sua disposição em nos ajudar a entender as consequências do <b>distanciamento social</b>.
        Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. 
         Além disso, poderemos avaliar quais são as recomendações mais 
           importantes para quem está passando por tal situação. </div>
          <div>
          Antes de começar a responder, na próxima página, você poderá ler mais sobre nosso estudo. 
           Caso desista de participar, basta fechar o aplicativo a qualquer momento.
           </div>
           <div>
           Muito obrigado!
           </div>
        </div>
        </IonCardContent>
      
        
        <IonCardContent>
        <div className={"ion-text"}>
          <b><span className={"red-text"}>Antes de começarmos, você sabe o que é distanciamento social? Confira a explicação <a href={"/ExplanationSlides"}>aqui</a> e depois clique na aba "Formulário" para iniciar a pesquisa.</span></b>
        </div>
        </IonCardContent>

        
      
        </IonCard>

       {/*
        <div>
          <img src={distanciamentoExp}/>
       </div> 


        
        </IonGrid> */}

        <div className="ion-text-center">
           
           <div id="outer">
           <div id="inner-modules">

          
          <Accordion allowZeroExpanded={true}>

            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Primeira etapa
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloSaudeEnviado} onClick={saude} color="white" fill="solid" shape="round" id="button-forms-saude"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton>
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloContatoEnviado || !moduloSaudeEnviado} onClick={contato} color="white" fill="solid" shape="round" id="button-forms-social"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloHabitosEnviado || !moduloContatoEnviado} onClick={habitos} color="white" fill="solid" shape="round" id="button-forms-habitos"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos</div></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloSonoSintomasEnviado || !moduloHabitosEnviado} onClick={sonoSintomas} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Bem estar</div></IonButton> 
           </div>
            </AccordionItemPanel>
            </AccordionItem>
           
           </Accordion>
           
           <Accordion allowZeroExpanded={true}>
           <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Segunda etapa
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

           <div>
           <IonButton disabled={false} onClick={saudePost} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Saude Post</div></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>
           <div>
           <IonButton disabled={false} onClick={contatoPost} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Contato Post</div></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>

           <div>
           <IonButton disabled={false} onClick={habitosPost} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Hábitos Post</div></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>
           <div>
           <IonButton disabled={false} onClick={sonosintomasPost} color="white" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Bem estar Post</div></IonButton> 
           </div>
           
           </AccordionItemPanel>
           </AccordionItem>
           </Accordion>

          </div> 
         </div>
       </div>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
