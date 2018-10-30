Notification is a component to display notification. You can use it directly like this:

```jsx static
import { Notification } from '@inplayer-org/inplayer-ui'

function Page(props) {
  return <Notification>Buy now</Notification>;
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
