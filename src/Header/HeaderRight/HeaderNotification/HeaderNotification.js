import Notification from "./Notification";
import NotificationContent, { notificationData } from "./NotificationContent";
import MessageContent, { messageData } from "./MessageContent";
import ProgressContent, { progessData } from "./ProgressContent";

function ProgessContentList() {
  const lstNotification = progessData.map((data, index) => (
    <li key={index}>
      <ProgressContent
        title={data.title}
        percent={data.percent}
      ></ProgressContent>
    </li>
  ));
  return <ul>{lstNotification}</ul>;
}

function NotificationContentList() {
  const lstNotification = notificationData.map((data, index) => (
    <li key={index}>
      <NotificationContent
        title={data.title}
        iconName={data.iconName}
        message={data.message}
      ></NotificationContent>
    </li>
  ));
  return <ul>{lstNotification}</ul>;
}

function MessageContentList() {
  const lstNotification = messageData.map((data, index) => (
    <li key={index}>
      <MessageContent
        title={data.title}
        message={data.message}
      ></MessageContent>
    </li>
  ));
  return <ul>{lstNotification}</ul>;
}

const HearderNotification = () => {
  return (
    <ul className="notifications">
      <Notification
        icon="fa fa-tasks"
        name="Tasks"
        number={progessData.length}
        content={<ProgessContentList />}
      ></Notification>
      <Notification
        icon="fa fa-envelope"
        name="Messages"
        number={messageData.length}
        content={<MessageContentList />}
      ></Notification>
      <Notification
        icon="fa fa-bell"
        name="Alerts"
        number={notificationData.length}
        content={<NotificationContentList />}
      ></Notification>
    </ul>
  );
};

export default HearderNotification;
