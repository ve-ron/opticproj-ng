import { Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine
} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { texts } from '../constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit, OnDestroy {
  brandName = texts.brand_name;


  id = "tsparticles-main";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  // particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    fullScreen: false,
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: false,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        remove: {
          particles_nb: 2
        }
      },
    },
    particles: {
      color: {
        value: ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"],//"#ffffff",
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 5,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        }
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: [
          {
            src: "assets/images/glasses-50E3C2.png",
            width: 250,
            height: 100
          },
          {
            src: "assets/images/glasses-B8E986.png",
            width: 250,
            height: 100
          },
          {
            src: "assets/images/glasses-BD10E0.png",
            width: 250,
            height: 100
          },
          {
            src: "assets/images/glasses-E86363.png",
            width: 250,
            height: 100
          },
          {
            src: "assets/images/glasses-FFD300.png",
            width: 250,
            height: 100
          },
      ]
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
    },
    detectRetina: true,
  };
  destroyed = new Subject<void>();
  currentScreenSize!: string;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, breakpointObserver: BreakpointObserver) {
    iconRegistry.addSvgIcon('glasses-icon', sanitizer.bypassSecurityTrustResourceUrl('assets/images/glasses-black.svg'));

    breakpointObserver
      .observe([
        Breakpoints.Handset,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (result.matches) {
          this.currentScreenSize = 'mobile';
        }
      });

    breakpointObserver
      .observe([
        Breakpoints.Tablet,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (result.matches) {
          this.currentScreenSize = 'tablet';
        }
      });

    breakpointObserver
      .observe([
        Breakpoints.Web,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (result.matches) {
          this.currentScreenSize = 'web';
        }
      });
  }
  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    // console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
