import ContainerController from "./controllers/containerController.js";
import NavigationController from "./controllers/navigationController.js";
import ProjectListController from "./controllers/projectListController.js";
import WelcomeController from "./controllers/welcomeController.js";

const welcomeCtrl = new WelcomeController();
const containerCtrl = new ContainerController();
// const projectListCtrl = new ProjectListController();
const navigationCtrl = new NavigationController("init");

