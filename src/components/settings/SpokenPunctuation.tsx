import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface SpokenPunctuationProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const SpokenPunctuation: React.FC<SpokenPunctuationProps> = React.memo(
  ({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();
    const enabled = getSetting("spoken_punctuation_enabled") ?? true;

    return (
      <ToggleSwitch
        checked={enabled}
        onChange={(checked) =>
          updateSetting("spoken_punctuation_enabled", checked)
        }
        isUpdating={isUpdating("spoken_punctuation_enabled")}
        label={t("settings.advanced.spokenPunctuation.label")}
        description={t("settings.advanced.spokenPunctuation.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  },
);
