import { useEffect } from 'react';
import { siteConfig } from '../../data/site';
import { setMetaTag, removeMetaTag, setLinkTag } from '../../utils/seo';

interface PageMetaProps {
  title?: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export default function PageMeta({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noIndex = false,
}: PageMetaProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title
      ? (title === siteConfig.defaultTitle ? title : siteConfig.titleTemplate.replace('%s', title))
      : siteConfig.defaultTitle;
    
    document.title = formattedTitle;
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('name', 'twitter:title', formattedTitle);

    // 2. Description
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:description', description);
    setMetaTag('name', 'twitter:description', description);

    // 3. URL and Canonical
    // Ensure path has leading slash unless empty, but canonicals usually do not have trailing slash unless root
    const formattedPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${siteConfig.siteUrl}${formattedPath === '/' ? '' : formattedPath}`;
    
    setLinkTag('canonical', canonicalUrl);
    setMetaTag('property', 'og:url', canonicalUrl);

    // 4. Type
    setMetaTag('property', 'og:type', type);

    // 5. Image
    const fallbackImage = `${siteConfig.siteUrl}/assets/brand/web/ithinkaloft-og-1200x630.webp`;
    const finalImage = image ? (image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`) : fallbackImage;

    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('name', 'twitter:image', finalImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 6. Robots / Indexing
    if (noIndex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      removeMetaTag('name', 'robots'); // Let default crawler behavior apply
    }
  }, [title, description, path, image, type, noIndex]);

  return null;
}
