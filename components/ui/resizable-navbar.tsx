"use client";
import { cn } from "@/lib/utils";

import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-100 w-full max-w-[1536px] mx-auto pt-4 sm:pt-8 px-4 sm:px-8",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <nav
      aria-label="Navigation principale"
      style={{
        maxWidth: visible ? "1216px" : "1536px",
        transform: visible ? "translateY(-20px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start lg:flex",
        "bg-gradient-to-b from-primary-dark to-secondary-dark border border-primary-dark",
        "pl-4 pr-3 h-18 rounded-[22px]",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      style={{
        maxWidth: visible ? "1280px" : "1536px",
        transform: visible ? "translateY(-10px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between lg:hidden",
        "bg-gradient-to-b from-primary-dark to-secondary-dark border border-primary-dark rounded-[18px] sm:rounded-[22px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between pl-2 pr-3 sm:px-5 h-14 sm:h-18",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <div
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(-10px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: isOpen ? "auto" : "none",
      }}
      className={cn(
        "absolute inset-x-0 top-[calc(100%+8px)] z-50 flex w-full flex-col items-start justify-start rounded-3xl px-6 py-6",
        "bg-gradient-to-b from-primary-dark to-secondary-dark border border-primary-dark rounded-3xl sm:rounded-4xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-lg cursor-pointer p-1.5 text-primary-dark bg-white"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        </svg>
      )}
    </button>
  );
};
