import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonModal, IonSlides, IonSlide, IonRow, IonGrid, IonCol } from '@ionic/react';

import logo_regente from '../img/logo_regente_branco.svg';


import { IonMenuButton, IonButtons, IonIcon } from '@ionic/react';

import { millisToDaysHoursMinutes, pad, verifyTimeLeft } from '../../src/dateFunctions';
import { feedbackSocialDist, feedbackContactN } from '../../src/feedbackContatoFunctions';
import { feedbackLight } from '../../src/feedbackLightFunctions';
import { feedbackHobbies, feedbackExercise } from '../../src/feedbackHabitosFunctions';
import { IMC } from '../../src/feedbackIMCFunctions';
import { feedbackFumo, feedbackAlcool, feedbackMed } from '../../src/feedbackSaudeFunctions';
import { bemEstar } from '../../src/feedbackBemEstarFunctions';
import { feedbackSono } from '../../src/feedbackSono';
import { regularides } from '../../src/feedbackRegularidesFunction';


import { IonButton, IonLoading } from '@ionic/react';
import { construct, share, shareSocial, shareSocialOutline } from 'ionicons/icons';

import { useHistory } from 'react-router-dom'

import { logoutUser } from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import { chatbubbleOutline, statsChartOutline } from 'ionicons/icons';

import { useUser } from 'reactfire';

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
import matutino_feliz from '../img/Matutino_feliz.svg';
import intermed_feliz from '../img/Neutro_feliz.svg';
import vespertino_feliz from '../img/Vespertino_feliz.svg';

import matutino_cansado from '../img/Matutino_cansado.svg';
import intermed_cansado from '../img/Neutro_cansado.svg';
import vespertino_cansado from '../img/Vespertino_cansado.svg';

import sono_feedback from '../img/sono_feedback.svg';
import sol from '../img/Sono_1.svg';
import contato_social from '../img/Covid_4.svg'
import imc from '../img/Sono_5.svg';

import matutino_wave from '../img/Matutino_boas-vindas.svg';
import intermed_wave from '../img/Neutro_boas-vindas.svg';
import vespertino_wave from '../img/Vespertino_boas-vindas.svg';

import matutino_corda from '../img/matutino_corda.svg';
import vespertino_corda from '../img/vespertino_corda.png';
import intermed_corda from '../img/intermed_corda.png';
import teste_imagem from '../img/distanciamentoExp.png';

import home_intermed from '../img/home_intermed.png';
import home_vespertino from '../img/home_matutino.png';
import home_matutino from '../img/home_vespertino.png';
import home_gif from '../img/Home-gif.gif';

import sono3 from '../img/Sono_3.svg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './Home.css';

import { format, sub } from 'date-fns';
import { diffHoursMinutes } from '../dateFunctions';
import { timeStampToFloat } from '../dateFunctions';

import { PDFGenerator } from '@ionic-native/pdf-generator';
import { SocialSharing } from '@ionic-native/social-sharing';

import {arrowForwardOutline, arrowBackOutline} from 'ionicons/icons';


const Tab1: React.FC = () => {


  const [loader, setLoader] = useState<boolean>(false);
  const [showModalFeedbackInicial, setShowModalFeedbackInicial] = useState(false);
  const [showModalFeedbackPost, setShowModalFeedbackPost] = useState(false);
  const [showModalFeedbackFinal, setShowModalFeedbackFinal] = useState(false);
  const [showModalSonoSintomas, setShowModalSonoSintomas]= useState(false);

  function chamaSobre() {
    history.push('/sobre');
  }

  function chamaPerfil() {
    history.push('/perfil');
  }

  async function Logout() {
    setLoader(true)
    const res = await logoutUser();

    if (res === true) {
      toast('Logout efetuado!')
      history.replace('/login');
      setLoader(false);

    }
  }

  function checkIfEmailVerified() {
    return user.emailVerified;
  }

  const history = useHistory();

  function saude() {
    history.push('/saude');
  }

  function contato() {

    history.push('/contatosocial')

  }

  function habitos() {
    history.push('/habitos');
  }

  function sonoSintomas() {
    history.push('/sonosintomas');
    setShowModalSonoSintomas(true);
  }

  function saudePost() {
    history.push('/saudePost');
  }

  function contatoPost() {
    history.push('/contatoPost');
  }

  function habitosPost() {
    history.push('/habitosPost');
  }

  function sonosintomasPost() {
    history.push('/sonosintomasPost');
    setShowModalSonoSintomas(true);
  }

  function saudeFinal() {
    history.push('/saudeFinal');
  }

  function contatoFinal() {
    history.push('/contatoFinal');
  }

  function habitosFinal() {
    history.push('/habitosFinal');
  }

  function sonoSintomasFinal() {
    history.push('/sonoSintomasFinal');
    setShowModalSonoSintomas(true);
  }

  function feedbackInicial() {
    history.push('/feedbackinicial');
  }

  function toAderencia() {
    history.push('/aderencia');
  }

  function toAderenciaPost() {
    history.push('/aderencia1post');
  }

  function toAderenciaFinal() {
    history.push('/aderencia1final');
  }


  const [moduloSaudeEnviado, setSaudeModulo1Enviado] = React.useState(false);
  const [moduloContatoEnviado, setContatoModulo1Enviado] = React.useState(false);
  const [moduloHabitosEnviado, setHabitosModulo1Enviado] = React.useState(false);
  const [moduloSonoSintomasEnviado, setSonoSintomasModulo1Enviado] = React.useState(false);

  const [moduloSaudePostEnviado, setSaudePostEnviado] = React.useState(false);
  const [moduloContatoPostEnviado, setContatoPostEnviado] = React.useState(false);
  const [moduloHabitosPostEnviado, setHabitosPostEnviado] = React.useState(false);
  const [moduloSonoSintomasPostEnviado, setSonoSintomasPostEnviado] = React.useState(false);

  const [moduloSaudeFinalEnviado, setSaudeFinalEnviado] = React.useState(false);
  const [moduloContatoFinalEnviado, setContatoFinalEnviado] = React.useState(false);
  const [moduloHabitosFinalEnviado, setHabitosFinalEnviado] = React.useState(false);
  const [moduloSonoSintomasFinalEnviado, setSonoSintomasFinalEnviado] = React.useState(false);

  const [meta1Definida, setMeta1Definida]= React.useState(false);
  const [meta2Definida, setMeta2Definida]= React.useState(false);
  const [meta3Definida, setMeta3Definida]= React.useState(false);

  const [minDaysPart1, setMinDaysPart1] = React.useState(false);
  const [minDaysPart2, setMinDaysPart2] = React.useState(false);

  const [secondPartText, setSecondPartText] = React.useState("Falta preencher a parte anterior")
  const [thirdPartText, setThirdPartText] = React.useState("Falta preencher a parte anterior")

  const [imgHome, setimgHome] = React.useState();

  const [feedbackCIText, setfeedbackCIText] = React.useState("Carregando feedback...")
  const [feedbackCI2Text, setfeedbackCI2Text] = React.useState("Carregando  feedback...")
  const [feedbackLightText, setFeedbackLightText] = React.useState("Carregando feedback...")
  const [feedbackHobbiesText, setFeedbackHobbiesText] = React.useState("")
  const [feedbackExerciseText, setFeedbackExerciseText] = React.useState("Carregando feedback...")
  const [feedbackIMCText, setFeedbackIMCText] = React.useState("Carregando o feedback...")
  const [feedbackFumoText, setFeedbackFumoText] = React.useState("")
  const [feedbackAlcoolText, setFeedbackAlcoolText] = React.useState("")
  const [feedbackBemEstarText, setFeedbackBemEstarText] = React.useState("")
  const [feedbackMedText, setFeedbackMedsText] = React.useState("")
  const [feedbackSonoText, setFeedbackSonoText] = React.useState("Carregando feedback...")
  const [feedbackCronoText, setFeedbackCronoText] = React.useState('Carregando feedback...')
  const [feedbackRegularidadesText, setFeedbackRegularidadesText] = React.useState("Carregando o feedback...")

  const [cronoImage, setCronoImage] = React.useState("Carregando feedback...")

  const [feedbackSJLText, setFeedbackSJLText] = React.useState("")
  const [vespSJLText, setVespSJLText] = React.useState("")

  const [swiper, setSwiper] = useState<any>({});
  const init = async function(this: any) {
    setSwiper(await this.getSwiper());
  };
  const handleNext = () =>{
    swiper.slideNext();
  }
 
   const handlePrevious = () =>{
     swiper.slidePrev();
   }

  const { data: user } = useUser();
  const db = firebase.firestore();
  const uid = user.uid

  function converToHoursAndMinutes(hours: number) {
    let hour: number = Math.trunc(hours)
    let minutes: number = Math.round((hours - hour) * 60)
    return hour + ":" + minutes
  }

  async function getSaudeDate() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();

    if (data != undefined) {
      const data2: any = data;
      const dataSaude = data2.dateSaudeModule1;

      console.log("dataSaude: " + dataSaude)

      if (!(dataSaude === undefined)) {
        setSaudeModulo1Enviado(true)
      }
    }
  }

  async function getContatoDate() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();

    if (data != undefined) {
      const data2: any = data;
      const dataContato = data2.dateContatoModule1;

      if (!(dataContato === undefined)) {
        setContatoModulo1Enviado(true)
      }
      console.log("1:" + moduloSaudeEnviado)
      console.log("2:" + moduloContatoEnviado)
    }
  }

  async function getSonoSintomasDate() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataSonoSintomas = data2.dateSonoSintomasModule1;


      if (!(dataSonoSintomas === undefined)) {
        setSonoSintomasModulo1Enviado(true)
      }

      console.log("dataSonoSintomas: " + verifyTimeLeft(dataSonoSintomas))

      if (verifyTimeLeft(dataSonoSintomas) == "Modulo liberado") {
        //passou 14 dias
        setMinDaysPart1(true)
        setSecondPartText("")
      } else {
        setSecondPartText(verifyTimeLeft(dataSonoSintomas))
      }


    }
  }

  async function getHabitosDate() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();

    if (data != undefined) {
      const data2: any = data;
      const dataHabitos = data2.dateHabitosModule1;

      if (!(dataHabitos === undefined)) {
        setHabitosModulo1Enviado(true)
      }
    }
  }

  //post functions

  async function getSaudesPostDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get()
    const data = (await dbRef).data();

    if (data !== undefined) {

      const data2: any = data;
      const dateSaudePost = data2.dateSaudePost;

      if (!(dateSaudePost === undefined)) {
        setSaudePostEnviado(true)
      }
    }
  }


  async function getContatoPostDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data();

    if (data !== undefined) {
      const data2: any = data;
      const dataContatoPost = data2.dateContatoPost;

      if (!(dataContatoPost === undefined)) {
        setContatoPostEnviado(true);
      }
    }
  }

  async function getHabitosPostDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data()

    if (data !== undefined) {

      const data2: any = data
      const dataHabitosPost = data2.dateHabitosPost;

      if (!(dataHabitosPost === undefined)) {
        setHabitosPostEnviado(true);
      }
    }
  }

  async function getSonoSintomasPostDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data();

    if (data !== undefined) {
      const data2: any = data;
      const dataSonoSintomasPost = data2.dateSonoSintomasPost;

      if (!(dataSonoSintomasPost === undefined)) {
        setSonoSintomasPostEnviado(true);
      }

      console.log("verify: " + verifyTimeLeft(dataSonoSintomasPost))
      if (verifyTimeLeft(dataSonoSintomasPost) == "Modulo liberado") {
        //passou 14 dias
        setMinDaysPart2(true)
        setThirdPartText("")
      } else {
        setThirdPartText(verifyTimeLeft(dataSonoSintomasPost))
      }
    }
  }

  //final functions

  async function getSaudesFinalDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data();

    if (data !== undefined) {
      const data2: any = data;
      const dataSaudeFinal = data2.dateSaudeFinal;

      if (!(dataSaudeFinal === undefined)) {
        setSaudeFinalEnviado(true);
      }
    }
  }

  async function getContatoFinalDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data();

    if (data !== undefined) {
      const data2: any = data;
      const dataContatoFinal = data2.dateContatoFinal;

      if (!(dataContatoFinal === undefined)) {
        setContatoFinalEnviado(true);
      }
    }
  }

  async function getHabitosFinalDate() {
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data();

    if (data !== undefined) {
      const data2: any = data;
      const dataHabitosFinal = data2.dateHabitosFinal;

      if (!(dataHabitosFinal === undefined)) {
        setHabitosFinalEnviado(true);
      }
    }
  }

  async function getSonoSintomasFinalDate() {
    const uid = user.uid
    const dbRef = await db.collection('usersPost').doc(uid).get();
    const data = (await dbRef).data();

    if (data !== undefined) {
      const data2: any = data;
      const dataSonoSintomasFinal = data2.dateSonoSintomasFinal;

      if (!(dataSonoSintomasFinal === undefined)) {
        setSonoSintomasFinalEnviado(true);
      }
    }
  }

  async function getFeedbackHabitos() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataHobbiesFreq = data2.hobbiesFreq;
      const dataExercise = data2.exercise;

      if (feedbackHobbies(dataHobbiesFreq) === "string1") {
        setFeedbackHobbiesText("​Reservar um tempo para atividades de lazer pode ser importante para a sua sáude mental. Será que você conseguiria implementar esse hábito na sua semana? Que tal praticar algo que você goste por 30 minutos na semana e aumentar esse tempo de forma gradual?")
      }

      if (feedbackExercise(dataExercise) === "string1") {
        setFeedbackExerciseText("Você nos contou que pratica exercícios físicos. Parabéns! Este é um hábito que torna sua vida mais saudável. Tente continuar praticando. O que é recomendado para adultos  é praticar, por semana, pelo menos 150 min de atividades físicas moderadas (aquelas em que você consegue conversar com dificuldade enquanto se movimenta, mas não consegue cantar; sua respiração e os batimentos do coração vão aumentar moderadamente), ou então 75 min de atividades vigorosas (em que você não vai conseguir nem conversar; sua respiração vai ser muito mais rápida que o normal, e os batimentos do seu coração vão aumentar muito). Você pode dividir a sua prática de atividade física em pequenos blocos de tempo ou fazer mais minutos por dia, de uma só vez. Faça como preferir e como puder! Ter um dia a dia fisicamente ativo é bastante seguro. Se você tiver alguma lesão ou sentir algum desconforto anormal, como alguma dor na região do peito ou tontura, procure a Unidade Básica de Saúde mais próxima de você. ")
      } else if (feedbackExercise(dataExercise) === "string2") {
        setFeedbackExerciseText("Você nos contou que não pratica exercícios físicos. Você poderia planejar como inclui-los na sua semana. Esse é o primeiro passo e este hábito vai tornar sua vida mais saudável! O que é recomendado para adultos é praticar, por semana, pelo menos 150 min de atividades físicas moderadas (aquelas em que você consegue conversar com dificuldade enquanto se movimenta, mas não consegue cantar; sua respiração e os batimentos do coração vão aumentar moderadamente), ou então 75 min de atividades vigorosas (em que você não vai conseguir nem conversar; sua respiração vai ser muito mais rápida que o normal, e os batimentos do seu coração vão aumentar muito).  Você pode dividir a sua prática de atividade física em pequenos blocos de tempo ou fazer mais minutos por dia, de uma só vez. Faça como preferir e como puder! Ter um dia a dia fisicamente ativo é bastante seguro. Se você tiver alguma lesão ou sentir algum desconforto anormal, como alguma dor na região do peito ou tontura, procure a Unidade Básica de Saúde mais próxima de você. ")
      }

    }
  }

  async function getIMC() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataAge = data2.age;
      const dataSex = data2.sex;
      const dataWeight = data2.weight;
      const dataHeight = data2.height;

      if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "adp 18-64") {
        setFeedbackIMCText("IMC: < 18,5. Através da relação do seu peso pela sua altura conseguimos identificar que o seu peso está um pouco abaixo do ideal. Fique atento e procure um médico ou um nutricionista para uma avaliação.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "pn 18-64") {
        setFeedbackIMCText("IMC: 18,5-24,9. Através da relação do seu peso pela sua altura conseguimos identificar você está dentro do peso adequado! Você já ouviu falar sobre IMC? O Índice de Massa Corporal é calculado com base no seu peso e na sua altura (peso(kg)/(altura(m) x altura(m)) e identifica se seu peso está adequado para sua altura. O IMC normal varia de 18,5 a 24,9.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "s m 18-64") {
        setFeedbackIMCText("IMC: 25,0-29,9. Através da relação do seu peso pela sua altura conseguimos identificar que você está um pouco acima do peso ideal para você. Você pode procurar um médico ou um nutricionista para uma avaliação. A prática de exercício físico regular, alimentação saudável e rotina de sono também podem auxiliar você.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "s f 18-64") {
        setFeedbackIMCText("IMC: 25,0-29,9. Através da relação do seu peso pela sua altura conseguimos identificar que você está um pouco acima do peso ideal para você. Você pode procurar um médico ou um nutricionista para uma avaliação. A prática de exercício físico regular, alimentação saudável e rotina de sono também podem auxiliar você. Nota: se você está grávida, não se aplica ao seu caso; converse com o seu obstetra.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "o m 18-64") {
        setFeedbackIMCText("IMC: ≥ 30,0. Identificamos através do cálculo da relação do seu peso pela altura que você está acima do seu peso. Você pode procurar um médico ou um nutricionista para uma avaliação. A prática de exercício físico regular, alimentação saudável e rotina de sono também podem auxiliar você.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "o f 18-64") {
        setFeedbackIMCText("IMC: ≥ 30,0. Identificamos através do cálculo da relação do seu peso pela altura que você está acima do seu peso. Você pode procurar um médico ou um nutricionista para uma avaliação. A prática de exercício físico regular, alimentação saudável e rotina de sono podem auxiliar você. Nota: se você está grávida, não se aplica ao seu caso; converse com o seu obstetra.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "adp 65") {
        setFeedbackIMCText("IMC: ≤ 22,9. Através da relação do seu peso pela sua altura conseguimos identificar que o seu peso está um pouco abaixo do ideal para a sua idade. Fique atento e procure um médico ou um nutricionista para uma avaliação.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "pn 65") {
        setFeedbackIMCText("IMC: 23,0-30,9. Através da relação do seu peso pela sua altura conseguimos identificar que seu está na faixa de peso ideal para a sua idade. A prática regular de exercícios, dentro das suas possibilidades, e uma alimentação saudável e rotina de sono regular podem auxiliar você a se manter no seu peso.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "o 65") {
        setFeedbackIMCText("IMC: ≥ 31,0. Através da relação do seu peso pela sua altura conseguimos identificar que você está acima do peso ideal para a sua idade. A prática regular de exercícios, dentro das suas possibilidades, e uma alimentação saudável e rotina de sono regular podem auxiliar você no controle do peso.Procure um médico ou um nutricionista para uma avaliação.")
      } else {
        setFeedbackIMCText("Erro no cálculo do IMC! Por favor, preencha os dados novamente.")
      }
    }
  }

  async function getFeedbackLight() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataLightFreq = data2.lightFreq;
      const dataLight = data2.light;
      const dataLightReg = data2.lightReg;

      if (feedbackLight(dataLightFreq, dataLight, dataLightReg) === "string1") {
        setFeedbackLightText("Você sabia que se expor à luz natural traz benefícios para a saúde, o bem estar e até para seu sono? Você acha que conseguiria se expor mais a luz natural? Você pode se sentar próximo à uma janela em alguns momentos do dia ou realizar as suas atividades em um ambiente com luz natural. Tente manter uma exposição regular e dê preferência a exposição no turno da manhã.")

      } else if (feedbackLight(dataLightFreq, dataLight, dataLightReg) === "string2") {
        setFeedbackLightText("Que bom que você tem se exposto a luz natural! Siga assim, esse hábito é super importante para a sua saúde. Tente manter uma exposição regular e dê preferência a exposição no turno da manhã.")
      }

    }
  }

  async function getFeedbackSaude() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataSmoke = data2.smoke;
      const dataAlcool = data2.cage04;
      const dataMedsOff = data2.medsOff;

      if (feedbackMed(dataMedsOff) === "string01") {
        setFeedbackMedsText("Algumas medicações podem ser prejudiciais a sua saúde quando utilizadas sem indicação médicas, especialmente medicações controladas como antibióticos, remédios para depressão/ansiedade e remédios para dormir. Caso você ache que precise de alguma medicação acima, busque por profissionais que possam lhe ajudar. Medicações para tratamento de doenças crônicas, como diuréticos, podem não ser uteis para você. Evite tomá-las se você não recebeu uma prescrição médica ou de algum outro profissional de saúde. Algumas medicações comuns que não necessitam de prescrição (receita médica), como anti-inflamatórios, podem ser prejudiciais para você, principalmente quando utilizadas com frequência.")
      }

      if (feedbackFumo(dataSmoke) === "string01") {
        setFeedbackFumoText("Você nos contou que fuma. Já pensou em parar de fumar? O SUS oferece tratamento gratuito para auxiliar você nessa. Procure uma unidade de saúde ou um profissional de saúde para receber mais orientações.")
      }
      if (feedbackAlcool(dataAlcool) === "string01") {
        setFeedbackAlcoolText("Vimos que você relatou beber pela manhã, o que é um comportamento considerado pouco saudável. O consumo de álcool em excesso é considerado um problema de saúde. Se isso tem incomodado você, procure um profissional de saúde para uma avaliação.")
      }
    }
  }

  async function getFeedbackContatoInicial() {

    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataSocialDist = data2.socialDist;
      const dataContactN = data2.contactN;

      if (feedbackSocialDist(dataSocialDist) === "string1") {
        setfeedbackCIText("Você nos contou que está seguindo as medidas de distanciamento social. Parabéns! Sabemos que pode estar mais difícil manter o distanciamento social ao longo do tempo, mas seu esforço salva vidas!")
      } else if (feedbackSocialDist(dataSocialDist) === "string2") {
        setfeedbackCIText("Você nos contou que não está seguindo as medidas de distanciamento social na maior parte do tempo. Sabemos que está sendo cada dia mais difícil manter o distanciamento social, mas evitar aglomerações é essencial para impedir que o vírus se espalhe. Enquanto não vacinamos a maior parte da população, manter o distaciamento social continua sendo essencial para evitarmos nos contaminar e contaminar aos outros.")
      }

      if (feedbackContactN(dataContactN) === "string1") {
        setfeedbackCI2Text("Uma sugestão para tornar mais fácil o distanciamento social é manter o contato e conversar com pessoas queridas, mesmo que por telefone ou mensagem. Isso diminui a nossa ansiedade e pode ser uma boa ferramenta no enfrantamento deste momento.")
      } else if (feedbackContactN(dataContactN) === "string2") {
        setfeedbackCI2Text("Você também nos contou que mantém contato social diariamente. Algum tipo de contato com pessoas que nos fazem bem, mesmo que à distância, é essencial pra nos ajudar a encarar esse momento.")
      }
    }
  }

  async function getFeedbackBemEstar() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataSomaGad = data2.gad7_gad01 + data2.gad7_gad02 + data2.gad7_gad03 + data2.gad7_gad04 + data2.gad7_gad05 + data2.gad7_gad06 + data2.gad7_gad07;
      const dataSomaPHQ = data2.phq01 + data2.phq02 + data2.phq03 + data2.phq04 + data2.phq05 + data2.phq06 + data2.phq07 + data2.phq08 + data2.phq09 + data2.phq10;
      const dataPHQ09 = data2.phq09;

      if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string1") {
        setFeedbackBemEstarText("Percebemos  que você tem apresentado sintomas relacionados à ansiedade e depressão. Apesar de notarmos que seus níveis de ansiedade e depressão parecem altos estes questionários não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos ou afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Busque ajuda, depressão e ansiedade tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string1s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado sintomas relacionados à ansiedade e depressão. Apesar de notarmos que seus níveis de ansiedade e depressão parecem altos estes questionários não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e convívio com outras pessoas, sugerimos que você busque ajuda de um profissional (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, depressão e ansiedade tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string2") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado sintomas relacionados à ansiedade e alguns relacionados à depressão. Apesar de notarmos a presença desses sintomas, estes questionários não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que estejam causando prejuízos e afetando sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string2s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado sintomas relacionados à ansiedade e alguns relacionados à depressão. Apesar de notarmos a presença desses sintomas, estes questionários não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e no convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, depressão e ansiedade tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string3") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à ansiedade. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string3s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à ansiedade. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda para lidar com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/.")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string4") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado sintomas relacionados à depressão e alguns relacionados à ansiedade. Apesar de estes questionários nos ajudarem a entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional de saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string4s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado sintomas relacionados à depressão e alguns relacionados à ansiedade. Apesar de estes questionários nos ajudarem a entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional de saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda para lidar com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, depressão e ansiedade tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string5") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à depressão e à ansiedade. Apesar desses questionários nos ajudarem para entender sobre os sintomas de ansiedade e depressão, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string5s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à depressão e à ansiedade. Apesar desses questionários nos ajudarem para entender sobre os sintomas de ansiedade e depressão, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, depressão e ansiedade tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string6") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à ansiedade. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string6s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à ansiedade. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, ansiedade tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string7") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à depressão. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string7s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à depressão. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda para lidar com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, depressão tem tratamento!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string8") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à depressão. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude)")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string8s") {
        setFeedbackBemEstarText("Percebemos que você tem apresentado alguns sintomas relacionados à depressão. Apesar desses questionários nos ajudarem à entender sobre os sintomas de humor, eles não devem ser usados para diagnóstico. Caso você note que esses sintomas te incomodam ou que eles estejam causando prejuízos e afetando a sua funcionalidade no trabalho, atividades em casa e o convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda para lidar com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, conversar é a melhor opção!")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string9") {
        setFeedbackBemEstarText("Caso você precise de ajuda para lidar com os pensamentos de se ferir, ligue para o Centro de Valorização da Vida (CVV). O número é 188 e o website é https://www.cvv.org.br/. Busque ajuda, conversar é a melhor opção!")
      }
    }
  }


  async function getFeedbackSono() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      const dataWakeUpFD = data2.wakeUpFD;
      const dataSleepFD = data2.sleepFD;

      const dataSleepWD = data2.sleepWD;
      const dataWakeUpWD = data2.wakeUpWD;

      const dataSleepNoWork = data2.sleepNoWork;
      const dataWakeUpNoWork = data2.wakeUpNoWork;

      const dataAge = data2.age;

      /*  if (feedbackSono(dataWakeUpFD, dataSleepFD, dataSleepWD, dataWakeUpWD) === "valores válidos"){
          console.log('deu errado');
        } else if (feedbackSono(dataWakeUpFD, dataSleepFD, dataSleepWD, dataWakeUpWD) === "valores inválidos"){
          console.log('deu certo');
        } */

      //feedback SONO com Work Days

      if ((dataSleepWD && dataWakeUpWD) !== (undefined || null || "undefined")) {
        console.log('não tá entrando aqui');

        var durationSonoFDFloat = diffHoursMinutes(dataWakeUpFD, dataSleepFD);
        var durationSonoFDString = converToHoursAndMinutes(durationSonoFDFloat);

        var durationSonoWDFloat = diffHoursMinutes(dataWakeUpWD, dataSleepWD);
        var durationSonoWDString = converToHoursAndMinutes(durationSonoWDFloat);

        var soWD = timeStampToFloat(dataSleepWD);
        var seWD = timeStampToFloat(dataWakeUpWD);

        var soFD = timeStampToFloat(dataSleepFD);
        var seFD = timeStampToFloat(dataWakeUpFD);

        console.log('so wd' + soWD);
        console.log('se wd' + seWD);
        console.log('so fd' + soFD);
        console.log('se FD' + seFD);


        //feedback cronotipo
        var midpointSleepWD = soWD + ((durationSonoWDFloat) / 2);
        var midpointSleepFD = soFD + ((durationSonoFDFloat) / 2);

        console.log('midpoint sleep wd' + midpointSleepWD);
        console.log('midpoint sleep fd' + midpointSleepFD);

        var msfsc;
        if (durationSonoFDFloat <= durationSonoWDFloat) {
          msfsc = midpointSleepFD;
        } else if (durationSonoFDFloat > durationSonoWDFloat) {
          msfsc = midpointSleepFD - ((durationSonoFDFloat - durationSonoWDFloat) / 2)
        }

        console.log('****************** msfsc: ' + msfsc);
        if (msfsc !== undefined) {
          console.log('entrou aqui msfsc: ' + msfsc);
          if (msfsc < 1.5) {
            setFeedbackCronoText('...matutino extremo. Isso significa que você se sente melhor dormindo mais cedo, o que pode ser uma vantagem em uma sociedade que inicia seus compromissos pela manhã. No entanto, pessoas muito matutinas podem, às vezes, se forçar a dormir mais tarde quando têm alguma atividade social à noite.')
            setCronoImage('1')
          } else if ((msfsc >= 1.5) && (msfsc < 3.5)) {
            setFeedbackCronoText('...matutino. Isso significa que você se sente melhor dormindo mais cedo, o que pode ser uma vantagem em uma sociedade que inicia seus compromissos pela manhã. No entanto, pessoas muito matutinas podem, às vezes, se forçar a dormir mais tarde quando têm alguma atividade social à noite.')
            setCronoImage('1')
          } else if ((msfsc >= 3.5) && (msfsc < 4.5)) {
            setFeedbackCronoText('...intermediário. Isso significa que você se sente bem com horários de sono nem tão cedo, nem tão tarde. A maioria das pessoas se encontra nesta categoria.')
            setCronoImage('2')
          } else if ((msfsc >= 4.5) && (msfsc < 6.5)) {
            setFeedbackCronoText('...vespertino. Isso significa que você se sente bem acordando e dormindo mais tarde. Isso não quer dizer que você tem preguiça, já que essa é uma característica biológica sua.')
            setCronoImage('3')
          } else if ((msfsc >= 6.5)) {
            setFeedbackCronoText('...vespertino extremo. Isso significa que você se sente bem acordando e dormindo mais tarde. Isso não quer dizer que você tem preguiça, já que essa é uma característica biológica sua.')
            setCronoImage('4')
          }
        } else {
          setFeedbackCronoText('Não foi possível calcular seu cronotipo com os dados inseridos.')
        }
        //console.log('sono float: ' + durationSonoFloat);
        //console.log('sono string:' + durationSonoString);


        //feedback duração do sono
        if (dataAge >= 18 && dataAge <= 25) {
          setFeedbackSonoText(durationSonoWDString + " em dias de escola ou trabalho e " + durationSonoFDString + " em dias livres. É recomendado que jovens adultos (18-25 anos) durmam de 7 a 9 horas (podendo também ser 6 a 10 ou 11 horas). A falta de sono pode prejudicar a sua saúde. Dormir é imporante para guardar as informações que você aprendeu, para que seu corpo possa se defender de vírus e bactérias que causam doenças e para que as suas células funcionem bem. Se você acha que está dormindo pouco, pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Repare no quanto você se expõe à luz, como é o ambiente do seu quarto e se você se prepara para dormir. ")
        } else if (dataAge >= 26 && dataAge <= 64) {
          setFeedbackSonoText(durationSonoWDString + " em dias de trabalho e " + durationSonoFDString + " em dias livres. É recomendado que adultos (26 - 64 anos) durmam de 7 a 9 horas (podendo também ser 6 a 10 horas). A falta de sono pode prejudicar a sua saúde. Dormir é imporante para guardar as informações que você aprendeu, para que seu corpo possa se defender de vírus e bactérias que causam doenças e para que as suas células funcionem bem. Se você acha que está dormindo pouco, pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Repare no quanto você se expõe à luz, como é o ambiente do seu quarto e se você se prepara para dormir.")
        } else if (dataAge >= 65) {
          setFeedbackSonoText(durationSonoWDString + " em dias de trabalho e " + durationSonoFDString + " em dias livres. É recomendado que idosos (≥ 65 anos anos) durmam de 7 a 8 horas (podendo também ser 5 ou 6 a 9 horas). A falta de sono pode prejudicar a sua saúde. Dormir é imporante para guardar as informações que você aprendeu, para que seu corpo possa se defender de vírus e bactérias que causam doenças e para que as suas células funcionem bem. Se você acha que está dormindo pouco, pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Repare no quanto você se expõe à luz, como é o ambiente do seu quarto e se você se prepara para dormir.")
        }

        //feedback regularidades e SJL
        var sjlCalculo = Math.abs(midpointSleepFD - midpointSleepWD);
        console.log('sjl calculo' + sjlCalculo);

        if (sjlCalculo !== undefined) {
          if (sjlCalculo > 1) {
            setFeedbackSJLText("Observamos que você apresenta " + sjlCalculo.toFixed(2) + " horas de jetlag social, sugerindo que a sua rotina de sono é diferente entre dias de trabalho e dias livres. Você consegue organizar seus horários para tentar manter uma maior regularidade no seu sono sem abrir mão de dormir o suficiente? ")
          }
        }
        /* 
        if (msfsc !== undefined){
          if ((msfsc >= 4.5) && (sjlCalculo > 1)){
            setVespSJLText("Como você é vespertino e seu jetlag social é alto, pode ser que você tenha dificuldade para dormir e acordar nos horários que tem vontade. Se você gostaria de dormir mais cedo e não consegue, tente ficar na luz do dia pela manhã (não esqueça o filtro solar!). Também evite se expor a telas (televisão, computador, celular) e luz azul pela noite. Estudos mostram que isso pode ajudar você a dormir mais cedo. Para saber mais, leia nossas recomendações sobre hábitos para manter seu sono saudável.");
          } else if ((msfsc >= 4.5) && (durationSonoWDFloat < 6)){
            setVespSJLText("Como você é vespertino e dorme menos que 6h horas em dias de escola/trabalho, o que pode não ser suficiente, imaginamos que deve ser difícil para você dormir e acordar nos horários que gostaria. Se você gostaria de dormir mais cedo e não consegue, tente ficar na luz do dia pela manhã (não esqueça o filtro solar!). Também evite se expor a telas (televisão, computador, celular) e luz azul pela noite. Estudos mostram que isso pode ajudar você a dormir mais cedo. Para saber mais, leia nossas recomendações sobre hábitos para manter seu sono saudável");
          } else if ((msfsc >= 4.5) && (durationSonoWDFloat < 6) && (sjlCalculo > 1)){
            setVespSJLText("Como você é vespertino, seu jetlag social é alto e você dorme menos que 6h horas em dias de escola/trabalho, o que pode não ser suficiente, imaginamos que deve ser difícil para você dormir e acordar nos horários que gostaria. Se você gostaria de dormir mais cedo e não consegue, tente ficar na luz do dia pela manhã (não esqueça o filtro solar!). Também evite se expor a telas (televisão, computador, celular) e luz azul pela noite. Estudos mostram que isso pode ajudar você a dormir mais cedo. Para saber mais, leia nossas recomendações sobre hábitos para manter seu sono saudável");
          }
        } */


      }

      //feedback SONO No Work
      else if ((dataSleepNoWork && dataWakeUpNoWork) !== (undefined || null || "undefined")) {

        var durationSonoFDFloat = diffHoursMinutes(dataWakeUpFD, dataSleepFD);
        var durationSonoFDString = converToHoursAndMinutes(durationSonoFDFloat);

        var durationSonoNoWorkFloat = diffHoursMinutes(dataWakeUpNoWork, dataSleepNoWork);
        var durationSonoNoWorkString = converToHoursAndMinutes(durationSonoNoWorkFloat);

        var soNW = timeStampToFloat(dataSleepNoWork);
        var seNW = timeStampToFloat(dataWakeUpNoWork);

        var soFD = timeStampToFloat(dataSleepFD);
        var seFD = timeStampToFloat(dataWakeUpFD);

        var midpointSleepNW = soNW + ((durationSonoNoWorkFloat) / 2);
        var midpointSleepFD = soFD + ((durationSonoFDFloat) / 2);

        console.log('midpoint sleep wd' + midpointSleepNW);
        console.log('midpoint sleep fd' + midpointSleepFD);

        var msfsc;
        if (durationSonoFDFloat <= durationSonoNoWorkFloat) {
          msfsc = midpointSleepFD;
        } else if (durationSonoFDFloat > durationSonoNoWorkFloat) {
          msfsc = midpointSleepFD - ((durationSonoFDFloat - durationSonoNoWorkFloat) / 2)
        }

        if (msfsc !== undefined) {
          console.log('entrou aqui msfsc: ' + msfsc);
          if (msfsc < 1.5) {
            setFeedbackCronoText('...matutino extremo. Isso significa que você se sente melhor dormindo mais cedo, o que pode ser uma vantagem em uma sociedade que inicia seus compromissos pela manhã. No entanto, pessoas muito matutinas podem, às vezes, se forçar a dormir mais tarde quando têm alguma atividade social à noite.')
            setCronoImage('1')
          } else if ((msfsc >= 1.5) && (msfsc < 3.5)) {
            setFeedbackCronoText('...matutino. Isso significa que você se sente melhor dormindo mais cedo, o que pode ser uma vantagem em uma sociedade que inicia seus compromissos pela manhã. No entanto, pessoas muito matutinas podem, às vezes, se forçar a dormir mais tarde quando têm alguma atividade social à noite.')
            setCronoImage('1')
          } else if ((msfsc >= 3.5) && (msfsc < 4.5)) {
            setFeedbackCronoText('...intermediário. Isso significa que você se sente bem com horários de sono nem tão cedo, nem tão tarde. A maioria das pessoas se encontra nesta categoria.')
            setCronoImage('2')
          } else if ((msfsc >= 4.5) && (msfsc < 6.5)) {
            setFeedbackCronoText('...vespertino. Isso significa que você se sente bem acordando e dormindo mais tarde. Isso não quer dizer que você tem preguiça, já que essa é uma característica biológica sua.')
            setCronoImage('3')
          } else if ((msfsc >= 6.5)) {
            setFeedbackCronoText('...vespertino extremo. Isso significa que você se sente bem acordando e dormindo mais tarde. Isso não quer dizer que você tem preguiça, já que essa é uma característica biológica sua.')
            setCronoImage('3')
          }
        } else {
          setFeedbackCronoText('Não foi possível calcular seu cronotipo com os dados inseridos.')
        }

        var sjlCalculo = Math.abs(midpointSleepFD - midpointSleepNW);
        console.log('sjl calculo' + sjlCalculo);

        if (sjlCalculo !== undefined) {
          if (sjlCalculo > 1) {
            setFeedbackSJLText("Observamos que você apresenta " + sjlCalculo.toFixed(2) + " horas de jetlag social, sugerindo que a sua rotina de sono é diferente entre dias de trabalho e dias livres. Você consegue organizar seus horários para tentar manter uma maior regularidade no seu sono sem abrir mão de dormir o suficiente? ")
          }
        }


        // console.log('tá entrando aqui? ');
        var durationSonoFDFloat = diffHoursMinutes(dataWakeUpFD, dataSleepFD);
        var durationSonoFDString = converToHoursAndMinutes(durationSonoFDFloat);
        var durationSonoNoWork = diffHoursMinutes(dataWakeUpNoWork, dataSleepNoWork);
        var durationSonoNoWorkString = converToHoursAndMinutes(durationSonoNoWork);
        if (dataAge >= 18 && dataAge <= 25) {
          setFeedbackSonoText(durationSonoNoWorkString + " em dias de semana e " + durationSonoFDString + " em dias livres. É recomendado que jovens adultos (18-25 anos) durmam de 7 a 9 horas (podendo também ser 6 a 10 ou 11 horas). A falta de sono pode prejudicar a sua saúde. Dormir é imporante para guardar as informações que você aprendeu, para que seu corpo possa se defender de vírus e bactérias que causam doenças e para que as suas células funcionem bem. Se você acha que está dormindo pouco, pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Repare no quanto você se expõe à luz, como é o ambiente do seu quarto e se você se prepara para dormir. ")
        } else if (dataAge >= 26 && dataAge <= 64) {
          setFeedbackSonoText(durationSonoNoWorkString + " em dias de semana e " + durationSonoFDString + " em dias livres. É recomendado que adultos (26 - 64 anos) durmam de 7 a 9 horas (podendo também ser 6 a 10 horas). A falta de sono pode prejudicar a sua saúde. Dormir é imporante para guardar as informações que você aprendeu, para que seu corpo possa se defender de vírus e bactérias que causam doenças e para que as suas células funcionem bem. Se você acha que está dormindo pouco, pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Repare no quanto você se expõe à luz, como é o ambiente do seu quarto e se você se prepara para dormir.")
        } else if (dataAge >= 65) {
          setFeedbackSonoText(durationSonoNoWorkString + " em dias de semana e " + durationSonoFDString + " em dias livres. É recomendado que idosos (≥ 65 anos anos) durmam de 7 a 8 horas (podendo também ser 5 ou 6 a 9 horas). A falta de sono pode prejudicar a sua saúde. Dormir é imporante para guardar as informações que você aprendeu, para que seu corpo possa se defender de vírus e bactérias que causam doenças e para que as suas células funcionem bem. Se você acha que está dormindo pouco, pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Repare no quanto você se expõe à luz, como é o ambiente do seu quarto e se você se prepara para dormir.")
        }
      }




    }
  }

  async function getFeedbackRegularidades() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {

      const data2: any = data;
      const dataFeedReg = data2.feedReg;
      const dataSleepReg = data2.sleepReg;

      console.log('data feed reg: ', dataFeedReg);
      console.log('data sleep reg: ', dataSleepReg);
      console.log('resultado: ' + regularides(dataFeedReg, dataSleepReg));
      if (regularides(dataFeedReg, dataSleepReg) === 1) {
        setFeedbackRegularidadesText("Vimos que seus horários de alimentação são regulares, o que é muito bom para sua saúde! No entanto, tome cuidado com suas rotinas de sono, pois dormir e acordar em horários regulares é essencial para manter uma vida e um corpo saudável.")
      } else if (regularides(dataFeedReg, dataSleepReg) === 2) {
        setFeedbackRegularidadesText("Sensacional! Vimos que seus horários alimentação e sono são regulares, o que é muito bom para sua saúde. Continue assim!")
      } else if (regularides(dataFeedReg, dataSleepReg) === 3) {
        setFeedbackRegularidadesText("É muito importante manter uma regularidade nas rotinas de alimentação e nos horários de sono. Que tal organizar o cardápio e suas compras do supermercado para tentar manter uma regularidade no horário de alimentação? Além disso, não esqueça de que cuidar da rotina de sono é importante para manter uma vida e um corpo saudável.")
      } else if (regularides(dataFeedReg, dataSleepReg) === 4) {
        setFeedbackRegularidadesText("Vimos que seus horários de sono são regulares. Isso pode ajudar a manter seu corpo saudável! No entanto, seus horários de alimentação são irregulares. Que tal organizar o cardápio e suas compras do supermercado para tentar manter uma regularidade no horário de alimentação?")
      }


    }
  }

  async function getMetasDefinidas() {
    const dbRef = await db.collection('metas').doc(uid).get();
    const data = (await dbRef).data();

    if (data != undefined) {
      const data2: any = data;
      const dataMeta1Definida = data2.meta1Definida;
      const dataMeta2Definida = data2.meta2Definida;
      const dataMeta3Definida = data2.meta3Definida;

      //console.log("dataSaude: " + dataMeta1Definida)

      if (!(dataMeta1Definida=== undefined)) {
        if (dataMeta1Definida === "sim"){
          setMeta1Definida(true)
        }
        
      }
      if (!(dataMeta2Definida=== undefined)) {
        if (dataMeta2Definida === "sim"){
          setMeta2Definida(true)
        }
       
      }
      if (!(dataMeta3Definida=== undefined)) {
        if (dataMeta3Definida === "sim"){
          setMeta3Definida(true)
        }
      
      }
    }
  }


  function createPDF() {
    
    let options = {
        //documentSize: 'A4',
        type: 'share'
    }
    const page1 = "<html> Você sabia que cada pessoa tem um relógio interno para organizar as funções do seu corpo? O cronotipo é uma característica que representa como o seu relógio está organizado em relação ao ambiente, principalmente em relação ao dia e a noite.  Considerando seus horários de sono, estimamos que seu cronotipo é..." + feedbackCronoText + "</html>";
    const page2 = "<html>Considerando os horários que você nos disse e, se não costuma acordar muito durante a noite, a duração do seu sono é... " + feedbackSonoText + feedbackSJLText +  "</html>";
    const page3 = "<html> Ao responder nossas perguntas, você também nos contou um pouco sobre hábitos que podem estar relacionados a manutenção da sua saúde. Aqui vão algumas informações que podem ser úteis para você: " + feedbackRegularidadesText + "</html>";
    const page4 = "<html> Você nos contou um pouco sobre os seus hábitos. A partir disso, fazemos algumas sugestões abaixo." +feedbackLightText + feedbackHobbiesText +  "</html>";
    const page5= "<html>" +feedbackExerciseText +"Para saber mais sobre exercícios você pode acessar"+  <a target="_blank" className={"link-text"} href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf">aqui</a> + "</html>";
    const page6 = "<html>" + feedbackIMCText+ feedbackMedText + feedbackFumoText + feedbackAlcoolText + "</html>";
    const page7 = "<html>" + "Considerando o que você nos contou sobre contato social e que ainda estamos em pandemia, fizemos algumas sugestões." + feedbackCIText + feedbackCI2Text+ "</html>";
    const page8 = "<html>" +"É sempre importante manter acompanhamento médico regularmente. De forma geral, quanto antes uma doença for identificada mais fácil e barato é seu tratamento, além de lhe causar menos transtornos. Faça suas revisões regulares e evite surpresas." +feedbackBemEstarText + "Para saber mais sobre a pandemia do COVID-19, bons hábitos, relógio biológico e sono acesse no Menu a página de Recomendações!" + "</html>"
      
      
    PDFGenerator.fromData(page1 + page2 + page3 + page4 + page5 + page6 + page7 + page8, options)
    .then((base64: any)=> console.log(base64) )   // returns base64:JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9DcmVh...
    .catch((err: any)=>console.error(err))
  

  }

  function sharingSocial() {

    const imgs = ['https://i.imgur.com/SbDtsdD.png', 'https://i.imgur.com/QV38oR2.jpeg', 'https://i.imgur.com/eLFAvtU.jpeg']
    const index = Number(cronoImage) - 1; 

    SocialSharing.share('', '', imgs[index]);

  }

  // const file = new File()
  // file.copyFile(`${file.applicationDirectory}build/assets/icon/`, 'favicon.png', file.cacheDirectory, `${new Date().getTime()}.jpg`)
  // .then((img) => {
  //     SocialSharing.share('message', 'subject', img.nativeURL)
  //       .then((data) => console.log('data', data))
  //       .catch((error) => console.log('erro', error));
  //   })
  //   .catch((error) => console.log(error))



  //SocialSharing.share('message', 'subject', `${rola.applicationDirectory}/src/img/distanciamentoExp.png`)
  //SocialSharing.share('message', 'subject', 'asset/img/distanciamentoExp.png')
  //.then((data) => console.log('data', data))
  //.catch((error) => console.log('erro', error));



  function modalFeedbackInicial() {
    setShowModalFeedbackInicial(true);
    getFeedbackLight();
    getFeedbackHabitos();
    getIMC();
    getFeedbackSaude();
    getFeedbackContatoInicial();
    getFeedbackBemEstar();
    getFeedbackSono();
    getFeedbackRegularidades();
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

  //Checking metas
  getMetasDefinidas()


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="orange">

          <div id="header-items">
            <div className={"navigation"}>
              <IonButtons slot="start"> <IonMenuButton id="main"></IonMenuButton> </IonButtons>
            </div>
            <div className={"img-logo"}>
              <img src={logo_regente} className={"logo"} />
            </div>
          </div>







          {/*
          <div id="header-items">
          <IonButton fill="clear" onClick={chamaPerfil}>PERFIL</IonButton>
          <IonButton fill="clear" onClick={chamaSobre}>SOBRE</IonButton>
          <IonButton onClick={Logout} color="tertiary">SAIR</IonButton> 
          </div>    */}
        </IonToolbar>


      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader} />

      
      
      <IonContent fullscreen className="ion-text-center texto-padrão" color="background">

        {cronoImage === 'Carregando feedback...' ? <img className="img-home" src={home_gif}/>  : null}
        {cronoImage === '1' ? <img src={home_matutino} className="img-home" />  : null}
        {cronoImage === '2' ? <img src={home_intermed} className="img-home" /> : null}
        {cronoImage === '3' ? <img src={home_vespertino} className="img-home" /> : null}
          
      
          

        <p className="texto-main">Olá, boas-vindas!</p>
        <p className="texto-padrão ">Para receber dicas personalizadas e ajudar a alimentar a pesquisa, preencha os formulários abaixo! Após preencher você também poderá definir metas e acompanhar suas atividades.</p>

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
                        <IonButton disabled={moduloSaudeEnviado} onClick={saude} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80" /></IonButton>
                      </div>

                    </AccordionItemPanel>
                    <AccordionItemPanel>
                      <div>
                        <IonButton disabled={moduloContatoEnviado || !moduloSaudeEnviado} onClick={contato} color="orange" fill="solid" className="button-forms"><div className="texto-button">Contato social</div><img className="img-button" src={button_contato} width="80" height="80" /></IonButton>
                      </div>
                    </AccordionItemPanel>
                    <AccordionItemPanel>
                      <div>
                        <IonButton disabled={moduloHabitosEnviado || !moduloContatoEnviado} onClick={habitos} color="orange" fill="solid" className="button-forms"><div className="texto-button">Hábitos</div><img className="img-button" src={button_habitos} width="80" height="80" /></IonButton>
                      </div>
                    </AccordionItemPanel>
                    <AccordionItemPanel>
                      <div>
                        <IonButton  onClick={sonoSintomas} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80" /></IonButton>
                      </div>
                    </AccordionItemPanel>
                    <AccordionItemPanel>
                      <div className={"texto-compartilhar"}>
                        Finalize o formulário e acesse todas as dicas personalizadas!
                      </div>
                      <div>
                        <IonButton disabled={!moduloSonoSintomasEnviado || (moduloSonoSintomasEnviado && minDaysPart1)} onClick={() => modalFeedbackInicial()} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline} /><div>Acessar dicas</div></IonButton>
                      </div>
                      <div>
                        <IonButton disabled={!moduloSonoSintomasEnviado || (moduloSonoSintomasEnviado && minDaysPart1) || meta1Definida} onClick={toAderencia} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={statsChartOutline} /><div>Acompanhe seu progresso</div></IonButton>
                      </div>
                     
                      <IonModal isOpen={showModalSonoSintomas} showBackdrop={true}
                        cssClass='custom-modal selectable'
                        onDidDismiss={() => setShowModalSonoSintomas(false)}>
                        <IonContent color="primary">
                          
                          <div className={"div-sonoSintomas"}>
                          <img src={sono3} alt="mascote no celular" className={"img-sonoSintomas"}/>
                          <br/>
                          <p>As perguntas a seguir se referem ao seu comportamento de sono nos dias de trabalho e dias livres. Por favor, responda de acordo com o que ocorreu mais frequentemente nas duas últimas semanas. Considere também estudos e seus afazeres de casa. </p>
                          <p>Por favor, responda todas as questões a seguir utilizando a escala de 24h (por exemplo, 23:00 no lugar de 11:00). Se você é um estudante, preencha os dias de trabalho considerando os dias de aula.</p>
                          </div>
                          <div className="ion-text-center">
                          <IonButton color="white" onClick={() => setShowModalSonoSintomas(false)}>OK, entendi!</IonButton>
                          </div>
                       
                        </IonContent>
                      
                      </IonModal>

                      <IonModal isOpen={showModalFeedbackInicial} showBackdrop={true}
                        cssClass='custom-modal selectable'
                        onDidDismiss={() => setShowModalFeedbackInicial(false)}>
                        <IonContent>

                          <IonSlides pager={true} id={"slides"} onIonSlidesDidLoad={init}>
                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                               
                              <br/>
                                </div>
                              </IonToolbar>

                  
                             

                              {cronoImage === '1' ? <p><img src={matutino_feliz} className="img-slides" /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_feliz} className="img-slides" /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_feliz} className="img-slides" /></p> : null}
                             
                              <div className={"arrows ion-no-padding"}>
                              <p>
                               
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                              <p className={"readMore-text"}>Você sabia que cada pessoa tem um relógio interno para organizar as funções do seu corpo? O cronotipo é uma característica que representa como o seu relógio está organizado em relação ao ambiente, principalmente em relação ao dia e a noite.  Considerando seus horários de sono, estimamos que seu cronotipo é...</p>
                              <p className={"readMore-text"}>{feedbackCronoText}</p>
                              <p>

                                <IonButton onClick={sharingSocial} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={shareSocialOutline} /> Compartilhar resultados </IonButton>
                              </p> <br />

                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>


                              <p className={"readMore-text"}>Considerando os horários que você nos disse e, se não costuma acordar muito durante a noite, a duração do seu sono é...</p>
                              <p className={"readMore-text"}>{feedbackSonoText}</p>
                              <p className={"readMore-text"}>{feedbackSJLText}</p>

                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                             
                              {cronoImage === '1' ? <p><img src={matutino_cansado} className="img-slides" /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_cansado} className="img-slides" /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_cansado} className="img-slides" /></p> : null}

                              

                              <br />


                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>

                              <p className={"readMore-text"}>Ao responder nossas perguntas, você também nos contou um pouco sobre hábitos que podem estar relacionados a manutenção da sua saúde. Aqui vão algumas informações que podem ser úteis para você:</p>
                              <p className={"readMore-text"}>{feedbackRegularidadesText}</p>
                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                              <p><img src={sono_feedback} className="img-slides" /> </p>

                              <br />
                            </IonSlide>

                            {/* <p>{feedbackSJLText}</p>
                  <p>{vespSJLText}</p> */}

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>
                              <p className={"readMore-text"}>Você nos contou um pouco sobre os seus hábitos. A partir disso, fazemos algumas sugestões abaixo.</p>
                              <p className={"readMore-text"}>{feedbackLightText}</p>
                              <p className={"readMore-text"}>{feedbackHobbiesText}</p>
                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                              <p><img src={sol} className="img-slides" /> </p>

                              <br />
                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>


                              <p className={"readMore-text"}>{feedbackExerciseText} Para saber mais sobre exercícios você pode acessar <a target="_blank" className={"link-text"} href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf">aqui</a>.</p>
                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                              {cronoImage === '1' ? <p><img src={matutino_corda} className="img-slides" /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_corda} className="img-slides" /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_corda} className="img-slides" /></p> : null}
                              <br />
                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>

                              <p className={"readMore-text"}>{feedbackIMCText}</p>
                              <p className={"readMore-text"}>{feedbackMedText}</p>
                              <p className={"readMore-text"}>{feedbackFumoText}</p>
                              <p className={"readMore-text"}>{feedbackAlcoolText}</p>
                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                              <p><img src={imc} className="img-slides" /> </p>
                              <br />
                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>
                              <p className={"readMore-text"}>Considerando o que você nos contou sobre contato social e que ainda estamos em pandemia, fizemos algumas sugestões.</p>
                              <p className={"readMore-text"}>{feedbackCIText}</p>
                              <p className={"readMore-text"}>{feedbackCI2Text}</p>
                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              <IonButton  className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                              </p>  
                              </div>                         
                              <br/>
                              <p><img src={contato_social} className="img-slides" /> </p>
                              <br />
                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>
                              <p className={"readMore-text"}>É sempre importante manter acompanhamento médico regularmente. De forma geral, quanto antes uma doença for identificada mais fácil e barato é seu tratamento, além de lhe causar menos transtornos. Faça suas revisões regulares e evite surpresas.</p>

                              <p className={"readMore-text"}>{feedbackBemEstarText}</p>
                              <p className={"readMore-text"}>Para saber mais sobre a pandemia do COVID-19, bons hábitos, relógio biológico e sono acesse no Menu a página de Recomendações!</p>
                              <div className={"arrows ion-no-padding"}>
                              <p>
                              <IonButton  className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton> 
                              
                              
                              </p>  
                              </div>                         
                              <br/>
                              <br/>
                              <IonButton onClick={createPDF}>gerar pdf</IonButton>
                              
                              {cronoImage === '1' ? <p><img src={matutino_wave} className="img-slides" /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_wave} className="img-slides" /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_wave} className="img-slides" /></p> : null}

                              <br />
                            </IonSlide>

                          </IonSlides>
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
                      <IonButton disabled={moduloSaudePostEnviado || !minDaysPart1} onClick={saudePost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloContatoPostEnviado || !moduloSaudePostEnviado} onClick={contatoPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Contato social</div><img className="img-button" src={button_contato} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>
                  <AccordionItemPanel>

                    <div>
                      <IonButton disabled={moduloHabitosPostEnviado || !moduloContatoPostEnviado} onClick={habitosPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Hábitos </div><img className="img-button" src={button_habitos} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloSonoSintomasPostEnviado || !moduloHabitosPostEnviado} onClick={sonosintomasPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80" /></IonButton>
                    </div>

                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div className={"texto-compartilhar"}>
                      Finalize a segunda etapa e escolha mais metas para acompanhar!
                    </div>
                    <div>
                      <IonButton disabled={!moduloSonoSintomasPostEnviado || (moduloSonoSintomasPostEnviado && minDaysPart2) || meta2Definida}  onClick={toAderenciaPost} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={statsChartOutline} /><div>Acompanhe seu progresso</div></IonButton>
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
                    <p>{thirdPartText}</p>

                    <div>
                      <IonButton disabled={moduloSaudeFinalEnviado || !minDaysPart2}  onClick={saudeFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>

                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloContatoFinalEnviado || !moduloSaudeFinalEnviado} onClick={contatoFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Contato social</div><img className="img-button" src={button_contato} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>

                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloHabitosFinalEnviado || !moduloContatoFinalEnviado} onClick={habitosFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Hábitos</div><img className="img-button" src={button_habitos} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>

                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloSonoSintomasFinalEnviado || !moduloHabitosFinalEnviado} onClick={sonoSintomasFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80" /></IonButton>
                    </div>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div className={"texto-compartilhar"}>
                      Finalize a última etapa e escolha mais metas para acompanhar!
                    </div>
                    <div>
                      <IonButton disabled={!moduloSonoSintomasFinalEnviado || meta3Definida}  onClick={toAderenciaFinal} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={statsChartOutline} /><div>Acompanhe seu progresso</div></IonButton>
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