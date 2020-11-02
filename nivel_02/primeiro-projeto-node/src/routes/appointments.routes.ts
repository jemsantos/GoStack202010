import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

/* isso será substituido pela classe Appointment */
/* interface Appointment {
  id: string;
  provider: string;
  date: Date;
} */

const appointments: Appointment[] = [];

// POST http://localhost:3333/appointmensts
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  /* vamos passar a utilizar a classe Appointment */
  /* const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  }; */
  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
