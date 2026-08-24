import './SectionHeading.css';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ 
  title, 
  eyebrow, 
  description, 
  align = 'left', 
  className = '' 
}: SectionHeadingProps) {
  return (
    <div className={`section-heading align-${align} ${className}`.trim()}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
