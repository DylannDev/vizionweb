"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedList } from "@/components/ui/animated-list";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@/components/ui/kanban";
import { portfolioProjects } from "@/data/projets";
import { testimonials } from "@/data";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";

import { PiCheckCircleFill } from "react-icons/pi";
import { GoStarFill } from "react-icons/go";

// ── Card 1 : Animated project list ──────────────────────────────

const projectItems = portfolioProjects.slice(0, 6);

const projectIcons: Record<string, { src: string }> = {
  "Get Easy": { src: "/projects-icons/get-easy-1.svg" },
  "Amazonia Investing": { src: "/projects-icons/investing.svg" },
  "Hippô'Kom": { src: "/projects-icons/hippokom.svg" },
  "Zen Lounge": { src: "/projects-icons/zen.svg" },
  "Eden Glass": { src: "/projects-icons/eden-glass.svg" },
  "TCS Plomberie": { src: "/projects-icons/tcs.svg" },
};

function ProjectMiniCard({ title, badge }: { title: string; badge: string }) {
  const icon = projectIcons[title];
  return (
    <div className="flex items-center gap-3 rounded-[20px] bg-white border border-gray-lighter px-3 py-4 shadow-[0_4px_8px_0] shadow-primary-blue-border/30">
      {icon && (
        <div
          className={`relative h-10 w-10 shrink-0 rounded-[12px] overflow-hidden shadow-sm`}
        >
          <Image
            src={icon.src}
            alt={title}
            fill
            sizes="50px"
            loading="lazy"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-primary-dark truncate">
          {title}
        </p>
        <p className="text-xs text-gray-dark">{badge}</p>
      </div>
      <PiCheckCircleFill className="text-primary-blue shrink-0" size={24} />
    </div>
  );
}

function ProjectsHighlight() {
  return (
    <div className="h-[300px] overflow-hidden relative bg-bg-blue rounded-4xl p-5">
      <AnimatedList delay={1500} className="gap-2">
        {projectItems.map((p) => (
          <ProjectMiniCard key={p.title} title={p.title} badge={p.badge[0]} />
        ))}
      </AnimatedList>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-blue to-transparent pointer-events-none" />
    </div>
  );
}

// ── Card 2 : Orbiting client photos ─────────────────────────────

const clients = testimonials.slice(0, 8);
const innerClients = clients.slice(0, 4);
const outerClients = clients.slice(4, 8);

function ClientsHighlight() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden bg-bg-yellow rounded-4xl">
      {/* Center */}
      <div className="absolute z-10 flex flex-col items-center justify-center bg-gradient-to-b from-primary-dark to-secondary-dark rounded-full border border-white p-4">
        <GoStarFill className="text-yellow-400" size={24} />
      </div>

      {/* Inner orbit */}
      <OrbitingCircles radius={70} duration={30} iconSize={36}>
        {innerClients.map((c) => (
          <div
            key={c.name}
            className="relative h-9 w-9 rounded-full overflow-hidden border border-white"
          >
            <Image
              src={`/clients/${c.image}`}
              alt={c.name}
              fill
              sizes="36px"
              loading="lazy"
              className="object-cover"
            />
          </div>
        ))}
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={120} duration={40} iconSize={40} reverse>
        {outerClients.map((c) => (
          <div
            key={c.name}
            className="relative h-10 w-10 rounded-full overflow-hidden border border-white"
          >
            <Image
              src={`/clients/${c.image}`}
              alt={c.name}
              fill
              sizes="40px"
              loading="lazy"
              className="object-cover"
            />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

// ── Card 3 : Kanban board ───────────────────────────────────────

type Task = {
  id: string;
  title: string;
  assignee?: string;
  assigneeAvatar?: string;
  dueDate?: string;
};

const defaultColumns: Record<string, Task[]> = {
  todo: [
    {
      id: "3",
      title: "Développement",
      assignee: "Dylann",
      assigneeAvatar: "/founder.webp",
      dueDate: "10 mars",
    },
    {
      id: "4",
      title: "Tests",
      assignee: "Dylann",
      assigneeAvatar: "/founder.webp",
      dueDate: "12 mars",
    },
    {
      id: "5",
      title: "Mise en ligne",
      assignee: "Dylann",
      assigneeAvatar: "/founder.webp",
      dueDate: "15 mars",
    },
  ],
  done: [
    {
      id: "1",
      title: "Brief initial",
      assignee: "Dylann",
      assigneeAvatar: "/founder.webp",
      dueDate: "1 mars",
    },
    {
      id: "2",
      title: "Design UI/UX",
      assignee: "Dylann",
      assigneeAvatar: "/founder.webp",
      dueDate: "5 mars",
    },
  ],
};

function TaskCard({ task, variant }: { task: Task; variant: "todo" | "done" }) {
  const isDone = variant === "done";
  return (
    <div className="rounded-xl border border-gray-lighter bg-white p-2.5 shadow">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="line-clamp-1 font-medium text-xs text-primary-dark">
            {task.title}
          </span>
          {isDone ? (
            <PiCheckCircleFill
              className="text-emerald-500 shrink-0"
              size={14}
            />
          ) : (
            <div className="h-3.5 w-3.5 rounded-full border-2 border-orange-300 shrink-0" />
          )}
        </div>
        <div className="flex items-center justify-between text-[10px] text-gray-dark">
          {task.assignee && (
            <div className="flex items-center gap-1">
              <div className="relative h-4 w-4 rounded-full overflow-hidden">
                <Image
                  src={task.assigneeAvatar || ""}
                  alt={task.assignee}
                  fill
                  sizes="16px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <span className="line-clamp-1">{task.assignee}</span>
            </div>
          )}
          {task.dueDate && (
            <time className="tabular-nums whitespace-nowrap">
              {task.dueDate}
            </time>
          )}
        </div>
      </div>
    </div>
  );
}

function DeliveryHighlight() {
  const [columns, setColumns] = useState(defaultColumns);

  return (
    <div className="h-[300px] overflow-hidden bg-bg-rose rounded-4xl px-3 pt-3">
      <Kanban
        value={columns}
        onValueChange={setColumns}
        getItemValue={(item) => item.id}
      >
        <KanbanBoard className="grid-cols-2 sm:grid-cols-2 gap-2 h-full">
          <KanbanColumn value="todo" className="bg-white/60 rounded-2xl p-2">
            <p className="text-xs font-medium text-orange-500 mb-2 pl-1">
              À Faire
            </p>
            <KanbanColumnContent value="todo" className="gap-1.5">
              {columns.todo.map((task) => (
                <KanbanItem key={task.id} value={task.id}>
                  <KanbanItemHandle>
                    <TaskCard task={task} variant="todo" />
                  </KanbanItemHandle>
                </KanbanItem>
              ))}
            </KanbanColumnContent>
          </KanbanColumn>

          <KanbanColumn value="done" className="bg-white/60 rounded-2xl p-2">
            <p className="text-xs font-medium text-emerald-600 mb-2 pl-1">
              Terminé
            </p>
            <KanbanColumnContent value="done" className="gap-1.5">
              {columns.done.map((task) => (
                <KanbanItem key={task.id} value={task.id}>
                  <KanbanItemHandle>
                    <TaskCard task={task} variant="done" />
                  </KanbanItemHandle>
                </KanbanItem>
              ))}
            </KanbanColumnContent>
          </KanbanColumn>
        </KanbanBoard>
        <KanbanOverlay />
      </Kanban>
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────

const highlights = [
  {
    stat: "20+",
    title: "Projets livrés",
    description:
      "Sites, applications web, outils métier. Du brief initial à la mise en ligne, chaque projet est livré clé en main.",
    visual: <ProjectsHighlight />,
  },
  {
    stat: "5/5",
    title: "Noté par nos clients",
    description:
      "Tous nos clients ont validé leur projet dès la première livraison. Pas de va-et-vient, pas de mauvaises surprises.",
    visual: <ClientsHighlight />,
  },
  {
    stat: "2 à 6",
    title: "Semaines de livraison",
    description:
      "Un processus structuré : maquette, validation, développement, mise en ligne. Vous savez où en est votre projet à chaque étape.",
    visual: <DeliveryHighlight />,
  },
];

export function HighlightsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Pourquoi Vizion Web</Badge>
        <Typography
          title="Pourquoi nos clients nous recommandent ?"
          subtitle="Des délais courts, un suivi carré, et un produit final qui tourne dès le jour 1."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <div key={item.title} className="h-full flex">
              <div className="h-full w-full rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-2">
                <div className="h-full rounded-[32px] flex flex-col">
                  {item.visual}
                  <div className="flex flex-col gap-2 p-4 pt-4 mt-2">
                    <p className="text-5xl font-semibold text-primary-dark">
                      {item.stat}
                    </p>
                    <h3 className="font-semibold text-primary-dark text-2xl mt-1">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-dark mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
