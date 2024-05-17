import { ButtonInterface } from './button';
import { mappedNavigationData } from './navigation';

interface Footer {
  disclaimer?: string;
  legalLinks?: [
    ButtonInterface
  ]
}

export const mappedFooterData = (data: { footer: Footer }) => {
  return {
    disclaimer: data.footer?.disclaimer ?? null,
    legalLinks: data.footer?.legalLinks ? mappedNavigationData(data.footer.legalLinks) : null
  };
};
