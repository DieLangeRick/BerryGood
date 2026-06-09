import { team } from "../config/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 text-center">
      <h3 className="text-xl font-bold mb-6">The Team</h3>
      <ul className="flex flex-wrap justify-center gap-4 mb-6">
        {team.members.map((member) => (
          <li key={member} className="text-gray-300">
            {member}
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-sm">
        {team.school} · {team.year}
      </p>
    </footer>
  );
}
