interface iStyling {
  width?: string;
  height?: string;
  marginBottom?: string;
  background?: string;
  padding?: string;
  marginTop?: string;
}

interface iButtonStyling extends iStyling {
  cursor?: string;
}

export interface iBaseStyling {
  styling?: iStyling;
}

export interface iButton {
  styling?: iButtonStyling;
}
