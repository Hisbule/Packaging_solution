// Centralized Asset Management
// Matches structure:
// public/assets/images/
// public/assets/videos/

const ASSETS_ROOT = '/assets';

export const ASSETS = {
  hero: {
    video: `${ASSETS_ROOT}/videos/hero_video.mp4`,
    poster: `${ASSETS_ROOT}/images/hero-poster.jpg`,
  },
  common: {
    founder: `${ASSETS_ROOT}/images/founder.avif`,
    logo: `${ASSETS_ROOT}/images/pms_logo.avif`, 
  },
  machines: {
    rotoEls: `${ASSETS_ROOT}/images/roto-els.avif`,
    flexoCi: `${ASSETS_ROOT}/images/flexo-ci.avif`,
    laminationSol: `${ASSETS_ROOT}/images/lamination-sol.avif`,
    slittingHigh: `${ASSETS_ROOT}/images/slitting-high.avif`,
    blownFilm: `${ASSETS_ROOT}/images/blown-film.avif`,
    bagMaking: `${ASSETS_ROOT}/images/bag-making.avif`,
  },
  textures: {
    carbonFibre: `${ASSETS_ROOT}/images/carbon-fibre.png`,
  }
};