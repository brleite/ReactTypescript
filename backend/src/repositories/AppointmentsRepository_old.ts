import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    /*
    Alterado para que o eslint pare de dar erro. Será utilizada a versão com typeorm
    */

    const appointment = new Appointment(/* { provider, date } */);
    appointment.date = date;
    appointment.provider = provider;

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
