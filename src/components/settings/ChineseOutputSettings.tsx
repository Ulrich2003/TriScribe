import React from "react";
import { useTranslation } from "react-i18next";
import type { CantoneseOutputStyle, ChineseOutputScript } from "@/bindings";
import { useSettings } from "@/hooks/useSettings";
import { Dropdown } from "../ui/Dropdown";
import { SettingContainer } from "../ui/SettingContainer";

interface ChineseOutputSettingsProps {
  grouped?: boolean;
}

export const ChineseOutputSettings: React.FC<ChineseOutputSettingsProps> =
  React.memo(({ grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();
    const outputScript = getSetting("chinese_output_script") ?? "simplified";
    const cantoneseStyle = getSetting("cantonese_output_style") ?? "spoken";

    return (
      <>
        <SettingContainer
          title={t("settings.general.chineseOutputScript.title")}
          description={t("settings.general.chineseOutputScript.description")}
          descriptionMode="tooltip"
          grouped={grouped}
        >
          <Dropdown
            options={[
              {
                value: "simplified",
                label: t(
                  "settings.general.chineseOutputScript.options.simplified",
                ),
              },
              {
                value: "traditional",
                label: t(
                  "settings.general.chineseOutputScript.options.traditional",
                ),
              },
            ]}
            selectedValue={outputScript}
            disabled={isUpdating("chinese_output_script")}
            onSelect={(value) =>
              updateSetting(
                "chinese_output_script",
                value as ChineseOutputScript,
              )
            }
          />
        </SettingContainer>

        <SettingContainer
          title={t("settings.general.cantoneseOutputStyle.title")}
          description={t("settings.general.cantoneseOutputStyle.description")}
          descriptionMode="tooltip"
          grouped={grouped}
        >
          <Dropdown
            options={[
              {
                value: "spoken",
                label: t(
                  "settings.general.cantoneseOutputStyle.options.spoken",
                ),
              },
              {
                value: "written",
                label: t(
                  "settings.general.cantoneseOutputStyle.options.written",
                ),
              },
            ]}
            selectedValue={cantoneseStyle}
            disabled={isUpdating("cantonese_output_style")}
            onSelect={(value) =>
              updateSetting(
                "cantonese_output_style",
                value as CantoneseOutputStyle,
              )
            }
          />
        </SettingContainer>
      </>
    );
  });

ChineseOutputSettings.displayName = "ChineseOutputSettings";
