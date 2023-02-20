import React from "react";
export const ToastsContext = React.createContext();

function ToastProvider({ message, variant, children }) {
  const [toasts, setToats] = React.useState([]);
  function close(id) {
    setToats(toasts.filter((toast) => toast.id !== id));
  }

  function createToasts(message, variant) {


    setToats([...toasts, { id: toasts.length, message, variant }]);
  }
  return (
    <>
      <ToastsContext.Provider value={{ toasts, close, createToasts }}>
        {children}
      </ToastsContext.Provider>
    </>
  );
}

export default ToastProvider;
