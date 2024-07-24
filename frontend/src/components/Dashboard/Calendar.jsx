import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { useRef, useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Field, Fieldset, Input, Label } from "@headlessui/react";

import "./Calendar.css";

import useDeviceStore from "../../store/deviceStore";
import useTodoStore from "../../store/todoStore";
import TodoModal from "./Calendar/TodoModal";
import DateRangePicker from "./Calendar/DateRangePicker";

import { validateEvent } from "../../util/func";

const Calendar = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  // 타입별로 설정+ 필터링된 이벤트
  const [eventsTypeFilter, setEventsTypeFilter] = useState("all");
  const calendarRef = useRef(null);
  const [state, setState] = useState({});
  const [isOpen, setIsOpen] = useState(false); // 모달오픈여부

  // Todo Item Info
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFinish, setIsFinish] = useState(false);
  const [important, setImportant] = useState("하"); // 상 중 하
  const [type, setType] = useState("WORK"); // WORK, REST
  // Todo Item Info 끝

  const isMobile = useDeviceStore((state) => state.isMobile);

  const { events, addEvent, fetchEvents, updateEvent, deleteEvent } =
    useTodoStore();
  // 최초 접속 시 이벤트목록 받아오기
  useEffect(() => {
    (async () => {
      await fetchEvents();
    })();
  }, [fetchEvents]);

  // 유효성 검증 없어도 될 듯?
  useEffect(() => {
    // type 있으면 쓰고 아님 말고
    let filtered = null;
    switch (eventsTypeFilter) {
      // case "work":
      //   filtered = events?.filter((el) => el.isWork);
      //   break;
      case "all":
      default:
        filtered = events;
        break;
    }

    // console.log(filtered);
    if (Array.isArray(filtered)) {
      setFilteredEvents(filtered);
    }
  }, [events, eventsTypeFilter]);

  const handleDateSelect = (selectInfo) => {
    if (
      selectInfo.view.type === "timeGridWeek" ||
      selectInfo.view.type === "timeGridDay" ||
      selectInfo.view.type === "threeDays"
    ) {
      selectInfo.view.calendar.unselect();
      setState({ selectInfo, state: "create" });
      // Open modal create
      // console.log(selectInfo);
      setStart(selectInfo.start);
      setEnd(selectInfo.end);
      openModal(true);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setState({});
    setStart(new Date());
    setEnd(new Date());
    setIsFinish(false);
    setContent("");
  };

  function renderEventContent(eventInfo) {
    const { classNames } = eventInfo.event;
    console.log(classNames[0]);
    return (
      <div className={[...eventInfo.event.classNames]}>
        {/* <b>{eventInfo.timeText}</b> */}
        <i
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {eventInfo.event.title}
        </i>
      </div>
    );
  }

  const handleEdit = () => {};

  const handleSubmit = async () => {
    const newEvent = {
      title,
      start,
      end,
      content,
      className: important,
      important,
      type,
      isFinish,
    };

    if (validateEvent(newEvent)) {
      return alert("입력값을 확인해 주세요.");
    }

    await addEvent(newEvent);
    closeModal();
  };

  return (
    <div className="bg-white text-black h-full p-4">
      <div className="flex">
        <button className="ml-auto" onClick={openModal}>
          TodoCreate
        </button>
      </div>

      <FullCalendar
        views={{
          threeDays: {
            type: "timeGrid",
            duration: { days: 3 },
            buttonText: "3day",
          },
        }}
        allDaySlot={false}
        locale={"ko"}
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          // center: isMobile ? "" : "title",
          center: isMobile ? "prev,next" : "prev,today,next",
          right: isMobile
            ? "dayGridMonth,threeDays"
            : "dayGridMonth,timeGridWeek,threeDays,timeGridDay",
          // right: isMobile
          // ? "prev,next dayGridMonth,threeDays"
          // : "prev,today,next dayGridMonth,timeGridWeek,threeDays,timeGridDay",
        }}
        editable={true}
        initialView="threeDays"
        selectMirror={true}
        selectable={true}
        dayMaxEvents={true}
        weekends={true}
        // 이벤트 설정 시작
        events={filteredEvents}
        select={handleDateSelect} // 이벤트 날짜 드래그
        eventContent={renderEventContent} // custom render function
        // eventClick={handleEventClick}
        // eventDrop={handleEventDrop}
        // eventResize={handleEventResize}
        // dateClick={handleDateClick}
        //
        eventAdd={(e) => {
          console.log("eventAdd", e);
        }}
        eventChange={(e) => {
          updateEvent(e);
          console.log("eventChange", e);
        }}
        eventRemove={(e) => {
          deleteEvent(e?.event?.id);
          console.log("eventRemove", e);
        }}
        // 이벤트 설정 끝
      />

      <TodoModal
        isOpen={isOpen}
        onClose={closeModal}
        title={state.state === "update" ? "일정 수정" : "일정 추가"}
        onSubmit={state.clickInfo ? handleEdit : handleSubmit}
        // onDelete={state.clickInfo && handleDelete}
        submitText={state.clickInfo ? "Update" : "Save"}
        deleteText="Delete"
      >
        <Fieldset>
          <Field>
            <Label htmlFor="title">Title</Label>
            <Input
              className="text-black"
              type="text"
              id="title"
              name="title"
              placeholder="할 일을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label htmlFor="isFinish">완료여부</Label>
            <Input
              id="isFinish"
              type="checkbox"
              checked={isFinish}
              onChange={(e) => setIsFinish(e.target.checked)}
            />
          </Field>
          {/* <Field>
            <Label htmlFor="content">Content</Label>
            <Input
              defaultValue={content}
              className="text-black"
              type="text"
              id="content"
              name="content"
              placeholder="내용을 입력해주세요."
              onChange={(e) => setContent(e.target.value)}
            />
          </Field> */}
          <Field>
            <div className="bg-slate-400">
              <Label htmlFor="exampleEmail" className="text-black">
                From - End
              </Label>
              <DateRangePicker timeSet={start} editTimeSet={setStart} />
              <DateRangePicker timeSet={end} editTimeSet={setEnd} />
            </div>
          </Field>
        </Fieldset>
      </TodoModal>
    </div>
  );
};

export default Calendar;
