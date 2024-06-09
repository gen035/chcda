export interface SettingsInterface {
  phone?: string;
  email?: string;
  location?: {
    lat?: number;
    lon?: number;
  };
  logoSmall?: {
    url?: string;
  };
  logoFull?: string;
}