import React from 'react';

export const Skills = () => {
  const skillData = [
    { name: 'HTML', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png' },
    { name: 'CSS', imgSrc: 'https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png' },
    { name: 'JavaScript', imgSrc: 'https://logosdownload.com/logo/javascript-logo-big.png' },
    { name: 'Node.js', imgSrc: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png' },
    { name: 'React.js', imgSrc: 'https://ciand.net/images/ReactJs.png' },
    { name: 'Tailwind', imgSrc: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png' },
    { name: 'TypeScript', imgSrc: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png' },
    { name: 'VS Code', imgSrc: 'https://iconape.com/wp-content/png_logo_vector/visual-studio-code.png' },
    { name: 'GitHub', imgSrc: 'https://pngimg.com/uploads/github/github_PNG28.png' },
    { name: 'Netlify', imgSrc: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png' },
    { name: 'Figma', imgSrc: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236765/figma-icon-md.png' },
    { name: 'Chrome', imgSrc: 'https://www.pinclipart.com/picdir/big/493-4935950_chrome-logo-png-transparent-google-chrome-png-clipart.png' }
  ];

  return (
    <div className=' animate-rotate-y py-12'>
      <h2 className='p-6 font-bold font-sans text-4xl text-center'>
        My <span className='text-[#407EF6]'>Skills</span> 
      </h2>
      <div className=''>
        <ul className='list-none p-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {skillData.map(skill => (
            <li key={skill.name} className='p-2 m-2 bg-gradient-to-b from-gray-800 to-black flex items-center border-transparent rounded-lg'>
              <img src={skill.imgSrc} alt={skill.name} className='w-10 h-10 mr-4' />
              <p className='text-white'>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
