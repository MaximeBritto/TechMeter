/**
 * name: attribut du bouton, onClick: execution, style: style personnalisable.
 * @param {name, onClick, style} props 
 * @returns un bouton générique.
 */
const ButtonGeneric = (props) => {
    // eslint-disable-next-line react/prop-types
    const { name,onClick,style} = props;
    return (
        // eslint-disable-next-line react/prop-types
        <button style={style} className="btn btn-primary" onClick={onClick}>{name}</button>
    );

};

export default ButtonGeneric;