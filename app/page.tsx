'use client'

import EducationTable from '@/app/ui/education/table';
import ExperienceTable from '@/app/ui/experience/table';
import headShot from '@/public/Headshot.jpeg'
import heroHeaderPic from '@/public/HeroHeader.jpg';
import Image from "next/image";
import me from '@/app/data/me.json'
import ProjectTable from '@/app/ui/project/table';
import { useEffect, useState } from 'react';

export default function Home() {

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (titleIndex < me.bio.titles.length - 1) {
        setTitleIndex(titleIndex + 1);
      } else {
        setTitleIndex(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [titleIndex]);

  return (
    <main>
      {/* Hero Header */}
      <section>
        <div className='bgWrap'>
          <Image
            src={heroHeaderPic}
            alt="Chris at work"
            placeholder='blur'
            fill
            sizes='100vw'
            className="hidden md:block"
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <h1 className='name text-center uppercase text-5xl groovy-cream-text'>{ me.bio.name }</h1>
        <h3 className='text-center uppercase text-2xl groovy-cream-text'>{ me.bio.titles[titleIndex] }</h3>
      </section>
      {/* About */}
      <section className='groovy-cream'>
        <div className='grid grid-rows-1 grid-flow-col'>
          <div>
            <h2>About me</h2>
            <h4>{ me.bio.welcomeMessage }</h4>
          </div>
          <div>
          <Image
            src={headShot}
            alt="My smiling face, well kind of"
            placeholder='blur'
            sizes='30vw'
            className="md:block"
          />
          </div>
          <div>
            <h2>Location</h2>
            <h4>{ me.bio.location }</h4>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section className='groovy-gold'>
        <h2 className='text-center'>Experience</h2>
        <ExperienceTable/>
      </section>
      {/* Education */}
      <section className='groovy-cream'>
        <h2 className='text-center'>Education</h2>
        <EducationTable/>
      </section>
      <section className='groovy-gold'>
        <h2 className='text-center'>Personal Projects</h2>
        <ProjectTable/>
      </section>
    </main>
  );
}
