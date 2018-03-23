export interface PropsType {
  step: number;
  max: number;
  min: number;
  value?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}
