import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-green-600">PantryPilot</h1>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/recipes"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                Recipes
              </Link>
            </li>

            <li>
              <Link
                to="/ingredients"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                Ingredients
              </Link>
            </li>

            <li>
              <Link
                to="/pantry"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                Pantry
              </Link>
            </li>

            <li>
              <Link
                to="/meal-plans"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                Meal Plans
              </Link>
            </li>

            <li>
              <Link
                to="/grocery-lists"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                Grocery Lists
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
