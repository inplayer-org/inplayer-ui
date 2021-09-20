export type Event = {
  tag: string;
  hierarchy: string[];
  position?: {
    id: string;
    row?: number;
    column?: number;
  };
} & (
  | {
      name: 'click' | 'hover' | 'blur';
      on: 'button' | 'anchor';
    }
  | {
      name: 'enable' | 'disable';
      on: 'button' | 'checkbox' | 'radio';
    }
  | {
      name: 'mount' | 'unmount';
      on: 'page';
    }
  | {
      name: 'check';
      on: 'radio';
      option: string;
    }
);

export type HandlerFn = (events: Event[]) => void;

export default class Tracker {
  private readonly handlers = new Set<HandlerFn>();
  private readonly queue = [] as Event[];
  private timeout = null as any;

  register(handler: HandlerFn) {
    this.handlers.add(handler);
  }

  deregister(handler: HandlerFn) {
    this.handlers.delete(handler);
  }

  emit(event: Event) {
    this.queue[this.queue.length] = event;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      const events = [...this.queue];
      this.queue.length = 0;

      this.handlers.forEach((handler) => handler(events));
    }, 250);
  }
}
