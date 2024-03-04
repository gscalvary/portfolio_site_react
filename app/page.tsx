'use client'

import EducationTable from '@/app/ui/education/table';
import ExperienceTable from '@/app/ui/experience/table';
import headShot from '@/public/Headshot.jpeg'
import heroHeaderPic from '@/public/HeroHeader.jpg';
import Image from "next/image";
import me from '@/app/data/me.json'
import ProjectTable from '@/app/ui/project/table';
import SocialMedia from '@/app/ui/socialMedia/links'
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
      <div className='bgWrap groovy-chocolate'>
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
      <h1 className='name text-center uppercase text-5xl groovy-cream-text px-4'>{ me.bio.name }</h1>
      <h3 className='title text-center uppercase text-2xl groovy-cream-text px-4'>{ me.bio.titles[titleIndex] }</h3>
      {/* About */}
      <section className='groovy-cream px-4 py-10'>
        <div className='container md:grid md:grid-cols-3 mx-auto'>
          <div>
            <h2 className='text-3xl'>About me</h2>
            <h4>{ me.bio.welcomeMessage }</h4>
          </div>
          <div>
            <Image
              src={headShot}
              alt="My smiling face, well kind of"
              placeholder='blur'
              sizes='30vw'
              className="headshot md:block mx-auto"
            />
          </div>
          <div>
            <h2 className='text-3xl'>Location</h2>
            <h4>{ me.bio.location }</h4>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section className='groovy-gold px-4 py-10'>
        <h2 className='mb-10 text-center text-3xl'>Experience</h2>
        <ExperienceTable/>
      </section>
      {/* Education */}
      <section className='groovy-cream px-4 py-10'>
        <h2 className='mb-10 text-center text-3xl'>Education</h2>
        <EducationTable/>
      </section>
      {/* Personal Projects */}
      <section className='groovy-gold px-4 py-10'>
        <h2 className='mb-10 text-center text-3xl'>Personal Projects</h2>
        <ProjectTable/>
      </section>
      {/* Footer */}
      <div className='footer groovy-chocolate px-4'>
        <SocialMedia/>
      </div>
    </main>
  );
}
