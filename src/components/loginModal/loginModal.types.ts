export interface ModalProps {
  onClose: () => void;
  onConfirmLogout?: () => void;
  userName?: string;
  onNameUpdated?: (name: string) => void;
}
