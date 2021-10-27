// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config();
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.get(`${process.env?.NEXT_PUBLIC_URL_FOOTBAL}/?action=get_countries&APIkey=${process.env?.NEXT_PUBLIC_API_KEY_FOOTBAL}`);
  return res.status(200).json(data);
}
