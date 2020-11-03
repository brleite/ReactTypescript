import CreateAppointmentService from './CreateAppointmentService';

// Agrupa testes por categoria
describe('CreateAppointment', () => {
  // Alternativa ao uso do test();
  it('should be able to create a new appointment', () => {
    expect(1 + 2).toBe(3);
  });

  /* it('should not be able to create two appointments on the same time', () => {
    expect(1 + 2).toBe(3);
  }); */
});
