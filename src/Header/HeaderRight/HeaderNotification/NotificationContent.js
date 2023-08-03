export const notificationData = [
  {
    title: "Server is Down!",
    iconName: "fa fa-thumbs-down bg-danger",
    message: "Just now",
  },
  {
    title: "User Locked",
    iconName: "fa fa-lock bg-warning",
    message: "15 minutes ago",
  },
  {
    title: "Connection Restaured",
    iconName: "fa fa-signal bg-success",
    message: "10/10/2014",
  },
];

const NotificationContent = (props) => {
  const { title, iconName, message } = props;
  return (
    <a href="#" className="clearfix">
      <div className="image">
        <i className={iconName}></i>
      </div>
      <span className="title">{title}</span>
      <span className="message">{message}</span>
    </a>
  );
};

export default NotificationContent;
