import React, {useState } from 'react';
import { IonContent, IonHeader, IonPage,IonToolbar, IonCard, IonCardContent, IonItem } from '@ionic/react';

import logo_regente from '../img/logo_regente_branco.svg';
import cara_regente from '../img/cara-regente.jpg';
import './Home.css';

import Stepper, { Step } from "react-material-stepper";

import { IonMenuButton, IonButtons, IonIcon, IonList, IonListHeader} from '@ionic/react';


import {IonButton, IonLoading} from '@ionic/react';
import {peopleOutline, bedOutline, walkOutline, trashBinOutline, shareSocialOutline} from  'ionicons/icons';

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

  function saudeFinal(){
    history.push('/saudeFinal');
  }

  function contatoFinal(){
    history.push('/contatoFinal');
  }

  function habitosFinal(){
    history.push('/habitosFinal');
  }

  function sonoSintomasFinal(){
    history.push('/sonoSintomasFinal');
  }

  const [moduloSaudeEnviado, setSaudeModulo1Enviado] = React.useState(false);
  const [moduloContatoEnviado, setContatoModulo1Enviado] = React.useState(false);
  const [moduloHabitosEnviado, setHabitosModulo1Enviado] = React.useState(false);
  const [moduloSonoSintomasEnviado, setSonoSintomasModulo1Enviado] = React.useState(false);

  const [moduloSaudePostEnviado, setSaudePostEnviado]= React.useState(false);
  const [moduloContatoPostEnviado, setContatoPostEnviado]= React.useState(false);
  const [moduloHabitosPostEnviado, setHabitosPostEnviado]= React.useState(false);
  const [moduloSonoSintomasPostEnviado, setSonoSintomasPostEnviado]= React.useState(false);

  const [moduloSaudeFinalEnviado, setSaudeFinalEnviado]= React.useState(false);
  const [moduloContatoFinalEnviado, setContatoFinalEnviado]= React.useState(false);
  const [moduloHabitosFinalEnviado, setHabitosFinalEnviado]= React.useState(false);
  const [moduloSonoSintomasFinalEnviado, setSonoSintomasFinalEnviado]= React.useState(false);
  

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

  //post functions

  async function getSaudesPostDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSaudePost = data2.dateSaudePost;
    
    if (!(dataSaudePost === undefined)){
      setSaudePostEnviado(true)
    }
  }

  async function getContatoPostDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataContatoPost = data2.dateContatoPost;
    
    if (!(dataContatoPost === undefined)){
      setContatoPostEnviado(true);
    }
  }

  async function getHabitosPostDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataHabitosPost = data2.dateHabitosPost;
    
    if (!(dataHabitosPost === undefined)){
      setHabitosPostEnviado(true);
    }
  }

  async function getSonoSintomasPostDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSonoPost = data2.dateSonoPost;
    const dataSintomasPost = data2.dateSintomasPost;
    
    if (!(dataSonoPost === undefined || dataSintomasPost === undefined)){
      setSonoSintomasPostEnviado(true);
    }
  }

  //final functions

  async function getSaudesFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersFinal').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSaudeFinal = data2.dateSaudeFinal;
    
    if (!(dataSaudeFinal === undefined)){
      setSaudeFinalEnviado(true)
    }
  }
  
  async function getContatoFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersFinal').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataContatoFinal = data2.dateContatoFinal;
    
    if (!(dataContatoFinal === undefined)){
      setContatoFinalEnviado(true)
    }
  }

  async function getHabitosFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersFinal').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataHabitosFinal = data2.dateHabitosFinal;
    
    if (!(dataHabitosFinal === undefined)){
      setHabitosFinalEnviado(true)
    }
  }

  async function getSonoSintomasFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersFinal').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSonoFinal = data2.dateSonoFinal;
    const dataSintomasFinal = data2.dateSintomasFinal;
    
    if (!(dataSonoFinal === undefined || dataSintomasFinal === undefined)){
      setSonoSintomasFinalEnviado(true);
    }
  }



  //Checking the dates
  getSaudeDate()
  getContatoDate()
  getHabitosDate()
  getSonoSintomasDate()

  //Checking the dates post-14

  getSaudesPostDate()
  getContatoPostDate()
  getHabitosPostDate()
  getSonoSintomasPostDate()

  //Checking the final dates

  getSaudesFinalDate()
  getContatoFinalDate()
  getHabitosFinalDate()
  getSonoSintomasFinalDate()

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
      <IonContent fullscreen className="ion-text-center ion-padding texto-padrão" color="background">

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

          
          <Accordion allowZeroExpanded={true} className={"accordeon-pesquisa"}>

            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={"accordeon-button"} >
                Primeira etapa
              </AccordionItemButton>
            </AccordionItemHeading>
            
            <AccordionItemPanel>
            
            <div>
           <IonButton disabled={moduloSaudeEnviado} onClick={saude} color="orange" fill="solid" shape="round" id="button-forms-saude"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton>
           </div>
           
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloContatoEnviado || !moduloSaudeEnviado} onClick={contato} color="orange" fill="solid" shape="round" id="button-forms-social"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
           </div> 
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloHabitosEnviado || !moduloContatoEnviado} onClick={habitos} color="orange" fill="solid" shape="round" id="button-forms-habitos"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos</div></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloSonoSintomasEnviado || !moduloHabitosEnviado} onClick={sonoSintomas} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Bem-estar</div></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div className={"texto-compartilhar"}>
            Finalize o formulário e acesse todas as dicas personalizadas! 
           </div>
           <div>
           <IonButton disabled={true} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Compartilhar resultado</div></IonButton> 
           </div>
            </AccordionItemPanel>
           
            </AccordionItem>
           
           </Accordion>
           
           <Accordion allowZeroExpanded={true} className={"accordeon-pesquisa"}>
           <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={"accordeon-button"}>
                Segunda etapa
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

           <div>
           <IonButton disabled={moduloSaudePostEnviado} onClick={saudePost} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>
           <div>
           <IonButton disabled={moduloContatoPostEnviado || !moduloSaudePostEnviado} onClick={contatoPost} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>

           <div>
           <IonButton disabled={moduloHabitosPostEnviado || !moduloContatoPostEnviado} onClick={habitosPost} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos </div></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>
           <div>
           <IonButton disabled={moduloSonoSintomasPostEnviado || !moduloHabitosPostEnviado} onClick={sonosintomasPost} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Bem-estar</div></IonButton> 
           </div>
           
           </AccordionItemPanel>
           <AccordionItemPanel>
            <div className={"texto-compartilhar"}>
            Finalize o formulário e acesse todas as dicas personalizadas! 
           </div>
           <div>
           <IonButton disabled={true} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Compartilhar resultado</div></IonButton> 
           </div>
            </AccordionItemPanel>
           </AccordionItem>
           </Accordion>

           <Accordion allowZeroExpanded={true} className={"accordeon-pesquisa"}>
           <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className={"accordeon-button"}>
                Terceira etapa
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

            <div>
           <IonButton disabled={moduloSaudeFinalEnviado} onClick={saudeFinal} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={walkOutline}/><div>Saúde</div></IonButton> 
           </div>
           </AccordionItemPanel>

           <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloContatoFinalEnviado || !moduloSaudeFinalEnviado} onClick={contatoFinal} color="orange" fill="solid" shape="round" id="button-forms-social"><IonIcon slot="start" icon={peopleOutline}/><div>Contato social</div></IonButton> 
           </div>
            </AccordionItemPanel>

            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloHabitosFinalEnviado || !moduloContatoFinalEnviado} onClick={habitosFinal} color="orange" fill="solid" shape="round" id="button-forms-habitos"><IonIcon slot="start" icon={peopleOutline}/><div>Hábitos</div></IonButton> 
           </div>
            </AccordionItemPanel>

            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloSonoSintomasFinalEnviado || !moduloHabitosFinalEnviado} onClick={sonoSintomasFinal} color="orange" fill="solid" shape="round" id="button-forms-cronotipo"><IonIcon slot="start" icon={bedOutline}/><div>Bem-estar</div></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div className={"texto-compartilhar"}>
            Finalize o formulário e acesse todas as dicas personalizadas! 
           </div>
           <div>
           <IonButton disabled={true} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Compartilhar resultado</div></IonButton> 
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
