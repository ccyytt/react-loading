import Bounce from './bounce/view';
import Cube from './Cube/view';
import Dot from './Dot/view';
import Rect from './Rect/view';
import Scaleout from './Scaleout/view';
import Spinner from './Spinner/view';
import Circle from './circle/view';
import SkCircle from './skCircle/view';
import skGrid from './grid/view';
import Fading from './fading/view';
import Folding from './folding/view';

export default {
    bounce: {
        bgColor: '#1f4954',
        preview: 'rgba(0, 0, 0, .3)',
        kids: Bounce
    },
    spinner: {
        bgColor: '#d35400',
        preview: '#fff',
        kids: Spinner
    },
    rect: {
        bgColor: '#1abc9c',
        preview: '#fff',
        kids: Rect
    },
    cube: {
        bgColor: '#2980b9',
        preview: '#fff',
        kids: Cube
    },
    scaleout: {
        bgColor: '#7f8c8d',
        preview: '#fff',
        kids: Scaleout
    },
    dot: {
        bgColor: '#ffcb65',
        preview: '#fff',
        kids: Dot
    },
    circle: {
        bgColor: '#d35400',
        preview: '#fff',
        kids: Circle
    },
    skCircle: {
        bgColor: '#27ae60',
        preview: '#fff',
        kids: SkCircle
    },
    skGrid: {
        bgColor: '#d35400',
        preview: '#fff',
        kids: skGrid
    },
    fading: {
        bgColor: '#2c3e50',
        preview: '#fff',
        kids: Fading
    },
    folding: {
        bgColor: '#1abc9c',
        preview: '#fff',
        kids: Folding
    }
}