import '../assets/styles/technosList/TechnosList.css';

const TechnosList = () => {
    // eslint-disable-next-line react/prop-types
    const { technos, icon } = props;
  return (
    <table>
      <tbody>
        {technos?.map((techno, index) => (
          <tr key={index}>
            <td>{techno.techno}</td>
            <td>{techno.pourcentage}</td>
            <td>{techno.projets}</td>
            <p>{icon}</p>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default TechnosList;
