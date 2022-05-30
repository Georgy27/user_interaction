import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

export const buttons = [
  { id: 0, component: () => <FaUser />, title: "name", value: "name" },
  {
    id: 1,
    component: () => <FaEnvelopeOpen />,
    title: "e-mail",
    value: "email",
  },
  {
    id: 2,
    component: () => <FaCalendarTimes />,
    title: "age",
    value: "age",
  },
  { id: 3, component: () => <FaMap />, title: "country", value: "country" },
  { id: 4, component: () => <FaPhone />, title: "phone", value: "phone" },
  { id: 5, component: () => <FaLock />, title: "password", value: "password" },
];
