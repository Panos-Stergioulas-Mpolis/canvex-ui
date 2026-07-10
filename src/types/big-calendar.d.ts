import { type Event as EventType } from "react-big-calendar";

declare module "react-big-calendar" {
  export interface Event extends EventType {
    id?: string;
    description?: string;
  }
}
