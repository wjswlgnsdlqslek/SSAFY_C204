import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
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
import TypeRadio from "./Calendar/TypeRadio";
import ImportantRadio from "./Calendar/ImportantRadio";
import Filters from "./Calendar/Filters";
import MobileExplorer from "../common/MobileExplorer";

const Calendar = ({ calendarRef }) => {
  // const [filteredEvents, setFilteredEvents] = useState([]);
  // 타입별로 설정+ 필터링된 이벤트
  const [eventsTypeFilter, setEventsTypeFilter] = useState({
    type: "ALL",
    important: "ALL",
  });

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

  const {
    filteredEvents,
    setFilteredEvents,
    events,
    addEvent,
    fetchEvents,
    updateEvent,
    deleteEvent,
  } = useTodoStore();
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
    switch (eventsTypeFilter.type) {
      case "WORK":
        filtered = events?.filter((el) => el?.type === "WORK");
        break;
      case "REST":
        filtered = events?.filter((el) => el?.type === "REST");
        break;
      case "ALL":
      default:
        filtered = events;
        break;
    }
    switch (eventsTypeFilter.important) {
      case "상":
        filtered = filtered?.filter((el) => el?.important === "상");
        break;
      case "중":
        filtered = filtered?.filter((el) => el?.important === "중");
        break;
      case "하":
        filtered = filtered?.filter((el) => el?.important === "하");
        break;
      case "ALL":
      default:
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
    setImportant("하");
  };

  // 달력에 뜨는 이벤트 커스텀
  function renderEventContent(eventInfo) {
    return (
      <div
        className={
          `${eventInfo.event?.extendedProps?.isFinish ? "todo-finish " : ""}` +
          [...eventInfo.event.classNames]
        }
      >
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

  // 수정 함수
  const handleEdit = async () => {
    state.clickInfo.event.setStart(start);
    state.clickInfo.event.setEnd(end);

    state.clickInfo.event.mutate({
      standardProps: {
        title,
      },
    });
    const event = {
      id: state.clickInfo.event.id,
      title,
      start,
      end,
      className: important,
      content,
      important,
      isFinish,
      type,
    };
    if (validateEvent(event)) {
      const result = await updateEvent(event);
      if (result) {
        closeModal();
      }
    } else {
      alert("입력값을 확인해 주세요.");
    }
    // console.log(events);
  };

  // 생성 함수
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

    if (!validateEvent(newEvent)) {
      return alert("입력값을 확인해 주세요.");
    }

    await addEvent(newEvent);
    closeModal();
  };

  // 삭제 함수
  const handleDelete = async () => {
    const rst = await deleteEvent(state.clickInfo.event.id);
    console.log(state.clickInfo.event.id);
    if (rst) {
      state.clickInfo.event.remove();
    }
    closeModal();
  };

  // 항목 클릭 -> 수정 모달 오픈
  const handleEventClick = (clickInfo) => {
    setState({ clickInfo, state: "update" });
    setTitle(clickInfo.event.title);
    setStart(clickInfo.event.start);
    setIsFinish(clickInfo.event.extendedProps?.isFinish);
    setContent(clickInfo.event.extendedProps?.content);
    setImportant(clickInfo.event.extendedProps?.important);
    setType(clickInfo.event.extendedProps?.type);
    setEnd(clickInfo.event.end);
    setIsOpen(true);
  };

  // 이벤트 크기 줄이기늘리기, 옮기기 -> 시간만 변경됨
  const handleEventResizeAmdDrop = (checkInfo) => {
    setState({ checkInfo, state: "resize" });
    const { start, end, id, title } = checkInfo?.event;
    const { content, important, isFinish, type } =
      checkInfo?.event?.extendedProps;
    const editedEvent = {
      id,
      start,
      end,
      title,
      content,
      important,
      isFinish,
      type,
      className: important,
    };
    updateEvent(editedEvent);
  };
  return (
    <div className="bg-white relative rounded-lg shadow-lg text-black h-full px-4 overflow-scroll   scroll">
      <div className="flex sticky top-0 bg-white z-10 my-2">
        <Filters filter={eventsTypeFilter} setFilter={setEventsTypeFilter} />
        {isMobile && <MobileExplorer />}

        <button
          className="btn btn-outline btn-primary ml-auto"
          onClick={openModal}
        >
          TodoCreate
        </button>
      </div>

      <FullCalendar
        stickyHeaderDates={false}
        height="auto"
        views={{
          threeDays: {
            type: "timeGrid",
            duration: { days: 3 },
            buttonText: "3day",
          },
        }}
        allDaySlot={false}
        // locale={"ko"}
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
        eventClick={handleEventClick}
        eventDrop={handleEventResizeAmdDrop}
        eventResize={handleEventResizeAmdDrop}
        // dateClick={handleDateClick}
        // 이벤트 설정 끝
      />
      <div className="divider" />

      <TodoModal
        isOpen={isOpen}
        onClose={closeModal}
        title={state.state === "update" ? "일정 수정" : "일정 추가"}
        onSubmit={state.clickInfo ? handleEdit : handleSubmit}
        onDelete={state.clickInfo && handleDelete}
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

          <Field>
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
          </Field>

          {/* 옵션 선택 */}
          <Field>
            <Label>Type:</Label>
            <div style={{ zIndex: 1 }}>
              <div className="flex justify-between">
                <TypeRadio selected={type} setSelected={setType} />
                <ImportantRadio
                  selected={important}
                  setSelected={setImportant}
                />
              </div>
            </div>
          </Field>
          {/* 옵션 선택 끝 */}
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
