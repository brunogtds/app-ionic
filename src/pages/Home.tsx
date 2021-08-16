import React, {useState } from 'react';
import { IonContent, IonHeader, IonPage,IonToolbar, IonModal} from '@ionic/react';

import logo_regente from '../img/logo_regente_branco.svg';


import { IonMenuButton, IonButtons, IonIcon} from '@ionic/react';

import {millisToDaysHoursMinutes, pad, verifyTimeLeft} from '../../src/dateFunctions';
import {feedbackSocialDist, feedbackContactN} from '../../src/feedbackContatoFunctions';

import {IonButton, IonLoading} from '@ionic/react';
import {shareSocialOutline} from  'ionicons/icons';

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

import button_saude from '../img/button_saude.svg';
import button_contato from '../img/button_contato.svg';
import button_habitos from '../img/button_habitos.svg';
import button_sono from '../img/button_sono.svg';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './Home.css';

const Tab1: React.FC = () => {

   
  const [loader, setLoader]= useState<boolean>(false);
  const [showModalFeedbackInicial, setShowModalFeedbackInicial] = useState(false);
  const [showModalFeedbackPost, setShowModalFeedbackPost] = useState(false);
  const [showModalFeedbackFinal, setShowModalFeedbackFinal] = useState(false);

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

  function feedbackInicial(){
    history.push('/feedbackinicial');
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

  const [minDaysPart1, setMinDaysPart1] = React.useState(false);
  const [minDaysPart2, setMinDaysPart2] = React.useState(false);

  const [secondPartText, setSecondPartText] = React.useState("Falta preencher a parte anterior")
  const [thirdPartText, setThirdPartText] = React.useState("Falta preencher a parte anterior")

  const [feedbackCIText, setfeedbackCIText]= React.useState("Carregando feedback...")
  const [feedbackCPText, setfeedbackCPText]= React.useState("Carregando feedback...")
  const [feedbackCFText, setfeedbackCFText]= React.useState("Carregando feedback...")
  const [feedbackCI2Text, setfeedbackCI2Text]= React.useState("Carregando o feedback...")
  const [feedbackCP2Text, setfeedbackCP2Text]= React.useState("Carregando o feedback...")
  const [feedbackCF2Text, setfeedbackCF2Text]= React.useState("Carregando o feedback...")

  const {data: user}= useUser();
  const db = firebase.firestore();
  const uid = user.uid

  async function getSaudeDate(){
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    
    const data2: any= data;
    const dataSaude= data2.dateSaudeModule1;

    console.log("dataSaude: " + dataSaude)
    
    if (!(dataSaude === undefined)){
      setSaudeModulo1Enviado(true)
    }
  }

  async function getContatoDate(){
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataContato= data2.dateContatoModule1;
    
    if (!(dataContato === undefined)){
      setContatoModulo1Enviado(true)
    }
    console.log("1:" + moduloSaudeEnviado)
    console.log("2:" + moduloContatoEnviado)
  }

  async function getSonoSintomasDate(){
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    const data2: any= data;
    const dataSonoSintomas = data2.dateSonoSintomasModule1;
   
    
    if (!(dataSonoSintomas === undefined)){
      setSonoSintomasModulo1Enviado(true)
    }

    console.log("dataSonoSintomas: " + verifyTimeLeft(dataSonoSintomas))
    
    if(verifyTimeLeft(dataSonoSintomas) == "Modulo liberado"){
      //passou 14 dias
      setMinDaysPart1(true)
      setSecondPartText("")
    } else{
      setSecondPartText(verifyTimeLeft(dataSonoSintomas))
    }   
  }

  async function getHabitosDate(){
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
    const dbRef = await db.collection('usersPost').doc(uid).get()
    const data = (await dbRef).data();

    if(data !== undefined){

      const data2: any = data;
      const dateSaudePost = data2.dateSaudePost;

      if(!(dateSaudePost === undefined)){
        setSaudePostEnviado(true)
      }
    }
  }


  async function getContatoPostDate(){
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();

    if(data !== undefined){
      const data2: any= data;
      const dataContatoPost = data2.dateContatoPost;
    
      if (!(dataContatoPost === undefined)){
        setContatoPostEnviado(true);
      }
    } 
  }

  async function getHabitosPostDate(){
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data()

    if(data !== undefined){

      const data2: any = data
      const dataHabitosPost = data2.dateHabitosPost;
    
      if (!(dataHabitosPost === undefined)){
        setHabitosPostEnviado(true);
      }
    }
  }

  async function getSonoSintomasPostDate(){
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();

    if(data !== undefined){
      const data2: any= data;
      const dataSonoSintomasPost = data2.dateSonoSintomasPost;
    
      if (!(dataSonoSintomasPost === undefined)){
        setSonoSintomasPostEnviado(true);
      }

      console.log("verify: " + verifyTimeLeft(dataSonoSintomasPost))
      if(verifyTimeLeft(dataSonoSintomasPost) == "Modulo liberado"){
        //passou 14 dias
        setMinDaysPart2(true)
        setThirdPartText("")
      } else{
        setThirdPartText(verifyTimeLeft(dataSonoSintomasPost))
      }
    } 
  }

  //final functions

  async function getSaudesFinalDate(){
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();

    if(data !== undefined){
      const data2: any= data;
      const dataSaudeFinal = data2.dateSaudeFinal;
      
      if (!(dataSaudeFinal === undefined)){
        setSaudeFinalEnviado(true);
      }
    } 
  }
  
  async function getContatoFinalDate(){
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();

    if(data !== undefined){
      const data2: any= data;
      const dataContatoFinal = data2.dateContatoFinal;
      
      if (!(dataContatoFinal === undefined)){
        setContatoFinalEnviado(true);
      }
    }
  }

  async function getHabitosFinalDate(){
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();

    if(data !== undefined){
      const data2: any= data;
      const dataHabitosFinal = data2.dateHabitosFinal;
      
      if (!(dataHabitosFinal === undefined)){
        setHabitosFinalEnviado(true);
      }
    }
  }

  async function getSonoSintomasFinalDate(){
    const uid = user.uid
    const dbRef= await db.collection('usersPost').doc(uid).get();
    const data= (await dbRef).data();

    if(data !== undefined){
      const data2: any= data;
      const dataSonoSintomasFinal = data2.dateSonoSintomasFinal;

      if (!(dataSonoSintomasFinal === undefined)){
        setSonoSintomasFinalEnviado(true);
      }
    }
  }

  async function getFeedbackContatoInicial(){
    
    const dbRef= await db.collection('users').doc(uid).get();
    const data= (await dbRef).data();
    if(data !== undefined){
      const data2: any= data;
      const dataSocialDist = data2.socialDist;
      const dataContactN = data2.contactN;
      
      if (feedbackSocialDist(dataSocialDist) === "string1"){
        setfeedbackCIText("Você nos contou que está seguindo as medidas de distanciamento social. Parabéns! Sabemos que pode estar mais difícil manter o distanciamento social ao longo do tempo, mas seu esforço salva vidas!")
      } else if (feedbackSocialDist(dataSocialDist) === "string2"){
        setfeedbackCIText("Você nos contou que não está seguindo as medidas de distanciamento social na maior parte do tempo. Sabemos que está sendo cada dia mais difícil manter o distanciamento social, mas evitar aglomerações é essencial para impedir que o vírus se espalhe. Enquanto não vacinamos a maior parte da população, manter o distaciamento social continua sendo essencial para evitarmos nos contaminar e contaminar aos outros.")
      }

      if (feedbackContactN(dataContactN) === "string1"){
        setfeedbackCI2Text("Uma sugestão para tornar mais fácil o distanciamento social é manter o contato e conversar com pessoas queridas, mesmo que por telefone ou mensagem. Isso diminui a nossa ansiedade e pode ser uma boa ferramenta no enfrantamento deste momento.")
      } else if (feedbackContactN(dataContactN) === "string2"){
        setfeedbackCI2Text("Você também nos contou que mantém contato social diariamente. Algum tipo de contato com pessoas que nos fazem bem, mesmo que à distância, é essencial pra nos ajudar a encarar esse momento.")
      }
    }
  }

  function modalFeedbackInicial(){
    setShowModalFeedbackInicial(true);
    getFeedbackContatoInicial();
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
          
            <AccordionItemPanel>
      
            
           
            <div>
           <IonButton disabled={moduloSaudeEnviado} onClick={saude} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80"/></IonButton>
           </div>
        
            </AccordionItemPanel> 
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloContatoEnviado || !moduloSaudeEnviado} onClick={contato} color="orange" fill="solid" className="button-forms"><div className="texto-button">Contato social</div><img className="img-button" src={button_contato} width="80" height="80"/></IonButton> 
           </div> 
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloHabitosEnviado || !moduloContatoEnviado} onClick={habitos} color="orange" fill="solid"  className="button-forms"><div className="texto-button">Hábitos</div><img className="img-button" src={button_habitos} width="80" height="80"/></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloSonoSintomasEnviado || !moduloHabitosEnviado} onClick={sonoSintomas} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80"/></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div className={"texto-compartilhar"}>
            Finalize o formulário e acesse todas as dicas personalizadas! 
           </div>
           <div>
           <IonButton disabled={!moduloSonoSintomasEnviado || (moduloSonoSintomasEnviado && minDaysPart1)} onClick={() => modalFeedbackInicial()} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Acessar dicas</div></IonButton> 
           </div>

           <IonModal isOpen={showModalFeedbackInicial} showBackdrop={true}
              cssClass='custom-modal'
              onDidDismiss={() => setShowModalFeedbackInicial(false)}>
                <IonContent>
                  <p>{feedbackCIText}</p>
                  <p>{feedbackCI2Text}</p>

                  <IonButton color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Compartilhar resultados</div></IonButton> 
                </IonContent>
            </IonModal>
          
            </AccordionItemPanel>
          
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
              <p>{secondPartText}</p>

           <div>
           <IonButton disabled={moduloSaudePostEnviado || !minDaysPart1} onClick={saudePost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80"/></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>
           <div>
           <IonButton disabled={moduloContatoPostEnviado || !moduloSaudePostEnviado} onClick={contatoPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Contato social</div><img className="img-button" src={button_contato} width="80" height="80"/></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>

           <div>
           <IonButton disabled={moduloHabitosPostEnviado || !moduloContatoPostEnviado} onClick={habitosPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Hábitos </div><img className="img-button" src={button_habitos} width="80" height="80"/></IonButton> 
           </div>
           </AccordionItemPanel>
           <AccordionItemPanel>
           <div>
           <IonButton disabled={moduloSonoSintomasPostEnviado || !moduloHabitosPostEnviado} onClick={sonosintomasPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80"/></IonButton> 
           </div>
           
           </AccordionItemPanel>
           <AccordionItemPanel>
            <div className={"texto-compartilhar"}>
            Finalize o formulário e acesse todas as dicas personalizadas! 
           </div>
           <div>
           <IonButton disabled={!moduloSonoSintomasPostEnviado || (moduloSonoSintomasPostEnviado && minDaysPart2)} color="orange" fill="solid" shape="round" onClick={() => setShowModalFeedbackPost(true)} size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Acessar dicas</div></IonButton> 
           </div>
           <IonModal isOpen={showModalFeedbackPost} showBackdrop={true}
              cssClass='custom-modal'
              onDidDismiss={() => setShowModalFeedbackPost(false)}>
                <IonContent>
                  <p>Feedback post vai aqui</p>
                </IonContent>
            </IonModal>
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
            <p>{thirdPartText}</p>

            <div>
           <IonButton disabled={moduloSaudeFinalEnviado || !minDaysPart2} onClick={saudeFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80"/></IonButton> 
           </div>
           </AccordionItemPanel>

           <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloContatoFinalEnviado || !moduloSaudeFinalEnviado} onClick={contatoFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Contato social</div><img className="img-button" src={button_contato} width="80" height="80"/></IonButton> 
           </div>
            </AccordionItemPanel>

            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloHabitosFinalEnviado || !moduloContatoFinalEnviado} onClick={habitosFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Hábitos</div><img className="img-button" src={button_habitos} width="80" height="80"/></IonButton> 
           </div>
            </AccordionItemPanel>

            <AccordionItemPanel>
            <div>
           <IonButton disabled={moduloSonoSintomasFinalEnviado || !moduloHabitosFinalEnviado} onClick={sonoSintomasFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80"/></IonButton> 
           </div>
            </AccordionItemPanel>
            <AccordionItemPanel>
            <div className={"texto-compartilhar"}>
            Finalize o formulário e acesse todas as dicas personalizadas! 
           </div>
           <div>
           <IonButton disabled={!moduloSonoSintomasFinalEnviado} color="orange" fill="solid" shape="round" onClick={() => setShowModalFeedbackFinal(true)} size="small"><IonIcon slot="start" icon={shareSocialOutline}/><div>Acessar dicas</div></IonButton> 
           </div>
           <IonModal isOpen={showModalFeedbackFinal} showBackdrop={true}
              cssClass='custom-modal'
              onDidDismiss={() => setShowModalFeedbackFinal(false)}>
                <IonContent>
                  <p>Feedback final vai aqui</p>
                </IonContent>
            </IonModal>
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