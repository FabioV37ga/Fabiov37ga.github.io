
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
import NavigationController from "./controllers/navigationController.js";
import WelcomeController from "./controllers/welcomeController.js";


// ---------------------------
// 2. INICIALIZAÇÃO
// ---------------------------
const welcomeCtrl = new WelcomeController();
const navigationCtrl = new NavigationController("init");

