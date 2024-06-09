import { FooterInterface } from '@/interfaces/footer';
import { mappedNavigationData } from './navigation';

export const mappedFooterData = (data: { footer: FooterInterface }) => {
  return {
    disclaimer: data.footer?.disclaimer ?? null,
    legalLinks: data.footer?.legalLinks ? mappedNavigationData(data.footer.legalLinks) : null
  };
};
