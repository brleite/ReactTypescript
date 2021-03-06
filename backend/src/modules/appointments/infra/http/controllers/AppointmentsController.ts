import { Request, Response } from 'express';
// import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
/* import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'; */
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    /* const appointmentsRepository = new AppointmentsRepository(); */

    const user_id = request.user.id;

    const { provider_id, date } = request.body;

    // Não é mais necessário pois está sendo convertido para Joi.date na validação
    // const parsedDate = parseISO(date);

    /* const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  ); */

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      // date: parsedDate,
      date,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
