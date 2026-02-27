import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1.5", className)}
      {...props}
    />
  );
}

interface PaginationItemProps extends React.ComponentProps<"li"> {
  isActive?: boolean;
}

function PaginationItem({ className, ...props }: PaginationItemProps) {
  return <li className={cn("", className)} {...props} />;
}

interface PaginationLinkProps extends React.ComponentProps<"button"> {
  isActive?: boolean;
}

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <button
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 cursor-pointer size-10",
        isActive
          ? "bg-primary-dark text-white shadow-sm"
          : "bg-white text-gray-dark ring-1 ring-gray-lighter hover:ring-gray-light hover:bg-gray-lighter/30",
        props.disabled &&
          "pointer-events-none opacity-40",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Page précédente"
      className={cn("gap-1 px-3 w-auto", className)}
      {...props}
    >
      <ChevronLeft className="size-4" />
      <span className="hidden sm:inline">Précédent</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Page suivante"
      className={cn("gap-1 px-3 w-auto", className)}
      {...props}
    >
      <span className="hidden sm:inline">Suivant</span>
      <ChevronRight className="size-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-10 items-center justify-center text-gray-light",
        className
      )}
      {...props}
    >
      <MoreHorizontal className="size-4" />
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
