import { Toolbar } from "../components/toolbar";
import eomStyles from "../css/EOM.module.css";

export const EOM = ({ employee }) => {
  console.log(employee);

  return (
    <div className={eomStyles.pageContainer}>
      <Toolbar />
      <div className={eomStyles.main}>
        <h1>Employee of the month</h1>
        <div className={eomStyles.employeeOfTheMonth}>
          <h2>{employee.name}</h2>
          <h3>{employee.position}</h3>
          <img src={employee.image} alt={employee.description} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

const url =
  "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth";

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(url);

  const employee = await apiResponse.json();

  return {
    props: {
      employee
    }
  };
};

export default EOM;
