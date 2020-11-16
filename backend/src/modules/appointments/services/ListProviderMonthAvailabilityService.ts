import { injectable, inject } from 'tsyringe';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequestDTO {
  provider_id: string;
  month: number;
  year: number;
}

/**
 * A interface não permite o uso de Array. Por conta disso, estou usando type.
 * Preciso que seja um Array para que eu possa passar somente IResponseDTO na Promise de retorno.
 */
type IResponseDTO = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
  }: IRequestDTO): Promise<IResponseDTO> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
      {
        provider_id,
        year,
        month,
      },
    );

    return appointments;
  }
}

export default ListProviderMonthAvailabilityService;
