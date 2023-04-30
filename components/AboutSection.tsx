import Image from 'next/image'

const skills = [
  { skill: 'HTML, CSS', width: '98%' },
  { skill: 'JavaScript, TypeScript', width: '75%' },
  { skill: 'Python', width: '80%' },
  { skill: 'React, Next.js', width: '90%' },
  { skill: 'Tailwind CSS', width: '90%' },
  { skill: 'Git', width: '60%' },
  { skill: 'GitHub', width: '40%' },
  { skill: 'SASS', width: '85%' },
  { skill: 'CssFlex', width: '99%' },
  { skill: 'CssGird', width: '70%' },
  { skill: 'Regular Expressions (RegExp)', width: '40%' },
  { skill: 'Search Engine Optimization (SEO)', width: '60%' },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            {/* <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br /> */}
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{' '}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <Image
              src="/hombre-hello.svg"
              alt="hello"
              width={165}
              height={165}
              className="m-auto mt-3"
            />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map(({ skill }) => (
                <p
                  key={skill}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {skill}
                </p>
              ))}
            </div> */}
            {skills.map(({ skill, width }) => (
              <div key={skill}>
                <span>{skill}</span>
                <div className="flex items-center">
                  <div className="progress-bar w-full">
                    <span className="bar block">
                      <span
                        className="progress text-white block"
                        style={{ width }}
                      ></span>
                    </span>
                  </div>
                  <span className="text-base ml-2">{width}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
