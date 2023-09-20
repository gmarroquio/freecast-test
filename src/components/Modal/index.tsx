import { create } from "zustand";
import { ConfigState, useConfig } from "../../hooks/useConfig";
import { Time } from "../Time";
import {
  ModalButton,
  ModalButtonContainer,
  ModalContainer,
  ModalContent,
  ModalSectionContainer,
  ModalTopBar,
} from "./styles";
import { useEffect } from "react";

const useTemporaryConfigStore = create<
  Pick<ConfigState, "hourType" | "changeConfig" | "units">
>((set) => ({
  hourType: "24h",
  units: "metric",
  changeConfig: (opt) => set(opt),
}));

export const Modal: React.FC<{
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}> = ({ isOpen, handleClose, title }) => {
  const { units, hourType, changeConfig } = useConfig();

  const temporaryStorage = useTemporaryConfigStore();

  useEffect(() => {
    temporaryStorage.changeConfig({ units, hourType });
  }, []);

  const handleSave = () => {
    changeConfig({
      hourType: temporaryStorage.hourType,
      units: temporaryStorage.units,
    });

    handleClose();
  };

  return (
    <ModalContainer $isOpen={isOpen}>
      <ModalContent>
        <ModalTopBar>{title}</ModalTopBar>
        <ModalSectionContainer>
          <div>Units</div>
          <ModalButtonContainer>
            <ModalButton
              onClick={() => {
                temporaryStorage.changeConfig({ units: "imperial" });
                console.log("imperial");
              }}
              $selected={temporaryStorage.units === "imperial"}
            >
              Imperial
            </ModalButton>
            <ModalButton
              onClick={() => temporaryStorage.changeConfig({ units: "metric" })}
              $selected={temporaryStorage.units === "metric"}
            >
              Metric
            </ModalButton>
            <ModalButton
              onClick={() =>
                temporaryStorage.changeConfig({ units: "standard" })
              }
              $selected={temporaryStorage.units === "standard"}
            >
              Standard
            </ModalButton>
          </ModalButtonContainer>
        </ModalSectionContainer>
        <ModalSectionContainer>
          <div>Time</div>
          <ModalButtonContainer>
            <ModalButton
              onClick={() =>
                temporaryStorage.changeConfig({ hourType: "am/pm" })
              }
              $selected={temporaryStorage.hourType === "am/pm"}
            >
              AM/PM
            </ModalButton>
            <ModalButton
              onClick={() => temporaryStorage.changeConfig({ hourType: "24h" })}
              $selected={temporaryStorage.hourType === "24h"}
            >
              24h
            </ModalButton>
          </ModalButtonContainer>
        </ModalSectionContainer>
        <ModalButtonContainer>
          <ModalButton onClick={handleClose}>Cancel</ModalButton>
          <ModalButton onClick={handleSave}>Save</ModalButton>
        </ModalButtonContainer>
        <Time />
      </ModalContent>
    </ModalContainer>
  );
};
