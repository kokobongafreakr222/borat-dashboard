"use client";

import { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  status: "active" | "completed" | "pending";
  github: string;
  tech: string[];
  lastUpdate: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Чётко-бот",
    description: "Генератор ТЗ для фрилансеров",
    status: "active",
    github: "kokobongafreakr222/chetko-bot",
    tech: ["Python", "aiogram", "Gemini"],
    lastUpdate: "2026-03-11",
  },
  {
    id: 2,
    name: "task-cli",
    description: "CLI менеджер задач",
    status: "active",
    github: "kokobongafreakr222/task-cli",
    tech: ["Python", "CLI"],
    lastUpdate: "2026-03-11",
  },
  {
    id: 3,
    name: "borat-init-project",
    description: "Генератор структуры проектов",
    status: "active",
    github: "kokobongafreakr222/openclaw-workspace",
    tech: ["Bash"],
    lastUpdate: "2026-03-11",
  },
];

const stats = {
  total: 3,
  active: 3,
  completed: 0,
  pending: 0,
};

export default function Dashboard() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">🚀 Borat Dashboard</h1>
        <p className="text-gray-400">Отслеживание проектов и метрик</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm">Всего проектов</p>
          <p className="text-3xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm">Активных</p>
          <p className="text-3xl font-bold text-green-500">{stats.active}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm">Завершено</p>
          <p className="text-3xl font-bold text-blue-500">{stats.completed}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm">В ожидании</p>
          <p className="text-3xl font-bold text-yellow-500">{stats.pending}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {(["all", "active", "completed"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg capitalize ${
              filter === f
                ? "bg-orange-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {f === "all" ? "Все" : f === "active" ? "Активные" : "Завершённые"}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold mb-1">{project.name}</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  project.status === "active"
                    ? "bg-green-500/20 text-green-400"
                    : project.status === "completed"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {project.status === "active"
                  ? "Активный"
                  : project.status === "completed"
                  ? "Завершён"
                  : "В ожидании"}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <a
                href={`https://github.com/${project.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                📁 {project.github}
              </a>
              <span>🕐 {project.lastUpdate}</span>
            </div>

            <div className="flex gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-gray-700 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>Borat Dashboard • Обновлено: {new Date().toLocaleDateString("ru-RU")}</p>
      </footer>
    </div>
  );
}
