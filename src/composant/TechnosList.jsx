import Constant from '../assets/constants/Constants';
import '../assets/styles/technosList/TechnosList.css';
import ButtonGeneric from './ButtonGeneric';

/**
 * Tableau de données avec les technos et leurs pourcentages.
 * Il prend en paramétre : datas: données du tableau, onClick: execution, style: style personnalisable du bouton.
 * @param {datas, onClick, style} props 
 * @returns une liste de technos.
 */
const TechnosList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { datas, onClick, style } = props;
  return (
    <table>
      <tbody>
        {datas?.map((data, index) => (
          <tr key={index}>
            <td>{data.techno}</td>
            <td>{data.pourcentage}</td>
            <td>{data.projets}</td>
            <td><ButtonGeneric name={Constant.VIEW_TECHNO} onClick={()=>onClick(data.techno)} style={style}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default TechnosList;
