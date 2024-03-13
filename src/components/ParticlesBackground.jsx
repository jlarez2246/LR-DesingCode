import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //   color: "#ff000",
                //   image: "url(https://particles.js.org/images/SpaceX.png)",
                //   repeat: "no-repeat",
                //   size: "80%",
                //   position: "60% 50%"
                // },
                interactivity: {
                  events: {
                    // onClick: {
                    //   enable: true,
                    //   mode: "repulse"
                    // },
                    onHover: {
                      enable: true,
                      mode: "bubble"
                    }
                  },
                  modes: {
                    bubble: {
                      distance: 200,
                      duration: 2,
                      opacity: 0,
                      size: 0,
                      speed: 3
                    },
                    repulse: {
                      distance: 400,
                      duration: 0.4
                    }
                  }
                },
                particles: {
                  color: { value: "#00ffff" },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: true,
                    speed: 0.3
                  },
                  number: {
                    density: {
                      enable: true
                    },
                    value: 500
                  },
                  opacity: {
                    animation: {
                      enable: true,
                      speed: 5
                    },
                    value: { min: 0.3, max: 0.6 }
                  },
                  shape: {
                    type: "circle"
                  },
                  size: {
                    value: 2
                  }
                }
              }}
        />
    )
}

export default ParticlesBackground