export interface NavigationInterface {
  name?: string;
}

export const mappedNavigationData = (data: NavigationInterface ) => {
  console.log('HERE', data)
  return {
    name: data.name
  };
};
