import React from 'react';
import { useState } from 'react';
import VRgirl from "./assets/VRgirl.png";
import MatrixLogo from "./assets/MainLogo.png";
import IEEELogo from "./assets/IEEELogo.png";
import CSLogo from "./assets/CSLogo.png";
import SBLogo from "./assets/SBLogo.png";
import IEDCLogo from "./assets/IEDCLogo.png";
import VRgirl2 from "./assets/VRgirl2.png";
import datecnt from "./assets/datecnt.png";
import perk1 from "./assets/perk1.png";
import perk2 from "./assets/perk2.png";
import perk3 from "./assets/perk3.png";
import perk4 from "./assets/perk4.png";
import ticket from"./assets/ticket.png";
import joinUs from "./assets/joinUs.png";
import NavLogo from "./assets/NavLogo.png";
import barCode from "./assets/barCode.png"
import "./App.css";

const MatrixLandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const perks = [
    {
      title: "24 Hour Hackathon",
      description: "Experience coding excellence with full workshop and mentorship opportunities.",
      image: perk1
    },
    {
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals, mentors, and industry experts.",
      image: perk2
    },
    {
      title: "Exciting Challenges",
      description: "Tackle real-world problems and test your technical expertise.",
      image: perk3
    },
    {
      title: "Prizes and Recognition",
      description: "Compete to win exciting rewards and boost your portfolio.",
      image: perk4
    }
  ];

    const schedule = {
      "event": "Matrix 2.0",
      "start": "25-01-2025, 10:00 am",
      "end": "26-01-2025, 10:00 am"
    };
  
  return (
    <div className="bg-gradient-to-r lg:px-24 from-[#041242] to-[#380343] ">
     
     
     <nav className="flex justify-between items-center p-2 w-full z-50 bg-gradient-to-r from-[#041242]/90 to-[#380343]/90 backdrop-blur-sm fixed sm:static">      
     <img src={NavLogo} alt="Matrix 2.0" className='px-1 h-5 sm:h-8' />
      
      {/* Menu icon for small screens */}
      <div className="lg:hidden">
        <button 
          className="text-white bg-transparent text-2xl " 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex lg:items-center lg:static lg:w-auto lg:bg-transparent pr-
        ${menuOpen 
          ? 'absolute top-full left-0 w-full  bg-gradient-to-r from-[#041242] to-[#380343] sm:p-4' 
          : 'hidden'
        }`}
      >
        <div className="flex lg:flex-row flex-col text-center pb-4 pt-4 gap-3 sm:gap-4 text-white  text-sm tracking-wider ">
          <a href="#hero"  onClick={handleLinkClick} className="hover:opacity-80">HOME</a>
          <span className="opacity-50 hidden lg:inline">•</span>
          <a href="#schedule"  onClick={handleLinkClick} className="hover:opacity-80">SCHEDULE</a>
          <span className="opacity-50 hidden lg:inline">•</span>
          <a href="#guidelines"  onClick={handleLinkClick} className="hover:opacity-80">GUIDELINES</a>
          <span className="opacity-50 hidden lg:inline">•</span>
          <a href="#contact"  onClick={handleLinkClick} className="hover:opacity-80">CONTACT</a>
        </div>
      </div>
    </nav>
       {/* Hero Section */}
       <section id="hero" className="relative h-screen f pt-1 sm:pt-16">
       <main className="container mx-auto px-2 sm:px-6 pt-80 sm:pt-12 flex justify-center items-center relative h-[calc(100vh-88px)]">
       {/* Centered VR Girl Image */} 
       <div className="absolute  inset-0  flex justify-end overflow-hidden sm:justify-center items-center">
      <img
        src={VRgirl}
        alt="Person wearing futuristic VR goggles"
        className=" h-[70vh] -scale-x-100   sm:h-full object-contain z-10 translate-x-48 sm:scale-x-100 md:translate-x-0"      />
    </div>

        {/* Left Content */}
        <div className="absolute left-4 top-50 sm:left-6 top-64 -translate-y-1/2 max-w-xl z-20">
        <img src={MatrixLogo} alt="Matrix 2.0"  className="w-64 h-auto md:w-48 lg:w-96"/>

          
          <h2 className="text-2xl sm:text-4xl font-light mb-22 sm:mb-8 text-white leading-relaxed">
          Rewrite Reality in
            <br />
            24 Hours
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-8 text-white/90 font-light leading-relaxed">
          Whether you're a coder, designer,
            <br />
            or an ideator, Matrix 2.0 is the
            <br />
            perfect place to bring your ideas
            <br />
            to life, learn, and grow.
          </p>
          <button className="bg-teal-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base flex items-center gap-2 hover:bg-teal-500 transition-colors">
          <a href='https://forms.gle/m4uqbHvKAXyGg8weA' className='text-white'>Register</a>
          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          </button>
        </div>

        {/* Date Container - Proportionally scaled for mobile */}
        <div className="absolute bottom-8 right-4 z-20 scale-[0.65] sm:scale-100 origin-bottom-right">
          <div className="relative">
            <img src={datecnt} alt="Date container" className="w-65" />
            <div className="absolute inset-0 flex flex-col justify-center p-6">
              <h3 className="text-3xl font-bold text-white mb-4">25-26 JAN 2025</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Conducted by: IEEE Computer Society
                Student Branch Chapter, GEC Palakkad
                in association with IEEE SB GEC
                PALAKKAD
              </p>
              <div className="mt-3 inline-block bg-teal-400 text-white px-4 py-2 rounded">
                Matrix 2.0
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-12 md:bottom-auto md:left-auto md:top-4 md:right-12 z-20 flex gap-4">
  {/* Barcode */}
  <img 
    src={barCode} 
    alt="Barcode" 
    className="h-24 object-contain rotate-180 sm:h-48 sm:rotate-0"
  />
</div>
       
      </main>
    </section>
  

      {/* Sponsors Section */}
      <section className="py-2  sm:py-12">
      <div className="container mx-auto px-6 sm:px-16">
      <div className="flex justify-center items-center gap-8 sm:gap-12">
      <img src={IEEELogo} alt="IEEE" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src={CSLogo} alt="CS" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src={SBLogo} alt="SB" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
           {/*<img src={IEDCLogo} alt="IEDC" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />*/}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-96 sm:h-screen flex items-center py-8 sm:py-0">
      <div className="container mx-auto px-20 sm:px-16 flex flex-col sm:flex-row gap-4 sm:gap-12">
      <div className="w-full sm:w-1/2">
      <div className="relative sm:h-[500px] h-auto">
  <img 
    src={VRgirl2} 
    alt="Second VR visualization"
    className="w-full h-full object-cover rounded-lg mix-blend-lighten sm:block hidden"
  />
</div>
          </div>

          {/* About Text */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">MATRIX 2.0</h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/90">
          Matrix 2.0 is a 24-hour hackathon designed to bring together tech enthusiasts, innovators,
              and problem solvers. Create real-world solutions and showcase them while
              competing for exciting prizes. An opportunity to demonstrate your skills,
              creativity, and teamwork prowess at GEC Palakkad.
            </p>
          </div>
        </div>
      </section>
       {/* Prize Pool Section */}
       <section className="py-8 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-16 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-teal-400/20 rounded-full blur-[50px] sm:blur-[100px] z-0"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white relative z-10">PRIZE POOL</h2>
          <div className="text-8xl sm:text-10xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text relative z-10">
            ₹15K
          </div>
          <p className="text-lg sm:text-xl mt-2 sm:mt-4 text-white/80 relative z-10">in prizes and rewards</p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-8 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 ">
        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
        
        {/* Mobile and Small Screens: Alternating Layout */}
        <div className="lg:hidden flex flex-col gap-0">
          {perks.map((perk, index) => (
            <div 
              key={index} 
              className="flex md :flex-row gap-2 items-center"
            >
              {/* Image Section */}
              <div className={`w-full md:w-1/4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group ">
                  <div className=" border-teal-400/30 rounded-lg p-4 backdrop-blur-sm bg-black/10 hover:bg-black/20 transition-all duration-300">
                    <img 
                      src={perk.image} 
                      alt={perk.title} 
                      className=" h-48" 
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-teal-400/0 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>

              {/* Text Section */}
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="border-2 border-teal-400/30 rounded-lg p-6 backdrop-blur-sm bg-black/10">
                  <h3 className="text-white text-xl font-bold mb-2">{perk.title}</h3>
                  <p className="text-white/80 text-sm">{perk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Screens: 4-Column Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          {/* Background shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-lg transform -skew-y-2"></div>
          
          {perks.map((perk, index) => (
            <div key={index} className="relative group">
              <div className="border-2 border-teal-400/30 rounded-lg p-6 backdrop-blur-sm bg-black/10 hover:bg-black/20 transition-all duration-300">
                <img 
                  src={perk.image} 
                  alt={perk.title} 
                  className="h-48  object-cover rounded mb-4" 
                />
                <h3 className="text-white text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-white/80 text-sm">{perk.description}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-teal-400/0 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Schedule Section */}
    <section id="schedule" className="py-2 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
         
          <div className="max-w-xl mx-auto">
            
            <pre className="bg-black/20 backdrop-blur rounded-lg p-6 overflow-x-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">SCHEDULE</h2>
              <code className="text-[#ffffff] text-1xl font-mono whitespace-pre">
{`schedule = {
    "event": "${schedule.event}",
    "start": "${schedule.start}",
    "end": "${schedule.end}"
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>
  {/* Fee Section */}
  <section className="py-8 sm:py-24 relative">
      <div className="container mx-auto px-6 sm:px-6">
        <h2 className="text-xl sm:text-4xl font-bold text-white text-center mb-4 sm:mb-12">
          REGISTRATION FEES
        </h2>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-8 max-w-4xl mx-auto">
          <div className="space-y-2 sm:space-y-8">
            <div className="relative group scale-75 sm:scale-100 origin-top">
              <img 
                src={ticket} 
                alt="Ticket" 
                className="w-full h-auto object-contain" 
              />
              <div className="absolute inset-0 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-start text-white pl-2 sm:pl-4"> 
                <p className="text-lg sm:text-4xl font-bold">₹119</p>
                <p className="text-[10px] sm:text-lg opacity-80 leading-tight">IEEE MEMBERS<br />GEC PALAKKAD</p>
              </div>
            </div>
            <div className="relative group scale-75 sm:scale-100 origin-top">
              <img 
                src={ticket} 
                alt="Ticket" 
                className="w-full h-auto object-contain " 
              />
              <div className="absolute inset-0  transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-start text-white pl-2 sm:pl-4"> 
                <p className="text-lg sm:text-4xl font-bold">₹199</p>
                <p className="text-[10px] sm:text-lg opacity-80 leading-tight">IEEE MEMBERS<br />NON-GEC</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-8">
            <div className="relative group scale-75 sm:scale-100 origin-top">
              <img 
                src={ticket} 
                alt="Ticket" 
                className="w-full h-auto object-contain" 
              />
              <div className="absolute inset-0 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-start text-white pl-2 sm:pl-4"> 
                <p className="text-lg sm:text-4xl font-bold">₹149</p>
                <p className="text-[10px] sm:text-lg opacity-80 leading-tight">NON-IEEE MEMBERS<br />GEC</p>
              </div>
            </div>
            <div className="relative group scale-75 sm:scale-100 origin-top">
              <img 
                src={ticket} 
                alt="Ticket" 
                className="w-full h-auto object-contain" 
              />
              <div className="absolute inset-0 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-start text-white pl-2 sm:pl-4"> 
                <p className="text-lg sm:text-4xl font-bold">₹249</p>
                <p className="text-[10px] sm:text-lg opacity-80 leading-tight">NON-IEEE MEMBERS<br />NON-GEC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* Guidelines Section */}
{/* Guidelines Section */}
<section id="guidelines" className="py-8 sm:py-24 relative">
    <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 sm:mb-12">GUIDELINES</h2>
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm border-2 border-teal-400/30">
            <ul className="space-y-3 sm:space-y-4 text-white">
                <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold">1</span>
                    </div>
                    <p className="opacity-90">Team Size: The maximum number of participants in each team cannot exceed 4.</p> 
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold">2</span>
                    </div>
                    <p className="opacity-90">Reporting Time: All registered teams must report for the offline hackathon at Government Engineering College, Palakkad, before 10:00 AM on 25/01/2025.</p> 
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold">3</span>
                    </div>
                    <p className="opacity-90">Theme Announcement: The theme for the hackathon will be provided on the spot.</p> 
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold">4</span>
                    </div>
                    <p className="opacity-90">Event Schedule: 
                        <ul>
                            <li>The hackathon will start at 10:30 AM on 25/01/2025 and continue until 10:30 AM on 26/01/2025.</li>
                            <li>A presentation and evaluation of the projects will be conducted after the hackathon ends.</li>
                        </ul>
                    </p> 
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold">5</span>
                    </div>
                    <p className="opacity-90">Work Policy: All work on the project must be completed during the hackathon.</p> 
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold">6</span>
                    </div>
                    <p className="opacity-90">Disqualification: Teams may be disqualified at the organizer’s discretion for reasons such as, but not limited to:
                        <ul>
                            <li>Breaking the competition rules.</li>
                            <li>Unsporting behavior.</li>
                        </ul>
                    </p> 
                </li>
            </ul>
        </div>
    </div>
    <p className="text-center text-white opacity-90 mt-4">Ensure adherence to these guidelines to make the most of your Matrix 2.0 Hackathon experience!</p> 
</section>
{/*Join Us*/}
<section className="py-24 bg-gradient-to-r from-teal-400/10 to-blue-400/10">
  <div class="container mx-auto px-6 text-left relative">  <img src={joinUs} alt="Join Us" class="w-80 sm:w-full max-w-lg mx-auto" />
  <div class="absolute top-1/2 left-48 transform -translate-x-1/2 -translate-y-1/2 md:left-1/2">     
   <h2 class="text-1xl sm:text-3xl font-bold text-white">Join Us</h2>
      <p class="text-1xl sm:text-lg text-white opacity-80 mt-2">at Matrix 2.0 to innovate, collaborate, and compete!</p>
      <a href="https://forms.gle/m4uqbHvKAXyGg8weA" class="inline-block bg-teal-400 text-white px-2 py-1 rounded-full mt-2 hover:bg-teal-500">
        Register 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block ml-2" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 .5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
      </a>
    </div>
  </div>
</section>
    {/* New Section: Organizers, Location, Contact */}
    <section id="contact" className="py-16">
  <div className="container mx-auto px-6 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Organizers</h3>
        <p className="list-disc list-inside text-white opacity-80 text-sm sm:text-base">
          IEEE Computer Society SBC, GEC Palakkad<br></br>in association with IEEE SB GEC PALAKKAD</p>
        
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Location</h3>
        <p className="text-white opacity-80 text-sm sm:text-base">
          WCBM+8QW <br />
          Government Engineering College Rd,<br />
          Mannampatta, Sreekrishnapuram,<br />
          Kerala 678633
        </p>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact</h3>
        <p className="text-white opacity-80 text-sm sm:text-base">
          Email: <a href="mailto:ieee@gecskp.ac.in" className="text-blue-400 underline">ieee@gecskp.ac.in</a> <br />
          Thulasi: <a href="tel:+919809109072" className="text-blue-400 underline">+91 98091 09072</a> <br />
          Meghna: <a href="tel:+919961949726" className="text-blue-400 underline">+91 99619 49726</a> <br />
          Greeshma: <a href="tel:+918289866396" className="text-blue-400 underline">+91 8289 866396</a>
        </p>
      </div>
    </div>
  </div>
</section>


     
</div>
  );
};

export default MatrixLandingPage;