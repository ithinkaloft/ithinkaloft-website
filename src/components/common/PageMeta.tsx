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

    // 5. Image (optional)
    if (image) {
      const imageUrl = image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`;
      setMetaTag('property', 'og:image', imageUrl);
      setMetaTag('name', 'twitter:image', imageUrl);
      setMetaTag('name', 'twitter:card', 'summary_large_image');
    } else {
      removeMetaTag('property', 'og:image');
      removeMetaTag('name', 'twitter:image');
      setMetaTag('name', 'twitter:card', 'summary');
    }

    // 6. Robots / Indexing
    if (noIndex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      removeMetaTag('name', 'robots'); // Let default crawler behavior apply
    }
  }, [title, description, path, image, type, noIndex]);

  return null;
}
