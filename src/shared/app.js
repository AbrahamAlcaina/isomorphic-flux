import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import WallStore from  './stores/WallStore';
import RouteStore from './stores/RouteStore';
import WallStore from './stores/WallStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(WallStore);
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(WallStore);

export default app;
