import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface AppendTerminalPeriodProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const AppendTerminalPeriod: React.FC<AppendTerminalPeriodProps> =
  React.memo(({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();
    const enabled = getSetting("append_terminal_period") ?? false;

    return (
      <ToggleSwitch
        checked={enabled}
        onChange={(checked) => updateSetting("append_terminal_period", checked)}
        isUpdating={isUpdating("append_terminal_period")}
        label={t("settings.debug.appendTerminalPeriod.label")}
        description={t("settings.debug.appendTerminalPeriod.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  });
