import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ClientMode } from "./ClientMode";

export interface IGetAadTokenProps {
  description: string;
  userToken: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  clientMode: ClientMode;
  context: WebPartContext;
}
