import { Error } from "mongoose";

const jwt = require('jsonwebtoken');

interface Props{
    uid:string,
    name:string
}

const generarJWT  = ({ uid, name }:Props) =>{

    return new Promise((resolve,reject)=>{

        const payload = {uid,name};

        jwt.sign(payload, process.env.SECRET_JWT_SEED,{
            expiresIn:'2h'
        },(err:Error,token:string) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);
        })


    })


}



module.exports = {
    generarJWT
}

