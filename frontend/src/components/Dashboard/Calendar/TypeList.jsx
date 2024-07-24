import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

// const people = [
//   { id: 1, name: "Durward Reynolds" },
//   { id: 2, name: "Kenton Towne" },
//   { id: 3, name: "Therese Wunsch" },
//   { id: 4, name: "Benedict Kessler" },
//   { id: 5, name: "Katelyn Rohan" },
// ];

function TypeList({ data, selected, setSelected }) {
  return (
    <Listbox as="div" value={selected} onChange={setSelected}>
      <ListboxButton>{selected}</ListboxButton>
      <ListboxOptions className="z-20" as="div" anchor="bottom">
        {data.map((item) => (
          <ListboxOption
            key={item}
            value={item}
            className="group flex gap-2 bg-white data-[focus]:bg-blue-100"
          >
            <CheckIcon className="invisible size-5 group-data-[selected]:visible" />
            {item}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
export default TypeList;
