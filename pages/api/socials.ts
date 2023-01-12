import {socials} from "./data/socials";
import { NextApiRequest, NextApiResponse} from 'next'
import {ISocials} from "../index";

type Data = ISocials[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>){
    if(req.method === 'GET'){
        res.status(200).json(socials)
    }
}