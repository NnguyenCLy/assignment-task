import ContentBody from "../ContentBody";
import ContenHeader from "../ContentHeader";

const headerLinks = ["Dashboard"];

const PageHeader = () => {
  return <ContenHeader name="Dashboard" links={headerLinks}></ContenHeader>;
};

const PageContent = () => {
  return <div></div>;
};

const Dashboard = () => {
  return (
    <ContentBody
      pageHeader={<PageHeader></PageHeader>}
      pageContent={<PageContent />}
    ></ContentBody>
  );
};

export default Dashboard;
