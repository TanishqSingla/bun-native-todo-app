type Controller = (req: Request) => Response;

interface TRouter {
  get: (path: string, callback: Controller) => void; 
  put: (path: string, callback: Controller) => void;
  patch: (path: string, callback: Controller) => void;
  delete: (path: string, callback: Controller) => void;
  post: (path: string, callback: Controller) => void;

  routeMap: Map<string, Controller>;
}

class Router implements TRouter {
  routeMap: Map<string, Controller>;

  constructor(req: Request) {
  }

  put(path, calbacks) {
  }

  get(path, callback) {
  }

  patch(path, callback) {
  }

  delete(path, calbacks) {
  }

  post(path, calbacks) {
  }
}

export default Router;
