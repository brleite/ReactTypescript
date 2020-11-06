import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    console.log('contructor');
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    nodemailer.createTestAccount().then(account => {
      console.log('account');
      console.log(account);

      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure, // true for 465, false for other ports
        auth: {
          user: account.user, // generated ethereal user
          pass: account.pass, // generated ethereal password
        },
      });

      this.client = transporter;
      console.log('fim create transport');
    });

    /* nodemailer.createTestAccount(async (err, account) => {
      console.log('createTestAccount');
      console.log(account);
      console.log(err);

      // create reusable transporter object using the default SMTP transport
      const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.user, // generated ethereal user
          pass: account.pass, // generated ethereal password
        },
      });

      console.log('transporter');

      console.log(transporter);

      this.client = transporter;
    }); */
  }

  public async sendMail(to: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      from: 'Equipe GoBarber <equipe@gobarber.com>',
      to,
      subject: 'Recuperação de senha',
      text: body,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
