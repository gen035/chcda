import { NavigationInterface } from './navigation';
import { mappedNavigationData } from './navigation';

interface Footer {
  disclaimer?: string | null;
  legalLinks?: NavigationInterface;
}

export const mappedFooterData = (data: { footer: Footer }) => {
  return {
    disclaimer: data.footer?.disclaimer ?? null,
    legalLinks: data.footer?.legalLinks ? mappedNavigationData(data.footer.legalLinks) : null
  };
};
