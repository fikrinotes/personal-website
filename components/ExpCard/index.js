import Link from 'next/link';
import Image from 'next/image';

export default function ExpCard({title, description, Url}) {
  return (
    <>
    <div className="exp-box">
        <h3>{title}</h3>
        <p align="justify">{description}</p>
        <a href={Url} className="card-cta">[ &gt; VIEW PROJECT &lt; ]</a>
    </div>
    </>
  );
}