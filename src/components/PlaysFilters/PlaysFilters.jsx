import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
// Using Heasdless UI (Tailwind)
const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full flex items-center gap-3 bg-gray-200 mb-3 py-3 px-3 rounded-lg">
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? "text-red-600" : "text-grey-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="p-4 text-red-600">
            <div>
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="mr-2 border rounded-full bg-white px-3 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;
