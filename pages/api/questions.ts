import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { token, question, answear } = req.body;

    if (token === process.env.TOKEN) {
      try {
        await prisma.question.create({ data: { question, answear } });
        return res.status(201).end();
      } catch (e) {
        console.log(e)
        return res.status(400).end();
      }
    }

    return res.status(403).end();
  }

  res.status(404).end();
};

export default handler;
