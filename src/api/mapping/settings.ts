export const mappedSettingsData = (data: object) => {
  return {
    phone: data.settings.phone,
    email: data.settings.email,
    location: {
      lat: data.settings.location && data.settings.location.lat,
      lon: data.settings.location && data.settings.location.lon
    },
    logoSmall: data.settings.logoSmall && data.settings.logoSmall.url,
    logoFull: data.settings.logoFull && data.settings.logoFull
  }
}
