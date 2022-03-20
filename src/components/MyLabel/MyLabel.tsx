import "./style.css";
import { AllCaps } from "../../stories/components/MyLabel.stories";

//Wow, la documentación de las propiedades se hacen con comentarios /** */
//Pero eso sí, los cambios hechos en estas descripciones no se verán en el localhost
//hasta que se haga un cambio signitifacivo en el componente :/
//Haz un pequeño ajuste en el componente para forzar el render y con ello, ver los nuevos comentarios
export interface Properties {
	/**
	 * Texto que se mostrará en el label
	 */
	label: string;
	/**
	 * Tamaño del texto del label
	 */
	size?: "normal" | "h1" | "h2" | "h3";
	/**
	 * True par capitalizar el texto (primera letra en mayúscula)
	 */
	allCaps?: boolean;
	/**
	 * color del texto
	 */
	color?: "primary" | "secondary" | "tertiary";
	/**
	 * color del fondo
	 */
	background?: string;
}

const MyLabel = ({
	label,
	size = "normal",
	allCaps = false,
	color = "primary",
	background = "#FFFFFF",
}: Properties) => {
	const text = allCaps
		? label.charAt(0).toUpperCase() + label.slice(1)
		: label;

	const style = {
		backgroundColor: background,
	};

	return (
		<span className={`label ${size} text-${color}`} style={style}>
			{text}
		</span>
	);
};

export default MyLabel;
