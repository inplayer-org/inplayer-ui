import { ComponentData } from "../types";

const demoCode = `
  <Grid.Container>
    <Grid.Cell>
      <Tooltip content="Heart">
        <InPlayerIcon name="heart" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Marketplace">
        <InPlayerIcon name="marketplace" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Thunder">
        <InPlayerIcon name="thunder" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Add File">
        <InPlayerIcon name="addFile" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Add">
        <InPlayerIcon name="add" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Analytics">
        <InPlayerIcon name="analytics" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Angle Down">
        <InPlayerIcon name="angleDown" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Angle Left">
        <InPlayerIcon name="angleLeft" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Angle Right">
        <InPlayerIcon name="angleRight" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Angle Up">
        <InPlayerIcon name="angleUp" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Arr Right">
        <InPlayerIcon name="arrowRight" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Note">
        <InPlayerIcon name="note" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Asset Many">
        <InPlayerIcon name="assets" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Asset">
        <InPlayerIcon name="asset" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Attachment">
        <InPlayerIcon name="attachment" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Audience">
        <InPlayerIcon name="audience" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Audio">
        <InPlayerIcon name="audio" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Book">
        <InPlayerIcon name="book" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Bookmark">
        <InPlayerIcon name="bookmark" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Box">
        <InPlayerIcon name="box" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Bullhorn">
        <InPlayerIcon name="bullhorn" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Calculator">
        <InPlayerIcon name="calculator" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Calendar Expiry">
        <InPlayerIcon name="calendarExpiry" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Calendar Pick">
        <InPlayerIcon name="calendarPick" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Calendar">
        <InPlayerIcon name="calendar" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Card Back">
        <InPlayerIcon name="cardBack" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Card Front">
        <InPlayerIcon name="cardFront" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Card Holder">
        <InPlayerIcon name="cardHolder" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Card Swipe">
        <InPlayerIcon name="cardSwipe" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Comment">
        <InPlayerIcon name="comment" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Company">
        <InPlayerIcon name="company" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Delete">
        <InPlayerIcon name="delete" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Desktop">
        <InPlayerIcon name="desktop" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Diamond">
        <InPlayerIcon name="diamond" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Done">
        <InPlayerIcon name="done" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Download">
        <InPlayerIcon name="download" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Edit">
        <InPlayerIcon name="edit" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Email">
        <InPlayerIcon name="email" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Error">
        <InPlayerIcon name="error" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Exit">
        <InPlayerIcon name="exit" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Export">
        <InPlayerIcon name="export" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="File">
        <InPlayerIcon name="file" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Flag">
        <InPlayerIcon name="flag" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Joystick">
        <InPlayerIcon name="joystick" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Geo Exclude">
        <InPlayerIcon name="geoExclude" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Geo Include">
        <InPlayerIcon name="geoInclude" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Script Tags">
        <InPlayerIcon name="scriptTags" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Image Add">
        <InPlayerIcon name="imageAdd" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Image">
        <InPlayerIcon name="image" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Info">
        <InPlayerIcon name="info" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Inplayer">
        <InPlayerIcon name="inplayer" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Laptop">
        <InPlayerIcon name="laptop" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Live">
        <InPlayerIcon name="live" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Location">
        <InPlayerIcon name="location" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Lock Repeat">
        <InPlayerIcon name="lockRepeat" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Lock">
        <InPlayerIcon name="lock" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Mobile">
        <InPlayerIcon name="mobile" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="More">
        <InPlayerIcon name="more" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Music">
        <InPlayerIcon name="music" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Notifications">
        <InPlayerIcon name="notifications" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Package">
        <InPlayerIcon name="package" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Palette">
        <InPlayerIcon name="palette" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Pause">
        <InPlayerIcon name="pause" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Pencil">
        <InPlayerIcon name="pencil" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Piece">
        <InPlayerIcon name="piece" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Play">
        <InPlayerIcon name="play" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Presentation">
        <InPlayerIcon name="presentation" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Quotes">
        <InPlayerIcon name="quotes" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Recurring">
        <InPlayerIcon name="recurring" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Reload">
        <InPlayerIcon name="reload" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="RSS">
        <InPlayerIcon name="rss" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Search">
        <InPlayerIcon name="search" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Seed">
        <InPlayerIcon name="seed" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Settings">
        <InPlayerIcon name="settings" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Share">
        <InPlayerIcon name="share" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Star">
        <InPlayerIcon name="star" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Task">
        <InPlayerIcon name="task" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Text">
        <InPlayerIcon name="text" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="TV">
        <InPlayerIcon name="tv" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Upload">
        <InPlayerIcon name="upload" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="User Add">
        <InPlayerIcon name="userAdd" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="User Deactivate">
        <InPlayerIcon name="userDeactivate" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="User Done">
        <InPlayerIcon name="userDone" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="User Export">
        <InPlayerIcon name="userExport" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="User">
        <InPlayerIcon name="user" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Video">
        <InPlayerIcon name="video" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Voucher">
        <InPlayerIcon name="voucher" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Warning">
        <InPlayerIcon name="warning" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Web">
        <InPlayerIcon name="web" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Wordpress">
        <InPlayerIcon name="wordpress" />
      </Tooltip>
    </Grid.Cell>
    <Grid.Cell>
      <Tooltip content="Darko😎">
        <InPlayerIcon name="diamond" />
      </Tooltip>
    </Grid.Cell>
  </Grid.Container>
`

const InPlayerIcon: ComponentData = {
  path: `src/elements/InPlayerIcon/index.js`,
  usage: ``,
  examples: [
    {
      title: '',
      code: demoCode,
    }
  ],
}

export default InPlayerIcon;