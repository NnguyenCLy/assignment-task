import LoggedUser from "../logged-user.jpg";

export const messageData = [
  { title: "Joseph Doe", message: "Lorem ipsum dolor sit." },
  { title: "Joseph Junior", message: "Truncated message." },
  { title: "Luis Nguyen", message: "I love you" },
];

const MessageContent = (props) => {
  const { title, message } = props;
  return (
    <a href="#" className="clearfix">
      <figure className="image">
        <img src={LoggedUser} alt="Joseph Doe Junior" className="img-circle" />
      </figure>
      <span className="title">{title}</span>
      <span className="message">{message}</span>
    </a>
  );
};

export default MessageContent;
