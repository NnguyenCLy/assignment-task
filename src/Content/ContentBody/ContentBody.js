const ContentBody = (props) => {
  const { pageContent, pageHeader } = props;
  return (
    <section role="main" className="content-body">
      {pageHeader}
      {pageContent}
    </section>
  );
};

export default ContentBody;
