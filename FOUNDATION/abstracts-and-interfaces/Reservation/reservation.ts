// Create a Reservation class by implementing all the features as required by the interface.
// Booking# 1WBA3OMU for THU
import { DowCode } from "./dow";

interface Reservation extends DowCode {
  getDowBooking(): string;
  getCodeBooking(): string;
  printStatus(): string;
}
