import Link from 'next/link';
import Image from 'next/image';

export default function Footer({title, description, projectUrl}) {
  return (
    <>
    <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={projectUrl} className="card-cta">[ &gt; VIEW PROJECT &lt; ]</a>
    </div>
    </>
  );
}