export interface PropsType {
  value?: number;
  step?: number;
  max?: number;
  min?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onInputChange?: (value: number) => void;
}
