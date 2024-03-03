import { User } from "../utils/db.ts";

interface NavProps {
  sessionUser?: User;
}

export default function Nav({ sessionUser }: NavProps) {
  const loggedInMenus = [
    { name: "New", href: "/daily/new" },
    { name: "My Page", href: "/my" },
    { name: "Logout", href: "/logout" },
  ];

  const nonLoggedInMenus = [
    { name: "Login", href: "/login" },
  ];

  return (
    <div class="flex flex-wrap items-center justify-between p-4">
      <div>
        <a href="/">
          Cocolumn
        </a>
      </div>
      <ul class="flex gap-6">
        {sessionUser
          ? (
            loggedInMenus.map((menu) => (
              <li>
                <a href={menu.href}>{menu.name}</a>
              </li>
            ))
          )
          : nonLoggedInMenus.map((menu) => (
            <li>
              <a href={menu.href}>{menu.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
