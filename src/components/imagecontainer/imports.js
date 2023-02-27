// accessories
import earings from '../../assets/accessories/earings.png';
import flower from '../../assets/accessories/flower.png';
import glasses from '../../assets/accessories/glasses.png';
import headphone from '../../assets/accessories/headphone.png';


// backgrounds
import blue50 from '../../assets/backgrounds/blue50.png';
import blue60 from '../../assets/backgrounds/blue60.png';
import blue70 from '../../assets/backgrounds/blue70.png';
import darkblue30 from '../../assets/backgrounds/darkblue30.png';
import darkblue50 from '../../assets/backgrounds/darkblue50.png';
import darkblue70 from '../../assets/backgrounds/darkblue70.png';
import green50 from '../../assets/backgrounds/green50.png';
import green60 from '../../assets/backgrounds/green60.png';
import green70 from '../../assets/backgrounds/green70.png';
import grey40 from '../../assets/backgrounds/grey40.png';
import grey70 from '../../assets/backgrounds/grey70.png';
import grey80 from '../../assets/backgrounds/grey80.png';
import red50 from '../../assets/backgrounds/red50.png';
import red60 from '../../assets/backgrounds/red60.png';
import red70 from '../../assets/backgrounds/red70.png';
import yellow50 from '../../assets/backgrounds/yellow50.png';
import yellow60 from '../../assets/backgrounds/yellow60.png';
import yellow70 from '../../assets/backgrounds/yellow70.png';


// ears
import defaultEar from '../../assets/ears/default.png';
import tiltBackwardEar from '../../assets/ears/tilt-backward.png';
import tiltForwardEar from '../../assets/ears/tilt-forward.png';

// eyes
import angry from '../../assets/eyes/angry.png';
import naughty from '../../assets/eyes/naughty.png';
import panda from '../../assets/eyes/panda.png';
import smart from '../../assets/eyes/smart.png';
import star from '../../assets/eyes/star.png';
import defaultEye from '../../assets/eyes/default.png';

// hair
import bang from '../../assets/hair/bang.png';
import curls from '../../assets/hair/curls.png';
import elegant from '../../assets/hair/elegant.png';
import fancy from '../../assets/hair/fancy.png';
import quiff from '../../assets/hair/quiff.png';
import short from '../../assets/hair/short.png';
import defaultHair from '../../assets/hair/default.png';

// leg
import bubbleTea from '../../assets/leg/bubble-tea.png';
import cookie from '../../assets/leg/cookie.png';
import gameConsole from '../../assets/leg/game-console.png';
import tiltBackwardLeg from '../../assets/leg/tilt-backward.png';
import tiltForwardLeg from '../../assets/leg/tilt-forward.png';
import defaultLeg from '../../assets/leg/default.png';

// mouth
import astonished from '../../assets/mouth/astonished.png';
import eating from '../../assets/mouth/eating.png';
import laugh from '../../assets/mouth/laugh.png';
import tongue from '../../assets/mouth/tongue.png';
import defaultMouth from '../../assets/mouth/default.png';

// neck
import bendBackwardNeck from '../../assets/neck/bend-backward.png';
import bendForwardNeck from '../../assets/neck/bend-forward.png';
import thick from '../../assets/neck/thick.png';
import defaultNeck from '../../assets/neck/default.png';

// nose (The single nose)
import nose from '../../assets/nose.png';

// Objects solved a lot of problems for me...
const accessories = { 'earings': earings, 'flower': flower, 'glasses': glasses, 'headphone': headphone };

const background = { 'blue50': blue50, 'blue60': blue60, 'blue70': blue70, 'darkblue30': darkblue30, 'darkblue50': darkblue50, 'darkblue70': darkblue70, 'green50': green50, 'green60': green60, 'green70': green70, 'grey40': grey40, 'grey70': grey70, 'grey80': grey80, 'red50': red50, 'red60': red60, 'red70': red70, 'yellow50': yellow50, 'yellow60': yellow60, 'yellow70': yellow70 };

const ears = { 'default': defaultEar, 'tilt-backward': tiltBackwardEar, 'tilt-forward': tiltForwardEar };

const eyes = { 'angry': angry, 'naughty': naughty, 'panda': panda, 'smart': smart, 'star': star, 'default': defaultEye };

const hair = { 'bang': bang, 'curls': curls, 'elegant': elegant, 'fancy': fancy, 'quiff': quiff, 'short': short, 'default': defaultHair };

const leg = { 'bubbleTea': bubbleTea, 'cookie': cookie, 'gameConsole': gameConsole, 'tilt-backward': tiltBackwardLeg, 'tilt-forward': tiltForwardLeg, 'default': defaultLeg };

const mouth = { 'astonished': astonished, 'eating': eating, 'laugh': laugh, 'tongue': tongue, 'default': defaultMouth };

const neck = { 'bend-backward': bendBackwardNeck, 'bend-forward': bendForwardNeck, 'thick': thick, 'default': defaultNeck };

const images = {
  earings,
  flower,
  glasses,
  headphone,
  blue50,
  blue60,
  blue70,
  darkblue30,
  darkblue50,
  darkblue70,
  green50,
  green60,
  green70,
  grey40,
  grey70,
  grey80,
  red50,
  red60,
  red70,
  yellow50,
  yellow60,
  yellow70,
  defaultEar,
  tiltBackwardEar,
  tiltForwardEar,
  angry,
  naughty,
  panda,
  smart,
  star,
  defaultEye,
  bang,
  curls,
  elegant,
  fancy,
  quiff,
  short,
  defaultHair,
  bubbleTea,
  cookie,
  gameConsole,
  tiltBackwardLeg,
  tiltForwardLeg,
  defaultLeg,
  astonished,
  eating,
  laugh,
  tongue,
  defaultMouth,
  bendBackwardNeck,
  bendForwardNeck,
  thick,
  defaultNeck,
  nose
};

export {
  accessories, background, ears, eyes, hair, leg, mouth, neck, nose
};

export default images;