
/**
 * ============================================================================
 * APP ENTRY
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports
 * 2. Inicialização dos controllers principais
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS
// ---------------------------
import ContainerController from "./controllers/containerController.js";
import NavigationController from "./controllers/navigationController.js";
import WelcomeController from "./controllers/welcomeController.js";


// ---------------------------
// 2. INICIALIZAÇÃO
// ---------------------------
const welcomeCtrl = new WelcomeController();
// const containerCtrl = new ContainerController();
const navigationCtrl = new NavigationController("init");

