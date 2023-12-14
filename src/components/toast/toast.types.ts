export interface ToastProps {
  setToast: React.Dispatch<React.SetStateAction<{ open: boolean; message: string }>>;
}
