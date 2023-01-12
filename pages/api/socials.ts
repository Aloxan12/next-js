import {socials} from "./data/socials";
import { NextApiRequest, NextApiResponse} from 'next'
import {ISocials} from "../index";

type Data = ISocials[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>){
    res.status(200).json(socials)
}