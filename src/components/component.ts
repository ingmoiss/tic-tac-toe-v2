export class Component<T extends Element> {
    public readonly element: T;
  
    constructor(element: T | string) {
      this.element = typeof element === "string" ? (document.getElementById(element) as unknown as T) : element;
    }
  }