import { SettingsInterface } from '@/interfaces/settings';

export const mappedSettingsData = (data: { settings: SettingsInterface }) => {
  return {
    phone: data.settings.phone ?? '',
    email: data.settings.email ?? '',
    location: {
      lat: data.settings.location?.lat ?? 0,
      lon: data.settings.location?.lon ?? 0
    },
    logoSmall: data.settings.logoSmall?.url ?? '',
    logoFull: data.settings.logoFull ?? ''
  };
}
