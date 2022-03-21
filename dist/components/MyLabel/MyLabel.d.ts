/// <reference types="react" />
import "./style.css";
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
    /**
     * es cursiva?
     */
    italic?: boolean;
}
declare const MyLabel: ({ label, size, allCaps, color, background, italic, }: Properties) => JSX.Element;
export default MyLabel;
