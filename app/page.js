import Image from 'next/image';
import Me from 'public/my_img.jpg';
export default function Home() {
  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>
      <div className='space-y-2 pt-5 pb-8 md:space-x-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13'>
            Home
        </h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image alt="my personal image"  src={Me} className='rounded-full object-cover object-top w-48 h-48'/>
          <h1 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'><span className="text-teal-500">Abdelkabir</span> Elhamoussi</h1>
          <p className='text-gray-500 dark:text-gray-300 text-center w-96'>
              software engineering student
          </p>
          <div className='flex space-x-4 pt-6'>
            {/*github*/}
            <a href='https://github.com/abdeLKabir-56' target='_blank'>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className='w-10 h-10 text-teal-500 hover:text-teal-600'
                  
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
            </a>
            {/*linkedin*/}
            <a href='https://www.linkedin.com/in/abdelkabir-elhamoussi-158bb51ba/' target='_blank'>
            <svg
              viewBox="0 0 960 1000"
              fill="currentColor"
              className='w-10 h-10 text-teal-500 hover:text-teal-600'
            >
              <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
            </svg>
            </a>
            {/*x*/}
            <a href='https://twitter.com/AElhamoussi' target='_blank'>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className='w-10 h-10 text-teal-500 hover:text-teal-600'
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
            </svg>
            </a>
            {/*email*/}
            <a href='mailto:abdelkabirelhamoussi@gmail.com' target='_blank'>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className='w-10 h-10 text-teal-500 hover:text-teal-600'
            >
              <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
            </svg>
            </a>
          </div>
        </div>

        <div className='prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2'>
          <p>I 'm Abdelkabir Elhamoussi,
             a <span className="text-teal-500">software engineering student</span> with a diverse skill set. Proficient in languages like C,
              C++, Python, Java, and JavaScript, I create elegant solutions for complex technical challenges.
               I 'm well-versed in essential tools such as Git, Linux, and Visual Studio, 
               ensuring efficient development and version control. My strong analytical
                abilities allow me to break down intricate problems,
                 while my collaborative nature and excellent communication skills make me a valuable asset in team projects. 
                 I'm also a dedicated learner, committed to staying abreast of emerging technologies,
                  which positions me well for navigating the ever-evolving tech landscape.</p>
        </div>
      </div>
    </div>
  )
}
