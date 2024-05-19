import React, { useState } from 'react';
import './biography.scss'

const shortBio = `
What's up?! I'm Trevor, a passionate Star Wars nerd and Web Dev. I speacialize in React and JavaScrpit, and enjoy taking on new challenges. Lets Connect!
`;

const mediumBio = `
Hi there! I'm Trevor, a passionate web developer with a love for building
creative and user-friendly web applications, and know an embarrasing amount of Star Wars Lore. I speacialize in React and JavaScrpit, 
and I enjoy tackling new challenges in the world of web development.

My journey in web development started November 2023, when I decided to Leave Apple Inc. and enroll in the Brainstation Software Engineering Bootcamp. Since then, I've had the pleasure to work on various projects that are listed below! Take a look.
`;

const longBio = `
Greetings and thanks for coming! My name is Trevor Christensen. I'm a passionate web developer with a love for building
creative and user-friendly web applications. I specialize in React, JavaScript, SASS, HTML, and many more.

I learned how to do these things through an online bootcamp hosted by, BrainStation. I enjoyed tackling these new challenges and really pushing myself beyond my precieved limtis.

Since then, I've had the opportunity to work on various projects that have honed my skills in web developent.
When I'm not coding, you can find me reading, gaming, or exploring the latest fan fictions about popular Manga's. It's an honor to have you read this, and if your a developer yourself, lets chat!
`;

function About() {
  const [bioType, setBioType] = useState('short');

  const handleBioChange = (type) => {
    setBioType(type);
  };

  let bioContent;
  switch (bioType) {
    case 'short':
      bioContent = shortBio;
      break;
    case 'medium':
      bioContent = mediumBio;
      break;
    case 'long':
      bioContent = longBio;
      break;
    default:
      bioContent = shortBio;
  }

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="bio-options">
          <button onClick={() => handleBioChange('short')}>Short Bio</button>
          <button onClick={() => handleBioChange('medium')}>Medium Bio</button>
          <button onClick={() => handleBioChange('long')}>Long Bio</button>
        </div>
        <p>{bioContent}</p>
      </div>
    </section>
  );
}

export default Biography;