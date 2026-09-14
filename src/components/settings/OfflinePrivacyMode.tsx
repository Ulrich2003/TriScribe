import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface OfflinePrivacyModeProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const OfflinePrivacyMode: React.FC<OfflinePrivacyModeProps> = React.memo(
  ({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();
    const enabled = getSetting("strict_offline_mode") ?? true;

    return (
      <ToggleSwitch
        checked={enabled}
        onChange={(checked) => updateSetting("strict_offline_mode", checked)}
        isUpdating={isUpdating("strict_offline_mode")}
        label={t("settings.debug.offlinePrivacyMode.label")}
        description={t("settings.debug.offlinePrivacyMode.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  },
);
