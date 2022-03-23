import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonLoading, IonRadioGroup, IonRadio, IonModal } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';
import './Cadastro.css';

import { useForm, Controller } from "react-hook-form";

import { useState } from 'react';


import { IonProgressBar } from '@ionic/react';

import { Redirect, useHistory } from 'react-router-dom'

import { toast } from '../toast';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications';

//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

//import ModuloComponents from "../ModulosComponent"
import { cadastroUser, loginAnonimo } from '../firebaseConfig/firebaseConfig';
import { at, trailSignOutline } from "ionicons/icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";

const Perfil_Cadastro2 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const [dataUser, setData] = useState()

    const { control, watch, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    }
    );

    const [showOptions, setShowOptions] = React.useState(false);

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    const [showModalRec, setShowModalRec] = useState(false);

    const { data: user } = useUser();

    const [errorLogin, setErrorLogin] = useState(false);


    function loginNotification() {
        LocalNotifications.schedule([{
            id: 1,
            title: 'ReGente',
            text: 'Bem-vindo ao aplicativo Regente! A partir de agora você pode responder ao questionário do estudo e receber nossas recomendações.',
        }]);
    }


    function secondPartNotification() {
        LocalNotifications.schedule([{
            id: 2,
            title: 'ReGente',
            text: 'Já faz 14 dias que você se cadastrou no aplicativo! Entre novamente para continuar respondendo os questionários.',
            trigger: { at: new Date(Date.now() + 15000) }
        }]);
    }

    function thirdPartNotification() {
        LocalNotifications.schedule([{
            id: 3,
            title: 'ReGente',
            text: 'Já faz 28 dias que você se cadastrou no aplicativo! Entre novamente para continuar respondendo os questionários.',
            trigger: { at: new Date(Date.now() + 30000) }
        }]);
    }

    // function notification() {
    //     LocalNotifications.schedule([{
    //     id:2,
    //     title: 'ReGente',
    //     text: 'bla bla bla',
    //     trigger: { in: 14, unit: "day"}
    //     }]);
    // }


    async function Cadastro() {

        console.log('VALOR PROPS' + props.state.loginAnonimo);


        if (props.state.email === '' || props.state.senha === '' || props.state.csenha === '') {
            return toast('Email e senha são requeridos')

        }

        else if (props.state.senha != props.state.csenha) {
            return toast('As senhas não são iguais')
        }


        if (props.state.loginAnonimo === true) {
            // const res= await loginAnonimo 
            console.log('entrou como anonimo')
            console.log('testando');

            const res = await loginAnonimo()

            if (!res) {
                setErrorLogin(true)
                console.log('erro no login');
            }
            else {
                console.log('cadastro anonimo feito')
                toast('Cadastro feito com sucesso')
                loginNotification()
                secondPartNotification()
                thirdPartNotification()
                history.replace('/tab1');
                createDatabaseQuest1(res.user?.uid)

            }


            //   const auth= firebase.auth();
            //  
            //  const uid = user.uid;
            //   createDatabaseQuest1(uid)
        }


        const res = await cadastroUser(props.state.email, props.state.senha)

        if (res) {
            toast('Cadastro feito com sucesso')
            res.user?.sendEmailVerification();
            history.replace('/tab1');
            loginNotification()
            secondPartNotification()
            thirdPartNotification()
            createDatabaseQuest1(res.user?.uid)
            //history.replace('/tab1');
        }


        console.log('cadastro feito');

    }


    async function createDatabaseQuest1(uid: any) {

        await firebase.firestore().collection('users').doc(uid).set({
            uid: uid,
        }, { merge: true });

        await firebase.firestore().collection('usersPost').doc(uid).set({
            uid: uid,
        }, { merge: true });

        await firebase.firestore().collection('usersFinal').doc(uid).set({
            uid: uid,
        }, { merge: true });

        await firebase.firestore().collection('metas').doc(uid).set({
            uid: uid, metaDaily: Number(0), meta02Daily: Number(0), meta03Daily: Number(0)
        }, { merge: true });


        console.log('firestore criado');
        setData(dataUser);
        setLoader(true);

        updateUserDataQuest1(uid, dataUser);
    }


    function updateUserDataQuest1(uid: any, dataUser: any) {


        firebase.firestore().collection('users').doc(uid).set({
            goodSleep: String(props.state.goodSleep),
            age: Number(props.state.age), //STEP 1
            sex: String(props.state.sex),
            dateMenstruation: String(props.state.dateMenstruation),
            weight: Number(props.state.weight),
            height: Number(props.state.height),
            BRstate: String(props.state.BRstate),

            currentOccupation: String(props.state.currentOccupation),
            schooling: String(props.state.schooling),
            married: String(props.state.married),
            depend: Number(props.state.depend),

            area: String(props.state.area),

            m1q1: Boolean(props.state.m1q1),
            m1q2: Boolean(props.state.m1q2),
            m1q3: Boolean(props.state.m1q3),
            m1q4: Boolean(props.state.m1q4),
            m1q5: Boolean(props.state.m1q5),
            m1q6: Boolean(props.state.m1q6),
            m1q7: Boolean(props.state.m1q7),

            m2q1: Boolean(props.state.m2q1),
            m2q2: Boolean(props.state.m2q2),
            m2q3: Boolean(props.state.m2q3),
            m2q4: Boolean(props.state.m2q4),
            m2q5: Boolean(props.state.m2q5),
            m2q6: Boolean(props.state.m2q6),
            m2q7: Boolean(props.state.m2q7),

            m3q1: Boolean(props.state.m3q1),
            m3q2: Boolean(props.state.m3q2),
            m3q3: Boolean(props.state.m3q3),
            m3q4: Boolean(props.state.m3q4),
            m3q5: Boolean(props.state.m3q5),
            m3q6: Boolean(props.state.m3q6),
            m3q7: Boolean(props.state.m3q7),
            m3q8: Boolean(props.state.m3q8),
            m3q9: Boolean(props.state.m3q9),
            m3q10: Boolean(props.state.m3q10),
            m3q11: Boolean(props.state.m3q11),
            m3q12: Boolean(props.state.m3q12),

        }, { merge: true })

        console.log("valor no state na submissao: " + props.state.m1q1);

        toast('Formulário submetido com sucesso!', 2000);
        console.log('firestore updatado');

    }


    const onSubmit = (data: any) => {

        Cadastro();
        setShowModalRec(false);
        // createDatabaseQuest1();


        // voltaModulos();

            //(document.getElementById('button-forms') as HTMLInputElement).disabled = true;

    }

    return (
        <IonContent fullscreen color="background">
            <div>


                <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>

                    <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                    <IonLabel className="questions"> Escolaridade:</IonLabel>



                    <IonItem lines="none">

                        <Controller render={({ onChange }) => (

                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={props.getState("schooling", "")} id="schooling" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);

                                if (e.detail.value != undefined)
                                    props.setState('schooling', e.detail.value)
                            }}>
                                <IonSelectOption>Ensino Fundamental Incompleto</IonSelectOption>
                                <IonSelectOption>Ensino Fundamental Completo</IonSelectOption>
                                <IonSelectOption>Ensino Médio Incompleto</IonSelectOption>
                                <IonSelectOption>Ensino Médio Completo</IonSelectOption>
                                <IonSelectOption>Ensino Superior Incompleto</IonSelectOption>
                                <IonSelectOption>Ensino Superior Completo</IonSelectOption>
                                <IonSelectOption>Mestrado</IonSelectOption>
                                <IonSelectOption>Doutorado</IonSelectOption>
                            </IonSelect>

                        )}
                            control={control}
                            name="schooling"
                            rules={{ required: true }}

                        />

                    </IonItem>

                    <IonLabel className="questions">Estado Civil:</IonLabel>



                    <IonItem lines="none">


                        <Controller render={({ onChange }) => (
                            <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={props.getState("married", "")} id="married" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined)
                                    props.setState('married', e.detail.value)
                            }}>
                                <IonSelectOption>Solteiro(a)</IonSelectOption>
                                <IonSelectOption>Casado(a)</IonSelectOption>
                                <IonSelectOption>Divorciado(a)</IonSelectOption>
                                <IonSelectOption>Viúvo(a)</IonSelectOption>

                            </IonSelect>
                        )}
                            control={control}
                            name="married"
                            rules={{ required: true }}
                        />
                    </IonItem>


                    <IonLabel className="ion-text-wrap questions">Número de pessoas dependentes:</IonLabel>
                    {errors.depend && <IonText color="danger">Campo obrigatório.</IonText>}
                    <IonItem lines="none">


                        <Controller render={({ onChange }) => (
                            <IonInput placeholder={"Digite o número"} type="number" id="depend" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined)
                                    props.setState('depend', e.detail.value)
                            }} />
                        )}
                            name="depend"
                            control={control}
                            rules={{ required: true }} />

                    </IonItem>




                    <IonLabel className="questions">Moro em uma área: </IonLabel>
                    {errors.area && <IonText color="danger">Campo obrigatório.</IonText>}
                    <IonItem className={"ion-no-padding"} lines="none">


                        <Controller render={({ onChange }) => (
                            <IonList>
                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('area', e.detail.value)
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Rural</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="orange" value="rural"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Urbana</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="orange" value="urbana"></IonRadio>
                                    </IonItem>


                                </IonRadioGroup>

                            </IonList>
                        )}
                            control={control}
                            name={"area"}
                            rules={{ required: true }}
                        />
                    </IonItem>

                    <IonModal isOpen={showModalRec} showBackdrop={true}

                        onDidDismiss={() => setShowModalRec(false)}>
                        <IonContent color="background">

                            <div className="ion-padding texto-default">

                                <IonLabel className="questions">Antes de prosseguir, gostaríamos de saber mais sobre alguns de seus hábitos antes de utilizar o app...</IonLabel>
                                <IonLabel className="questions">Sobre a pandemia do Covid-19:</IonLabel>

                                <IonItem className={"ion-no-padding"} >


                                    <Controller render={({ onChange }) => (

                                        <IonList className={"ion-no-padding"}>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q1", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m1q1', true)
                                                    } else {
                                                        props.setState('m1q1', false)
                                                    }

                                                }}></IonCheckbox>
                                                <IonLabel >Evitei ao máximo sair de casa. Quando foi necessário sair, evitei permanecer em espaços fechados ou mal ventilados.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q2", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m1q2', true)
                                                    } else {
                                                        props.setState('m1q2', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Usei sempre máscara de proteção.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q3", false)} onIonChange={(e) => {
                                                    if (e.detail.checked) {
                                                        props.setState('m1q3', true)
                                                    } else {
                                                        props.setState('m1q3', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Lavei as mãos regularmente com água e sabão ou use álcool 70%.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q4", false)} onIonChange={(e) => {
                                                    if (e.detail.checked) {
                                                        props.setState('m1q4', true)
                                                    } else {
                                                        props.setState('m1q4', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Procurei manter no mínimo 2 metros de distância das pessoas.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q5", false)} onIonChange={(e) => {
                                                    if (e.detail.checked) {
                                                        props.setState('m1q5', true)
                                                    } else {
                                                        props.setState('m1q5', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Evitei tocar no rosto. Ao tossir ou espirrar, cubri a boca e o nariz com a parte interna do cotovelo ou com um lenço descartável. </IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q6", false)} onIonChange={(e) => {
                                                    if (e.detail.checked) {
                                                        props.setState('m1q6', true)
                                                    } else {
                                                        props.setState('m1q6', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Fiquei em casa quando não me se senti bem.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m1q7", false)} onIonChange={(e) => {
                                                    if (e.detail.checked) {
                                                        props.setState('m1q7', true)
                                                    } else {
                                                        props.setState('m1q7', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Quando tive a oportunidade, me vacinei.</IonLabel>
                                            </IonItem>

                                        </IonList>
                                    )}

                                        control={control}
                                        // rules={{required: true}}
                                        name={"m1"}

                                    />
                                    <div>
                                        {/*errors.disorders && <IonText color="danger">Campo obrigatório.</IonText>*/}
                                    </div>

                                </IonItem>

                                <IonLabel className="questions">Sobre bons hábitos para se manter saudável:</IonLabel>

                                <IonItem className={"ion-no-padding"}>


                                    <Controller render={({ onChange }) => (

                                        <IonList className={"ion-no-padding"}>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q1", false)} onIonChange={(e) => {

                                                     if (e.detail.checked) {
                                                        props.setState('m2q1', true)
                                                    } else {
                                                        props.setState('m2q1', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Não fiquei ouvindo notícias o tempo todo.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q2", false)} onIonChange={(e) => {

                                                      if (e.detail.checked) {
                                                        props.setState('m2q2', true)
                                                    } else {
                                                        props.setState('m2q2', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Usei técnicas para relaxar o corpo e a mente.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q3", false)} onIonChange={(e) => {

                                                      if (e.detail.checked) {
                                                        props.setState('m2q3', true)
                                                    } else {
                                                        props.setState('m2q3', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Reservei um tempo para atividades de lazer.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q4", false)} onIonChange={(e) => {

                                                    
                                                      if (e.detail.checked) {
                                                        props.setState('m2q4', true)
                                                    } else {
                                                        props.setState('m2q4', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Pratiquei atividades físicas em casa.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q5", false)} onIonChange={(e) => {

                                                    
                                                      if (e.detail.checked) {
                                                        props.setState('m2q5', true)
                                                    } else {
                                                        props.setState('m2q5', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Cuidei da minha postura corporal.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q6", false)} onIonChange={(e) => {

                                                      if (e.detail.checked) {
                                                        props.setState('m2q6', true)
                                                    } else {
                                                        props.setState('m2q6', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Mantive uma boa higiene bucal.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m2q7", false)} onIonChange={(e) => {

                                                   if (e.detail.checked) {
                                                        props.setState('m2q7', true)
                                                    } else {
                                                        props.setState('m2q7', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Cuidei da minha alimentação.</IonLabel>
                                            </IonItem>


                                        </IonList>
                                    )}

                                        control={control}
                                        // rules={{required: true}}
                                        name={"m2"}

                                    />
                                    <div>
                                        {/*errors.disorders && <IonText color="danger">Campo obrigatório.</IonText>*/}
                                    </div>

                                </IonItem>

                                <IonLabel className="questions">Sobre seu relógio biológico e sono:</IonLabel>


                                <IonItem className={"ion-no-padding"}>


                                    <Controller render={({ onChange }) => (

                                        <IonList className={"ion-no-padding"}>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q1", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q1', true)
                                                    } else {
                                                        props.setState('m3q1', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Expus-me à luz natural durante o dia.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q2", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q2', true)
                                                    } else {
                                                        props.setState('m3q2', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Apaguei a luz à noite.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q3", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q3', true)
                                                    } else {
                                                        props.setState('m3q3', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Reduzi o tempo excessivo na frente das telas, em especial à noite.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q4", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q4', true)
                                                    } else {
                                                        props.setState('m3q4', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Usei apps que deixem a tela mais "`"amarelada"`" à noite.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q5", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q5', true)
                                                    } else {
                                                        props.setState('m3q5', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Organizei minha rotina pensando em meu cronotipo.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q6", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q6', true)
                                                    } else {
                                                        props.setState('m3q6', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Mantive horários regulares.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q7", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q7', true)
                                                    } else {
                                                        props.setState('m3q7', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Evitei cochilos prolongados.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q8", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q8', true)
                                                    } else {
                                                        props.setState('m3q8', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Na hora de deitar, evitei ficar pensando nos problemas.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q9", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q9', true)
                                                    } else {
                                                        props.setState('m3q9', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Tornei meu quarto um ambiente que facilita o sono.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q10", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q10', true)
                                                    } else {
                                                        props.setState('m3q10', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Evitei alimentos pesados muito próximo do horário de dormir.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q11", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q11', true)
                                                    } else {
                                                        props.setState('m3q11', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Evitei ingerir cafeína ou álcool perto da hora de dormir.</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none"  >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("m3q12", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('m3q12', true)
                                                    } else {
                                                        props.setState('m3q12', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >Planejei os horários dos meus exercícios considerando meu sono.</IonLabel>
                                            </IonItem>

                                        </IonList>
                                    )}

                                        control={control}
                                        // rules={{required: true}}
                                        name={"m3"}

                                    />
                                    <div>
                                        {/*errors.disorders && <IonText color="danger">Campo obrigatório.</IonText>*/}
                                    </div>

                                </IonItem>

                                <div className="ion-text-center">
                                    <IonButton className={"btn-ModalCadastro"} color="white" onClick={onSubmit}>OK, cadastrar!</IonButton>
                                </div>

                                <br />


                            </div>




                        </IonContent>

                    </IonModal>



                    <div id="progress-bar-div" >
                        <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                    </div>

                    <IonButton disabled={props.isFirst()} onClick={props.prev} color="orange" className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                    <IonButton disabled={formState.isValid === false} color="orange" onClick={() => setShowModalRec(true)} className={"btnProximo"} size="default" shape="round" fill="outline">Próximo</IonButton>


                </form>

            </div>
        </IonContent>
    )


}

export default Perfil_Cadastro2;