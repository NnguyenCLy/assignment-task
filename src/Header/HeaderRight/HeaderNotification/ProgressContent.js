export const progessData = [
  { title: "Generating Sales Report", percent: "60" },
  { title: "Importing Contacts", percent: "93" },
  { title: "Uploading something big", percent: "33" },
];

const ProgressContent = (props) => {
  const { title, percent } = props;
  const temp = percent + "%";
  return (
    <>
      <p className="clearfix mb-xs">
        <span className="message pull-left">{title}</span>
        <span className="message pull-right text-dark">{temp}</span>
      </p>
      <div className="progress progress-xs light">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: temp }}
        ></div>
      </div>
    </>
  );
};

export default ProgressContent;
