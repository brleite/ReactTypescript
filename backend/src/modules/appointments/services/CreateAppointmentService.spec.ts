import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

// Agrupa testes por categoria
describe('CreateAppointment', () => {
  // Alternativa ao uso do test();
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12234234',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12234234');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '12234234',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '12234234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
