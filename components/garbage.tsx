      {!darkMode && (
        <>
          <div className="absolute top-1/3 right-1/5 w-40 h-40 rounded-full border-4 border-[#d11414]/40  z-0"></div> {/* top inner colorless circle */}
          <div className="absolute top-1/3 right-1/5 w-40 h-20 bg-[#d11414]/40 rounded-b-full z-0"></div> {/* semi-circle */}
          <div className="absolute -bottom-5 right-1/5 w-40 h-40 z-0" > {/*className="absolute" style={{ top: '400px', left: '600px' }} */}
        <svg width="120" height="100" viewBox="0 0 340 284" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.9631e-05 67.322C52.4865 -8.51888 164.984 -21.5913 251.27 38.1238C337.556 97.8389 364.956 207.729 312.469 283.569C156.235 175.446 242.521 235.161 156.235 175.446C69.9487 115.731 156.235 175.446 6.9631e-05 67.322Z" fill="#990B97" fillOpacity="0.9"/>
        </svg>
      </div>
          {/* <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full bg-[#d11414]/70 z-0"></div> */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-[#d11414]/70 z-0"></div> {/*red rectangle*/}
          <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-[#eeff00]/70  z-0"></div> {/* top inner colorless circle */}
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 rounded-full border-4 border-[#d11414]/40 z-0"></div> {/*inner colorless circle */}
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 bg-[#990b97]/70 transform rotate-45 z-0"></div> {/*purple square*/}
          <div className="absolute top-1/2 left-1/4 w-16 h-32 bg-[#0b3815]/70 z-0"></div> {/*green rectangle*/}
          <div className="absolute bottom-0 right-1/4 h-16 w-32">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path d="M0,15 Q25,0 50,15 Q75,30 100,15" stroke="#0b3bfb" fill="none" strokeWidth="2" />
            </svg>
          </div> {/*squiggly line */}

          <div className="absolute bottom-1/4 right-1/3 w-16 h-8 rounded-t-full border-t-4 border-l-4 border-r-4 border-[#eeff00]/40 z-0"></div>
        </>
      )}
      {/* Dark mode decorative elements */}
      {darkMode && (
        <>
          <div className="absolute top-0 right-1/4 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,10 L90,90 M10,90 L90,10" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full border border-white/20 z-0"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 rounded-full border border-white/20 z-0"></div>
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 border border-white/20 transform rotate-45 z-0"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-32 border border-white/20 z-0"></div>
          <div className="absolute bottom-0 right-1/4 h-16 w-32">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path d="M0,15 Q25,0 50,15 Q75,30 100,15" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full border border-white/20 z-0"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-8 rounded-t-full border-t border-l border-r border-white/20 z-0"></div>
        </>
      )}
