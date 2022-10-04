import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonModal, IonSlides, IonSlide, IonRow, IonGrid, IonCol, IonText } from '@ionic/react';

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
import { feedbackSD4 } from '../../src/feedbackContatoFunctions';
import {feedbackRMEQ} from '../../src/feedbackRMEQfunction';

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

import { arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications';



const Tab1: React.FC = () => {


  const [loader, setLoader] = useState<boolean>(false);
  const [showModalFeedbackInicial, setShowModalFeedbackInicial] = useState(false);
  const [showModalFeedbackPost, setShowModalFeedbackPost] = useState(false);
  const [showModalFeedbackFinal, setShowModalFeedbackFinal] = useState(false);
  const [showModalSonoSintomas, setShowModalSonoSintomas] = useState(false);


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

  const [meta1Definida, setMeta1Definida] = React.useState(false);
  const [meta2Definida, setMeta2Definida] = React.useState(false);
  const [meta3Definida, setMeta3Definida] = React.useState(false);

  const [minDaysPart1, setMinDaysPart1] = React.useState(false);
  const [minDaysPart2, setMinDaysPart2] = React.useState(false);


  const [firstPartText, setFirstPartText] = React.useState("Finalize o formulário e acesse todas as dicas personalizadas!")
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
  const [feedbackSD4Text, setFeedbackSD4Text] = React.useState("Carregando o feedback...")
  const [feedbackRMEQText, setFeedbackRMEQText] = React.useState("Carregando o feedback...")

  const [cronoImage, setCronoImage] = React.useState("Carregando feedback...")

  const [feedbackSJLText, setFeedbackSJLText] = React.useState("")
  const [vespSJLText, setVespSJLText] = React.useState("")

  const [swiper, setSwiper] = useState<any>({});
  const init = async function (this: any) {
    setSwiper(await this.getSwiper());
  };
  const handleNext = () => {
    swiper.slideNext();
  }

  const handlePrevious = () => {
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
        setFirstPartText("Obrigado! Acesse agora as dicas personalizadas e defina suas metas!")
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
        setFeedbackExerciseText("Você nos contou que pratica exercícios físicos. Este é um hábito que torna sua vida mais saudável. Tente continuar praticando e atente para o mínimo recomendado pelas órgãos oficiais. O que é recomendado para adultos é praticar, por semana, pelo menos 150 min de atividades físicas moderadas (aquelas em que você consegue conversar com dificuldade enquanto se movimenta, mas não consegue cantar; sua respiração e os batimentos do coração vão aumentar moderadamente), ou então 75 min de atividades vigorosas (em que você não vai conseguir nem conversar; sua respiração vai ser muito mais rápida que o normal, e os batimentos do seu coração vão aumentar muito). Você pode dividir a sua prática de atividade física em pequenos blocos de tempo ou fazer mais minutos por dia, de uma só vez. Faça como preferir e como puder! Ter um dia a dia fisicamente ativo é bastante seguro. Se você tiver alguma lesão ou sentir algum desconforto anormal, como alguma dor na região do peito ou tontura, procure a Unidade Básica de Saúde mais próxima de você.  ")
      } else if (feedbackExercise(dataExercise) === "string2") {
        setFeedbackExerciseText("Você nos contou que não pratica exercícios físicos. Você poderia planejar como incluí-los na sua semana. Esse é o primeiro passo e este hábito vai tornar sua vida mais saudável! O que é recomendado para adultos é praticar, por semana, pelo menos 150 min de atividades físicas moderadas (aquelas em que você consegue conversar com dificuldade enquanto se movimenta, mas não consegue cantar; sua respiração e os batimentos do coração vão aumentar moderadamente), ou então 75 min de atividades vigorosas (em que você não vai conseguir nem conversar; sua respiração vai ser muito mais rápida que o normal, e os batimentos do seu coração vão aumentar muito).  Você pode dividir a sua prática de atividade física em pequenos blocos de tempo ou fazer mais minutos por dia, de uma só vez. Faça como preferir e como puder! Ter um dia a dia fisicamente ativo é bastante seguro. Se você tiver alguma lesão ou sentir algum desconforto anormal, como alguma dor na região do peito ou tontura, procure a Unidade Básica de Saúde mais próxima de você.  ")
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


      if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "string1") {
        setFeedbackIMCText("IMC: < 18,5. Considerando o que você nos contou sobre seu peso e sua altura, conseguimos identificar que o seu peso está abaixo do ideal. Fique atento e procure um médico ou um nutricionista para uma avaliação. Um IMC abaixo de 18,5 é considerado baixo peso.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "string2") {
        setFeedbackIMCText("IMC: 18,5-24,9. Considerando o que você nos contou sobre seu peso e sua altura, conseguimos identificar que seu peso está na faixa normal. O IMC é considerado normal quando entre 18,5 e 24,9.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "string3") {
        setFeedbackIMCText("IMC: >25. Considerando o que você nos contou sobre seu peso e sua altura, conseguimos identificar que você está um pouco acima do peso ideal. Você pode procurar um médico ou um nutricionista para uma avaliação. A prática de exercício físico regular, alimentação saudável e rotina de sono também podem auxiliar você.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "string4") {
        setFeedbackIMCText("IMC: < 18,5. Considerando o que você nos contou sobre seu peso e sua altura, conseguimos identificar que o seu peso está abaixo do ideal. Na sua faixa etária, baixo peso pode estar associado com outros problemas de saúde. Fique atento e procure um médico ou um nutricionista para uma avaliação. Um IMC abaixo de 18,5 é considerado baixo peso.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "string5") {
        setFeedbackIMCText("IMC: 18,5-24,9. Considerando o que você nos contou sobre seu peso e sua altura, conseguimos identificar que seu peso está na faixa normal para a população adulta. No entanto, na sua faixa etária, os valores podem ser um pouco diferentes. Para uma avaliação nutricional, mais completa procure sua unidade de saúde ou médico de referência.")
      } else if (IMC(dataAge, dataSex, dataWeight, dataHeight) === "string6") {
        setFeedbackIMCText("IMC: >25. Considerando o que você nos contou sobre seu peso e sua altura, conseguimos identificar que você está um pouco acima do peso ideal para a população adulta. No entanto, na sua faixa etária, os valores podem ser um pouco diferentes. Para uma avaliação nutricional mais completa, procure sua unidade de saúde ou médico de referência. A prática de exercício físico regular, alimentação saudável e rotina de sono também podem auxiliar você.")
      } 
    }
  }

  async function getFeedbackLight() {
    const dbRef = await db.collection('users').doc(uid).get();
    const data = (await dbRef).data();
    if (data !== undefined) {
      const data2: any = data;
      
      const dataLight = data2.lightExposure;
      const dataLightReg = data2.lightReg;
      const dataLightFreq = data2.lightFreq;

      console.log('datas da luz: ' + dataLight );
      console.log('datas da luz: ' + dataLightReg );
      console.log('datas da luz: ' + dataLightFreq );

      if (feedbackLight(dataLight, dataLightReg, dataLightFreq) === "string1") {
        setFeedbackLightText("Você nos contou que não tem se exposto à luz natural. Você sabia que a exposição à luz natural traz benefícios para a saúde, bem-estar e sono? Se permanece muito em espaços internos, tente realizar suas atividades ou se sentar de frente para uma janela. Se puder estar em espaços externos, lembre que para se expor à luz natural não precisa estar exposto diretamente ao sol. Nesse caso, cuide com o sol nos horários mais nocivos à pele e use filtro solar. Dê preferência ao turno da manhã e tente ter exposição à luz natural todos os dias. Quanto mais melhor, mas trinta minutos já ajudam!")

      } else if (feedbackLight(dataLight, dataLightReg, dataLightFreq) === "string2") {
        setFeedbackLightText("Você nos contou que se expõe à luz natural, mas será que consegue melhorar esse hábito? A luz natural traz benefícios para a saúde, bem-estar e sono. Tente se expor todos os dias e dê preferência ao turno da manhã. Quanto mais melhor, mas trinta minutos já ajudam! Se permanece muito em espaços internos, tente realizar suas atividades ou se sentar de frente para uma janela. No caso de espaços externos, lembre que para se expor à luz natural não precisa estar exposto diretamente ao sol. Cuide com o sol nos horários mais nocivos à pele e use filtro solar.")
      }

     else if (feedbackLight(dataLight, dataLightReg, dataLightFreq) === "string3") {
      setFeedbackLightText("Você tem se exposto à luz natural e esse hábito é super importante para a sua saúde! Tente manter uma exposição diária e dê preferência ao turno da manhã.")
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
        setFeedbackFumoText("Você nos contou que fuma. Já pensou em parar de fumar? O SUS oferece tratamento gratuito para auxiliar você nessa! Procure uma unidade de saúde ou um profissional de saúde para receber mais orientações.")
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
      const datasd4 = data2.sd4;

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

      if (feedbackSD4(datasd4) === "string2") {
        setFeedbackSD4Text("Você nos contou que está seguindo as medidas de distanciamento social. Parabéns! Sabemos que pode estar mais difícil manter o distanciamento social ao longo do tempo, mas seu esforço salva vidas!")
      } else if (feedbackSD4(datasd4) === "string1") {
        setFeedbackSD4Text("Você nos contou que não está seguindo as medidas de distanciamento social na maior parte do tempo. Sabemos que está sendo cada dia mais difícil manter o distanciamento social, mas evitar aglomerações é essencial para impedir que o vírus se espalhe. Enquanto não vacinamos a maior parte da população, manter o distaciamento social continua sendo essencial para evitarmos nos contaminar e contaminar aos outros.")
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
        setFeedbackBemEstarText("Pelas suas respostas, percebemos que talvez você não esteja se sentindo bem emocionalmente. Caso você note que isso lhe incomoda ou que esteja causando prejuízos, afetando no seu trabalho, em atividades de casa e no convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). Caso você precise de ajuda com os pensamentos de se ferir ou de morte, ligue para o Centro de Valorização da Vida (CVV) ou procure o posto de saúde ou o Centro de Atenção Psicossocial (CAPS) ou o Serviço de Emergência. O número do CVV é 188 e o website é https://www.cvv.org.br/.")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string2") {
        setFeedbackBemEstarText("Pelas suas respostas, percebemos que talvez você não esteja se sentindo bem emocionalmente. Caso você note que isso lhe incomoda ou que esteja causando prejuízos, afetando no seu trabalho, em atividades de casa e no convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude).")
      } else if (bemEstar(dataSomaGad, dataSomaPHQ, dataPHQ09) === "string3") {
        setFeedbackBemEstarText("Pelas suas respostas, percebemos que talvez você esteja se sentindo um pouco incomodado com algumas questões. Caso você note que isso lhe incomoda ou que esteja causando prejuízos, afetando no seu trabalho, em atividades de casa e no convívio com outras pessoas, sugerimos que você busque a ajuda de um profissional da saúde (psicólogo, psiquiatra ou médico do posto de sáude). ")
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

      const dataSomaRmeq = data2.rmeq01 + data2.rmeq02 + data2.rmeq03 + data2.rmeq04 + data2.rmeq05;
      if (feedbackRMEQ(dataSomaRmeq) === "mat"){
        setFeedbackRMEQText("...matutino. Isso significa que você se sente melhor dormindo mais cedo. Pessoas muito matutinas podem forçar-se a dormir mais tarde e por menos tempo quando têm alguma atividade social à noite.")
      } else if (feedbackRMEQ(dataSomaRmeq) === "int"){
        setFeedbackRMEQText("...intermediário. Isso significa que você se sente bem com horários de sono nem tão cedo, nem tão tarde. A maioria das pessoas se encontra nesta categoria.")
      } 
      else if (feedbackRMEQ(dataSomaRmeq) === "ves"){
        setFeedbackRMEQText("...vespertino. Isso significa que você se sente bem acordando e dormindo mais tarde. Isso não quer dizer que você tem preguiça, já que essa é uma característica biológica sua.")
      } 

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
            setCronoImage('3')
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
        setFeedbackRegularidadesText("Vimos que seus horários alimentação e sono são regulares, o que é muito bom para sua saúde. Continue assim!")
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

      if (!(dataMeta1Definida === undefined)) {
        if (dataMeta1Definida === "sim") {
          setMeta1Definida(true)
        }

      }
      if (!(dataMeta2Definida === undefined)) {
        if (dataMeta2Definida === "sim") {
          setMeta2Definida(true)
        }

      }
      if (!(dataMeta3Definida === undefined)) {
        if (dataMeta3Definida === "sim") {
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
    const page1 = "<html> Você sabia que cada pessoa tem um relógio interno para organizar as funções do seu corpo? O cronotipo é uma característica que representa como o seu relógio está organizado em relação ao ambiente, principalmente em relação ao dia e a noite.  Considerando seus horários de sono, estimamos que seu cronotipo é... " + feedbackCronoText + "<br></html>";
    const page2 = "<br><html>Considerando os horários que você nos disse e, se não costuma acordar muito durante a noite, a duração do seu sono é... " + feedbackSonoText + feedbackSJLText + "<br></html>";
    const page3 = "<br><html> Ao responder nossas perguntas, você também nos contou um pouco sobre hábitos que podem estar relacionados a manutenção da sua saúde. Aqui vão algumas informações que podem ser úteis para você: " + feedbackRegularidadesText + "<br></html>";
    const page4 = "<br><html> Você nos contou um pouco sobre os seus hábitos. A partir disso, fazemos algumas sugestões abaixo." + feedbackLightText + feedbackHobbiesText + "<br></html>";
    const page5 = "<br><html>" + feedbackExerciseText + "Para saber mais sobre exercícios você pode acessar" + <a target="_blank" className={"link-text"} href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf">aqui</a> + "<br></html>";
    const page6 = "<br><html>" + feedbackIMCText + feedbackMedText + feedbackFumoText + feedbackAlcoolText + "<br></html>";
    const page7 = "<br><html>" + "Considerando o que você nos contou sobre contato social e que ainda estamos em pandemia, fizemos algumas sugestões." + feedbackCIText + feedbackCI2Text + "<br></html>";
    const page8 = "<br><html>" + "É sempre importante manter acompanhamento médico regularmente. De forma geral, quanto antes uma doença for identificada mais fácil e barato é seu tratamento, além de lhe causar menos transtornos. Faça suas revisões regulares e evite surpresas." + feedbackBemEstarText + "Para saber mais sobre a pandemia do COVID-19, bons hábitos, relógio biológico e sono acesse no Menu a página de Recomendações!" + "<br></html>"


    PDFGenerator.fromData(page1 + page2 + page3 + page4 + page5 + page6 + page7 + page8, options)
      .then((base64: any) => console.log(base64)) 
      .catch((err: any) => console.error(err))


  }

  function sharingSocial() {

    /* 
    1:
    alt: Mascote do Regente matutino, em laranja. No fundo da animação um degradê em laranja em ondas representando o dia.
        
    2:
    alt: Mascote do Regente vespertino, em azul escuro. No fundo da animação um degradê em  azul escuro, em ondas representando a noite.

    3:
    alt: Mascote do Regente intermediário, em azul claro. No fundo da animação um degradê em  azul, do claro para o escuro, em ondas representando a mistura entre o dia e a noite.
    */

    const imgs = ['https://imgur.com/wYsEA3S.png', 'https://imgur.com/fGm896F.png', 'https://imgur.com/kuCg9jd.png']
    const index = Number(cronoImage) - 1;

    SocialSharing.share('', '', imgs[index]);

  }

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
    console.log('crono image: ' + cronoImage);
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
              <img src={logo_regente} className={"logo"} alt={"Logo regente"} />
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

        {cronoImage === 'Carregando feedback...' ? <img className="img-home" src={home_gif} alt={"Animação em gif que começa com o mascote do Regente matutino, em laranja, pulando, seguido pelo mascote do Regente vespertino, em azul escuro, pulando e por fim o mascote do Regente intermediário, em azul claro, também pulando. No fundo da animação um degradê em laranja"} /> : null}
        {cronoImage === '1' ? <img src={home_matutino} className="img-home" alt={"Mascote do Regente matutino, em laranja. No fundo da animação um degradê em laranja em ondas representando o dia."} /> : null}
        {cronoImage === '2' ? <img src={home_intermed} className="img-home" alt={"Mascote do Regente vespertino, em azul escuro. No fundo da animação um degradê em  azul escuro, em ondas representando a noite."} /> : null}
        {cronoImage === '3' ? <img src={home_vespertino} className="img-home" alt={"Mascote do Regente intermediário, em azul claro. No fundo da animação um degradê em  azul, do claro para o escuro, em ondas representando a mistura entre o dia e a noite."} /> : null}




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
                        <IonButton disabled={moduloSaudeEnviado}  onClick={saude} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80" alt={"Mascote do Regente matutino sorrindo e pulando corda com uma testeira branca e vermelha."} /></IonButton>
                      </div>

                    </AccordionItemPanel>
                   
                    <AccordionItemPanel>
                      <div>
                        <IonButton  disabled={moduloHabitosEnviado || !moduloSaudeEnviado} onClick={habitos} color="orange" fill="solid" className="button-forms"><div className="texto-button">Sono e hábitos</div><img className="img-button" src={button_habitos} width="80" height="80" alt={"Mascote do Regente vespertino sentado de olhos fechados com uma toquinha para dormir na cabeça."} /></IonButton>
                      </div>
                    </AccordionItemPanel>
                    <AccordionItemPanel>
                      <div>
                        <IonButton  onClick={sonoSintomas} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80" alt={" Mascote do Regente matutino de olhos fechados dormindo segurando um ursinho de pelúcia."} /></IonButton>
                      </div>
                    </AccordionItemPanel>
                    <AccordionItemPanel>
                      <div className={"texto-compartilhar"}>
                        {firstPartText}
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
                            <img src={sono3} alt="mascote no celular" className={"img-sonoSintomas"} />
                            <br />
                            <p className='sono-sintomas-modalText'>As perguntas a seguir se referem ao seu comportamento de sono nos dias de trabalho e dias livres. Por favor, responda de acordo com o que ocorreu mais frequentemente nas duas últimas semanas. Considere também estudos e seus afazeres de casa. </p>
                            <p className='sono-sintomas-modalText'>Por favor, responda todas as questões a seguir utilizando a escala de 24h (por exemplo, 23:00 no lugar de 11:00). Se você é um estudante, preencha os dias de trabalho considerando os dias de aula.</p>
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


                                  <br />
                                </div>
                              </IonToolbar>




                              {cronoImage === '1' ? <p><img src={matutino_feliz} className="img-slides" alt={"Mascote do Regente matutino, em cor laranja, sorrindo."} /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_feliz} className="img-slides" alt={"Mascote do Regente intermediário, em cor azul claro, sorrindo."} /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_feliz} className="img-slides" alt={"Mascote do Regente vespertino, em cor azul escuro, sorrindo."} /></p> : null}


                              <div className={"arrows ion-no-padding"}>
                                <p>


                                  <IonButton className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                                </p>
                              </div>
                              <br />
                              <p className={"readMore-text"}>Você receberá informações e recomendações baseadas nas suas respostas. Tente ser o mais preciso possível! Caso receba alguma informação ou recomendação não adequada a você, entre em contato conosco pelo e-mail regenteapp@gmail.com.</p>
                              <p className={"readMore-text"}>Você já percebeu que nem todo mundo dorme e acorda naturalmente no mesmo horário? Isso é uma questão biológica. Não se sinta culpado se não conseguir acordar às 6h no seu melhor humor ou por não ter vontade de ficar acordado conversando até as 23h com seus amigos: não é só uma questão de hábito ou vontade. Cada pessoa tem seu próprio relógio biológico. Desse modo, há pessoas que se sentem mais ativas e dispostas mais cedo (os matutinos), e outras que se sentem assim mais tarde (os vespertinos). Chamamos de cronotipo as características individuais que explicam essas diferenças. Com base no que você nos contou, estimamos seu cronotipo:</p>
                              <p className={"readMore-text-var"}>{feedbackRMEQText}</p>
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


                              <p className={"readMore-text"}>A duração estimada do seu sono (sem considerar acordares à noite) é...</p>
                              <p className={"readMore-text-var"}>{feedbackSonoText}</p>
                              <p className={"readMore-text-var"}>{feedbackSJLText}</p>
                              <p className={"readMore-text"}>A necessidade de sono varia de pessoa para pessoa. Por isso, é importante que você identifique quantas horas precisa para se sentir bem. Se você dorme muito menos em dias de trabalho, por exemplo, este é um indicativo de que não está dormindo suficiente nestes dias. Dormir é imporante para a saúde e ajuda você a aprender e ter boa memória. Pense em como organizar seus horários de acordo com seu cronotipo e a sua necessidade de sono. Clique <a href={'/recomendacoes'}>aqui</a> para saber mais.</p>

                              <div className={"arrows ion-no-padding"}>
                                <p>
                                  <IonButton className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton>

                                  <IonButton className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                                </p>
                              </div>
                              <br />

                              {cronoImage === '1' ? <p><img src={matutino_cansado} className="img-slides" alt={" Mascote do Regente matutino de olhos fechados dormindo segurando um ursinho de pelúcia."} /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_cansado} className="img-slides" alt={"Mascote do Regente intermediário de olhos fechados dormindo segurando um ursinho de pelúcia."} /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_cansado} className="img-slides" alt={"Mascote do Regente vespertino de olhos fechados dormindo segurando um ursinho de pelúcia."} /></p> : null}



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
                              <p className={"readMore-text-var"}>{feedbackRegularidadesText}</p>
                              <div className={"arrows ion-no-padding"}>
                                <p>
                                  <IonButton className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton>

                                  <IonButton className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                                </p>
                              </div>
                              <br />
                              <p><img src={sono_feedback} className="img-slides" alt={"Ilustração de um relógio, em azul claro, com um hambúrguer no fundo."} /> </p>

                              <br />
                            </IonSlide>

                        

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>
                              <p className={"readMore-text"}>Você nos contou um pouco sobre os seus hábitos. A partir disso, fazemos algumas sugestões abaixo.</p>
                              <p className={"readMore-text-var"}>{feedbackLightText}</p>
                              
                              <div className={"arrows ion-no-padding"}>
                                <p>
                                  <IonButton className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton>

                                  <IonButton className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                                </p>
                              </div>
                              <br />
                              <p><img src={sol} className="img-slides" alt={"Ilustração do sol com a cara do mascote do Regente matutino, em cor laranja, sorrindo."} /> </p>

                              <br />
                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>


                              <p className={"readMore-text-var"}>{feedbackExerciseText}</p>
                              <p className={"readMore-text"}>Para saber mais sobre exercícios você pode acessar <a target="_blank" className={"link-text"} href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf">aqui</a>.</p>
                              <div className={"arrows ion-no-padding"}>
                                <p>
                                  <IonButton className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton>

                                  <IonButton className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                                </p>
                              </div>
                              <br />
                              {cronoImage === '1' ? <p><img src={matutino_corda} className="img-slides" alt={"Mascote do Regente matutino, em cor laranja, pulando corda com uma testeira branca e vermelha. Ele está feliz."} /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_corda} className="img-slides" alt={"Mascote do Regente intermediário, em cor azul claro, pulando corda com uma testeira branca e vermelha. Ele está feliz."} /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_corda} className="img-slides" alt={"Mascote do Regente vespertino, em cor azul escuro, pulando corda com uma testeira branca e vermelha. Ele está feliz."} /></p> : null}

                              <br />
                            </IonSlide>

                            <IonSlide>
                              <IonToolbar color="white">
                                <div id="header-items">

                                  <p className={"header-title"}>Resultados</p>
                                  <IonButton className={"button-header"} fill="clear" slot="clear" onClick={() => setShowModalFeedbackInicial(false)}>Fechar</IonButton>

                                </div>
                              </IonToolbar>

                             
                              <p className={"readMore-text-var"}>{feedbackIMCText}</p>
                              <p className={"readMore-text-var"}>{feedbackMedText}</p>
                              <p className={"readMore-text-var"}>{feedbackFumoText}</p>
                              <p className={"readMore-text-var"}>{feedbackAlcoolText}</p>
                              <div className={"arrows ion-no-padding"}>
                                <p>
                                  <IonButton className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton>

                                  <IonButton className={"arrow-forward"} onClick={handleNext}><IonIcon src={arrowForwardOutline}></IonIcon></IonButton>
                                </p>
                              </div>
                              <br />
                              <p><img src={imc} className="img-slides" alt={"Lista de afazeres com três itens. Os 3 primeiros itens estão marcados como feitos."} /> </p>
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

                              <p className={"readMore-text-var"}>{feedbackBemEstarText}</p>
                              <p className={"readMore-text"}>Para saber mais sobre a pandemia do COVID-19, bons hábitos, relógio biológico e sono acesse no Menu a página de Recomendações!</p>
                              <div className={"arrows ion-no-padding"}>
                                <p>
                                  <IonButton className={"arrow-back"} onClick={handlePrevious}><IonIcon src={arrowBackOutline}></IonIcon></IonButton>


                                </p>
                              </div>
                              <br />
                              <br />
                              <IonButton onClick={createPDF}>gerar pdf</IonButton>

                              {cronoImage === '1' ? <p><img src={matutino_wave} className="img-slides" alt={"Mascote do Regente matutino, em cor laranja, sorrindo e abanando."} /> </p> : null}
                              {cronoImage === '2' ? <p><img src={intermed_wave} className="img-slides" alt={"Mascote do Regente intermediário, em cor azul claro, sorrindo e abanando."} /></p> : null}
                              {cronoImage === '3' ? <p><img src={vespertino_wave} className="img-slides" alt={" Mascote do Regente intermediário, em cor azul escuro, sorrindo e abanando."} /></p> : null}


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
                      <IonButton disabled={moduloSaudePostEnviado || !minDaysPart1}  onClick={saudePost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80" alt={"Mascote do Regente matutino sorrindo e pulando corda com uma testeira branca e vermelha."} /></IonButton>
                    </div>
                  </AccordionItemPanel>
                 
                  <AccordionItemPanel>

                    <div>
                      <IonButton disabled={moduloHabitosPostEnviado || !moduloSaudePostEnviado} onClick={habitosPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Sono e hábitos </div><img className="img-button" src={button_habitos} width="80" height="80" alt={"Mascote do Regente vespertino sentado de olhos fechados com uma toquinha para dormir na cabeça."} /></IonButton>
                    </div>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloSonoSintomasPostEnviado || !moduloHabitosPostEnviado}  onClick={sonosintomasPost} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80" alt={"Mascote do Regente matutino de olhos fechados dormindo segurando um ursinho de pelúcia."} /></IonButton>
                    </div>

                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div className={"texto-compartilhar"}>
                      Finalize a segunda etapa e escolha mais metas para acompanhar!
                    </div>
                    <div>
                      <IonButton disabled={!moduloSonoSintomasPostEnviado || (moduloSonoSintomasPostEnviado && minDaysPart2) || meta2Definida} onClick={toAderenciaPost} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={statsChartOutline} /><div>Acompanhe seu progresso</div></IonButton>
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
                      <IonButton  disabled={moduloSaudeFinalEnviado || !minDaysPart2} onClick={saudeFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Saúde</div><img className="img-button" src={button_saude} width="80" height="80" alt={"Mascote do Regente matutino sorrindo e pulando corda com uma testeira branca e vermelha."} /></IonButton>
                    </div>
                  </AccordionItemPanel>


                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloHabitosFinalEnviado || !moduloSaudeFinalEnviado} onClick={habitosFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Sono e hábitos</div><img className="img-button" src={button_habitos} width="80" height="80" alt={"Mascote do Regente vespertino sentado de olhos fechados com uma toquinha para dormir na cabeça."} /></IonButton>
                    </div>
                  </AccordionItemPanel>

                  <AccordionItemPanel>
                    <div>
                      <IonButton disabled={moduloSonoSintomasFinalEnviado || !moduloHabitosFinalEnviado}  onClick={sonoSintomasFinal} color="orange" fill="solid" className="button-forms"><div className="texto-button">Bem-estar</div><img className="img-button" src={button_sono} width="80" height="80" alt={"Mascote do Regente matutino de olhos fechados dormindo segurando um ursinho de pelúcia."} /></IonButton>
                    </div>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <div className={"texto-compartilhar"}>
                      Finalize a última etapa e escolha mais metas para acompanhar!
                    </div>
                    <div>
                      <IonButton disabled={!moduloSonoSintomasFinalEnviado || meta3Definida} onClick={toAderenciaFinal} color="orange" fill="solid" shape="round" size="small"><IonIcon slot="start" icon={statsChartOutline} /><div>Acompanhe seu progresso</div></IonButton>
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