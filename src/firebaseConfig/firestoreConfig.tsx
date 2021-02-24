
import {useUser} from 'reactfire';
import firebase from 'firebase';

/*
const {data: user}= useUser();

export async function createDatabaseQuest1(){
    

    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            name: "test", }, { merge: true }); 
    }
}

export async function updateUserDataQuest1(data: any){
   
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            idade: Number(data["age"]),
            sexo: String(data["sex"]),
        }, {merge: true})
    }

    console.log(JSON.stringify(data, null, 2));
}*/