import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import type { Event } from "react-big-calendar";
import { formatDateAndTime } from "src/utils/formats";

type EventsGroupProps = {
  events: Event[];
  selectedEvent?: string;
};

const EventsGroup: FC<EventsGroupProps> = (props) => {
  const { events, selectedEvent } = props;
  return (
    <div>
      {events.map((event) => {
        return (
          <Accordion
            key={event.id}
            defaultExpanded={event.id === selectedEvent}
          >
            <AccordionSummary
              expandIcon={<Icon icon="simple-line-icons:arrow-down" />}
              aria-controls={`${event.id}-panel${event.id}-content`}
              id={`${event.id}-panel${event.id}-header`}
            >
              <Typography component="span">
                {event.start && formatDateAndTime(event.start, "HH:mm aa")} -{" "}
                {event.end && formatDateAndTime(event.end, "HH:mm aa")}{" "}
                {event.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{event.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default EventsGroup;
