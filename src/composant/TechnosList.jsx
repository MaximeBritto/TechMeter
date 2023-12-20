import '../assets/styles/technosList/TechnosList.css';

const TechnosList = (props) => {
    // eslint-disable-next-line react/prop-types
    const { technos } = props;
  return (
    <table>
      <tbody>
        {technos?.map((techno, index) => (
          <tr key={index}>
            <td>{techno.techno}</td>
            <td>{techno.pourcentage}</td>
            <td>{techno.projets}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default TechnosList;
