import { NextApiRequest, NextApiResponse } from 'next'
import MailService from '@sendgrid/mail'
MailService.setApiKey(process.env.NEXT_EMAIL_KEY)

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, content } = req.body
    if (!email || !name || !content) {
      return res.status(400).json({ message: 'Fill all fields' })
    }

    const msg = {
      to: 'admin@sklep-artesania.pl',
      from: 'admin@sklep-artesania.pl',
      subject: `Nowa wiadomość od ${name}-${email}`,
      text: content,
    }
    try {
      await MailService.send(msg)

      return res.status(200).json({ message: 'Email wysłany pomyślnie' })
    } catch (error) {
      return res.status(400).json({ message: 'Wystąpił błąd' })
    }
  } else {
    return res.status(404).json({ message: 'Method not allowed' })
  }
}
