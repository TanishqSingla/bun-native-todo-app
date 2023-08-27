type Controller = (req: Request) => Response;

interface TRouter {
  get:    (path: string, callback: Controller) => void; 
  put:    (path: string, callback: Controller) => void;
  patch:  (path: string, callback: Controller) => void;
  delete: (path: string, callback: Controller) => void;
  post:   (path: string, callback: Controller) => void;

  serve: (req: Request) => Response;

  routeMap: Map<string, Controller>;
}

enum Methods {
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
}

class Router implements TRouter {
  routeMap: Map<string, Controller>;

  #generateMethodKey = (method: Methods, path: string): string => `${method} ${path}`;

  constructor() {
    this.routeMap = new Map<string, Controller>();
  }

  put(path: string, callback: Controller) {
    const methodObj = this.#generateMethodKey(Methods.PUT, path);

    if(this.routeMap.get(methodObj)) {
      throw new Error("Route path already exists");
   }
    this.routeMap.set(methodObj, callback);
  }

  get(path: string, callback: Controller) {
    const methodObj = this.#generateMethodKey(Methods.GET, path);

    if(this.routeMap.get(methodObj)) {
      throw new Error("Route path already exists");
    }
    this.routeMap.set(methodObj, callback);
  }

  patch(path: string, callback: Controller) {
    const methodObj = this.#generateMethodKey(Methods.PATCH, path);


    if(this.routeMap.get(methodObj)) {
      throw new Error("Route path already exists");
    }
    this.routeMap.set(methodObj, callback);
  }

  delete(path: string, callback: Controller) {
    const methodObj = this.#generateMethodKey(Methods.DELETE, path);

    if(this.routeMap.get(methodObj)) {
      throw new Error("Route methodObj already exists");
    }
    this.routeMap.set(methodObj, callback);
  }

  post(path: string, callback: Controller) {
    const methodObj = this.#generateMethodKey(Methods.POST, path)

    if(this.routeMap.get(methodObj)) {
      throw new Error("Route methodObj already exists");
    }
    this.routeMap.set(methodObj, callback);
  }

  serve(req: Request) {
    const method = req.method as Methods;
    const methodPath = req.url.replace('http://localhost:3000', '');
    const methodKey = this.#generateMethodKey(method, methodPath);

    if(this.routeMap.has(methodKey)) {
      const callback = this.routeMap.get(methodKey)!;
      return callback(req);
    };

    return new Response("Not Found", { status: 404 })
  }
}

export default Router;
