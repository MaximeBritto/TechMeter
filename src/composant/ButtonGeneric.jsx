

const ButtonGeneric = (props) => {

    return (
        // eslint-disable-next-line react/prop-types
        <button style={props.style} className="btn btn-primary" onClick={props.onClick}>{props.name}</button>
    );

};

export default ButtonGeneric;