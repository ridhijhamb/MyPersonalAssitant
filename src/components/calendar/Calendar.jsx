import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

export default function Calendar() {
  const EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2019, 0, 11, 6, 30),
        StartTime: new Date(2019, 0, 11, 4, 0),
      },
    ],
  };

  return (
    <div>
      {/* <ButtonComponent id='add' title='Add' ref={t => buttonObj = t} onClick={onAddClick}>Add</ButtonComponent> */}
      <ScheduleComponent eventSettings={EventSettingsModel} currentView="Month">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}
