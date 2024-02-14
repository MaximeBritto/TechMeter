import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const VIEW_TECHNO = <ChevronRightIcon/>;
const NAME_APPLICATION = "TechMeter";
const RETURN = (
    <>
        <ChevronLeftIcon />
        Retour
    </>
);
const LOGOUT = "Déconnexion";
const NOT_FOUND = "Désolé, la page que vous cherchez n'existe pas!";
const CODE_MESSAGE_ERROR = "404 - Page Not Found";
const VERIF_AUTH = "Vérification de l'authentification...";
const MESSAGE_ERROR_AUTH = "Erreur lors de la vérification de l'authentification :";

const Constant = {
    VIEW_TECHNO,
    NAME_APPLICATION,
    RETURN,
    LOGOUT,
    NOT_FOUND,
    CODE_MESSAGE_ERROR,
    VERIF_AUTH,
    MESSAGE_ERROR_AUTH
}

export default Constant;