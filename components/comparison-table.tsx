"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "./ui/badge";
import { Button } from "./ui/button";
import Typography from "./typography";
import FadeIn from "./ui/fade-in";
import { Sparkle } from "./ui/sparkle";
import { CheckIcon, MinusIcon } from "./ui/status-icons";
import { cn } from "@/lib/utils";
import {
  comparisonSection,
  comparisonColumns,
  comparisonRows,
  type CellValue,
  type ComparisonColumn,
  type ColumnKey,
} from "@/data/comparison";

// ── Shared column sizing ──

function getColumnStyles(compact?: boolean) {
  return {
    px: compact ? "px-3 sm:px-4" : "px-5",
    py: "py-5",
    mx: compact ? "mx-3 sm:mx-4" : "mx-5",
    rowH: compact ? "h-14" : "h-16",
    radius: compact ? "rounded-3xl" : "rounded-4xl",
  };
}

// ── Cell rendering ──

function CellContent({
  value,
  vizion,
  compact,
}: {
  value: CellValue;
  vizion?: boolean;
  compact?: boolean;
}) {
  if (value === true) return vizion ? <CheckIcon light /> : <CheckIcon />;
  if (value === false) return <MinusIcon />;
  return (
    <span
      className={cn(
        "leading-snug text-center",
        compact ? "text-sm sm:text-base" : "text-base",
        vizion ? "font-medium text-white" : "text-gray-dark"
      )}
    >
      {value}
    </span>
  );
}

// ── Column header ──

function ColumnHeader({
  col,
  compact,
}: {
  col: ComparisonColumn;
  compact?: boolean;
}) {
  if (col.logo) {
    return (
      <Image
        src={col.logo}
        alt={col.label}
        width={compact ? 100 : 120}
        height={compact ? 20 : 24}
        className={compact ? "h-5 w-auto" : "h-7 w-auto"}
      />
    );
  }
  return (
    <span
      className={cn(
        "font-semibold text-gray-dark leading-5",
        compact ? "text-sm sm:text-base" : "text-xl"
      )}
    >
      {compact ? col.label : col.headerLabel ?? col.label}
    </span>
  );
}

// ── Data column (shared desktop / mobile) ──

function DataColumn({
  col,
  compact,
}: {
  col: ComparisonColumn;
  compact?: boolean;
}) {
  const h = col.highlighted;
  const { px, py, mx, rowH, radius } = getColumnStyles(compact);
  const borderColor = h ? "border-white/20" : "border-gray-lighter/60";

  return (
    <div
      className={cn(
        radius,
        "overflow-hidden",
        h
          ? cn(
              "bg-gradient-to-b from-primary-blue-dark to-primary-blue-border",
              compact
                ? "ring-5 ring-primary-blue/50"
                : "ring-10 ring-primary-blue/50 mx-2"
            )
          : cn("bg-background")
      )}
    >
      <div
        className={cn(
          px,
          py,
          h ? "flex items-center justify-center" : "text-center",
          "border-b",
          borderColor,
          mx
        )}
      >
        <ColumnHeader col={col} compact={compact} />
      </div>
      <div className={px}>
        {comparisonRows.map((row, i) => (
          <div
            key={row.label}
            className={cn(
              rowH,
              "flex items-center justify-center",
              i !== comparisonRows.length - 1 && `border-b ${borderColor}`
            )}
          >
            <CellContent value={row[col.key]} vizion={h} compact={compact} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Criteria column (shared desktop / mobile) ──

function CriteriaColumn({ compact }: { compact?: boolean }) {
  const { px, py, mx, rowH, radius } = getColumnStyles(compact);

  return (
    <div className={cn(radius, "overflow-hidden bg-background")}>
      <div className={cn(py, "border-b border-gray-lighter/60", mx)}>
        <span
          className={cn(
            "font-semibold text-primary-dark invisible leading-5",
            compact ? "text-sm sm:text-base" : "text-xl"
          )}
        >
          &nbsp;
        </span>
      </div>
      <div className={px}>
        {comparisonRows.map((row, i) => (
          <div
            key={row.label}
            className={cn(
              rowH,
              "flex items-center",
              compact ? "gap-1.5" : "gap-2",
              i !== comparisonRows.length - 1 &&
                "border-b border-gray-lighter/60"
            )}
          >
            <Sparkle
              className={cn("text-primary-dark", compact ? "size-4" : "size-5")}
            />
            <span
              className={cn(
                "font-medium text-primary-dark",
                compact ? "text-sm sm:text-base" : "text-base"
              )}
            >
              {row.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ──

export function ComparisonTable() {
  const [mobileColumn, setMobileColumn] = useState<ColumnKey>("vizion");
  const selectedCol = comparisonColumns.find((c) => c.key === mobileColumn)!;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-10%">
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-5 md:px-8">
        <Badge align="center" className="mb-4">
          {comparisonSection.badge}
        </Badge>
        <Typography
          variant="stacked"
          title={comparisonSection.title}
          subtitle={comparisonSection.subtitle}
        />

        <FadeIn delay={0.2}>
          {/* ── Desktop ── */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 lg:gap-4 items-start">
              <CriteriaColumn />
              {comparisonColumns.map((col) => (
                <DataColumn key={col.key} col={col} />
              ))}
            </div>
          </div>

          {/* ── Mobile / Tablet ── */}
          <div className="lg:hidden">
            <div className="flex gap-2 mb-5">
              {comparisonColumns.map((col) => (
                <Button
                  key={col.key}
                  variant={mobileColumn === col.key ? "blue" : "white"}
                  size="md"
                  onClick={() => setMobileColumn(col.key)}
                  className="flex-1 rounded-2xl text-sm"
                >
                  {col.logo ? (
                    <Image
                      src={
                        mobileColumn === col.key
                          ? "/logo-off-white.svg"
                          : "/logo-off-black.svg"
                      }
                      alt={col.label}
                      width={90}
                      height={18}
                      className="h-3 w-auto"
                    />
                  ) : (
                    col.label
                  )}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 items-start">
              <CriteriaColumn compact />
              <DataColumn col={selectedCol} compact />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ComparisonTable;
