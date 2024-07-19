export interface SettingsInterface {
  phone?: string;
  email?: string;
  facebook?: string;
  location?: {
    lat?: number;
    lon?: number;
  };
  logoSmall?: {
    url?: string;
  };
  logoFull?: string;
}