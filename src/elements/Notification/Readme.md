The Notification exposes an API for creating notifications. The API consists of 4 functions: `Notification.create`, `Notification.success`, `Notification.danger` and `Notification.warning`. The latter 3 are simply abstractions over the first one which set the `variant` to `success`, `danger` and `warning` accordingly. If no variant is passed it will simply use a neutral grey color scheme (check the demo.).

The functions take 2 arguments: first one is an object which represents the props of the notification, the second one is optional and is a reference to a parent DOM element for the notification. If the parent DOM is not passed the notification will be mounted as a child on the `body` element. The way it is used is:

```jsx static
import { Notification, Button } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <div>
      <Button
        onClick={() =>
          Notification.create({
            title: 'Notification',
            content: 'This is a regular notification',
            duration: 3,
          })
        }
      >
        Show notification
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            title: 'Hooray!',
            content: 'This is a success notification',
            duration: 3,
          })
        }
      >
        Show success notification
      </Button>
      <Button
        onClick={() =>
          Notification.danger({
            title: 'Oh no!',
            content: 'This is a danger notification',
            duration: 3,
          })
        }
      >
        Show danger notification
      </Button>
      <Button
        onClick={() =>
          Notification.warning({
            title: 'Careful!',
            content: 'This is a warning notification',
            duration: 3,
          })
        }
      >
        Show warning notification
      </Button>
    </div>
  );
}
```

### Demo

```jsx
  <Button onClick={() => Notification.create({
    title: 'Notification',
    content: 'This is a regular notification',
    duration: 3,
  })}>Show notification</Button>
  <Button onClick={() => Notification.success({
    title: 'Hooray!',
    content: 'This is a success notification',
    duration: 3,
  })}>Show success notification</Button>
  <Button onClick={() => Notification.danger({
    title: 'Oh no!',
    content: 'This is a danger notification',
    duration: 3,
  })}>Show danger notification</Button>
  <Button onClick={() => Notification.warning({
    title: 'Careful!',
    content: 'This is a warning notification',
    duration: 3,
  })}>Show warning notification</Button>
```
