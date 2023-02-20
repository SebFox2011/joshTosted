import React from 'react';
import { ToastsContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, close } = React.useContext(ToastsContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            close={close}
            id={toast.id}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
