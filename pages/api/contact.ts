// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter, mailOptions } from '../../config/nodemailer';




const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  if(req.method === 'POST'){
    const data = req.body;
    if(!data){
      res.status(400).json({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test string",
        html: `<h1>Customer Information</h1><p>${JSON.stringify(data)}</p>`
      })

      return res.status(200).json({success: true})
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error })
    }
  }

  return res.status(400).json({ message: 'Bad request' })
}

export default handler;
