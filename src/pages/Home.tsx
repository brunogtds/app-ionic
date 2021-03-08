import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from '../../src/pages/ExplanationSlides';

import {auth} from '../../src/firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';


import {AuthCheck} from 'reactfire';


const Tab1: React.FC = () => {

  const history= useHistory();
  const [loader, setLoader]= useState<boolean>(false);
  const {data: user}= useUser();

  
  async function Logout(){
    setLoader(true)
    const res=  await logoutUser();

    if (res === true){
      toast('Logout efetuado!')
      history.replace('/login');
      setLoader(false); 
      
    }
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Início</IonTitle>
            <div id="header-items">
              <AuthCheck fallback={<IonText>Bem vindo!</IonText>}><IonText>Bem vindo {user.email}!</IonText></AuthCheck>
             
            </div>
          
        </IonToolbar>
        <IonButton onClick={Logout} className={"logout-button"}>Sair</IonButton>
       
      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-text-center">

        <IonGrid>

        
       
       {/* <ExploreContainer name="Tab 1 page" /> */}
       <IonCard>
         
       <IonCardTitle>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</IonCardTitle> 

        <IonItem>
    
       
        <div className="ion-text-wrap">
        

        <p>Caro participante, </p>
 
        <p>Agradecemos a sua disposição em nos ajudar a entender as consequências do <b>distanciamento social</b>. 
          Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. Além disso, poderemos avaliar quais são as recomendações mais 
           importantes para quem está passando por tal situação. </p>
          
           <p>Antes de começar a responder, na próxima página, você poderá ler mais sobre nosso estudo. 
           Caso desista de participar, basta fechar o navegador ou aplicativo a qualquer momento. </p>

           <p>Muito obrigado!</p>
        </div>
        
        </IonItem>
        
        <IonItem>
        <div className={"ion-text-justify red-text"}>
          <p><b><span className={"red-text"}>Antes de começarmos, você sabe o que é distanciamento social? Confira a explicação <a href={"/ExplanationSlides"}>aqui</a> e depois clique na aba "Formulário" para iniciar a pesquisa.</span></b></p>
        </div>
        </IonItem>

        
      
        </IonCard>

       {/*
        <div>
          <img src={distanciamentoExp}/>
       </div> */}


        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
