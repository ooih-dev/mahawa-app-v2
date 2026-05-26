"use client";

import { useTranslations } from "next-intl";
import { useWater } from "@/lib/store";
import WaterGlass from "@/components/WaterGlass";
import {
  WaterDrop,
  FireIcon,
  PlusIcon,
  ClockIcon,
  CheckIcon,
  ZapIcon,
  TargetIcon,
} from "@/icons";
import { useState, useEffect } from "react";

const quickAddAmounts = [100, 250, 500];

export default function TrackerPage() {
  const t = useTranslations();
  const { data, addWater, getProgress, streak } = useWater();
  const progress = getProgress();
  const [animateIn, setAnimateIn] = useState(false);
  const [rippleId, setRippleId] = useState<number | null>(null);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const handleAddWater = (amount: number) => {
    addWater(amount);
    setRippleId(Date.now());
    setTimeout(() => setRippleId(null), 600);
  };

  const isGoalReached = data.total >= data.goal;

  return (
    <div className="space-y-5">
      {/* Header */}
      <header
        className={`text-center transition-all duration-500 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 510 515"
            className="w-10 h-10 text-brand-500 dark:text-brand-400"
            fill="currentColor"
          >
            <path d="M408.76,106.68c-13.8,13.95-21.03,71.79-21.03,71.79s57.2-7.33,70.99-21.28c13.8-13.95,13.8-36.57,0-50.51 C444.93,92.73,422.56,92.73,408.76,106.68"/>
            <path d="M344.23,41.42c-13.8,13.95-21.03,71.79-21.03,71.79s57.2-7.33,70.99-21.28c13.79-13.95,13.79-36.57,0-50.52 C380.39,27.47,358.02,27.47,344.23,41.42"/>
            <path d="M344.23,41.42c-13.8,13.95-21.03,71.79-21.03,71.79s57.2-7.33,70.99-21.28c13.79-13.95,13.79-36.57,0-50.52 C380.39,27.47,358.02,27.47,344.23,41.42"/>
            <path d="M352.83,199.02c13.8-13.95,21.03-71.79,21.03-71.79s-57.2,7.33-70.99,21.27c-13.8,13.95-13.8,36.57,0,50.52 C316.66,212.96,339.03,212.96,352.83,199.02"/>
            <path d="M464.2,263.09c-19.51,0-65.07,35.72-65.07,35.72s45.56,35.72,65.07,35.72s35.33-15.99,35.33-35.72 C499.53,279.08,483.71,263.09,464.2,263.09"/>
            <path d="M464.2,170.8c-19.51,0-65.07,35.72-65.07,35.72s45.56,35.72,65.07,35.72s35.33-15.99,35.33-35.72 C499.53,186.8,483.71,170.8,464.2,170.8"/>
            <path d="M464.2,170.8c-19.51,0-65.07,35.72-65.07,35.72s45.56,35.72,65.07,35.72s35.33-15.99,35.33-35.72 C499.53,186.8,483.71,170.8,464.2,170.8"/>
            <path d="M360.08,288.39c19.51,0,65.08-35.72,65.08-35.72s-45.57-35.72-65.08-35.72s-35.33,15.99-35.33,35.72 C324.75,272.39,340.57,288.39,360.08,288.39"/>
            <path d="M394.03,413.33c-13.79-13.95-70.99-21.27-70.99-21.27s7.24,57.83,21.03,71.78c13.79,13.95,36.16,13.95,49.95,0 C407.82,449.89,407.82,427.28,394.03,413.33"/>
            <path d="M458.56,348.07c-13.8-13.95-70.99-21.27-70.99-21.27s7.24,57.83,21.03,71.78c13.79,13.95,36.16,13.95,49.95,0 C472.36,384.64,472.36,362.02,458.56,348.07"/>
            <path d="M458.56,348.07c-13.8-13.95-70.99-21.27-70.99-21.27s7.24,57.83,21.03,71.78c13.79,13.95,36.16,13.95,49.95,0 C472.36,384.64,472.36,362.02,458.56,348.07"/>
            <path d="M302.71,356.77c13.8,13.95,70.99,21.27,70.99,21.27s-7.24-57.83-21.03-71.78c-13.8-13.95-36.16-13.95-49.96,0 C288.92,320.2,288.92,342.82,302.71,356.77"/>
            <path d="M239.35,469.39c0-19.73-35.33-65.8-35.33-65.8s-35.32,46.07-35.32,65.8c0,19.73,15.81,35.72,35.32,35.72 C223.53,505.11,239.35,489.12,239.35,469.39"/>
            <path d="M330.62,469.39c0-19.73-35.33-65.8-35.33-65.8s-35.33,46.07-35.33,65.8c0,19.73,15.82,35.72,35.33,35.72 S330.62,489.12,330.62,469.39"/>
            <path d="M330.62,469.39c0-19.73-35.33-65.8-35.33-65.8s-35.33,46.07-35.33,65.8c0,19.73,15.82,35.72,35.33,35.72 S330.62,489.12,330.62,469.39"/>
            <path d="M214.33,364.1c0,19.73,35.33,65.8,35.33,65.8s35.33-46.07,35.33-65.8s-15.82-35.72-35.33-35.72 C230.14,328.38,214.33,344.37,214.33,364.1"/>
            <path d="M90.77,398.43c13.8-13.95,21.03-71.79,21.03-71.79s-57.2,7.33-70.99,21.28c-13.8,13.95-13.8,36.57,0,50.51 C54.6,412.38,76.97,412.38,90.77,398.43"/>
            <path d="M155.3,463.69c13.8-13.95,21.03-71.79,21.03-71.79s-57.2,7.33-70.99,21.28c-13.8,13.95-13.8,36.57,0,50.51 C119.14,477.64,141.51,477.64,155.3,463.69"/>
            <path d="M155.3,463.69c13.8-13.95,21.03-71.79,21.03-71.79s-57.2,7.33-70.99,21.28c-13.8,13.95-13.8,36.57,0,50.51 C119.14,477.64,141.51,477.64,155.3,463.69"/>
            <path d="M146.7,306.09c-13.8,13.95-21.03,71.79-21.03,71.79s57.2-7.33,70.99-21.28c13.8-13.95,13.8-36.57,0-50.51 C182.87,292.14,160.5,292.14,146.7,306.09"/>
            <path d="M35.33,242.02c19.51,0,65.08-35.72,65.08-35.72s-45.57-35.72-65.08-35.72S0,186.57,0,206.3 C0,226.03,15.82,242.02,35.33,242.02"/>
            <path d="M35.33,334.31c19.51,0,65.08-35.72,65.08-35.72s-45.57-35.72-65.08-35.72S0,278.86,0,298.58 C0,318.31,15.82,334.31,35.33,334.31"/>
            <path d="M35.33,334.31c19.51,0,65.08-35.72,65.08-35.72s-45.57-35.72-65.08-35.72S0,278.86,0,298.58 C0,318.31,15.82,334.31,35.33,334.31"/>
            <path d="M139.45,216.72c-19.51,0-65.08,35.72-65.08,35.72s45.57,35.72,65.08,35.72s35.33-15.99,35.33-35.72 C174.78,232.72,158.96,216.72,139.45,216.72"/>
            <path d="M105.5,91.78c13.8,13.95,70.99,21.27,70.99,21.27s-7.24-57.83-21.03-71.78c-13.8-13.95-36.16-13.95-49.96,0 S91.71,77.83,105.5,91.78"/>
            <path d="M40.97,157.04c13.8,13.95,70.99,21.27,70.99,21.27s-7.24-57.83-21.03-71.78c-13.8-13.95-36.16-13.95-49.96,0 C27.17,120.47,27.17,143.09,40.97,157.04"/>
            <path d="M40.97,157.04c13.8,13.95,70.99,21.27,70.99,21.27s-7.24-57.83-21.03-71.78c-13.8-13.95-36.16-13.95-49.96,0 C27.17,120.47,27.17,143.09,40.97,157.04"/>
            <path d="M196.82,148.34c-13.8-13.95-70.99-21.27-70.99-21.27s7.24,57.83,21.03,71.78c13.8,13.95,36.16,13.95,49.96,0 C210.62,184.91,210.62,162.29,196.82,148.34"/>
            <path d="M260.18,35.72c0,19.73,35.33,65.8,35.33,65.8s35.33-46.07,35.33-65.8C330.84,15.99,315.02,0,295.51,0 S260.18,15.99,260.18,35.72"/>
            <path d="M168.91,35.72c0,19.73,35.33,65.8,35.33,65.8s35.33-46.07,35.33-65.8C239.57,15.99,223.75,0,204.24,0 S168.91,15.99,168.91,35.72"/>
            <path d="M168.91,35.72c0,19.73,35.33,65.8,35.33,65.8s35.33-46.07,35.33-65.8C239.57,15.99,223.75,0,204.24,0 S168.91,15.99,168.91,35.72"/>
            <path d="M285.2,141.01c0-19.73-35.33-65.8-35.33-65.8s-35.32,46.07-35.32,65.8s15.81,35.72,35.32,35.72 C269.39,176.73,285.2,160.74,285.2,141.01"/>
          </svg>
          <div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              {t("app.title")}
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {t("app.subtitle")}
            </p>
          </div>
        </div>
      </header>

      {/* Water Glass — Hero */}
      <div
        className={`glass-card rounded-3xl p-6 pt-8 text-center transition-all duration-500 delay-100 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {isGoalReached && (
          <div className="mb-2 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 text-sm font-medium animate-scale-in">
            <CheckIcon size={16} />
            {t("tracker.goalReached")}
          </div>
        )}
        {rippleId && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full border-2 border-brand-300 animate-ripple" />
          </div>
        )}
        <WaterGlass
          progress={progress}
          onClick={() => handleAddWater(250)}
          className="mx-auto"
        />
      </div>

      {/* Quick Add */}
      <div
        className={`glass-card rounded-3xl p-4 transition-all duration-500 delay-150 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <ZapIcon size={16} className="text-brand-500" />
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
            {t("tracker.quickAdd")}
          </h3>
        </div>
        <div className="flex gap-3">
          {quickAddAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAddWater(amount)}
              className="flex-1 py-3 rounded-2xl text-sm font-medium transition-all duration-200 bg-[var(--color-accent-light)] text-brand-600 hover:bg-brand-200 dark:hover:bg-brand-800 hover:shadow-soft active:scale-95"
            >
              <PlusIcon size={14} className="inline mr-1" />
              {amount} {t("tracker.ml")}
            </button>
          ))}
        </div>
      </div>

      {/* Streak + Daily Total */}
      <div
        className={`glass-card rounded-3xl p-4 transition-all duration-500 delay-200 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <FireIcon size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">
                {t("tracker.streakTitle")}
              </p>
              <p className="text-lg font-bold text-[var(--color-text-primary)]">
                {streak}{" "}
                <span className="text-sm font-normal text-[var(--color-text-secondary)]">
                  {t("tracker.streak")}
                </span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-[var(--color-text-muted)]">
              {t("tracker.dailyGoal")}
            </p>
            <p className="text-lg font-bold text-brand-500">
              <TargetIcon size={14} className="inline mr-1" />
              {data.total}{" "}
              <span className="text-sm font-normal text-[var(--color-text-secondary)]">
                {t("tracker.ml")} / {data.goal} {t("tracker.ml")}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div
        className={`glass-card rounded-3xl p-4 transition-all duration-500 delay-300 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <ClockIcon size={16} className="text-brand-500" />
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
            {t("tracker.schedule")}
          </h3>
        </div>
        <div className="space-y-1">
          {(data.schedule ?? []).map((slot, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-200 ${
                slot.completed
                  ? "bg-green-50 dark:bg-green-950/20"
                  : "hover:bg-[var(--color-bg-card-secondary)]"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  slot.completed
                    ? "bg-green-500 text-white shadow-sm shadow-green-500/30"
                    : "border-2 border-[var(--color-border)]"
                }`}
              >
                {slot.completed && <CheckIcon size={14} />}
              </div>
              <span className="text-xs font-medium text-[var(--color-text-muted)] w-10">
                {slot.time}
              </span>
              <span
                className={`text-sm flex-1 ${
                  slot.completed
                    ? "text-green-600 dark:text-green-400 line-through opacity-70"
                    : "text-[var(--color-text-primary)]"
                }`}
              >
                {t("tracker." + (slot.completed ? "completed" : "expected"))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
