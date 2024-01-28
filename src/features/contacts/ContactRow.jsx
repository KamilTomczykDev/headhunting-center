import { useSelector } from "react-redux";
import AddNote from "./AddNote";

function ContactRow({ contact }) {
  const { role } = useSelector((state) => state.user.user);
  if (!contact) return;
  const { id, fullName, email, city, telNumber } = contact;
  return (
    <tr className="grid-cols-guest border-main-800 grid items-center gap-1 border-t-2 py-2 text-center md:gap-6">
      <td className="break-words">{fullName}</td>
      <td className="break-all">{email}</td>
      <td className="break-words">{city}</td>
      <td className="break-all">{telNumber}</td>
      {role === "guest" && (
        <td className="flex gap-1">
          <AddNote id={id} />
          <input className="w-[10px]" type="checkbox" />
        </td>
      )}
    </tr>
  );
}

export default ContactRow;
