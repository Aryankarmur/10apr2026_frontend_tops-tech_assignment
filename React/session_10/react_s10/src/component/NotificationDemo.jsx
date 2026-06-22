import { useContext } from "react";
import { NotificationContext } from "../NotificationContext";


function NotificationDemo() {
  const {
    notificationCount,
    addNotification,
    clearNotifications,
  } = useContext(NotificationContext);

  return (
    <div>
      <h2>
        Unread Messages: {notificationCount}
      </h2>

      <button onClick={addNotification}>
        Receive Message
      </button>

      <button onClick={clearNotifications}>
        Mark All as Read
      </button>
    </div>
  );
}

export default NotificationDemo;