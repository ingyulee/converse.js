import { html } from "lit-html";

export default  (o) => html`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="${o.classes}" width="${o.width}" height="${o.height}">
        <image width="${o.width}" height="${o.height}" preserveAspectRatio="xMidYMid meet" xlink:href="${o.image}"/>
    </svg>`;
